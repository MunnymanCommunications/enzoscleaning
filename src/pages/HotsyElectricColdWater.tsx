import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function HotsyElectricColdWater() {
  return (
    <>
      <PageHero
        title="Hotsy Electric Cold Water"
        subtitle="Plug and play convenience with Hotsy electric cold water pressure washers."
      />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Plug and play – or clean – with the convenience of an electric cold water Hotsy pressure washer. Perfect for indoor cleaning operations where hot water isn't necessary but commercial-grade power is required. Contact Enzo's today for help finding the right machine for your needs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 bg-card rounded-xl border border-border p-8 text-center">
              <h3 className="font-heading font-bold text-xl mb-3">Contact Us for Available Models</h3>
              <p className="text-muted-foreground mb-4">Our team can help you find the perfect electric cold water Hotsy for your specific application and budget.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Contact Enzo's today." />
    </>
  );
}
