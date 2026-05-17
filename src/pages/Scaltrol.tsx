import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Scaltrol() {
  return (
    <>
      <PageHero title="Scaltrol" subtitle="Descaling filters designed for hot water pressure washers." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="mb-10 flex justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
              <img
                src="/uploads/accessories/scaltrol-logo.jpg"
                alt="Scaltrol logo — The Clear Choice in Water Treatment, descaling and scale-prevention filters for hot water pressure washers available at Enzo's Cleaning Systems in Ohio"
                className="max-h-32 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Hard water scale buildup is one of the biggest threats to your hot water pressure washer's heating coil. Scaltrol water treatment systems prevent mineral scale deposits before they form, extending the life of your equipment and reducing costly repairs. Essential protection for any hot water cleaning operation.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Prevents Scale Buildup", desc: "Treats water before it enters the heating coil to stop scale formation." },
              { title: "Extends Equipment Life", desc: "Protects your coil investment and reduces downtime from scale-related failures." },
              { title: "Easy Cartridge Replacement", desc: "Simple cartridge-based system — replace as needed with no tools." },
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
      <CTASection title="Protect Your Equipment" description="Contact Enzo's for Scaltrol filters and installation." />
    </>
  );
}
