// Shared email validator used by every form on the site.
// Strict enough to catch obvious typos (missing TLD, stray spaces, double @,
// trailing dot) while staying friendly enough not to reject legitimate
// addresses. Pair the boolean with the message so forms can show the same
// "double-check spelling" hint everywhere.

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const EMAIL_INVALID_MESSAGE =
  "Please enter a valid email address — double-check spelling (e.g. name@company.com).";

export interface EmailCheck {
  valid: boolean;
  message: string;
}

export function validateEmail(raw: string | null | undefined): EmailCheck {
  const email = (raw ?? "").trim();
  if (!email) return { valid: false, message: "Please enter your email address." };
  if (email.length > 254) return { valid: false, message: "Email is too long." };
  if (email.includes("..")) return { valid: false, message: EMAIL_INVALID_MESSAGE };
  if ((email.match(/@/g) || []).length !== 1) return { valid: false, message: EMAIL_INVALID_MESSAGE };
  if (!EMAIL_RE.test(email)) return { valid: false, message: EMAIL_INVALID_MESSAGE };
  return { valid: true, message: "" };
}

export function isValidEmail(raw: string | null | undefined): boolean {
  return validateEmail(raw).valid;
}
