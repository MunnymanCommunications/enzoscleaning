import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function KarcherFloorCleaners() {
  return (
    <>
      <PageHero title="Kärcher Floor Cleaners" subtitle="Industry-leading Kärcher floor cleaning machines." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2020/11/download-1.png" alt="Kärcher Logo" className="h-14 object-contain" loading="lazy" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Kärcher is the world's leading provider of cleaning technology. Their commercial floor cleaning equipment — from compact scrubbers to large ride-on sweepers — delivers exceptional cleaning performance with German engineering quality. Find Kärcher floor cleaners at Enzo's.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Shop Kärcher" description="Contact Enzo's for Kärcher floor cleaning equipment and pricing." />
    </>
  );
}
