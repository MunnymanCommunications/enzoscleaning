// Centralized error alerting for edge functions.
// - Sends a structured email via Resend
// - Deduplicates identical errors within a TTL window (in-memory per instance)
// - Sanitizes sensitive fields before emailing/logging
// - Never throws — fallbacks ensure logging failure cannot crash callers

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL =
  Deno.env.get("ERROR_ALERT_FROM") ||
  "Enzo's Error Alerts <alerts@sales.enzoscleaning.com>";
const PROJECT_NAME = Deno.env.get("PROJECT_NAME") || "Enzo's Cleaning Solutions";
const APP_ENV = Deno.env.get("APP_ENV") || "production";

const DEFAULT_RECIPIENTS = [
  "nick@munnymancommunications.com",
  "kai@elitecardpro.com",
];

function getRecipients(): string[] {
  const raw = Deno.env.get("ERROR_ALERT_RECIPIENTS");
  if (!raw) return DEFAULT_RECIPIENTS;
  const list = raw.split(",").map((s) => s.trim()).filter(Boolean);
  return list.length ? list : DEFAULT_RECIPIENTS;
}

// ---- Sanitization ---------------------------------------------------------

const SENSITIVE_KEYS = new Set([
  "password", "pass", "pwd", "token", "access_token", "refresh_token",
  "authorization", "apikey", "api_key", "secret", "client_secret",
  "card", "cardnumber", "card_number", "cvv", "cvc", "ssn", "pin",
  "credit_card", "creditcard", "stripe_token", "session_token",
]);

function looksSensitiveKey(k: string): boolean {
  const lk = k.toLowerCase();
  if (SENSITIVE_KEYS.has(lk)) return true;
  return /(pass|secret|token|apikey|api_key|auth|card|cvv|ssn)/i.test(k);
}

export function sanitize(value: unknown, depth = 0): unknown {
  if (value == null) return value;
  if (depth > 5) return "[max-depth]";
  if (Array.isArray(value)) return value.slice(0, 50).map((v) => sanitize(v, depth + 1));
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (looksSensitiveKey(k)) { out[k] = "[redacted]"; continue; }
      if (typeof v === "string" && v.length > 1000) out[k] = v.slice(0, 1000) + "…";
      else out[k] = sanitize(v, depth + 1);
    }
    return out;
  }
  if (typeof value === "string" && value.length > 2000) return value.slice(0, 2000) + "…";
  return value;
}

// ---- Dedup ---------------------------------------------------------------

const DEDUP_TTL_MS = 60 * 60 * 1000; // 1 hour
const seen = new Map<string, number>();

async function fingerprint(s: string): Promise<string> {
  try {
    const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    return s.slice(0, 64);
  }
}

function shouldSend(key: string): boolean {
  const now = Date.now();
  // sweep
  if (seen.size > 500) {
    for (const [k, t] of seen) if (now - t > DEDUP_TTL_MS) seen.delete(k);
  }
  const last = seen.get(key);
  if (last && now - last < DEDUP_TTL_MS) return false;
  seen.set(key, now);
  return true;
}

// ---- Public API ----------------------------------------------------------

export interface ReportErrorInput {
  fn: string;                     // function / source name
  error: unknown;                 // Error or string
  request?: Request;              // optional incoming request
  requestId?: string;
  endpoint?: string;              // override URL
  userId?: string | null;
  payload?: Record<string, unknown>;
  meta?: Record<string, unknown>;
  // frontend-only
  userAgent?: string;
  device?: string;
  environment?: string;
}

