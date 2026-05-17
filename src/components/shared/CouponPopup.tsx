import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import { submitLead } from "@/lib/leadSubmit";
import { toast } from "@/hooks/use-toast";

const SESSION_KEY = "enzos_coupon_popup_seen";
const COUPON_CODE = "10%ENZOS";

export default function CouponPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (!form.phone.trim()) {
      toast({ title: "Phone required", description: "Please enter your phone number.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await submitLead({
        form_name: "10% Off Coupon Popup",
        name: form.name,
        email: form.email,
        phone: form.phone,
        request_type: "Coupon Request",
        message: `Requested 10% off coupon code: ${COUPON_CODE}`,
        extra: { coupon_code: COUPON_CODE, send_coupon_email: true },
      });
      sessionStorage.setItem(SESSION_KEY, "1");
      setSubmitted(true);
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/40 bg-white/60 backdrop-blur-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-300"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55))" }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 rounded-full p-1 text-foreground/70 hover:text-foreground hover:bg-white/40 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-center text-3xl font-bold text-foreground leading-tight mb-6">
              Earn 10% Off Your<br />Entire Purchase!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/60 bg-white/50 backdrop-blur px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="email"
                required
                placeholder="Your Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/60 bg-white/50 backdrop-blur px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-white/60 bg-white/50 backdrop-blur px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-6 py-4 font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Get My Code"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-2">
            <h2 className="text-3xl font-bold text-foreground mb-3">Earn 10% Off!</h2>
            <p className="text-muted-foreground mb-4">Use this code at checkout or mention it when you call:</p>
            <div className="rounded-2xl border-2 border-dashed border-primary/50 bg-white/60 px-6 py-5 mb-6">
              <div className="text-3xl font-bold tracking-wider text-primary">{COUPON_CODE}</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">We've also emailed your code. Call Tim to redeem:</p>
            <a
              href="tel:4195020007"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-6 py-4 font-bold text-white shadow-lg hover:shadow-xl transition"
            >
              <Phone className="h-5 w-5" /> Call Tim: 419-502-0007
            </a>
            <button onClick={close} className="mt-4 text-sm text-muted-foreground hover:text-foreground transition">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
