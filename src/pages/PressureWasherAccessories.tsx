import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const accessories = [
  {
    title: "Trigger Guns & Spray Guns",
    desc: "Enzo's stocks a full range of trigger guns and spray guns to deliver the powerful performance you need. Available in multiple pressure ratings and flow configurations.",
    image: "/uploads/2021/02/Pressure-Washer-Trigger-Guns-and-Spray-Guns.png",
    link: "/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/",
  },
  {
    title: "Nozzles",
    desc: "Properly sized nozzles are critical to pressure washer operation. We stock nozzles for cold-water and hot-water systems in every spray angle.",
    image: "/uploads/2021/02/Pressure-Washer-Quick-Change-Nozzles.jpg",
    link: "/cleaning-equipment/pressure-washers-accessories/nozzles/",
  },
  {
    title: "Surface Cleaners",
    desc: "Keep warehouse floors, sidewalks and other surfaces clean fast. Surface cleaners make quick work of dirt, grime and gum without streaking.",
    image: "/uploads/2021/02/Surface-Cleaner.jpg",
    link: "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/",
  },
  {
    title: "Wands & Lances",
    desc: "Several lines from Mecline, HPC, Suttner, General Pump and more for the perfect reach and pressure control.",
    link: "/cleaning-equipment/pressure-washers-accessories/wands-lances/",
  },
  {
    title: "Wet Sand Blasting Kit",
    desc: "Maximum cleaning power with dustless sandblasting capabilities for the toughest grime and surface prep jobs.",
    link: "/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/",
  },
  {
    title: "Scaltrol / Descaling Filters",
    desc: "Descaling and coil cleaning filters designed for hot water pressure washers to prevent mineral buildup and extend machine life.",
    link: "/cleaning-equipment/pressure-washers-accessories/scaltrol/",
  },
];

const nozzleChart = [
  { color: "bg-red-500", degree: "0°", name: "Red", use: "Pencil jet — maximum impact for tough deposits, rust, and concrete. Use with extreme caution." },
  { color: "bg-yellow-400", degree: "15°", name: "Yellow", use: "Stripping — heavy-duty cleaning for concrete, masonry, and paint removal." },
  { color: "bg-green-500", degree: "25°", name: "Green", use: "General cleaning — the most commonly used angle. Great for vehicles, equipment, and buildings." },
  { color: "bg-white border-2 border-border", degree: "40°", name: "White", use: "Wide fan — gentle rinsing, windows, and delicate surfaces. Covers more area per pass." },
];

const relatedParts = [
  "Quick Connects", "High-Pressure Hoses", "Hose Reels", "Spray Guns", "Wands", "O-Rings & Fittings",
];

export default function PressureWasherAccessories() {
  return (
    <>
      <PageHero
        title="Pressure Washer Accessories"
        subtitle="The right accessories and supplies for the most effective, efficient clean from your pressure washer."
        bgImage="/uploads/2021/02/Pressure-Washer-Accessories.jpg"
      />

      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Getting the most effective clean from your pressure washer takes more than just the right machine — it requires the right accessories. From trigger guns and nozzles to surface cleaners and descaling filters, Enzo's stocks the parts you need. Need help choosing? Call us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Accessory Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <Link to={item.link} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nozzle Color Chart */}
      <section className="section-padding bg-muted">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nozzle Color & Degree Guide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pressure washer nozzles are color-coded by spray angle. Choosing the right nozzle protects surfaces and maximizes cleaning efficiency.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {nozzleChart.map((nozzle, i) => (
              <AnimatedSection key={nozzle.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-full ${nozzle.color} flex-shrink-0 shadow-sm`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold">{nozzle.name}</h3>
                      <span className="text-sm font-mono text-primary font-bold">{nozzle.degree}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{nozzle.use}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Parts & Hoses */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Hoses, Quick Connects & Related Parts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enzo's also carries a full range of supporting parts and accessories to keep your pressure washer system running at peak performance.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {relatedParts.map((part) => (
                <span key={part} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">{part}</span>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Need a specific part, hose length, or fitting? Our team can help you find exactly what you need. Call or contact us for availability and pricing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:4195020007"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all"
                >
                  <Phone className="h-4 w-4" /> 419-502-0007
                </a>
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection title="Need Help Choosing Accessories?" description="Let our team match the right accessories to your pressure washer and application. Contact Enzo's today." />
    </>
  );
}
