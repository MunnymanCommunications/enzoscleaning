import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function RoadConstructionExcavating() {
  return (
    <>
      <PageHero title="Solutions for Road Construction & Excavating" subtitle="Heavy-duty cleaning for road construction and excavation equipment." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Road construction and excavating equipment gets buried in asphalt, tar, concrete and heavy soil every day. Enzo's offers specialized degreasers, tar removers and high-powered pressure washers designed to handle the toughest construction soils — keeping your equipment clean, safe, and ready to work.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Tar & Asphalt Removal", desc: "EZ Melt and C-Tar Melt dissolve asphalt and tar quickly and safely." },
              { title: "Concrete Removal", desc: "EZ Punch-Out and Chisel dissolve cured concrete without damaging surfaces." },
              { title: "Heavy Degreasing", desc: "Remove hydraulic fluid, fuel and grease from engines and equipment." },
              { title: "Undercarriage Cleaning", desc: "The Neutralizer system fights corrosion from road salt and brine." },
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
      <CTASection title="Get the Right Equipment" description="Contact Enzo's for road construction cleaning solutions." />
    </>
  );
}
