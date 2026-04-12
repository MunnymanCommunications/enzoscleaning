import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, Wrench, Building2, Factory, ShoppingBag, Truck, Hospital, ArrowRight, Shield, Zap, Droplets, Settings } from "lucide-react";

const karcherProducts = [
  {
    name: "BD 43/25 C Bp",
    type: "Walk-Behind Scrubber",
    cleaningPath: '17"',
    tankSize: "6.6 gal",
    coverage: "Up to 7,500 ft²/hr",
    description:
      "Compact battery-powered scrubber ideal for small retail spaces, restrooms, and tight areas. AGM batteries reduce maintenance and the streamlined design makes it easy for any operator to learn quickly.",
    bestFor: ["Small retail stores", "Restrooms & break rooms", "Office lobbies"],
  },
  {
    name: "BD 50/50 C Bp Classic",
    type: "Walk-Behind Scrubber",
    cleaningPath: '20"',
    tankSize: "13 gal",
    coverage: "Up to 16,000 ft²/hr",
    description:
      "Mid-size scrubber that bridges the gap between compact machines and full-size units. Great all-around machine for facilities that need daily cleaning across multiple floor types.",
    bestFor: ["Warehouses", "School corridors", "Healthcare facilities"],
  },
  {
    name: "B 80 W Bp",
    type: "Walk-Behind Scrubber",
    cleaningPath: '26–30"',
    tankSize: "21 gal",
    coverage: "Up to 32,300 ft²/hr",
    description:
      "Large walk-behind with traction drive and integrated sweeping function. Covers big areas fast with disc or roller brushes. Ideal for large-footprint facilities that need a single operator to cover a lot of ground.",
    bestFor: ["Distribution centers", "Manufacturing plants", "Large retail"],
  },
  {
    name: "BD 80/100 W Bp Classic",
    type: "Walk-Behind Scrubber",
    cleaningPath: '32"',
    tankSize: "26 gal",
    coverage: "Up to 35,000 ft²/hr",
    description:
      "The largest walk-behind in the Kärcher Classic range. Maximum productivity for sprawling facilities where ride-on machines aren't practical or cost-effective.",
    bestFor: ["Airport terminals", "Convention centers", "Large industrial floors"],
  },
  {
    name: "B 60 / B 60 W",
    type: "Walk-Behind Scrubber",
    cleaningPath: '22–24"',
    tankSize: "15 gal",
    coverage: "Up to 22,000 ft²/hr",
    description:
      "Versatile mid-to-large scrubber with optional traction drive. Available in disc and cylindrical brush configurations for different floor types and soil conditions.",
    bestFor: ["Grocery stores", "Hotels & hospitality", "Education facilities"],
  },
  {
    name: "B 150 R Bp",
    type: "Ride-On Scrubber",
    cleaningPath: '40–60"',
    tankSize: "60 gal",
    coverage: "Up to 64,500 ft²/hr",
    description:
      "Full-size ride-on scrubber for maximum productivity. Operator comfort for long shifts, massive tank capacity, and a cleaning path up to 60 inches wide. Built for the biggest jobs.",
    bestFor: ["Logistics hubs", "Automotive plants", "Large manufacturing"],
  },
];

const karcherStrengths = [
  {
    icon: Zap,
    title: "German Engineering",
    description:
      "Every Kärcher machine is designed and tested to exacting German engineering standards — delivering consistent cleaning performance, precise water management, and long service life.",
  },
  {
    icon: Droplets,
    title: "KIRA Autonomous Cleaning",
    description:
      "Kärcher's autonomous cleaning robot technology allows machines to clean independently, freeing staff for higher-value tasks. Available on select models.",
  },
  {
    icon: Settings,
    title: "eco!efficiency Mode",
    description:
      "Built-in eco mode reduces water and energy consumption by up to 50% without sacrificing cleaning quality — lowering operating costs and environmental impact.",
  },
  {
    icon: Shield,
    title: "Robust Build Quality",
    description:
      "Stainless steel and high-impact polymer construction resists corrosion and daily wear. Kärcher machines are built for years of heavy commercial use.",
  },
];

