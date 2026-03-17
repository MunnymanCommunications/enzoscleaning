import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ResidentialConsumerColdwater() {
  return (
    <>
      <PageHero title="Residential Consumer Cold Water" subtitle="Home-grade cold water pressure washers for residential use." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Keep your home, driveway, deck and outdoor spaces clean with residential cold water pressure washers. These consumer-friendly units are easy to set up and use, providing reliable cleaning power for homeowners. Perfect for cars, boats, patios, siding and more.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find a Residential Washer" description="Contact Enzo's for home pressure washer options." />
    </>
  );
}
