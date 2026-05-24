// Shared structured logger for edge functions.
// Keep this file simple; each function inlines its own import.
export type LogLevel = "info" | "warn" | "error";
export type LogCategory =
  | "request"
  | "validation"
  | "auth"
  | "database"
  | "third_party"
  | "email"
  | "crm"
  | "config"
  | "unexpected"
  | "response";

export interface Logger {
  requestId: string;
  fn: string;
  log: (level: LogLevel, category: LogCategory, msg: string, meta?: Record<string, unknown>) => void;
  info: (category: LogCategory, msg: string, meta?: Record<string, unknown>) => void;
  warn: (category: LogCategory, msg: string, meta?: Record<string, unknown>) => void;
  error: (category: LogCategory, msg: string, meta?: Record<string, unknown>) => void;
}

export function maskEmail(e?: string | null): string | null {
  if (!e) return null;
  const [u, d] = String(e).split("@");
  if (!d) return "***";
  return `${u.slice(0, 2)}***@${d}`;
}

export function maskPhone(p?: string | null): string | null {
  if (!p) return null;
  const digits = String(p).replace(/\D/g, "");
  if (digits.length < 4) return "***";
  return `***${digits.slice(-4)}`;
}

export function sanitize(obj: Record<string, unknown> = {}): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    const lk = k.toLowerCase();
    if (lk === "email") out[k] = maskEmail(String(v));
    else if (lk === "phone") out[k] = maskPhone(String(v));
    else if (lk === "password" || lk === "token" || lk === "apikey" || lk === "api_key" || lk === "authorization") out[k] = "[redacted]";
    else if (typeof v === "string" && v.length > 500) out[k] = v.slice(0, 500) + "…";
    else out[k] = v;
  }
  return out;
}

export function createLogger(fn: string, req?: Request): Logger {
  const requestId =
    req?.headers.get("x-request-id") ||
    (globalThis.crypto?.randomUUID?.() ?? `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`);

  const emit = (level: LogLevel, category: LogCategory, msg: string, meta: Record<string, unknown> = {}) => {
    const entry = {
      ts: new Date().toISOString(),
      level,
      fn,
      request_id: requestId,
      category,
      msg,
      ...sanitize(meta),
    };
    const line = JSON.stringify(entry);
    if (level === "error") console.error(line);
    else if (level === "warn") console.warn(line);
    else console.log(line);
  };

  return {
    requestId,
    fn,
    log: emit,
    info: (c, m, meta) => emit("info", c, m, meta),
    warn: (c, m, meta) => emit("warn", c, m, meta),
    error: (c, m, meta) => emit("error", c, m, meta),
  };
}

export function errMeta(err: unknown): Record<string, unknown> {
  if (err instanceof Error) {
    return { error_name: err.name, error_message: err.message, error_stack: err.stack?.split("\n").slice(0, 6).join(" | ") };
  }
  return { error: String(err) };
}
