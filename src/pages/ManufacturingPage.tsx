import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Manufacturing() {
  return (
    <>
      <PageHero title="Manufacturing" subtitle="Keep production lines working safely and efficiently." />
      <section className="pt-12">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <img
              src="/uploads/school-bus-fleet-manufacturing.jpg"
              alt="Fleet of yellow school buses lined up at a manufacturing facility, cleaned and maintained with Enzo's Cleaning Solutions industrial pressure washers and detergents"
              className="w-full h-auto rounded-2xl border border-border shadow-sm"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Keeping equipment clean and production lines moving is a challenge for industrial and manufacturing industries with automation, moving parts, and confined spaces. Manufacturers can't afford to be offline — not for a day, not for a shift, not even for an hour. Enzo's will find you the right equipment to keep you CLEAN.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Pressure Washers", desc: "Remove grit and grime from cracks and crevices in hard-to-reach spaces, quickly and efficiently." },
              { title: "Floor Sweepers & Scrubbers", desc: "Deep-clean product floors and loading docks, reducing liability for slips and falls." },
              { title: "Degreasers", desc: "Industrial-strength degreasers for machinery, equipment and production areas." },
              { title: "Disinfecting Solutions", desc: "Maintain hygiene standards in food processing, pharmaceutical and clean manufacturing." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Schedule a Free Consultation" description="Our representatives can show you what Enzo's can do for your manufacturing operation." />
    </>
  );
}
