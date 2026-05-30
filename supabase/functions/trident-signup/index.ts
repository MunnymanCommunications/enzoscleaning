// Trident member signup: creates auth user, profile row, sends branded magic link via Resend, and pushes to CRM "Trident Members" board.
import { createClient } from "npm:@supabase/supabase-js@2";
import { createLogger, errMeta } from "../_shared/logger.ts";
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");
const CRM_TRIDENT_MEMBERS_BOARD_ID = Deno.env.get("CRM_TRIDENT_MEMBERS_BOARD_ID");

const TENANT_SUBDOMAIN = "enzos";
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";
const ADMIN_EMAIL = "nick@munnymancommunications.com";
const FETCH_TIMEOUT_MS = 12000;

interface SignupPayload {
  email: string;
  name: string;
  company_name: string;
  phone: string;
  title?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  notes?: string;
  redirect_to?: string;
}

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;
}
async function fetchWithTimeout(url: string, init: RequestInit, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { ...init, signal: ctrl.signal }); } finally { clearTimeout(t); }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("trident-signup", req);

  try {
    let data: SignupPayload;
    try { data = (await req.json()) as SignupPayload; } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return json({ error: "Invalid JSON" }, 400, log.requestId);
    }

    const missing: string[] = [];
    if (!data?.email) missing.push("email");
    if (!data?.name) missing.push("name");
    if (!data?.company_name) missing.push("company_name");
    if (!data?.phone) missing.push("phone");
    if (missing.length) {
      log.warn("validation", "missing_required_fields", { missing });
      return json({ error: `Missing required fields: ${missing.join(", ")}` }, 400, log.requestId);
    }
    if (!isValidEmail(String(data.email))) {
      log.warn("validation", "invalid_email", { email: data.email });
      return json({ error: "Invalid email" }, 400, log.requestId);
    }

    const email = String(data.email).trim().toLowerCase();
    const redirectTo = "https://enzoscleaning.com/hardscaping/trident/";

    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_key: !!key });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }
    const admin = createClient(url, key);

    log.info("request", "signup_received", { email, company: data.company_name });

    // 1) Reject duplicates
    const { data: existing, error: existingErr } = await admin
      .from("trident_members")
      .select("id")
      .ilike("email", email)
      .maybeSingle();
    if (existingErr) {
      log.error("database", "duplicate_check_failed", { ...errMeta(existingErr), email });
      return json({ error: "Signup failed" }, 500, log.requestId);
    }
    if (existing) {
      log.info("validation", "duplicate_signup_rejected", { email });
      return json({ error: "An account with that email already exists. Please sign in." }, 409, log.requestId);
    }

    // 2) Create auth user
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email, email_confirm: true,
      user_metadata: { name: data.name, company_name: data.company_name },
    });
    if (createErr || !created?.user) {
      log.error("auth", "create_user_failed", { ...errMeta(createErr), email });
      return json({ error: createErr?.message || "Failed to create account" }, 500, log.requestId);
    }
    const userId = created.user.id;
    log.info("auth", "user_created", { user_id: userId, email });

    // 3) Insert member profile
    const { error: profErr } = await admin.from("trident_members").insert({
      user_id: userId, email,
      name: data.name, company_name: data.company_name, phone: data.phone,
      title: data.title || null,
      address_line1: data.address_line1 || null,
      address_line2: data.address_line2 || null,
      city: data.city || null, state: data.state || null,
      postal_code: data.postal_code || null, country: data.country || null,
      notes: data.notes || null,
    });
    if (profErr) {
      log.error("database", "member_profile_insert_failed", { ...errMeta(profErr), user_id: userId, email });
      const { error: rollbackErr } = await admin.auth.admin.deleteUser(userId);
      if (rollbackErr) log.error("auth", "user_rollback_failed", { ...errMeta(rollbackErr), user_id: userId });
      return json({ error: profErr.message }, 500, log.requestId);
    }

    // 4) Grant trident_member role
    const { error: roleErr } = await admin.from("user_roles").insert({ user_id: userId, role: "trident_member" });
    if (roleErr) log.error("database", "role_insert_failed", { ...errMeta(roleErr), user_id: userId });

    // 5) Magic link
    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: "magiclink", email, options: { redirectTo },
    });
    // Bypass Supabase's /verify endpoint (which falls back to the configured
    // Site URL when redirect_to isn't in the allow-list) by building our own
    // link with the hashed_token; the Trident page calls verifyOtp directly.
    const hashedToken: string | undefined = linkData?.properties?.hashed_token;
    const magicLink: string | undefined = hashedToken
      ? `${redirectTo}?token_hash=${encodeURIComponent(hashedToken)}&type=magiclink`
      : linkData?.properties?.action_link;
    if (linkErr || !magicLink) {
      log.error("auth", "magic_link_generation_failed", { ...errMeta(linkErr), email, user_id: userId });
      return json({ ok: true, warning: "Account created but magic link failed", request_id: log.requestId }, 200, log.requestId);
    }

    if (RESEND_API_KEY) {
      const subject = "Welcome to Enzo's Trident — your sign-in link";
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;color:#0f172a">
          <h2 style="margin:0 0 16px">Welcome, ${escapeHtml(data.name)}.</h2>
          <p>Your Enzo's Trident account is ready. Click the button below to sign in.</p>
          <p style="margin:28px 0">
            <a href="${magicLink}" style="background:#0f172a;color:#ffffff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:600">Sign in to Trident</a>
          </p>
          <p style="font-size:12px;color:#64748b">If the button doesn't work, paste this URL in your browser:<br>${escapeHtml(magicLink)}</p>
          <p style="font-size:12px;color:#64748b">This link expires shortly. If you didn't request it, you can ignore this email.</p>
        </div>`;
      try {
        const r = await fetchWithTimeout("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: FROM_EMAIL, to: [email], subject, html, reply_to: ADMIN_EMAIL }),
        });
        const body = await r.text();
        if (!r.ok) log.error("email", "welcome_email_failed", { status: r.status, body: body.slice(0, 500), email });
        else log.info("email", "welcome_email_sent", { status: r.status, email });
      } catch (e) {
        log.error("email", "welcome_email_exception", { ...errMeta(e), email });
      }
    } else {
      log.warn("config", "resend_api_key_missing");
    }

    // 6) CRM push
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY && CRM_TRIDENT_MEMBERS_BOARD_ID) {
      const now = new Date();
      const crmBody = {
        board_id: CRM_TRIDENT_MEMBERS_BOARD_ID,
        tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: "Trident Member Signup",
        name: data.name, company: data.company_name, email, phone: data.phone,
        title: data.title || "",
        address_line1: data.address_line1 || "", address_line2: data.address_line2 || "",
        city: data.city || "", state: data.state || "",
        postal_code: data.postal_code || "", country: data.country || "",
        notes: data.notes || "",
        submitted_at: now.toISOString(), submitted_date: now.toISOString().slice(0, 10),
      };
      try {
        const r = await fetchWithTimeout(CRM_FORMS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-webhook-apikey": CRM_WEBHOOK_APIKEY },
          body: JSON.stringify(crmBody),
        });
        const body = await r.text();
        if (!r.ok) log.error("crm", "crm_signup_push_failed", { status: r.status, body: body.slice(0, 500), email });
        else log.info("crm", "crm_signup_push_ok", { status: r.status, email });
      } catch (e) {
        log.error("crm", "crm_signup_push_exception", { ...errMeta(e), email });
      }
    } else {
      log.warn("config", "crm_signup_webhook_not_configured", {
        has_url: !!CRM_FORMS_WEBHOOK_URL, has_key: !!CRM_WEBHOOK_APIKEY, has_board: !!CRM_TRIDENT_MEMBERS_BOARD_ID,
      });
    }

    return json({ ok: true, request_id: log.requestId }, 200, log.requestId);
  } catch (err) {
    log.error("unexpected", "unhandled_exception", errMeta(err));
    await reportError({ fn: "trident-signup", error: err, request: req, requestId: log.requestId });
    return json({ error: "Internal error" }, 500, log.requestId);
  }
});

function json(body: unknown, status: number, requestId: string) {
  return new Response(JSON.stringify(body), {
    status, headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": requestId },
  });
}
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]);
}
