import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, Wrench, Building2, Factory, ShoppingBag, Truck, Hospital, ArrowRight, Shield, Clock, DollarSign, Settings, Award } from "lucide-react";

const minutemanProducts = [
  {
    name: "E20",
    type: "Walk-Behind Scrubber",
    cleaningPath: '20"',
    tankSize: "12 gal",
    coverage: "Up to 20,000 ft²/hr",
    description:
      "The E20 is available in disc or cylindrical brush configurations. The cylindrical option includes an integrated sweeping function — scrub and sweep in one pass. Battery-powered with traction drive for effortless operation.",
    bestFor: ["Retail stores", "Schools", "Small warehouses"],
  },
  {
    name: "E26",
    type: "Walk-Behind Scrubber",
    cleaningPath: '26"',
    tankSize: "19 gal",
    coverage: "Up to 26,000 ft²/hr",
    description:
      "Step up in size without sacrificing maneuverability. The E26 handles mid-size facilities with ease and features an offset brush deck for wall-to-wall cleaning.",
    bestFor: ["Grocery stores", "Manufacturing", "Healthcare"],
  },
  {
    name: "E28",
    type: "Walk-Behind Scrubber",
    cleaningPath: '28"',
    tankSize: "23 gal",
    coverage: "Up to 28,000 ft²/hr",
    description:
      "The E28 cylindrical brush scrubber is built for high-production facilities. Its integrated sweeping function does two jobs at once, and the offset brush deck cleans right up to walls and baseboards.",
    bestFor: ["Distribution centers", "Convention centers", "Airports"],
  },
  {
    name: "E33",
    type: "Walk-Behind Scrubber",
    cleaningPath: '33"',
    tankSize: "27 gal",
    coverage: "Up to 33,000 ft²/hr",
    description:
      "The largest walk-behind in the E Series. Maximum cleaning path and tank capacity for facilities that need to cover a lot of ground with a single operator and minimal refills.",
    bestFor: ["Large warehouses", "Industrial plants", "Logistics hubs"],
  },
  {
    name: "SC7000 / SC8000",
    type: "Ride-On Scrubber",
    cleaningPath: '26–32"',
    tankSize: "30–40 gal",
    coverage: "Up to 40,000 ft²/hr",
    description:
      "Ride-on scrubbers for maximum operator productivity and comfort during long shifts. Ideal for large open areas where walk-behind machines would be too slow.",
    bestFor: ["Manufacturing plants", "Multi-building campuses", "Automotive facilities"],
  },
  {
    name: "KS28 / KS32",
    type: "Walk-Behind Sweeper",
    cleaningPath: '28–32"',
    tankSize: "N/A",
    coverage: "Up to 35,000 ft²/hr",
    description:
      "Battery-powered walk-behind sweepers that collect dust, debris, and fine particles from hard floors. Ideal as a pre-sweep before scrubbing or as standalone sweeping machines.",
    bestFor: ["Warehouses", "Parking garages", "Loading docks"],
  },
];

const minutemanStrengths = [
  {
    icon: Clock,
    title: "Since 1951",
    description:
      "Over 70 years of manufacturing commercial cleaning equipment in the USA. Minuteman's heritage means proven designs, available parts, and reliable dealer support.",
  },
  {
    icon: DollarSign,
    title: "Lower Total Cost",
    description:
      "Minuteman machines are engineered for low cost of ownership — simple maintenance, affordable consumables, and long-lasting components keep operating costs down.",
  },
  {
    icon: Settings,
    title: "Easy to Operate & Service",
    description:
      "Intuitive controls, tool-free brush changes, and easy-access components mean less training time and faster maintenance. Any operator can be productive on day one.",
  },
  {
    icon: Shield,
    title: "Built Tough",
    description:
      "Heavy-gauge steel frames, reinforced brush decks, and industrial-grade motors are standard across the lineup. These machines are built for daily commercial use.",
  },
];

const useCases = [
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    detail: "Remove cutting fluids, oil, metal shavings, and production residue from concrete and coated floors. Cylindrical brush models sweep and scrub in one pass.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Grocery",
    detail: "Clean aisles during and after business hours with quiet, compact machines that navigate displays and checkout lanes.",
  },
  {
    icon: Hospital,
    name: "Healthcare & Long-Term Care",
    detail: "Meet stringent hygiene requirements with precise chemical metering and consistent scrubbing pressure across patient areas, corridors, and common spaces.",
  },
  {
    icon: Building2,
    name: "Education & Government",
    detail: "Budget-friendly machines that handle daily cleaning of hallways, cafeterias, gymnasiums, and common areas across multi-building campuses.",
  },
  {
    icon: Truck,
    name: "Warehousing & Distribution",
    detail: "High-capacity scrubbers and sweepers cover massive floor areas quickly, keeping loading docks, staging areas, and aisles clean and safe.",
  },
];

export default function MinutemanFloorCleaners() {
  return (
    <>
      <PageHero
        title="Minuteman Floor Cleaners"
        subtitle="American-made commercial floor scrubbers, sweepers, and burnishers — reliable, affordable, and built to last."
      />

      {/* Brand intro */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <img src="/uploads/2020/11/minuteman-logoLarge.png" alt="Minuteman International Logo" className="h-14 object-contain" loading="lazy" />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minuteman International has been manufacturing commercial cleaning equipment in the USA since 1951. Known for rugged construction, simple operation, and a lower total cost of ownership, Minuteman machines are the go-to choice for facilities that need dependable daily cleaning without the premium price tag.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                As an authorized Minuteman dealer, Enzo's provides sales, service, parts, and operator training for the full Minuteman commercial cleaning lineup — including the popular E Series walk-behind scrubbers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Minuteman */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
              Why Choose Minuteman?
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {minutemanStrengths.map((s, i) => (
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

      {/* E Series highlight */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">The E Series — Minuteman's Flagship</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The E Series represents Minuteman's most advanced walk-behind scrubber technology. Available in 20", 26", 28", and 33" cleaning paths, every E Series machine features:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Traction drive for effortless operation",
                    "Offset brush deck — cleans right to walls",
                    "Cylindrical or disc brush options",
                    "Integrated sweeping on cylindrical models",
                    "Simple, intuitive operator controls",
                    "Tool-free brush & squeegee changes",
                    "Onboard charger (select models)",
                    "Robust steel frame construction",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product lineup */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Minuteman Floor Cleaning Lineup
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Walk-behind scrubbers, ride-on scrubbers, and sweepers — Minuteman has a machine for every facility.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minutemanProducts.map((product, i) => (
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

      {/* Use cases / Industries */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Industries We Serve with Minuteman
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Minuteman machines deliver reliable daily cleaning across every major commercial and industrial sector.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.name} delay={i * 0.06} variant="fadeUp">
                <div className="rounded-2xl border border-border bg-card p-6 h-full flex gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 h-fit shrink-0">
                    <uc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{uc.name}</h3>
                    <p className="text-sm text-muted-foreground">{uc.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Need Help Choosing the Right Machine?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every facility is different. Enzo's team will assess your floor type, square footage, soil conditions, and cleaning schedule to recommend the right Minuteman machine — and back it with local service and support.
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
        title="Ready for a Minuteman Floor Cleaner?"
        description="Contact Enzo's for product demos, pricing, and expert recommendations on the right Minuteman machine for your facility."
      />
    </>
  );
}
