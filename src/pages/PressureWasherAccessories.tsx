import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const accessories = [
  {
    title: "Trigger Guns & Spray Guns",
    desc: "Enzo's stocks a full range of trigger guns and spray guns to help deliver the powerful performance you need to get things clean.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/02/Pressure-Washer-Trigger-Guns-and-Spray-Guns.png",
    link: "/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/",
  },
  {
    title: "Nozzles",
    desc: "Properly sized nozzles are critical to proper pressure washer operation. We offer a wide variety for cold-water and hot-water pressure washers.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/02/Pressure-Washer-Quick-Change-Nozzles.jpg",
    link: "/cleaning-equipment/pressure-washers-accessories/nozzles/",
  },
  {
    title: "Surface Cleaners",
    desc: "Keep your working surfaces, warehouse floors, sidewalks and other spaces clean and clear. Designed to make quick work of dirt, grime and gum.",
    image: "https://enzoscleaning.com/wp-content/uploads/2021/02/Surface-Cleaner.jpg",
    link: "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/",
  },
  {
    title: "Wands & Lances",
    desc: "Several lines from Mecline, HPC, Suttner, General Pump and more for the perfect reach and pressure control.",
    link: "/cleaning-equipment/pressure-washers-accessories/wands-lances/",
  },
  {
    title: "Wet Sand Blasting Kit",
    desc: "Maximum cleaning power with dustless sandblasting capabilities for the toughest grime and surface prep.",
    link: "/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/",
  },
  {
    title: "Scaltrol",
    desc: "Descaling filters designed for hot water pressure washers to prevent mineral buildup and extend machine life.",
    link: "/cleaning-equipment/pressure-washers-accessories/scaltrol/",
  },
];

export default function PressureWasherAccessories() {
  return (
    <>
      <PageHero
        title="Pressure Washer Accessories"
        subtitle="The right accessories and supplies for the most effective, efficient clean from your pressure washer."
        bgImage="https://enzoscleaning.com/wp-content/uploads/2021/02/Pressure-Washer-Accessories.jpg"
      />

      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Getting the most effective and efficient clean from your pressure washer takes more than just the right machine — it also requires the right accessories and supplies. Tools like trigger and spray guns deliver the right pressure, while our wet sand blasting kit blasts away tough grime. Plus surface cleaners and Scaltrol filters give you the most powerful, reliable and consistent clean every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <Link to={item.link} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Find the Right Accessories" description="Get the cleaning power you need. Let our team help. Contact Enzo's today." />
    </>
  );
}