export async function reportError(input: ReportErrorInput): Promise<void> {
  try {
    const env = input.environment || APP_ENV;
    const err = input.error;
    const name = err instanceof Error ? err.name : "Error";
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? (err.stack || "") : "";

    // Suppress well-known noise that cannot be fixed from our end
    const haystack = `${message}\n${stack}`;
    if (/Acquiring an exclusive Navigator LockManager lock "lock:sb-.*-auth-token"/i.test(haystack)) {
      return;
    }

    const url =
      input.endpoint ||
      (input.request ? new URL(input.request.url).pathname + new URL(input.request.url).search : "");
    const method = input.request?.method || "";
    const ua = input.userAgent || input.request?.headers.get("user-agent") || "";

    const sigBasis = `${PROJECT_NAME}|${env}|${input.fn}|${name}|${message}|${(stack.split("\n")[1] || "").trim()}`;
    const key = await fingerprint(sigBasis);
    if (!shouldSend(key)) return;

    const payload = sanitize(input.payload || {}) as Record<string, unknown>;
    const meta = sanitize(input.meta || {}) as Record<string, unknown>;

    const subject = `[${PROJECT_NAME}] Error Alert - ${capitalize(env)}`;
    const html = `
<div style="font-family:ui-sans-serif,system-ui,Arial,sans-serif;color:#111;max-width:760px">
  <h2 style="margin:0 0 12px">${escapeHtml(subject)}</h2>
  <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd;width:100%">
    ${row("Project", PROJECT_NAME)}
    ${row("Environment", env)}
    ${row("Timestamp", new Date().toISOString())}
    ${row("Source", input.fn)}
    ${row("Request ID", input.requestId || "")}
    ${row("Endpoint", `${method} ${url}`.trim())}
    ${row("User ID", input.userId || "")}
    ${row("User Agent / Device", input.device || ua)}
    ${row("Error", `${name}: ${message}`)}
    ${row("Fingerprint", key.slice(0, 12))}
  </table>
  <h3 style="margin:18px 0 6px">Stack Trace</h3>
  <pre style="background:#0b1020;color:#eee;padding:12px;border-radius:6px;overflow:auto;font-size:12px;white-space:pre-wrap">${escapeHtml(stack || "(none)")}</pre>
  ${Object.keys(payload).length ? `<h3 style="margin:18px 0 6px">Payload (sanitized)</h3><pre style="background:#f6f8fa;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap">${escapeHtml(JSON.stringify(payload, null, 2))}</pre>` : ""}
  ${Object.keys(meta).length ? `<h3 style="margin:18px 0 6px">Metadata</h3><pre style="background:#f6f8fa;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap">${escapeHtml(JSON.stringify(meta, null, 2))}</pre>` : ""}
  <p style="color:#888;font-size:12px;margin-top:18px">Duplicate alerts for this same error are suppressed for 1 hour.</p>
</div>`.trim();

    const recipients = getRecipients();

    // Structured console log as persistent record (Cloud function logs)
    const logRecord = {
      ts: new Date().toISOString(),
      level: "error",
      category: "error_alert",
      project: PROJECT_NAME,
      environment: env,
      fn: input.fn,
      request_id: input.requestId,
      endpoint: `${method} ${url}`.trim(),
      user_id: input.userId || null,
      user_agent: ua,
      error_name: name,
      error_message: message,
      fingerprint: key,
      payload,
      meta,
      stack: stack.split("\n").slice(0, 12).join(" | "),
    };
    try { console.error(JSON.stringify(logRecord)); } catch { /* ignore */ }

    if (!RESEND_API_KEY) {
      console.warn(JSON.stringify({ ts: new Date().toISOString(), level: "warn", category: "error_alert", msg: "resend_not_configured" }));
      return;
    }

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 8000);
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM_EMAIL, to: recipients, subject, html }),
        signal: ctrl.signal,
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error(JSON.stringify({ ts: new Date().toISOString(), level: "error", category: "error_alert", msg: "alert_email_failed", status: res.status, body: body.slice(0, 400) }));
      }
    } finally {
      clearTimeout(t);
    }
  } catch (e) {
    // Never throw — alerting must not break the caller
    try { console.error("error_alert_internal_failure", String(e)); } catch { /* noop */ }
  }
}

function row(label: string, value: string): string {
  return `<tr><td style="border:1px solid #eee"><strong>${escapeHtml(label)}</strong></td><td style="border:1px solid #eee">${escapeHtml(String(value))}</td></tr>`;
}

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function capitalize(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
