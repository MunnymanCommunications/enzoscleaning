import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Shield, Droplets, Sparkles, Layers } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Sealers",
    description: "Protect and enhance pavers, concrete, and natural stone with professional-grade sealers that lock in color and repel stains.",
    products: [
      { name: "Hurricane CAT 5", desc: "Premium joint-stabilizing wet-look sealer — the gold standard for paver protection and color enhancement." },
      { name: "Hurricane CAT 4", desc: "High-performance joint-stabilizing sealer with a natural to semi-gloss finish." },
      { name: "Tsunami", desc: "Joint-stabilizing sealer with a wet-look finish — excellent for pavers and stamped concrete." },
      { name: "Typhoon", desc: "Joint-stabilizing sealer with a natural, matte finish that preserves the original look." },
      { name: "Cyclone", desc: "Penetrating joint-stabilizing sealer — invisible protection without changing surface appearance." },
      { name: "Jetty", desc: "Wet-look sealer ideal for concrete, exposed aggregate and natural stone." },
      { name: "Break Wall", desc: "Specialty vertical surface sealer for retaining walls and raised planters." },
      { name: "Sea Wall", desc: "Penetrating sealer for vertical masonry — protects against moisture and efflorescence." },
    ],
  },
  {
    icon: Sparkles,
    title: "Cleaners",
    description: "Deep-clean hardscape surfaces before sealing or as part of regular maintenance with powerful, surface-safe formulas.",
    products: [
      { name: "Wipe Out", desc: "Robust surface cleaner that eliminates deep-set dirt, grime, tire scuffing and organic stains from pavers and concrete." },
      { name: "Multi-Use Cleaners", desc: "Versatile cleaning solutions for a wide range of hardscape surfaces and everyday maintenance." },
      { name: "Specialty Cleaners", desc: "Targeted formulas for specific stain types — oil, rust, efflorescence and organic growth." },
    ],
  },
  {
    icon: Droplets,
    title: "Removers & Strippers",
    description: "Strip old sealers and coatings to prepare surfaces for re-sealing or restoration.",
    products: [
      { name: "Sealer Strippers", desc: "Remove existing acrylic, solvent-based or water-based sealers from pavers and concrete surfaces." },
    ],
  },
  {
    icon: Layers,
    title: "Polymeric Sand",
    description: "Lock paver joints in place, prevent weed growth and resist insect intrusion with high-performance polymeric sand.",
    products: [
      { name: "Joint Sand", desc: "Standard joint-fill sand for paver installations — clean, consistent and easy to apply." },
      { name: "Polymeric Sand", desc: "Advanced polymer-modified sand that hardens when activated with water — locks joints, prevents weeds and resists washout." },
    ],
  },
];

export default function Trident() {
  return (
    <>
      <PageHero
        title="Trident Hardscape Products"
        subtitle="Professional-grade sealers, cleaners, removers and polymeric sand for pavers, concrete and natural stone."
      />

      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enzo's is proud to carry <strong className="text-foreground">Trident</strong> — a leader in hardscape protection and maintenance products. Whether you're sealing a new paver patio, stripping an old coating, or locking joints with polymeric sand, Trident has the right product for the job.
              </p>
              <a
                href="https://www.tridentprotects.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Visit tridentprotects.com →
              </a>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {categories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <cat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold md:text-3xl">{cat.title}</h2>
                    <p className="text-muted-foreground text-sm mt-1">{cat.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.products.map((p) => (
                    <div key={p.name} className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all">
                      <h3 className="font-heading font-bold text-base">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Trident Products?"
        description="Contact Enzo's to order sealers, cleaners, polymeric sand and more for your hardscape projects."
      />
    </>
  );
}
