// Frontend error reporter — sends errors to the report-error edge function.
// Includes throttling, sanitization, and silent fallback so logging
// failures never crash the app.
// NOTE: Reporting is currently paused.

const REPORTING_ENABLED = false;

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

// Patterns we will never report — errors that are not caused by our code and
// cannot be fixed from our end. Keep this list focused on well-known noise.
const SUPPRESSED_PATTERNS: RegExp[] = [
  // React 18 hydration recovery codes (auto-recovered, not user-facing)
  /Minified React error #(418|419|421|422|423|425)/,
  /Hydration failed because/i,
  /There was an error while hydrating/i,
  /Text content does not match server-rendered HTML/i,

  // Microsoft Outlook SafeLink / email-preview crawler
  /Object Not Found Matching Id:\d+, MethodName:\w+, ParamCount:\d+/i,

  // Benign browser quirks
  /ResizeObserver loop( limit exceeded| completed with undelivered notifications)?/i,
  /Non-Error promise rejection captured/i,
  /Script error\.?$/i, // cross-origin scripts with no details
  /Load failed$/i, // Safari generic network abort
  /NetworkError when attempting to fetch resource/i,
  /Failed to fetch dynamically imported module/i, // stale chunk after deploy
  /Importing a module script failed/i,
  /ChunkLoadError/i,
  /Loading chunk \d+ failed/i,
  /Loading CSS chunk \d+ failed/i,

  // Browser extensions / injected scripts (not our code)
  /chrome-extension:\/\//i,
  /moz-extension:\/\//i,
  /safari-extension:\/\//i,
  /webkit-masked-url/i,
  /extension context invalidated/i,

  // Ad blockers / tracker blocking
  /blocked by client/i,
  /ERR_BLOCKED_BY_CLIENT/i,

  // User-cancelled requests
  /AbortError/i,
  /The operation was aborted/i,
  /The user aborted a request/i,

  // Misc third-party noise
  /window\.webkit\.messageHandlers/i,
  /Can't find variable: gmo/i,
  /vid_mate_check is not defined/i,

  // Supabase Auth LockManager lock acquisition failures (internal race condition, not user-facing)
  /Acquiring an exclusive Navigator LockManager lock "lock:sb-.*-auth-token"/i,
];

function isSuppressed(message: string, stack: string): boolean {
  const haystack = `${message}\n${stack}`;
  return SUPPRESSED_PATTERNS.some((re) => re.test(haystack));
}

export async function reportClientError(opts: ReportClientErrorOptions): Promise<void> {
  try {
    if (!REPORTING_ENABLED || typeof window === "undefined") return;
    const env = detectEnvironment();
    if (env === "development") return;

    const err = opts.error;
    const name = err instanceof Error ? err.name : "Error";
    const message = err instanceof Error ? err.message : String(err ?? "Unknown error");
    const stack = err instanceof Error ? (err.stack || "") : "";

    if (isSuppressed(message, stack)) return;

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
