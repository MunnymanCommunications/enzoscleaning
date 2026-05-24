// Submit lead: emails via Resend + posts to CRM webhook
import { createLogger, errMeta, maskEmail, maskPhone } from "../_shared/logger.ts";
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");

const BOARD_ID = "3c83cd01-8e52-4bc4-aa3b-6178334aa3b3";
const TENANT_SUBDOMAIN = "enzos";
const TO_EMAIL = "nick@munnymancommunications.com";
const CC_EMAILS = [
  "office@enzoscleaning.com",
  "te@enzoscleaning.com",
  "info@enzoscleaning.com",
  "pc@enzoscleaning.com",
];
const REPLY_TO_EMAIL = "te@enzoscleaning.com";
const FROM_EMAIL = "Enzo's Leads <leads@sales.enzoscleaning.com>";

const FETCH_TIMEOUT_MS = 12000;

async function fetchWithTimeout(url: string, init: RequestInit, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

interface LeadPayload {
  form_name: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  request_type?: string;
  message?: string;
  product_context?: string;
  category_context?: string;
  page_path?: string;
  page_name?: string;
  referral_partner?: string;
  extra?: Record<string, unknown>;
}

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("submit-lead", req);
  const started = Date.now();

  if (req.method !== "POST") {
    log.warn("request", "method_not_allowed", { method: req.method });
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    let data: LeadPayload;
    try {
      data = (await req.json()) as LeadPayload;
    } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!data?.form_name || typeof data.form_name !== "string") {
      log.warn("validation", "missing_form_name");
      return new Response(JSON.stringify({ ok: false, error: "form_name required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (data.email && !isValidEmail(String(data.email))) {
      log.warn("validation", "invalid_email", { email: data.email });
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "";
    const userAgent = req.headers.get("user-agent") || "";

    log.info("request", "lead_received", {
      form_name: data.form_name,
      page_path: data.page_path,
      email: data.email,
      phone: data.phone,
      has_message: !!data.message,
      product_context: data.product_context,
    });

    const subject = `New Lead: ${data.form_name}${data.product_context ? ` — ${data.product_context}` : ""}`;
    const html = `
      <h2>New Lead from ${data.form_name}</h2>
      <p><strong>Page:</strong> ${data.page_path || ""} ${data.page_name ? `(${data.page_name})` : ""}</p>
      <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd">
        ${Object.entries({
          Name: data.name,
          Company: data.company,
          Email: data.email,
          Phone: data.phone,
          "Request Type": data.request_type,
          "Product Interest": data.product_context,
          "Category Interest": data.category_context,
          "Referral Partner": data.referral_partner,
          Message: data.message,
          IP: ip,
        })
          .filter(([, v]) => v)
          .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${v}</td></tr>`)
          .join("")}
      </table>
    `;

    const results: Record<string, unknown> = {};

    // 1) Resend email
    if (RESEND_API_KEY) {
      try {
        const r = await fetchWithTimeout("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], cc: CC_EMAILS, subject, html, reply_to: REPLY_TO_EMAIL }),
        });
        const body = await r.text();
        results.email = { status: r.status };
        if (!r.ok) log.error("email", "resend_lead_email_failed", { status: r.status, body: body.slice(0, 500) });
        else log.info("email", "resend_lead_email_sent", { status: r.status });

        // Coupon email
        const extra = (data.extra || {}) as Record<string, unknown>;
        if (extra.send_coupon_email && data.email) {
          const couponCode = String(extra.coupon_code || "10%ENZOS");
          const couponHtml = `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#ffffff">
              <h1 style="color:#1a4d2e;text-align:center;margin:0 0 12px">Earn 10% Off!</h1>
              <p style="color:#444;text-align:center;font-size:16px;margin:0 0 20px">Thanks${data.name ? `, ${data.name}` : ""}! Here's your exclusive coupon code from Enzo's Cleaning Solutions.</p>
              <div style="border:2px dashed #1a4d2e;border-radius:14px;padding:22px;text-align:center;background:#f4faf6;margin:0 0 24px">
                <div style="font-size:14px;color:#666;letter-spacing:1px;text-transform:uppercase">Your Code</div>
                <div style="font-size:32px;font-weight:bold;color:#1a4d2e;letter-spacing:3px;margin-top:6px">${couponCode}</div>
              </div>
              <p style="color:#444;text-align:center;margin:0 0 18px">Mention this code when you call Tim to redeem your discount:</p>
              <p style="text-align:center;margin:0 0 24px">
                <a href="tel:4195020007" style="display:inline-block;background:linear-gradient(135deg,#1a4d2e,#2d7a4a);color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 28px;border-radius:12px;font-size:16px">📞 Call Tim: 419-502-0007</a>
              </p>
              <p style="color:#999;font-size:12px;text-align:center;margin-top:32px">Enzo's Cleaning Solutions · Sandusky, OH</p>
            </div>`;
          try {
            const cr = await fetchWithTimeout("https://api.resend.com/emails", {
              method: "POST",
              headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
              body: JSON.stringify({
                from: FROM_EMAIL,
                to: [data.email],
                bcc: [TO_EMAIL],
                subject: "Your 10% Off Coupon from Enzo's Cleaning Solutions",
                html: couponHtml,
              }),
            });
            const cbody = await cr.text();
            results.coupon_email = { status: cr.status };
            if (!cr.ok) log.error("email", "resend_coupon_email_failed", { status: cr.status, body: cbody.slice(0, 500), to: data.email });
            else log.info("email", "resend_coupon_email_sent", { status: cr.status, to: data.email });
          } catch (e) {
            log.error("email", "resend_coupon_email_exception", { ...errMeta(e), to: data.email });
            results.coupon_email = { error: "exception" };
          }
        }
      } catch (e) {
        log.error("email", "resend_lead_email_exception", errMeta(e));
        results.email = { error: "exception" };
      }
    } else {
      log.warn("config", "resend_api_key_missing");
      results.email = { skipped: "no RESEND_API_KEY" };
    }

    // 2) CRM webhook
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY) {
      const now = new Date();
      const crmBody = {
        board_id: BOARD_ID,
        tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: data.form_name,
        page: data.page_path || "",
        page_path: data.page_path || "",
        page_url: (data as Record<string, unknown>).page_url || "",
        page_name: data.page_name || "",
        referrer: (data as Record<string, unknown>).referrer || "",
        name: data.name || "",
        company: data.company || "",
        email: data.email || "",
        phone: data.phone || "",
        request_type: data.request_type || "",
        message: data.message || "",
        product_context: data.product_context || "",
        category_context: data.category_context || "",
        referral_partner: data.referral_partner || "",
        ip_address: ip,
        user_agent: userAgent,
        submitted_at: now.toISOString(),
        submitted_date: now.toISOString().slice(0, 10),
        submitted_at_human: now.toUTCString(),
        ...(data.extra || {}),
      };
      try {
        const c = await fetchWithTimeout(CRM_FORMS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-webhook-apikey": CRM_WEBHOOK_APIKEY },
          body: JSON.stringify(crmBody),
        });
        const cbody = await c.text();
        results.crm = { status: c.status };
        if (!c.ok) log.error("crm", "crm_webhook_failed", { status: c.status, body: cbody.slice(0, 500), form_name: data.form_name });
        else log.info("crm", "crm_webhook_ok", { status: c.status, form_name: data.form_name });
      } catch (e) {
        log.error("crm", "crm_webhook_exception", { ...errMeta(e), form_name: data.form_name });
        results.crm = { error: "exception" };
      }
    } else {
      log.warn("config", "crm_webhook_not_configured", {
        has_url: !!CRM_FORMS_WEBHOOK_URL,
        has_key: !!CRM_WEBHOOK_APIKEY,
      });
      results.crm = { skipped: "missing CRM webhook config" };
    }

    log.info("response", "lead_handled", { duration_ms: Date.now() - started });
    return new Response(JSON.stringify({ ok: true, request_id: log.requestId, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
    });
  } catch (err) {
    log.error("unexpected", "unhandled_exception", { ...errMeta(err), duration_ms: Date.now() - started });
    return new Response(JSON.stringify({ ok: false, error: "Internal error", request_id: log.requestId }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
    });
  }
});
