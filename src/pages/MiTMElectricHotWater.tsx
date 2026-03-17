import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function MiTMElectricHotWater() {
  return (
    <>
      <PageHero title="Mi-T-M Electric Hot Water" subtitle="Same power and performance as traditional fuel units with portability for enclosed and outdoor cleaning." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Mi-T-M electric hot water pressure washers offer the same power and performance as traditional fuel units, but offer portability and utility for enclosed and outdoor cleaning jobs. Ideal for wash bays, food processing, and any indoor operation requiring hot water cleaning power without exhaust fumes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 bg-card rounded-xl border border-border p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-xl mb-3">Contact Us for Available Models</h3>
              <p className="text-muted-foreground">Our team can help you find the perfect electric hot water Mi-T-M for your specific application.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Contact Enzo's today." />
    </>
  );
}
