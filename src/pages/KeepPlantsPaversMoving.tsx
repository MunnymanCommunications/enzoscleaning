import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function KeepPlantsPaversMoving() {
  return (
    <>
      <PageHero title="Keep Plants & Pavers Moving" subtitle="Remove asphalt buildup without removing uptime." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Asphalt plants and paving operations can't afford downtime. Enzo's specialized cleaning solutions remove asphalt, tar and bitumen buildup from equipment quickly — so you can keep paving without losing productivity. Our products are designed to work fast while being safe for your equipment.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Fast Asphalt Removal", desc: "Dissolve asphalt buildup in minutes, not hours." },
              { title: "Equipment Safe", desc: "Won't damage paint, seals or rubber components." },
              { title: "Minimize Downtime", desc: "Clean during breaks instead of dedicating full shifts." },
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
      <CTASection title="Keep Moving" description="Contact Enzo's for asphalt plant cleaning solutions." />
    </>
  );
}
