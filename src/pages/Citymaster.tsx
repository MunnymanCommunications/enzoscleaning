import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Citymaster() {
  return (
    <>
      <PageHero title="Citymaster" subtitle="Professional-grade sweeping solutions for municipalities." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The Citymaster lineup from Hako provides municipalities and commercial property managers with year-round outdoor cleaning solutions. From summer sweeping to winter snow management, these multifunction machines keep your community clean and safe.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Explore Citymaster" description="Contact Enzo's for Citymaster information." />
    </>
  );
}
