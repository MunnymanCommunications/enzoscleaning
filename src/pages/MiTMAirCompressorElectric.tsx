import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function MiTMAirCompressorElectric() {
  return (
    <>
      <PageHero title="Mi-T-M Electric Air Compressors" subtitle="Electric air compressors for shop, facility and wash bay operations." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Mi-T-M electric air compressors provide quiet, reliable compressed air for indoor operations. Perfect for shops, wash bays, and manufacturing facilities where exhaust-free operation is essential. Available in a range of sizes and capacities.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["Quiet Indoor Operation", "No Exhaust Fumes", "Multiple Tank Sizes"].map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Air Compressor" description="Contact Enzo's today for help selecting the right electric air compressor." />
    </>
  );
}
