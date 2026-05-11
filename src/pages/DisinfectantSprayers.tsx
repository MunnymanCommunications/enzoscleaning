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

          <AnimatedSection delay={0.2}>
            <div className="mt-14">
              <h2 className="text-2xl font-heading font-bold text-center">Featured Disinfectant Sprayers</h2>
              <p className="text-center text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                Professional electrostatic, backpack, handheld and mister sprayers from Victory, Kärcher and Hurricane — built for hospitals, schools, gyms, food service, transportation and commercial facilities.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    src: "/uploads/disinfectant-sprayers/victory-cordless-electrostatic-backpack-sprayer.jpg",
                    title: "Victory Cordless Electrostatic Backpack Sprayer",
                    alt: "Victory cordless electrostatic backpack disinfectant sprayer — covers up to 23,000 sq ft per tank with patented electrostatic charge for even coverage",
                  },
                  {
                    src: "/uploads/disinfectant-sprayers/victory-cordless-handheld-electrostatic-sprayer.jpg",
                    title: "Victory Cordless Handheld Electrostatic Sprayer",
                    alt: "Victory cordless handheld electrostatic disinfectant sprayer — covers up to 2,800 sq ft per tank, applies chemicals faster with even coating on all surfaces",
                  },
                  {
                    src: "/uploads/disinfectant-sprayers/hurricane-es-electrostatic-disinfectant-sprayer.jpg",
                    title: "Hurricane ES Electrostatic Disinfectant Sprayer",
                    alt: "Hurricane ES electrostatic disinfectant sprayer with precision flow rate, droplet control and stainless steel metering valve — ideal for hotels, schools, warehouses and medical facilities",
                  },
                  {
                    src: "/uploads/disinfectant-sprayers/karcher-ps-4-7-bp-mister-disinfectant-sprayer.jpg",
                    title: "Kärcher PS 4/7 Bp Mister Disinfectant Sprayer",
                    alt: "Kärcher PS 4/7 Bp battery-operated mister disinfectant sprayer — 8 hour runtime, 5 quart capacity, even coverage, perfect for Vital Oxide application",
                  },
                  {
                    src: "/uploads/disinfectant-sprayers/ap-100-50m-touchless-all-purpose-cleaner.jpg",
                    title: "Kärcher AP 100/50M Touchless All Purpose Cleaner",
                    alt: "Kärcher AP 100/50M touchless all-purpose cleaner — sprays and suctions detergent for restroom sanitizing, kitchens and galleys, leaving surfaces walkable and dry",
                  },
                ].map((s) => (
                  <a
                    key={s.src}
                    href={s.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden bg-white">
                      <img
                        src={s.src}
                        alt={s.alt}
                        title={s.title}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-sm">{s.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection title="Get the Right Sprayer" description="Contact Enzo's for disinfectant sprayers and application equipment." />
    </>
  );
}
