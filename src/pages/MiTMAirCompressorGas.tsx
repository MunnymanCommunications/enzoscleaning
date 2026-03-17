import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function MiTMAirCompressorGas() {
  return (
    <>
      <PageHero title="Mi-T-M Gas Air Compressors" subtitle="Gas-powered air compressors for industrial, construction and mobile applications." />
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="https://enzoscleaning.com/wp-content/uploads/2024/09/Mi-T-M-Logo.png" alt="Mi-T-M Logo" className="h-14" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Mi-T-M's line of gasoline-powered air compressors deliver reliable compressed air wherever you need it — no electrical outlet required. Built for construction sites, farms, and mobile applications with the same rugged quality you expect from Mi-T-M.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["Portable & Lightweight", "No Electrical Outlet Needed", "Commercial-Grade Performance"].map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Air Compressor" description="Contact Enzo's today for help selecting the right Mi-T-M air compressor." />
    </>
  );
}
