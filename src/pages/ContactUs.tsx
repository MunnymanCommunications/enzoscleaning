import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import { submitLead } from "@/lib/leadSubmit";
import { toast } from "@/hooks/use-toast";

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const productContext = searchParams.get("product") || "";
  const categoryContext = searchParams.get("category") || "";
  const prefilledType = searchParams.get("type") || "Service";
  const [submitting, setSubmitting] = useState(false);

  const contextLabel = productContext || categoryContext || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    if (!phone) {
      toast({ title: "Phone required", description: "Please enter your phone number.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const result = await submitLead({
      form_name: "Contact Us",
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      phone,
      email,
      request_type: String(fd.get("request_type") || ""),
      message: String(fd.get("message") || ""),
      product_context: productContext,
      category_context: categoryContext,
    });
    setSubmitting(false);
    if (!result.ok) {
      toast({ title: "Submission failed", description: result.error || "Please try again or call us.", variant: "destructive" });
    } else {
      toast({ title: "Thanks!", description: "We'll be in touch shortly." });
      formEl.reset();
    }
  };

  return (
    <>
      <PageHero title="Get in Touch" />

      <div className="container pt-12 flex justify-center">
        <img
          src="/uploads/enzos-cleaning-solutions-logo.jpg"
          alt="Enzo's Cleaning Solutions logo - If You Have A Need We Have The Solution - industrial pressure washers, detergents, and cleaning equipment in Sandusky, Ohio"
          className="max-w-md w-full h-auto"
          loading="lazy"
        />
      </div>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Video + Info */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Q7NNNgEGjv8"
                  title="Enzo's Home Office"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold">2003 Superior St.</p>
                    <p>Sandusky, OH 44870</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:4195020007" className="text-2xl font-bold text-primary hover:underline">419-502-0007</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p>M-F: 7:30am – 4pm</p>
                    <p>Sat: By appointment</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold">
                {productContext ? `Get a Quote: ${productContext}` : "Contact Us!"}
              </h2>
              {contextLabel && (
                <p className="mt-2 text-sm text-muted-foreground">
                  You're inquiring about: <strong className="text-foreground">{contextLabel}</strong>
                </p>
              )}
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold mb-1">Name</label>
                  <input name="name" type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
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
                  <label className="block text-sm font-semibold mb-1">Request Type</label>
                  <select name="request_type" defaultValue={prefilledType} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Service</option>
                    <option>Get a Quote</option>
                    <option>Unit</option>
                    <option>Chemicals</option>
                    <option>Training</option>
                  </select>
                </div>
                {contextLabel && (
                  <div>
                    <label className="block text-sm font-semibold mb-1">Product / Category Interest</label>
                    <input type="text" readOnly value={contextLabel} className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold mb-1">Additional Info</label>
                  <textarea name="message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <button type="submit" disabled={submitting} className="rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-secondary transition-colors disabled:opacity-60">
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
