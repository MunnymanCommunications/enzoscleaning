// Frontend error reporter endpoint.
// Receives errors captured by window.onerror / unhandledrejection / React ErrorBoundary
// and forwards them through the shared error-alert pipeline (email + console log + dedup).
import { reportError } from "../_shared/errorAlert.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-request-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface FrontendErrorBody {
  message?: string;
  name?: string;
  stack?: string;
  source?: string;        // e.g. "window.onerror" | "unhandledrejection" | "react-error-boundary"
  url?: string;           // page URL where it happened
  userId?: string | null;
  userAgent?: string;
  device?: string;
  environment?: string;
  meta?: Record<string, unknown>;
  payload?: Record<string, unknown>;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    let body: FrontendErrorBody = {};
    try { body = await req.json(); } catch { /* allow empty */ }

    const err = new Error(body.message || "Unknown frontend error");
    err.name = body.name || "FrontendError";
    if (body.stack) err.stack = body.stack;

    await reportError({
      fn: body.source ? `frontend:${body.source}` : "frontend",
      error: err,
      request: req,
      endpoint: body.url,
      userId: body.userId ?? null,
      userAgent: body.userAgent,
      device: body.device,
      environment: body.environment,
      payload: body.payload,
      meta: body.meta,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("report-error_failed", String(e));
    return new Response(JSON.stringify({ ok: false }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
