// Send a branded magic link to an existing Trident member via Resend.
import { createClient } from "npm:@supabase/supabase-js@2";
import { createLogger, errMeta } from "../_shared/logger.ts";

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

    const redirectTo = "https://2.enzoscleaning.com/hardscaping/trident/";

    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_key: !!key });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }
    const admin = createClient(url, key);

    const { data: member, error: memberErr } = await admin
      .from("trident_members")
      .select("id, name")
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

    const magicLink = linkData?.properties?.action_link;
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
      return json({ ok: true, request_id: log.requestId }, 200, log.requestId);
    } catch (e) {
      log.error("email", "resend_magic_link_exception", { ...errMeta(e), email });
      return json({ error: "Failed to send email" }, 502, log.requestId);
    }
  } catch (err) {
    log.error("unexpected", "unhandled_exception", errMeta(err));
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
