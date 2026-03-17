import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TriggerGunsSprayGuns() {
  return (
    <>
      <PageHero title="Trigger Guns & Spray Guns" subtitle="Full range of trigger guns and spray guns for powerful performance." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Enzo's stocks a full range of trigger guns and spray guns to help deliver the powerful performance you need to get things clean. Whether you need a standard trigger gun or a specialized spray gun for chemical application, we have options from top manufacturers to match your pressure washer setup.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Trigger Guns", desc: "Standard and high-flow trigger guns rated for various PSI ranges. Easy-pull designs reduce operator fatigue." },
              { title: "Spray Guns", desc: "Chemical-resistant spray guns for detergent and disinfectant application. Built for daily use in demanding environments." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Gun" description="Contact Enzo's today for the right trigger gun or spray gun." />
    </>
  );
}
