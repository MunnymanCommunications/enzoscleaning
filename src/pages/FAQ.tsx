import { useLocation } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  { q: "What types of pressure washers do you carry?", a: "We carry both hot water and cold water pressure washers from Hotsy and Mi-T-M. Options include electric, gasoline, diesel and natural gas powered models." },
  { q: "Do you offer service and repair?", a: "Yes! Our factory-trained technicians service all major brands of pressure washers. We offer both on-site and in-shop repairs plus scheduled maintenance programs." },
  { q: "Can you help design a wash bay?", a: "Absolutely. Our team provides free consultations and custom wash bay design services — from equipment selection to layout and installation." },
  { q: "What detergents do you recommend?", a: "It depends on your application. We carry degreasers, truck wash detergents, construction cleaners, salt neutralizers and specialty products. Contact us for a recommendation." },
  { q: "Do you serve my area?", a: "We serve customers across Ohio, the Northeast and Midwest. Contact us to confirm service availability in your area." },
  { q: "What is The Neutralizer?", a: "The Neutralizer is our proprietary undercarriage salt neutralizing system designed to fight corrosion from road salt and brine. It's a drive-over system that works with your existing pressure washer." },
  { q: "Do you offer financing?", a: "We can discuss financing options for equipment purchases. Contact our sales team for details." },
  { q: "How do I schedule a consultation?", a: "Call us at 419-502-0007 or fill out our contact form. Consultations are always free." },
];

export default function FAQ() {
  const { pathname } = useLocation();
  const isOta = pathname.startsWith("/ota");
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Answers to common questions about our products and services." />
      <section className="pt-16">
        <div className="container max-w-3xl flex justify-center">
          <img
            src="/uploads/enzos-cleaning-solutions-logo-faq.jpg"
            alt="Enzo's Cleaning Solutions logo with tagline 'If You Have A Need We Have The Solution' — FAQ about industrial pressure washers, detergents and wash bay equipment in Sandusky, Ohio"
            className="h-auto w-full max-w-xl object-contain"
            loading="lazy"
          />
        </div>
      </section>
      <section className="section-padding">
        <div className="container max-w-3xl">
          {isOta && (
            <AnimatedSection className="mb-10 flex justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
              <img
                src="/uploads/enzos-logo-stem-tagline.jpg"
                alt="Enzo's Cleaning Solutions logo with tagline 'If You Have A Need We Have The Solution' — Ohio pressure washer, detergent and wash bay supplier"
                className="h-auto w-full max-w-xl object-contain"
                loading="lazy"
              />
            </AnimatedSection>
          )}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Still Have Questions?" description="Contact Enzo's and our team will be happy to help." />
    </>
  );
}
