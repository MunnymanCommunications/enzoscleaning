import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FloorScrubbers() {
  return (
    <>
      <PageHero title="Floor Scrubbers" subtitle="Deep-clean hard floors with powerful scrubbing machines." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Floor scrubbers deliver a deep clean that sweeping and mopping can't match. Our walk-behind and ride-on scrubbers scrub, wash and dry floors in a single pass — leaving them spotless, safe and dry. Perfect for warehouses, manufacturing plants, retail spaces, and healthcare facilities.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Walk-Behind Scrubbers", desc: "Compact scrubbing power for offices, retail and smaller facilities." },
              { title: "Ride-On Scrubbers", desc: "High-productivity scrubbing for large warehouses, plants and distribution centers." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Scrubber" description="Contact Enzo's today." />
    </>
  );
}
