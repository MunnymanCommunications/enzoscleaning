import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ElectricHotWater() {
  return (
    <>
      <PageHero title="Electric Hot Water" subtitle="Electric-powered hot water pressure washers for indoor and enclosed operations." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Electric hot water pressure washers are perfect for indoor operations where exhaust fumes aren't an option. These units combine the grease-cutting power of hot water with the convenience and quiet operation of electric motors. Ideal for food processing, manufacturing and wash bay applications.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find the Right Unit" description="Contact Enzo's for electric hot water pressure washers." />
    </>
  );
}
