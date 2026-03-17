import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function SurfaceCleaners() {
  return (
    <>
      <PageHero title="Surface Cleaners" subtitle="Blast away dirt from walkways, shop floors and other surfaces." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Keep your working surfaces, warehouse floors, sidewalks and other spaces clean and clear with surface cleaners from Enzo's. Designed to make quick work of dirt, grime, gum and other substances, you'll have any surface clean and clear in no time. Surface cleaners attach to your pressure washer and provide uniform cleaning with less fatigue.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Faster Coverage", desc: "Clean 4x faster than a standard nozzle with even, consistent coverage." },
              { title: "Streak-Free Results", desc: "Rotating bars eliminate streaking for a professional finish every time." },
              { title: "Multiple Sizes", desc: "Available in various diameters to match your pressure washer's GPM rating." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <h3 className="font-heading font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Surface Cleaner" description="Contact Enzo's today." />
    </>
  );
}
