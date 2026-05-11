import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function WandsLances() {
  return (
    <>
      <PageHero title="Wands & Lances" subtitle="Several lines from Mecline, HPC, Suttner, General Pump and more." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The right wand or lance gives you the reach, control and pressure you need for effective cleaning. Enzo's carries wands and lances from top manufacturers including Mecline, HPC, Suttner, and General Pump — available in various lengths, materials and pressure ratings.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Variable Pressure", desc: "Adjustable wands let you dial in the exact pressure for each surface." },
              { title: "Extended Reach", desc: "Long lances for cleaning tall vehicles, buildings, and hard-to-reach areas." },
              { title: "Insulated Options", desc: "Insulated wands for hot water pressure washers to protect operators." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-5 text-center">
                  <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <h2 className="text-2xl font-heading font-bold text-center">Wands & Lances Catalog</h2>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Browse the full lineup of guns, lances, extensions, telescopic poles and replacement parts. Contact Enzo's with the part number you need.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {[
                  { src: "/uploads/lances/lances-catalog-1.jpg", alt: "Lances catalog page 1 — Gun/lance combos, MV2009, ST-1500, Hobby Hose Kits, RLW40 Dump Gun, HPC Lance Extender, Wand Saver, Mecline & HPC molded grips" },
                  { src: "/uploads/lances/lances-catalog-2.jpg", alt: "Lances catalog page 2 — Suttner steel dual lance, stainless steel lances, dual lance with trigger, push & pull lance, telescopic poles, bendable wands, Spray-Flex, gutter cleaner" },
                ].map((img) => (
                  <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" className="block group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full rounded-xl border border-border shadow-md group-hover:shadow-lg transition-shadow"
                      loading="lazy"
                    />
                    <p className="text-xs text-center text-muted-foreground mt-2 group-hover:text-primary transition-colors">Click to view full size</p>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Find the Right Wand" description="Contact Enzo's for the right wand or lance for your pressure washer." />
    </>
  );
}
