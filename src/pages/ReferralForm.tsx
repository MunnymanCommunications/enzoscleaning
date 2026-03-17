import { useState } from "react";
import PageHero from "@/components/shared/PageHero";

interface ReferralFormProps {
  partner: string;
}

export default function ReferralForm({ partner }: ReferralFormProps) {
  const [submitted, setSubmitted] = useState(false);

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
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input type="hidden" name="referral_partner" value={partner} />
                <div>
                  <label className="block text-sm font-semibold mb-1">Name <span className="text-destructive">*</span></label>
                  <input type="text" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Company</label>
                  <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Phone Number <span className="text-destructive">*</span></label>
                  <input type="tel" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">What are you interested in?</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Pressure Washers</option>
                    <option>Detergents</option>
                    <option>Service & Repair</option>
                    <option>Disinfecting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Additional Info</label>
                  <textarea rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <button type="submit" className="rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-secondary transition-colors">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
