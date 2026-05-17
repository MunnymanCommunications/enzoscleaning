import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function AgricultureCleaningEquipment() {
  return (
    <>
      <PageHero title="Agriculture Cleaning Equipment" subtitle="Protect your machinery from corrosive fertilizers and the elements." />
      <section className="pt-12">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <img
              src="/uploads/hotsy-carlson-service-truck-agriculture.jpg"
              alt="Hotsy Carlson 24/7 service truck on-site at an agricultural facility next to a green McCloskey screening plant — pressure washer parts, rentals and detergents for farms"
              className="w-full h-auto rounded-2xl border border-border shadow-sm"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Your equipment is constantly under attack from corrosive fertilizers, herbicides and the elements. How can you protect your machinery? Keep it CLEAN! At Enzo's we have dozens of solutions — from pressure washers to sanitizers and disinfectants — all made to help keep everything at your farming or agricultural operations CLEAN.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pressure Washers", desc: "Hot and cold water machines for tractors, combines and other farming equipment." },
              { title: "Sanitizers & Disinfectants", desc: "Keep animal housing, milking parlors and food processing areas safe and compliant." },
              { title: "Salt Neutralizers", desc: "Protect equipment from corrosion caused by fertilizers and road treatments." },
              { title: "Floor Cleaning", desc: "Sweepers and scrubbers for barns, processing facilities and storage areas." },
              { title: "Detergents", desc: "Specialized chemistries for agricultural soils, manure and organic buildup." },
              { title: "Wash Bay Design", desc: "Custom wash bay solutions for agricultural operations of any size." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Schedule a Free Consultation" description="Our knowledgeable representatives can show you what Enzo's can do for your farm." />
    </>
  );
}
