// Submits a Trident member's order/estimate request: stores it, pushes to "Website Forms" CRM board, and emails Nick.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CRM_FORMS_WEBHOOK_URL = Deno.env.get("CRM_FORMS_WEBHOOK_URL");
const CRM_WEBHOOK_APIKEY = Deno.env.get("CRM_WEBHOOK_APIKEY");

const WEBSITE_FORMS_BOARD_ID = "3c83cd01-8e52-4bc4-aa3b-6178334aa3b3";
const TENANT_SUBDOMAIN = "enzos";
const TO_EMAIL = "nick@munnymancommunications.com";
const FROM_EMAIL = "Enzo's Trident <trident@sales.enzoscleaning.com>";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return json({ error: "Unauthorized" }, 401);
    }

    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await userClient.auth.getClaims(token);
    if (claimsErr || !claims?.claims?.sub) return json({ error: "Unauthorized" }, 401);
    const userId = claims.claims.sub as string;

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: member, error: mErr } = await admin
      .from("trident_members")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();
    if (mErr || !member) return json({ error: "Member profile not found" }, 403);

    const payload = (await req.json()) as OrderPayload;
    if (!Array.isArray(payload.items) || payload.items.length === 0) {
      return json({ error: "No items in request" }, 400);
    }

    const items: OrderItem[] = payload.items
      .map((i) => ({
        product_name: String(i.product_name || "").trim().slice(0, 200),
        product_sku: i.product_sku ? String(i.product_sku).slice(0, 80) : undefined,
        category: i.category ? String(i.category).slice(0, 120) : undefined,
        quantity: Math.max(1, Math.min(9999, Number(i.quantity) || 1)),
        notes: i.notes ? String(i.notes).slice(0, 500) : undefined,
      }))
      .filter((i) => i.product_name.length > 0);

    if (items.length === 0) return json({ error: "No valid items" }, 400);

    const totalItems = items.reduce((s, i) => s + i.quantity, 0);
    const memberSnapshot = {
      name: member.name,
      company: member.company_name,
      email: member.email,
      phone: member.phone,
      title: member.title,
      address_line1: member.address_line1,
      address_line2: member.address_line2,
      city: member.city,
      state: member.state,
      postal_code: member.postal_code,
      country: member.country,
    };

    // 1) Persist order + items
    const { data: order, error: oErr } = await admin
      .from("trident_order_requests")
      .insert({
        user_id: userId,
        member_snapshot: memberSnapshot,
        notes: payload.notes || null,
        total_items: totalItems,
      })
      .select("id, created_at")
      .single();
    if (oErr || !order) return json({ error: oErr?.message || "Failed to save order" }, 500);

    const itemRows = items.map((i) => ({ order_id: order.id, ...i }));
    await admin.from("trident_order_request_items").insert(itemRows);

    // 2) Build summary
    const itemsTable = items
      .map(
        (i) =>
          `<tr><td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.product_name)}</td>` +
          `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.product_sku || "")}</td>` +
          `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.category || "")}</td>` +
          `<td style="padding:6px;border:1px solid #ddd;text-align:right">${i.quantity}</td>` +
          `<td style="padding:6px;border:1px solid #ddd">${escapeHtml(i.notes || "")}</td></tr>`,
      )
      .join("");

    const itemsText = items
      .map((i) => `- ${i.product_name}${i.product_sku ? ` (${i.product_sku})` : ""} × ${i.quantity}${i.notes ? ` — ${i.notes}` : ""}`)
      .join("\n");

    // 3) CRM push — Website Forms board, "Trident Member Order Request"
    let crmStatus: number | null = null;
    if (CRM_FORMS_WEBHOOK_URL && CRM_WEBHOOK_APIKEY) {
      const crmBody = {
        board_id: WEBSITE_FORMS_BOARD_ID,
        tenant_subdomain: TENANT_SUBDOMAIN,
        form_name: "Trident Member Order Request",
        page: payload.page_path || "",
        page_path: payload.page_path || "",
        page_url: payload.page_url || "",
        name: member.name,
        company: member.company_name,
        email: member.email,
        phone: member.phone,
        request_type: "Trident Order/Estimate Request",
        message: payload.notes || "",
        product_context: items.map((i) => `${i.product_name} x${i.quantity}`).join(", "),
        category_context: "Trident",
        submitted_at: new Date().toISOString(),
        submitted_date: new Date().toISOString().slice(0, 10),
        // Custom fields for the CRM board
        trident_member_order_request: JSON.stringify({
          order_id: order.id,
          total_items: totalItems,
          items,
          member: memberSnapshot,
          notes: payload.notes || "",
        }),
        trident_order_id: order.id,
        trident_total_items: totalItems,
        trident_items_summary: itemsText,
      };
      const c = await fetch(CRM_FORMS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-webhook-apikey": CRM_WEBHOOK_APIKEY },
        body: JSON.stringify(crmBody),
      });
      crmStatus = c.status;
      await admin
        .from("trident_order_requests")
        .update({ crm_status: String(c.status) })
        .eq("id", order.id);
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
              Name: member.name,
              Company: member.company_name,
              Email: member.email,
              Phone: member.phone,
              Title: member.title,
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
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html, reply_to: member.email }),
      });
    }

    return json({ ok: true, order_id: order.id, crm_status: crmStatus });
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]);
}
function rowsFromObject(obj: Record<string, unknown>): string {
  return Object.entries(obj)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px;border:1px solid #ddd"><strong>${k}</strong></td><td style="padding:6px;border:1px solid #ddd">${escapeHtml(String(v))}</td></tr>`)
    .join("");
}
