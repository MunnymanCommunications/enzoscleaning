// Submit lead: emails via Resend + posts to CRM webhook
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");

const BOARD_ID = "3c83cd01-8e52-4bc4-aa3b-6178334aa3b3";
const TENANT_SUBDOMAIN = "enzos";
const TO_EMAIL = "nick@munnymancommunications.com";
const FROM_EMAIL = "Enzo's Leads <leads@sales.enzoscleaning.com>";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const data = (await req.json()) as LeadPayload;
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "";
    const userAgent = req.headers.get("user-agent") || "";

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
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html, reply_to: data.email }),
      });
      results.email = { status: r.status, body: await r.text() };
    } else {
      results.email = { skipped: "no RESEND_API_KEY" };
    }

    // 2) CRM webhook
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY) {
      const crmBody = {
        board_id: BOARD_ID,
        tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: data.form_name,
        page: data.page_path || "",
        page_name: data.page_name || "",
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
        submitted_at: new Date().toISOString(),
        ...(data.extra || {}),
      };
      const c = await fetch(CRM_FORMS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-apikey": CRM_WEBHOOK_APIKEY,
        },
        body: JSON.stringify(crmBody),
      });
      results.crm = { status: c.status, body: await c.text() };
    } else {
      results.crm = { skipped: "missing CRM webhook config" };
    }

    return new Response(JSON.stringify({ ok: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
