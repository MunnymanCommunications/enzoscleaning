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
                <img src="/uploads/sprayers/hurricane-push-undercarriage-deluxe-1.png" alt="Hurricane Push Under Carriage Deluxe 1 — stainless steel rotary undercarriage pressure washer with dual trigger guns and pneumatic wheels for fleet vehicle cleaning at Enzo's Cleaning Systems in Ohio" className="w-full aspect-square object-contain p-4" loading="lazy" />
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold">Push Under Carriage Deluxe 1</h3>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link to="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/uploads/2020/11/80.617_HURp-520-7889-US.jpg" alt="Push Under Carriage Deluxe 2" className="w-full aspect-square object-contain p-4" loading="lazy" />
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold">Push Under Carriage Deluxe 2</h3>
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
