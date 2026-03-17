import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const products = [
  { name: "Leather Cleaner", desc: "Gently cleans and conditions leather upholstery and trim." },
  { name: "Fabric Cleaner", desc: "Removes stains and odors from fabric seats, carpets and headliners." },
  { name: "Wood Cleaner", desc: "Safe formula for wood surfaces — decks, fences and furniture." },
  { name: "Rubber & Tire Dressing", desc: "Restores and protects rubber surfaces with a lasting finish." },
  { name: "Metal Polish", desc: "Brings back the shine on aluminum, stainless steel and chrome." },
  { name: "Glass Cleaner", desc: "Streak-free clarity for automotive and commercial glass." },
];

export default function SpecialtyCleaningProducts() {
  return (
    <>
      <PageHero title="Specialty Cleaning Products" subtitle="Special cleaning solutions for leather, fabric, wood, rubber and metals." />
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Not every surface can be cleaned the same way. Enzo's specialty cleaning products are formulated for specific materials and applications — from delicate leather interiors to heavy-duty metal polishing. Find the right specialty product for your needs.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-bold text-sm">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Find Specialty Products" description="Contact Enzo's for specialty cleaning solutions." />
    </>
  );
}
