import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { submitLead } from "@/lib/leadSubmit";
import { toast } from "@/hooks/use-toast";
import { validateEmail } from "@/lib/validateEmail";

interface ReferralFormProps {
  partner: string;
}

export default function ReferralForm({ partner }: ReferralFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const checkEmail = (value: string) => {
    if (!value.trim()) { setEmailError(""); return true; }
    const c = validateEmail(value);
    setEmailError(c.valid ? "" : c.message);
    return c.valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const emailValue = email.trim();
    if (emailValue && !checkEmail(emailValue)) {
      toast({ title: "Invalid email", description: "Please double-check the spelling of your email address.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const result = await submitLead({
      form_name: `Referral - ${partner}`,
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      phone: String(fd.get("phone") || ""),
      email: emailValue,
      request_type: String(fd.get("interest") || ""),
      message: String(fd.get("message") || ""),
      referral_partner: partner,
    });
    setSubmitting(false);
    if (!result.ok) {
      toast({ title: "Submission failed", description: result.error || "Please try again or call us.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      <PageHero title="Partner Referral Contact Form" />
      <section className="py-16">
        <div className="container max-w-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-primary font-heading">Thank You!</h2>
              <p className="mt-4 text-muted-foreground">We've received your information and will be in touch shortly.</p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-muted-foreground">
                You were referred by partner: <strong className="text-foreground">{partner}</strong>. Fill out the form below and our team will reach out.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold mb-1">Name <span className="text-destructive">*</span></label>
                  <input name="name" type="text" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Company</label>
                  <input name="company" type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Phone Number <span className="text-destructive">*</span></label>
                  <input name="phone" type="tel" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input name="email" type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">What are you interested in?</label>
                  <select name="interest" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Pressure Washers</option>
                    <option>Detergents</option>
                    <option>Service & Repair</option>
                    <option>Disinfecting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Additional Info</label>
                  <textarea name="message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <button type="submit" disabled={submitting} className="rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-secondary transition-colors disabled:opacity-60">
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
