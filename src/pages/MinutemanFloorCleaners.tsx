import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function MinutemanFloorCleaners() {
  return (
    <>
      <PageHero title="Minuteman Floor Cleaners" subtitle="Reliable Minuteman floor cleaning equipment built to last." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2020/11/minuteman-logoLarge.png" alt="Minuteman Logo" className="h-14 object-contain" loading="lazy" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Minuteman International has been manufacturing commercial cleaning equipment since 1951. Their floor scrubbers, sweepers, and burnishers are designed for reliability, ease of use, and consistent performance. Find Minuteman floor cleaning solutions at Enzo's.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Shop Minuteman" description="Contact Enzo's for Minuteman floor cleaning equipment and pricing." />
    </>
  );
}
