import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CitymasterSweeper() {
  return (
    <>
      <PageHero title="Citymaster 1650/650 Multifunction Sweeper" subtitle="Municipal-grade multifunction sweeping equipment." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The Hako Citymaster series offers compact, maneuverable multifunction sweepers designed for municipal and commercial applications. With interchangeable attachments for sweeping, snow removal and more, the Citymaster is a year-round workhorse for keeping your facilities and streets clean.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Citymaster 1650", desc: "Full-size ride-on sweeper for large areas — parking lots, streets and campus grounds." },
              { title: "Citymaster 650", desc: "Compact sweeper perfect for sidewalks, pedestrian zones and tight spaces." },
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
      <CTASection title="Get a Citymaster" description="Contact Enzo's for Citymaster sweeper information and pricing." />
    </>
  );
}
