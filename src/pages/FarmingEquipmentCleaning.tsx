import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FarmingEquipmentCleaning() {
  return (
    <>
      <PageHero title="Farming Equipment Cleaning" subtitle="Protect your farming investment with proper cleaning." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Farming equipment faces constant exposure to soil, fertilizers, herbicides, and the elements. Regular cleaning prevents corrosion, extends equipment life, and helps you spot maintenance issues before they become costly breakdowns. Enzo's has the pressure washers, detergents and expertise to keep your farm equipment running strong.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Schedule a Free Consultation" description="Let Enzo's help you protect your farming equipment." />
    </>
  );
}
