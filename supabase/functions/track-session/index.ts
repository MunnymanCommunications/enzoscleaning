// Forward visitor session summary to n8n tracking webhook
import { createLogger, errMeta } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const N8N_TRACKING_WEBHOOK_URL = Deno.env.get("N8N_TRACKING_WEBHOOK_URL");
const FETCH_TIMEOUT_MS = 8000;

async function fetchWithTimeout(url: string, init: RequestInit, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { ...init, signal: ctrl.signal }); } finally { clearTimeout(t); }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const log = createLogger("track-session", req);

  try {
    const raw = await req.text();
    let body: Record<string, unknown> = {};
    try { body = raw ? JSON.parse(raw) : {}; }
    catch (e) {
      log.warn("validation", "invalid_json_body", errMeta(e));
      body = { raw: raw.slice(0, 200) };
    }
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "";
    const userAgent = req.headers.get("user-agent") || "";

    const payload = { ...body, ip_address: ip, user_agent: userAgent, received_at: new Date().toISOString() };

    if (!N8N_TRACKING_WEBHOOK_URL) {
      log.error("config", "n8n_webhook_url_missing");
      return new Response(JSON.stringify({ ok: false, error: "no webhook url", request_id: log.requestId }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
      });
    }

    try {
      const r = await fetchWithTimeout(N8N_TRACKING_WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      // Drain body to avoid resource leaks
      const respText = await r.text();
      if (!r.ok) log.error("third_party", "n8n_webhook_failed", { status: r.status, body: respText.slice(0, 300) });
      else log.info("third_party", "n8n_webhook_ok", { status: r.status });
      return new Response(JSON.stringify({ ok: r.ok, status: r.status, request_id: log.requestId }), {
        headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
      });
    } catch (e) {
      log.error("third_party", "n8n_webhook_exception", errMeta(e));
      return new Response(JSON.stringify({ ok: false, error: "Webhook failed", request_id: log.requestId }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
      });
    }
  } catch (err) {
    log.error("unexpected", "unhandled_exception", errMeta(err));
    return new Response(JSON.stringify({ ok: false, error: "Internal error", request_id: log.requestId }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json", "x-request-id": log.requestId },
    });
  }
});
