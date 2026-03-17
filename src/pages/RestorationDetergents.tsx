import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const detergents = [
  { name: "EZ Renew", desc: "Restores appearance of brick, glass, concrete and stone surfaces." },
  { name: "EZ Restore", desc: "Removes efflorescence, mineral deposits and staining from masonry." },
  { name: "Graffiti Remover", desc: "Safely removes spray paint and graffiti from most surfaces without damage." },
  { name: "Concrete Cleaner", desc: "Heavy-duty formula for oil, grease and tire marks on concrete." },
];

export default function RestorationDetergents() {
  return (
    <>
      <PageHero title="Restoration Detergents" subtitle="Rejuvenate worn surfaces like brick, glass and concrete." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Enzo's restoration detergents are specifically formulated to rejuvenate and restore the appearance of building surfaces. Whether you're cleaning brick facades, removing efflorescence from concrete, or restoring glass clarity, our chemistries deliver professional results.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {detergents.map((d, i) => (
              <AnimatedSection key={d.name} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-bold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Restore Your Surfaces" description="Contact Enzo's for the right restoration detergent." />
    </>
  );
}
