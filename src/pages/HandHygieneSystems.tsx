import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function HandHygieneSystems() {
  return (
    <>
      <PageHero title="Hand Hygiene Systems" subtitle="Advanced hand hygiene dispensing and monitoring systems." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Proper hand hygiene is the single most effective way to prevent the spread of infection in healthcare settings. Enzo's hand hygiene systems include touchless dispensers, compliance monitoring technology, and the right sanitizing solutions to keep staff and patients safe.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Touchless Dispensers", desc: "Automatic dispensing reduces cross-contamination." },
              { title: "Compliance Monitoring", desc: "Electronic tracking ensures hand hygiene protocol adherence." },
              { title: "Sanitizing Solutions", desc: "Hospital-grade hand sanitizers and soaps." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Upgrade Your Hand Hygiene" description="Contact Enzo's for hand hygiene systems." />
    </>
  );
}
