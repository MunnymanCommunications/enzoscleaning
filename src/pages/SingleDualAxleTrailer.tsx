import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function SingleDualAxleTrailer() {
  return (
    <>
      <PageHero title="Single & Dual Axle Trailers" subtitle="Mobile cleaning rigs on single and dual axle platforms." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Take your cleaning power on the road with trailer-mounted pressure washer systems from Enzo's. Available in single and dual axle configurations, our trailer units come equipped with water tanks, hose reels and your choice of hot or cold water pressure washers — everything you need for mobile cleaning operations.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Single Axle", desc: "Compact and easy to tow with a standard pickup. Perfect for smaller operations and tight job sites." },
              { title: "Dual Axle", desc: "Higher capacity with larger water tanks and heavier-duty pressure washers for commercial and industrial cleaning." },
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
      <CTASection title="Build Your Mobile Rig" description="Contact Enzo's for trailer-mounted pressure washer systems." />
    </>
  );
}
