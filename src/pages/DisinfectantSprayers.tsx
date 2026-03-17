import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DisinfectantSprayers() {
  return (
    <>
      <PageHero title="Disinfectant Sprayers" subtitle="Efficient sprayers for faster application and more coverage." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Apply disinfectants and sanitizers quickly and efficiently with professional-grade sprayers from Enzo's. From electrostatic sprayers that wrap surfaces in disinfectant to backpack sprayers for large area coverage, we have the application equipment you need for effective disinfection.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Electrostatic Sprayers", desc: "Electrically charged droplets wrap around surfaces for complete coverage — even hard-to-reach areas." },
              { title: "Backpack Sprayers", desc: "Large-capacity portable sprayers for covering gyms, classrooms and open areas quickly." },
              { title: "Handheld Sprayers", desc: "Compact sprayers for targeted application on high-touch surfaces and small spaces." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Get the Right Sprayer" description="Contact Enzo's for disinfectant sprayers and application equipment." />
    </>
  );
}
