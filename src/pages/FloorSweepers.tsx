import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FloorSweepers() {
  return (
    <>
      <PageHero title="Floor Sweepers" subtitle="Walk-behind and ride-on sweepers for every facility." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Keep your facility floors clean and debris-free with industrial floor sweepers from Enzo's. Available in walk-behind and ride-on configurations, our sweepers handle everything from fine dust to large debris across warehouses, manufacturing floors, parking lots and more.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Walk-Behind Sweepers", desc: "Compact and maneuverable for tight spaces, aisles and smaller facilities." },
              { title: "Ride-On Sweepers", desc: "Cover large areas quickly with operator comfort and high-capacity hoppers." },
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
      <CTASection title="Find the Right Sweeper" description="Contact Enzo's today." />
    </>
  );
}
