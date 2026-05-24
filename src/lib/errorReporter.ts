// Frontend error reporter — sends errors to the report-error edge function.
// Includes throttling, sanitization, and silent fallback so logging
// failures never crash the app.

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/report-error`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const PROJECT_NAME = "Enzo's Cleaning Solutions";

function detectEnvironment(): string {
  if (typeof window === "undefined") return "ssr";
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return "development";
  if (host.includes("lovable.app") || host.includes("staging")) return "staging";
  return "production";
}

// In-session dedup: hash of name+message+first stack line, 30 min TTL
const seen = new Map<string, number>();
const DEDUP_TTL_MS = 30 * 60 * 1000;

function fingerprint(name: string, message: string, stack: string): string {
  const firstFrame = (stack || "").split("\n").find((l) => l.trim().startsWith("at ")) || "";
  return `${name}|${message}|${firstFrame.trim()}`;
}

function shouldReport(fp: string): boolean {
  const now = Date.now();
  if (seen.size > 200) {
    for (const [k, t] of seen) if (now - t > DEDUP_TTL_MS) seen.delete(k);
  }
  const last = seen.get(fp);
  if (last && now - last < DEDUP_TTL_MS) return false;
  seen.set(fp, now);
  return true;
}

// Best-effort sanitization of arbitrary metadata before sending
const SENSITIVE = /(pass|secret|token|apikey|api_key|auth|card|cvv|ssn)/i;
function sanitize(value: unknown, depth = 0): unknown {
  if (value == null || depth > 4) return value;
  if (Array.isArray(value)) return value.slice(0, 30).map((v) => sanitize(v, depth + 1));
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (SENSITIVE.test(k)) out[k] = "[redacted]";
      else if (typeof v === "string" && v.length > 500) out[k] = v.slice(0, 500) + "…";
      else out[k] = sanitize(v, depth + 1);
    }
    return out;
  }
  return value;
}

export interface ReportClientErrorOptions {
  source: "window.onerror" | "unhandledrejection" | "react-error-boundary" | "manual";
  error: unknown;
  meta?: Record<string, unknown>;
}

export async function reportClientError(opts: ReportClientErrorOptions): Promise<void> {
  try {
    if (typeof window === "undefined") return;
    const env = detectEnvironment();
    if (env === "development") return; // skip dev noise

    const err = opts.error;
    const name = err instanceof Error ? err.name : "Error";
    const message = err instanceof Error ? err.message : String(err ?? "Unknown error");
    const stack = err instanceof Error ? (err.stack || "") : "";

    // Suppress React hydration errors (#418, #419, #421, #422, #423, #425).
    // React 18 automatically recovers by re-rendering on the client, so these
    // are not user-facing failures and would otherwise spam the alert inbox.
    if (/Minified React error #(418|419|421|422|423|425)/.test(message)) return;
    // Also suppress known benign browser/extension noise
    if (/ResizeObserver loop|Non-Error promise rejection captured/i.test(message)) return;

    const fp = fingerprint(name, message, stack);
    if (!shouldReport(fp)) return;

    const body = {
      source: opts.source,
      name,
      message,
      stack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      device: `${navigator.platform || ""} ${window.innerWidth}x${window.innerHeight}`,
      environment: env,
      meta: sanitize({ project: PROJECT_NAME, referrer: document.referrer, ...(opts.meta || {}) }) as Record<string, unknown>,
    };

    // Fire-and-forget. Keepalive lets it survive page unload.
    await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
      },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => { /* silent */ });
  } catch {
    // Never throw
  }
}

let installed = false;
export function installGlobalErrorHandlers(): void {
  if (installed || typeof window === "undefined") return;
  installed = true;

  window.addEventListener("error", (event) => {
    reportClientError({
      source: "window.onerror",
      error: event.error || new Error(event.message),
      meta: { filename: event.filename, lineno: event.lineno, colno: event.colno },
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    reportClientError({
      source: "unhandledrejection",
      error: event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
    });
  });
}
