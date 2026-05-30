// Send a branded magic link to an existing Trident member via Resend.
import { createClient } from "npm:@supabase/supabase-js@2";
import { createLogger, errMeta } from "../_shared/logger.ts";
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";
const ADMIN_EMAIL = "nick@munnymancommunications.com";
const FETCH_TIMEOUT_MS = 12000;

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;
}
async function fetchWithTimeout(url: string, init: RequestInit, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { ...init, signal: ctrl.signal }); } finally { clearTimeout(t); }
}

async function sendAdminSignInCopy(email: string, member: { name?: string | null; company_name?: string | null; phone?: string | null; title?: string | null }, log: ReturnType<typeof createLogger>) {
  if (!RESEND_API_KEY) return;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;padding:24px;background:#ffffff;color:#0f172a">
      <h2 style="margin:0 0 16px">Trident sign-in link requested</h2>
      <p>A client requested a Trident sign-in link.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row("Name", member.name || "")}
        ${row("Company", member.company_name || "")}
        ${row("Email", email)}
        ${row("Phone", member.phone || "")}
        ${row("Title", member.title || "")}
        ${row("Requested at", new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))}
      </table>
    </div>`;
  try {
    const r = await fetchWithTimeout("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM_EMAIL, to: [ADMIN_EMAIL], subject: `Trident sign-in: ${member.name || email}`, html, reply_to: email }),
    });
    if (!r.ok) log.error("email", "admin_signin_copy_failed", { status: r.status, body: (await r.text()).slice(0, 500), email });
  } catch (e) {
    log.error("email", "admin_signin_copy_exception", { ...errMeta(e), email });
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("trident-magic-link", req);

  try {
    let payload: { email?: string; redirect_to?: string };
    try { payload = await req.json(); } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return json({ error: "Invalid JSON" }, 400, log.requestId);
    }

    const email = (payload?.email || "").trim().toLowerCase();
    if (!email || !isValidEmail(email)) {
      log.warn("validation", "invalid_email", { email });
      return json({ error: "Valid email required" }, 400, log.requestId);
    }

    const redirectTo = "https://enzoscleaning.com/hardscaping/trident/";

    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_key: !!key });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }
    const admin = createClient(url, key);

    const { data: member, error: memberErr } = await admin
      .from("trident_members")
      .select("id, name, company_name, phone, title")
      .ilike("email", email)
      .maybeSingle();

    if (memberErr) {
      log.error("database", "member_lookup_failed", { ...errMeta(memberErr), email });
      return json({ error: "Lookup failed" }, 500, log.requestId);
    }
    if (!member) {
      log.info("auth", "member_not_found", { email });
      return json({ exists: false, error: "Email not found." }, 404, log.requestId);
    }

    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: "magiclink", email, options: { redirectTo },
    });

    // Bypass Supabase's /verify endpoint (which falls back to the configured
    // Site URL when redirect_to isn't in the allow-list) by building our own
    // link with the hashed_token; the Trident page calls verifyOtp directly.
    const hashedToken = linkData?.properties?.hashed_token;
    const magicLink = hashedToken
      ? `${redirectTo}?token_hash=${encodeURIComponent(hashedToken)}&type=magiclink`
      : linkData?.properties?.action_link;
    if (linkErr || !magicLink) {
      log.error("auth", "magic_link_generation_failed", { ...errMeta(linkErr), email });
      return json({ error: "Failed to generate link" }, 500, log.requestId);
    }

    if (!RESEND_API_KEY) {
      log.error("config", "resend_api_key_missing");
      return json({ error: "Email service not configured" }, 500, log.requestId);
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;color:#0f172a">
        <h2 style="margin:0 0 16px">Sign in to Enzo's Trident</h2>
        <p>Hi ${escapeHtml(member.name || "there")}, here is your secure sign-in link.</p>
        <p style="margin:28px 0">
          <a href="${magicLink}" style="background:#0f172a;color:#ffffff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:600">Sign in to Trident</a>
        </p>
        <p style="font-size:12px;color:#64748b">If the button doesn't work, paste this URL into your browser:<br>${escapeHtml(magicLink)}</p>
        <p style="font-size:12px;color:#64748b">This link expires shortly. If you didn't request it, ignore this email.</p>
      </div>`;

    try {
      const r = await fetchWithTimeout("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM_EMAIL, to: [email], subject: "Your Enzo's Trident sign-in link", html, reply_to: ADMIN_EMAIL }),
      });
      const body = await r.text();
      if (!r.ok) {
        log.error("email", "resend_magic_link_failed", { status: r.status, body: body.slice(0, 500), email });
        return json({ error: "Failed to send email" }, 502, log.requestId);
      }
      log.info("email", "magic_link_sent", { status: r.status, email });
      await sendAdminSignInCopy(email, member, log);
      return json({ ok: true, request_id: log.requestId }, 200, log.requestId);
    } catch (e) {
      log.error("email", "resend_magic_link_exception", { ...errMeta(e), email });
      return json({ error: "Failed to send email" }, 502, log.requestId);
    }
  } catch (err) {
    log.error("unexpected", "unhandled_exception", errMeta(err));
    await reportError({ fn: "trident-magic-link", error: err, request: req, requestId: log.requestId });
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
function row(label: string, value: string): string {
  return `<tr><td style="padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc">${escapeHtml(label)}</td><td style="padding:8px 10px;border:1px solid #e2e8f0">${escapeHtml(value || "—")}</td></tr>`;
}
