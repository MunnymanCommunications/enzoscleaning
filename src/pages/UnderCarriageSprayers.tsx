import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function UnderCarriageSprayers() {
  return (
    <>
      <PageHero title="Under Carriage Sprayers" subtitle="Effective and efficient cleaning equipment for underneath your vehicles." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Enzo's Push Under Spray Cleaners provide effective and efficient undercarriage cleaning for fleets and vehicles of all sizes. These units neutralize salt and corrosion damage, extending the life of your equipment. The undercarriage sprayer is also a key component of our complete wash bay systems.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <img src="/uploads/2020/11/80.618_HURpz-520-002.jpg" alt="Mosmatic Hurricane" className="w-full aspect-square object-contain p-4" loading="lazy" />
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold">Mosmatic Hurricane</h3>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/uploads/2020/11/80.617_HURp-520-7889-US.jpg" alt="Hurricane Undercarriage" className="w-full aspect-square object-contain p-4" loading="lazy" />
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold">The Neutralizer System</h3>
                  <p className="text-sm text-primary mt-1">Learn More →</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <CTASection title="If You Have a Need, We Have the Solution" description="Get the cleaning power you need. Contact Enzo's today." />
    </>
  );
}
