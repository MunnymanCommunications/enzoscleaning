import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ImplementationInHospitals() {
  return (
    <>
      <PageHero title="Implementation in Hospitals" subtitle="Seamless implementation of cleaning and hygiene protocols." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Implementing a new hygiene protocol across a healthcare facility requires careful planning, staff buy-in, and the right equipment. Enzo's works with your team to design, deploy and validate cleaning systems that integrate seamlessly into your existing workflows — minimizing disruption while maximizing infection control.
            </p>
          </AnimatedSection>
          <div className="mt-10 space-y-4">
            {[
              { step: "1", title: "Assessment", desc: "We evaluate your current protocols, identify gaps, and recommend improvements." },
              { step: "2", title: "Equipment Selection", desc: "We match the right dispensers, sprayers and cleaning products to your facility's needs." },
              { step: "3", title: "Installation", desc: "Professional installation with minimal disruption to patient care operations." },
              { step: "4", title: "Training", desc: "Hands-on training for all staff levels on new equipment and protocols." },
              { step: "5", title: "Ongoing Support", desc: "Regular check-ins, restocking and protocol refinement based on compliance data." },
            ].map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-heading font-bold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Start Your Implementation" description="Contact Enzo's to begin your hospital hygiene upgrade." />
    </>
  );
}
