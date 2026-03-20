import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function HotsyGasolineColdWater() {
  return (
    <>
      <PageHero
        title="Hotsy Gasoline Cold Water"
        subtitle="Portability for cleaning on the go with gas-powered cold water machines."
      />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2024/09/hotsy-logo.png" alt="Hotsy Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Enjoy portability for your cleaning needs on the go with a gas-powered cold water Hotsy pressure washer. Perfect for road jobs or use in a mobile cleaning vehicle. No electrical outlet needed — just fuel up and go. Get your next pressure washer at Enzo's.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 bg-card rounded-xl border border-border p-8 text-center">
              <h3 className="font-heading font-bold text-xl mb-3">Contact Us for Available Models</h3>
              <p className="text-muted-foreground mb-4">Our team can match you with the right gasoline cold water Hotsy for your mobile cleaning needs.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find the Right Pressure Washer" description="Get the cleaning power you need. Contact Enzo's today." />
    </>
  );
}
