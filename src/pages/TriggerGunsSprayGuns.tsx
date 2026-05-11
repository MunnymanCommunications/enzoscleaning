import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TriggerGunsSprayGuns() {
  return (
    <>
      <PageHero title="Trigger Guns & Spray Guns" subtitle="Full range of trigger guns and spray guns for powerful performance." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Enzo's stocks a full range of trigger guns and spray guns to help deliver the powerful performance you need to get things clean. Whether you need a standard trigger gun or a specialized spray gun for chemical application, we have options from top manufacturers to match your pressure washer setup.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { title: "Trigger Guns", desc: "Standard and high-flow trigger guns rated for various PSI ranges. Easy-pull designs reduce operator fatigue." },
              { title: "Spray Guns", desc: "Chemical-resistant spray guns for detergent and disinfectant application. Built for daily use in demanding environments." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <h2 className="text-2xl font-heading font-bold text-center">Spray Guns Catalog</h2>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Browse the full spray gun lineup including connectors, couplers, plugs and full models from Suttner, HPC, MTM, General Pump, Giant and more. Contact Enzo's with the part number you need.
              </p>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: "/uploads/spray-guns/spray-guns-catalog-1.jpg", alt: "Spray Guns catalog page 1 — 22mm connectors, ST40 couplers, ST41 plugs, Blue Swivel, MTM 407, HPC 740, ST-1100, ST-810, MV925 Karcher style, 5030 Gun" },
                  { src: "/uploads/spray-guns/spray-guns-catalog-2.jpg", alt: "Spray Guns catalog page 2 — Suttner ST-1500H Open Gun, ST-1500 Top Seller, ST-1500W Weep Gun, ST-2000 Big Hand, Giant, ST-2305 Easy Pull, ST-2605 Relax Action, DG5010, YG5000/RL30" },
                  { src: "/uploads/spray-guns/spray-guns-catalog-3.jpg", alt: "Spray Guns catalog page 3 — YG4000/VEGA, Spray Gun w/Swivel, KEW Style Gun, YRL51 Gun, ST-601 Linear Gun, YG4500S Straight, Hi Flow Straight, ST-2720, ST-2700, ST-3600 Stainless Steel" },
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
      <CTASection title="Find the Right Gun" description="Contact Enzo's today for the right trigger gun or spray gun." />
    </>
  );
}
