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

export async function reportClientError(_opts: ReportClientErrorOptions): Promise<void> {
  // Error reporting is paused. No-op.
  return;
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