const industries = [
  { icon: ShoppingBag, name: "Retail & Grocery", detail: "Keep aisles spotless during and after business hours with quiet, maneuverable scrubbers." },
  { icon: Factory, name: "Manufacturing & Warehousing", detail: "Remove oil, grease, and production residue from concrete and coated floors at scale." },
  { icon: Hospital, name: "Healthcare & Education", detail: "Meet hygiene standards with chemical-metered cleaning and low-noise operation." },
  { icon: Building2, name: "Commercial Offices", detail: "Maintain professional appearances in lobbies, hallways, and common areas." },
  { icon: Truck, name: "Transportation & Logistics", detail: "Clean large distribution floors and loading docks quickly between shifts." },
];

export default function KarcherFloorCleaners() {
  return (
    <>
      <PageHero
        title="Kärcher Floor Cleaners"
        subtitle="World-class German-engineered floor scrubbers, sweepers, and cleaning machines — available from Enzo's."
      />

      {/* Brand intro */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2020/11/download-1.png" alt="Kärcher Logo" className="h-14 object-contain" loading="lazy" />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kärcher is the world's leading provider of cleaning technology, with over 80 years of innovation in commercial and industrial cleaning equipment. Their floor scrubbers and sweepers combine German precision engineering with practical operator-focused design — delivering machines that clean better, last longer, and cost less to operate over their lifetime.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                As an authorized Kärcher dealer, Enzo's provides sales, service, training, and genuine parts support for the full Kärcher commercial floor cleaning lineup.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service photo section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/uploads/karcher-floor-scrubber-repair.jpg"
                  alt="Kärcher floor scrubber being serviced at Enzo's facility"
                  className="rounded-2xl shadow-lg w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Factory-Trained Service & Repair
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enzo's doesn't just sell Kärcher machines — we service them too. Our technicians are trained on Kärcher equipment and stock genuine OEM parts so your machine gets back on the floor fast.
                </p>
                <ul className="space-y-3">
                  {["Preventative maintenance programs", "Emergency breakdown repair", "Genuine Kärcher replacement parts", "Battery testing & replacement", "Brush & squeegee replacement"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/pressure-washer-service-repair/"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
                >
                  Learn About Our Service Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Kärcher */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
              Why Choose Kärcher?
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {karcherStrengths.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product lineup */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Kärcher Floor Scrubber Lineup
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              From compact 17-inch walk-behinds to 60-inch ride-on machines — Kärcher has a scrubber for every facility size and cleaning challenge.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {karcherProducts.map((product, i) => (
              <AnimatedSection key={product.name} delay={Math.min(i * 0.06, 0.3)} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col">
                  <div className="mb-1">
                    <span className="text-xs font-medium text-primary">{product.type}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{product.name}</h3>

                  <div className="flex flex-wrap gap-3 my-3">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      Path: {product.cleaningPath}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      Tank: {product.tankSize}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {product.coverage}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div>
                    <span className="text-xs font-semibold text-foreground">Best For:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {product.bestFor.map((b) => (
                        <span key={b} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Industries We Serve with Kärcher
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Kärcher floor cleaning equipment is trusted across every major industry segment.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.06} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full flex gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 h-fit shrink-0">
                    <ind.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground">{ind.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Machine You Need?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Choosing the right floor scrubber depends on your facility size, floor type, soil conditions, and cleaning frequency. Enzo's team will evaluate your space and recommend the right Kärcher machine — no guesswork, no overselling.
              </p>
              <Link
                to="/services/free-consultations/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready for a Kärcher Floor Cleaner?"
        description="Contact Enzo's for product demos, contractor pricing, and expert recommendations on the right Kärcher machine for your facility."
      />
    </>
  );
}
