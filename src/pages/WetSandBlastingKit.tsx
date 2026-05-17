import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function WetSandBlastingKit() {
  return (
    <>
      <PageHero title="Wet Sand Blasting Kit" subtitle="Maximum cleaning power with dustless sandblasting capabilities." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-lg bg-muted">
              <img
                src="/uploads/accessories/wet-sand-blasting-kit.jpg"
                alt="Wet sandblasting kit attachment for pressure washers — lance, hose, abrasive pickup tube and clamps for dustless surface prep at Enzo's Cleaning Systems in Ohio"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Take your pressure washer to the next level with a wet sandblasting kit. Combine the power of high-pressure water with abrasive media for the ultimate surface prep tool. Remove paint, rust, scale, and stubborn coatings with dustless sandblasting — safer and cleaner than dry methods.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Dustless Operation", desc: "Water suppresses dust, making it safer for operators and the environment." },
              { title: "Surface Prep", desc: "Perfect for removing paint, rust and scale from metal, concrete and wood." },
              { title: "Easy Setup", desc: "Attaches to your existing pressure washer lance in minutes." },
              { title: "Versatile Media", desc: "Use with various abrasive media for different applications and surfaces." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Get a Wet Sand Blasting Kit" description="Contact Enzo's today." />
    </>
  );
}
