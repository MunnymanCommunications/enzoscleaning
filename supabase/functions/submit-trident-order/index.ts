// Submits a Trident member's order/estimate request: stores it, pushes to "Website Forms" CRM board, and emails Nick.
import { createClient } from "npm:@supabase/supabase-js@2";
import { createLogger, errMeta } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");

const WEBSITE_FORMS_BOARD_ID = "3c83cd01-8e52-4bc4-aa3b-6178334aa3b3";
const TENANT_SUBDOMAIN = "enzos";
const TO_EMAIL = "nick@munnymancommunications.com";
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";
const FETCH_TIMEOUT_MS = 12000;

interface OrderItem {
  product_name: string;
  product_sku?: string;
  category?: string;
  quantity: number;
  notes?: string;
}
interface OrderPayload {
  items: OrderItem[];
  notes?: string;
  page_path?: string;
  page_url?: string;
}

async function fetchWithTimeout(url: string, init: RequestInit, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { ...init, signal: ctrl.signal }); } finally { clearTimeout(t); }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("submit-trident-order", req);

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      log.warn("auth", "missing_or_invalid_auth_header");
      return json({ error: "Unauthorized" }, 401, log.requestId);
    }

    const url = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !anonKey || !serviceKey) {
      log.error("config", "missing_supabase_env", { has_url: !!url, has_anon: !!anonKey, has_service: !!serviceKey });
      return json({ error: "Server misconfigured" }, 500, log.requestId);
    }

    const userClient = createClient(url, anonKey, { global: { headers: { Authorization: authHeader } } });
    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await userClient.auth.getClaims(token);
    if (claimsErr || !claims?.claims?.sub) {
      log.warn("auth", "claims_verification_failed", errMeta(claimsErr));
      return json({ error: "Unauthorized" }, 401, log.requestId);
    }
    const userId = claims.claims.sub as string;
    log.info("auth", "user_authenticated", { user_id: userId });

    const admin = createClient(url, serviceKey);

    const { data: member, error: mErr } = await admin
      .from("trident_members").select("*").eq("user_id", userId).maybeSingle();
    if (mErr) {
      log.error("database", "member_lookup_failed", { ...errMeta(mErr), user_id: userId });
      return json({ error: "Lookup failed" }, 500, log.requestId);
    }
    if (!member) {
      log.warn("auth", "member_profile_not_found", { user_id: userId });
      return json({ error: "Member profile not found" }, 403, log.requestId);
    }

    let payload: OrderPayload;
    try { payload = (await req.json()) as OrderPayload; } catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      return json({ error: "Invalid JSON" }, 400, log.requestId);
    }

    if (!Array.isArray(payload?.items) || payload.items.length === 0) {
      log.warn("validation", "no_items_in_request");
      return json({ error: "No items in request" }, 400, log.requestId);
    }
    if (payload.items.length > 200) {
      log.warn("validation", "too_many_items", { count: payload.items.length });
      return json({ error: "Too many items" }, 400, log.requestId);
    }

    const items: OrderItem[] = payload.items
      .map((i) => ({
        product_name: String(i?.product_name || "").trim().slice(0, 200),
        product_sku: i?.product_sku ? String(i.product_sku).slice(0, 80) : undefined,
        category: i?.category ? String(i.category).slice(0, 120) : undefined,
        quantity: Math.max(1, Math.min(9999, Number(i?.quantity) || 1)),
        notes: i?.notes ? String(i.notes).slice(0, 500) : undefined,
      }))
      .filter((i) => i.product_name.length > 0);

    if (items.length === 0) {
      log.warn("validation", "no_valid_items_after_normalization");
      return json({ error: "No valid items" }, 400, log.requestId);
    }

    const totalItems = items.reduce((s, i) => s + i.quantity, 0);
    const memberSnapshot = {
      name: member.name, company: member.company_name, email: member.email, phone: member.phone, title: member.title,
      address_line1: member.address_line1, address_line2: member.address_line2,
      city: member.city, state: member.state, postal_code: member.postal_code, country: member.country,
    };

    // 1) Persist order + items
    const { data: order, error: oErr } = await admin
      .from("trident_order_requests")
      .insert({ user_id: userId, member_snapshot: memberSnapshot, notes: payload.notes || null, total_items: totalItems })
      .select("id, created_at").single();
    if (oErr || !order) {
      log.error("database", "order_insert_failed", { ...errMeta(oErr), user_id: userId });
      return json({ error: oErr?.message || "Failed to save order" }, 500, log.requestId);
    }
    log.info("database", "order_inserted", { order_id: order.id, total_items: totalItems, line_count: items.length });

    const itemRows = items.map((i) => ({ order_id: order.id, ...i }));
    const { error: iiErr } = await admin.from("trident_order_request_items").insert(itemRows);
    if (iiErr) log.error("database", "order_items_insert_failed", { ...errMeta(iiErr), order_id: order.id });

    // 2) Build summary
    const itemsTable = items.map(
      (i) =>
        `<tr><td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.product_name)}</td>` +
        `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.product_sku || "")}</td>` +
        `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.category || "")}</td>` +
        `<td style="padding:6px;border:1px solid #ddd;text-align:right">${i.quantity}</td>` +
        `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.notes || "")}</td></tr>`,
    ).join("");

    const itemsText = items.map((i) => `- ${i.product_name}${i.product_sku ? ` (${i.product_sku})` : ""} × ${i.quantity}${i.notes ? ` — ${i.notes}` : ""}`).join("\n");

    // 3) CRM push
    let crmStatus: number | null = null;
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY) {
      const crmBody = {
        board_id: WEBSITE_FORMS_BOARD_ID, tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: "Trident Member Order Request", stage_name: "Trident Order Requests",
        page: payload.page_path || "", page_path: payload.page_path || "", page_url: payload.page_url || "",
        name: member.name, company: member.company_name, email: member.email, phone: member.phone,
        request_type: "Trident Order/Estimate Request", message: payload.notes || "",
        product_context: items.map((i) => `${i.product_name} x${i.quantity}`).join(", "),
        category_context: "Trident",
        submitted_at: new Date().toISOString(), submitted_date: new Date().toISOString().slice(0, 10),
        trident_member_order_request: JSON.stringify({
          order_id: order.id, total_items: totalItems, items, member: memberSnapshot, notes: payload.notes || "",
        }),
        trident_order_id: order.id, trident_total_items: totalItems, trident_items_summary: itemsText,
      };
      try {
        const c = await fetchWithTimeout(CRM_FORMS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-webhook-apikey": CRM_WEBHOOK_APIKEY },
          body: JSON.stringify(crmBody),
        });
        const cbody = await c.text();
        crmStatus = c.status;
        if (!c.ok) log.error("crm", "crm_order_push_failed", { status: c.status, body: cbody.slice(0, 500), order_id: order.id });
        else log.info("crm", "crm_order_push_ok", { status: c.status, order_id: order.id });
        const { error: updErr } = await admin.from("trident_order_requests").update({ crm_status: String(c.status) }).eq("id", order.id);
        if (updErr) log.error("database", "order_crm_status_update_failed", { ...errMeta(updErr), order_id: order.id });
      } catch (e) {
        log.error("crm", "crm_order_push_exception", { ...errMeta(e), order_id: order.id });
      }
    } else {
      log.warn("config", "crm_webhook_not_configured", { has_url: !!CRM_FORMS_WEBHOOK_URL, has_key: !!CRM_WEBHOOK_APIKEY });
    }

    // 4) Email Nick
    if (RESEND_API_KEY) {
      const subject = `Trident Order Request — ${member.company_name} (${member.name})`;
      const html = `
        <div style="font-family:Arial,sans-serif;color:#0f172a">
          <h2>New Trident Member Order Request</h2>
          <p><strong>Order ID:</strong> ${order.id}</p>
          <h3>Member</h3>
          <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd">
            ${rowsFromObject({
              Name: member.name, Company: member.company_name, Email: member.email, Phone: member.phone, Title: member.title,
              Address: [member.address_line1, member.address_line2, member.city, member.state, member.postal_code, member.country].filter(Boolean).join(", "),
            })}
          </table>
          <h3>Items (${totalItems} total)</h3>
          <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd">
            <thead><tr><th style="padding:6px;border:1px solid #ddd">Product</th><th style="padding:6px;border:1px solid #ddd">SKU</th><th style="padding:6px;border:1px solid #ddd">Category</th><th style="padding:6px;border:1px solid #ddd">Qty</th><th style="padding:6px;border:1px solid #ddd">Notes</th></tr></thead>
            <tbody>${itemsTable}</tbody>
          </table>
          ${payload.notes ? `<h3>Notes</h3><p>${escapeHtml(payload.notes)}</p>` : ""}
          <p style="color:#64748b;font-size:12px">Submitted from ${escapeHtml(payload.page_url || payload.page_path || "Trident portal")}</p>
        </div>`;
      try {
        const r = await fetchWithTimeout("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html, reply_to: member.email }),
        });
        const body = await r.text();
        if (!r.ok) log.error("email", "order_email_failed", { status: r.status, body: body.slice(0, 500), order_id: order.id });
        else log.info("email", "order_email_sent", { status: r.status, order_id: order.id });
      } catch (e) {
        log.error("email", "order_email_exception", { ...errMeta(e), order_id: order.id });
      }
    } else {
      log.warn("config", "resend_api_key_missing");
    }

    return json({ ok: true, order_id: order.id, crm_status: crmStatus, request_id: log.requestId }, 200, log.requestId);
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
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]);
}
function rowsFromObject(obj: Record<string, unknown>): string {
  return Object.entries(obj).filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px;border:1px solid #ddd"><strong>${k}</strong></td><td style="padding:6px;border:1px solid #ddd">${escapeHtml(String(v))}</td></tr>`)
    .join("");
}
