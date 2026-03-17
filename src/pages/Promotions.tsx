import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Promotions() {
  return (
    <>
      <PageHero title="Promotions" subtitle="Current deals and promotions on cleaning equipment." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-3">Check Back for Current Promotions</h2>
              <p className="text-muted-foreground">
                Enzo's regularly offers promotions and special pricing on pressure washers, detergents and cleaning equipment. Contact our sales team to ask about current deals and package pricing, or check back here for updated offers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Ask About Current Deals" description="Contact Enzo's to learn about current promotions and special pricing." />
    </>
  );
}
