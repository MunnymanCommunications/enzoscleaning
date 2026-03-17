import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TrainingComplianceSupport() {
  return (
    <>
      <PageHero title="Training & Compliance Support" subtitle="Training programs and compliance tracking for healthcare teams." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Even the best equipment is only as effective as the people using it. Enzo's training and compliance programs ensure your team follows proper cleaning and disinfection protocols consistently. We provide on-site training, documentation support, and ongoing compliance monitoring.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "On-Site Training", desc: "Hands-on training sessions for custodial staff, nurses and facility managers." },
              { title: "Protocol Documentation", desc: "Written procedures and quick-reference guides for every area of your facility." },
              { title: "Compliance Audits", desc: "Regular assessments to ensure protocols are being followed correctly." },
              { title: "Continuing Education", desc: "Updated training when new products or regulations are introduced." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Improve Compliance" description="Contact Enzo's for training and compliance support." />
    </>
  );
}
