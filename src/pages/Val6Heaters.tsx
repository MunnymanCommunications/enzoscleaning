import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Val6Heaters() {
  return (
    <>
      <PageHero title="Val 6 Heaters" subtitle="Warm up any work space and keep working no matter the season." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2020/11/Outlook-5ehznszt.png" alt="VAL6 Logo" className="h-14 object-contain" loading="lazy" />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Don't let cold weather slow you down. With heating systems from VAL6, you can warm up any work space and keep working no matter the season. Find the portable heating equipment you need at Enzo's today. VAL6 infrared heaters provide instant, efficient heat for shops, wash bays, garages and outdoor work areas.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Instant Heat", desc: "Infrared technology provides warmth immediately — no waiting." },
              { title: "Fuel Efficient", desc: "Uses less fuel than forced-air heaters while heating more effectively." },
              { title: "Portable", desc: "Easy to move between job sites, shops and work areas." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find the Right Heater" description="Contact Enzo's for VAL6 heaters and all available models." />
    </>
  );
}
