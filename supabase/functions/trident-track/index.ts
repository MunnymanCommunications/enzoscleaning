// Public endpoint that handles all Trident analytics writes using the service role.
// This replaces the previous anonymous RLS write access on Trident tracking tables.
import { createClient } from "npm:@supabase/supabase-js@2";
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isUuid(v: unknown): v is string {
  return typeof v === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
}

function sanitizeString(v: unknown, max = 500): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().slice(0, max);
  return s || null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json().catch(() => ({})) as Record<string, unknown>;
    const action = body.action as string;
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || null;

    switch (action) {
      case "upsert_visitor": {
        const email = sanitizeString(body.email, 200);
        const name = sanitizeString(body.name, 200);
        const company_name = sanitizeString(body.company_name, 200);
        const phone = sanitizeString(body.phone, 50);
        if (!email || !name || !company_name) return json({ error: "Missing required fields" }, 400);

        const { data: existing } = await admin
          .from("trident_visitors")
          .select("id")
          .eq("email", email)
          .maybeSingle();

        let visitorId: string;
        if (existing) {
          visitorId = existing.id;
          await admin
            .from("trident_visitors")
            .update({
              last_visit_at: new Date().toISOString(),
              name, company_name, phone,
              ip_address: ip ?? undefined,
            })
            .eq("id", visitorId);
        } else {
          const { data, error } = await admin
            .from("trident_visitors")
            .insert([{ name, company_name, email, phone, ip_address: ip }])
            .select("id")
            .single();
          if (error || !data) return json({ error: "Insert failed" }, 500);
          visitorId = data.id;
        }
        return json({ visitor_id: visitorId });
      }

      case "touch_visitor": {
        const visitor_id = body.visitor_id;
        if (!isUuid(visitor_id)) return json({ error: "Invalid visitor_id" }, 400);
        await admin
          .from("trident_visitors")
          .update({ last_visit_at: new Date().toISOString() })
          .eq("id", visitor_id);
        return json({ ok: true });
      }

      case "event": {
        const visitor_id = body.visitor_id;
        const event_type = sanitizeString(body.event_type, 100);
        if (!isUuid(visitor_id) || !event_type) return json({ error: "Invalid input" }, 400);
        const event_data = (body.event_data && typeof body.event_data === "object") ? body.event_data : {};
        await admin.from("trident_events").insert([{ visitor_id, event_type, event_data }]);
        return json({ ok: true });
      }

      case "page_view_start": {
        const visitor_id = body.visitor_id;
        const page_path = sanitizeString(body.page_path, 500);
        if (!isUuid(visitor_id) || !page_path) return json({ error: "Invalid input" }, 400);
        const { data } = await admin
          .from("trident_page_views")
          .insert([{ visitor_id, page_path, entered_at: new Date().toISOString() }])
          .select("id")
          .single();
        return json({ page_view_id: data?.id ?? null });
      }

      case "page_view_duration": {
        const page_view_id = body.page_view_id;
        const duration_seconds = Number(body.duration_seconds);
        if (!isUuid(page_view_id) || !Number.isFinite(duration_seconds)) return json({ error: "Invalid input" }, 400);
        await admin
          .from("trident_page_views")
          .update({ duration_seconds: Math.max(0, Math.min(86400, Math.round(duration_seconds))) })
          .eq("id", page_view_id);
        return json({ ok: true });
      }

      case "product_view": {
        const visitor_id = body.visitor_id;
        const product_name = sanitizeString(body.product_name, 300);
        if (!isUuid(visitor_id) || !product_name) return json({ error: "Invalid input" }, 400);
        await admin.from("trident_product_views").insert([{
          visitor_id,
          product_name,
          product_sku: sanitizeString(body.product_sku, 100),
          category: sanitizeString(body.category, 100),
        }]);
        return json({ ok: true });
      }

      default:
        return json({ error: "Unknown action" }, 400);
    }
  } catch (err) {
    await reportError({ fn: "trident-track", error: err, request: req });
    return json({ error: "Internal error" }, 500);
  }
});
