import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function WandsLances() {
  return (
    <>
      <PageHero title="Wands & Lances" subtitle="Several lines from Mecline, HPC, Suttner, General Pump and more." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The right wand or lance gives you the reach, control and pressure you need for effective cleaning. Enzo's carries wands and lances from top manufacturers including Mecline, HPC, Suttner, and General Pump — available in various lengths, materials and pressure ratings.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Variable Pressure", desc: "Adjustable wands let you dial in the exact pressure for each surface." },
              { title: "Extended Reach", desc: "Long lances for cleaning tall vehicles, buildings, and hard-to-reach areas." },
              { title: "Insulated Options", desc: "Insulated wands for hot water pressure washers to protect operators." },
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
      <CTASection title="Find the Right Wand" description="Contact Enzo's for the right wand or lance for your pressure washer." />
    </>
  );
}
