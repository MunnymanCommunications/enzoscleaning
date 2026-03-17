import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building, HeartPulse, Truck, Flame, GraduationCap, Factory,
  CheckCircle2, ArrowRight, Phone, Droplets, SprayCan, Wrench,
  ShieldCheck, Sparkles, CircleDot
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "municipalities",
    icon: Building,
    title: "Municipalities & City Operations",
    tagline: "Keep your city clean, safe, and running efficiently.",
    heroDesc: "From sidewalk maintenance to fleet yards, municipalities face enormous cleaning challenges across diverse facilities. Enzo's provides the heavy-duty pressure washers, street sweepers, and detergents that keep public infrastructure looking sharp and operating safely — all backed by service you can count on.",
    challenges: [
      "Graffiti removal on public buildings and infrastructure",
      "Street and sidewalk cleaning for public safety",
      "Fleet vehicle washing for city trucks, buses, and service vehicles",
      "Park and recreation facility sanitation",
      "Stormwater compliance and wastewater management",
    ],
    solutions: [
      { name: "Hotsy Hot Water Pressure Washers", desc: "Cut through grease, grime, and graffiti on public infrastructure with industrial-grade hot water power.", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
      { name: "Citymaster Street Sweepers", desc: "Multi-function sweepers designed for urban environments — sidewalks, plazas, and roadways.", link: "/citymaster/" },
      { name: "Wastewater Treatment Systems", desc: "Stay EPA-compliant with wash water reclamation and filtration systems.", link: "/wastewater-treatment-solutions/" },
      { name: "Surface Cleaners", desc: "Clean large concrete and asphalt areas up to 4× faster than standard nozzles.", link: "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/" },
      { name: "Touchless Drive-Thru Wash Systems", desc: "Automated wash bays for city fleet vehicles — no labor, consistent results.", link: "/touchless-drive-thru/" },
    ],
    testimonialQuote: "Enzo's helped us design a wash bay that handles our entire public works fleet — from dump trucks to police cruisers.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20",
  },
  {
    id: "medical",
    icon: HeartPulse,
    title: "Medical & Healthcare Facilities",
    tagline: "Hospital-grade hygiene. Zero compromises.",
    heroDesc: "Healthcare environments demand the highest standards of cleanliness and disinfection. Enzo's partners with hospitals, clinics, dental offices, and long-term care facilities to deliver proven hygiene systems that protect patients, staff, and visitors — meeting or exceeding CDC and Joint Commission standards.",
    challenges: [
      "Infection prevention and HAI (hospital-acquired infection) reduction",
      "Operating room and clinical surface disinfection",
      "Hand hygiene compliance across departments",
      "Proper disinfectant selection for sensitive environments",
      "Staff training on cleaning protocols and compliance tracking",
    ],
    solutions: [
      { name: "Vapore Dry Vapor Disinfecting", desc: "Chemical-free, superheated dry steam kills 99.9% of pathogens on any surface.", link: "/disinfecting/vapore-dry-vapor-disinfecting/" },
      { name: "Hand Hygiene Systems", desc: "Touch-free dispensing systems with compliance monitoring for staff accountability.", link: "/our-hand-hygiene-systems/" },
      { name: "Disinfectant Sprayers", desc: "Electrostatic and mist sprayers for rapid whole-room disinfection coverage.", link: "/disinfecting/our-disinfectant-sprayers/" },
      { name: "Hospital-Grade Disinfectants", desc: "EPA-registered formulations proven against MRSA, C. diff, and emerging pathogens.", link: "/disinfecting/our-disinfectants-sanitizers/" },
      { name: "Training & Compliance Support", desc: "On-site staff training, protocol development, and ongoing compliance monitoring.", link: "/training-compliance-support/" },
    ],
    testimonialQuote: "Since implementing Enzo's hygiene systems, our HAI rates dropped by 34% in the first quarter.",
    color: "bg-destructive/10 text-destructive",
    borderColor: "border-destructive/20",
  },
  {
    id: "fleet",
    icon: Truck,
    title: "Fleet & Transportation Companies",
    tagline: "Protect your investment. Extend your fleet's life.",
    heroDesc: "Whether you run 10 trucks or 1,000, corrosion, road grime, and chemical buildup silently destroy your equipment. Enzo's fleet washing solutions — from automated drive-thru systems to specialized undercarriage sprayers — keep your vehicles road-ready and your brand looking professional.",
    challenges: [
      "Road salt and de-icing chemical corrosion damage",
      "DOT inspection readiness and compliance",
      "High-volume washing efficiency and labor costs",
      "Undercarriage corrosion on trailers and chassis",
      "Brand image and vehicle presentation standards",
    ],
    solutions: [
      { name: "Touchless Drive-Thru Wash Systems", desc: "Wash a full tractor-trailer in under 5 minutes with zero manual labor.", link: "/touchless-drive-thru/" },
      { name: "Undercarriage Sprayers & The Neutralizer", desc: "Remove corrosive road salts from frames, axles, and undercarriages automatically.", link: "/cleaning-equipment/under-carriage-sprayers/" },
      { name: "Transportation Detergents", desc: "Aluminum-safe, two-step wash chemistry engineered for trucks, buses, and trailers.", link: "/detergents/transportation-truck-bus-wash/" },
      { name: "Wash Bay Design & Engineering", desc: "Custom-designed wash facilities optimized for your fleet size and vehicle types.", link: "/cleaning-equipment/wash-bay-design/" },
      { name: "Scheduled Maintenance Programs", desc: "Prevent costly breakdowns with regular equipment servicing and inspections.", link: "/services/scheduled-maintenance/" },
    ],
    testimonialQuote: "Our maintenance costs dropped 22% after switching to Enzo's fleet wash program. The ROI was immediate.",
    color: "bg-accent/10 text-accent",
    borderColor: "border-accent/20",
  },
  {
    id: "fire",
    icon: Flame,
    title: "Fire Departments & Emergency Services",
    tagline: "Your rigs deserve the same care you give your community.",
    heroDesc: "Fire apparatus represents millions of dollars in public investment. Road chemicals, soot, hydraulic fluids, and biological hazards demand specialized cleaning. Enzo's works with fire departments across the region to deliver cleaning solutions that protect equipment, ensure readiness, and maintain the pride of your station.",
    challenges: [
      "Apparatus corrosion from road salts and fire suppression chemicals",
      "Biological and hazmat decontamination after emergency responses",
      "Station floor and bay cleaning for slip prevention",
      "Turnout gear and equipment sanitization",
      "Budget constraints — need durable, long-lasting equipment",
    ],
    solutions: [
      { name: "Hot Water Pressure Washers", desc: "Remove soot, grease, and biological hazards from apparatus with heated cleaning power.", link: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
      { name: "Floor Scrubbers", desc: "Keep station bay floors clean and slip-free for crew safety.", link: "/cleaning-equipment/floor-cleaning/floor-scrubbers/" },
      { name: "Disinfectant Systems", desc: "Decontaminate equipment and gear after biological or chemical exposure calls.", link: "/disinfecting/" },
      { name: "The Neutralizer", desc: "Chemically neutralize corrosive road salts on apparatus undercarriages after winter runs.", link: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
      { name: "Degreasers & Specialty Cleaners", desc: "Heavy-duty formulations for hydraulic fluid, diesel, and soot removal.", link: "/detergents/degreasers/" },
    ],
    testimonialQuote: "We've been using Enzo's equipment for 8 years. Our ladder trucks look as good as the day we bought them.",
    color: "bg-orange-500/10 text-orange-600",
    borderColor: "border-orange-500/20",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "Schools & Educational Facilities",
    tagline: "Healthy learning environments start with proper hygiene.",
    heroDesc: "Schools face unique cleaning challenges — high-traffic hallways, cafeterias, restrooms, gymnasiums, and bus fleets all need different approaches. Enzo's helps school districts implement effective, budget-friendly cleaning and disinfection programs that protect students, staff, and families.",
    challenges: [
      "Flu season and illness outbreak prevention",
      "Cafeteria and food service area sanitation",
      "Gymnasium and locker room hygiene",
      "School bus fleet cleaning and maintenance",
      "Budget limitations with large facility footprints",
    ],
    solutions: [
      { name: "Electrostatic Disinfectant Sprayers", desc: "Rapidly disinfect classrooms, cafeterias, and buses with 360° coverage in minutes.", link: "/disinfecting/our-disinfectant-sprayers/" },
      { name: "Floor Sweepers & Scrubbers", desc: "Maintain gymnasium floors, hallways, and cafeterias with industrial walk-behind units.", link: "/cleaning-equipment/floor-cleaning/" },
      { name: "Hand Hygiene Stations", desc: "Touchless hand sanitizer and soap dispensers for high-traffic school areas.", link: "/our-hand-hygiene-systems/" },
      { name: "School Bus Wash Systems", desc: "Keep your bus fleet clean and presentable with efficient wash bay solutions.", link: "/touchless-drive-thru/" },
      { name: "EPA-Registered Disinfectants", desc: "Safe, effective disinfectants approved for use in educational environments.", link: "/disinfecting/our-disinfectants-sanitizers/" },
    ],
    testimonialQuote: "Enzo's disinfection program helped us reduce student sick days by 18% over one school year.",
    color: "bg-violet-500/10 text-violet-600",
    borderColor: "border-violet-500/20",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industrial Plants",
    tagline: "Production doesn't stop. Neither should your cleaning.",
    heroDesc: "Manufacturing facilities deal with heavy oils, coolants, metal shavings, and production residue that can compromise safety and product quality. Enzo's provides the industrial-grade pressure washers, floor care systems, and specialty detergents that keep your plant running safely and passing inspections.",
    challenges: [
      "Oil, grease, and coolant buildup on equipment and floors",
      "OSHA compliance for slip-free work environments",
      "Production line cleaning without extended downtime",
      "Loading dock and warehouse floor maintenance",
      "Parts washing and degreasing for quality control",
    ],
    solutions: [
      { name: "Industrial Pressure Washers", desc: "Electric and gas-powered units built for continuous duty in plant environments.", link: "/cleaning-equipment/pressure-washers/" },
      { name: "Floor Scrubbers & Sweepers", desc: "Maintain large warehouse and production floors efficiently with ride-on or walk-behind units.", link: "/cleaning-equipment/floor-cleaning/" },
      { name: "Industrial Degreasers", desc: "Break down heavy oils, hydraulic fluids, and production residue without damaging equipment.", link: "/detergents/degreasers/" },
      { name: "Wastewater Treatment", desc: "Capture and treat wash water to meet discharge regulations.", link: "/wastewater-treatment-solutions/" },
      { name: "Scheduled Maintenance", desc: "Keep your cleaning equipment running with planned service visits — zero surprise downtime.", link: "/services/scheduled-maintenance/" },
    ],
    testimonialQuote: "Enzo's floor care system cut our cleaning time in half and helped us pass our OSHA inspection with flying colors.",
    color: "bg-secondary/10 text-secondary",
    borderColor: "border-secondary/20",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "30+", label: "Years Experience" },
  { value: "98%", label: "Customer Retention" },
  { value: "24/7", label: "Service Support" },
];

export default function IndustriesWeServe() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="From city streets to hospital rooms — Enzo's delivers cleaning solutions engineered for your industry's toughest challenges."
      />

      {/* Trust stats bar */}
      <section className="bg-secondary text-secondary-foreground py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm mt-1 text-secondary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-jump nav */}
      <section className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md border-b border-border py-3">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ind.icon className="w-3.5 h-3.5" />
                {ind.title.split(" & ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Your Industry Has Unique Challenges. <br className="hidden md:block" />
              <span className="text-primary">We Have Specific Solutions.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Enzo's, we don't believe in one-size-fits-all. We've spent over 30 years learning the specific pain points of each industry we serve — and developing targeted equipment packages, detergent programs, and service plans that solve those problems. Explore your industry below and see exactly how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((ind, index) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-16 md:py-24 scroll-mt-32 ${index % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
        >
          <div className="container">
            <AnimatedSection>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl ${ind.color} flex items-center justify-center flex-shrink-0`}>
                  <ind.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{ind.title}</h2>
                  <p className="text-lg text-primary font-medium mt-1">{ind.tagline}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-4xl mb-10">
                {ind.heroDesc}
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Challenges & Quote */}
              <AnimatedSection delay={0.1}>
                <div className={`rounded-xl border ${ind.borderColor} bg-card p-6 md:p-8 h-full`}>
                  <h3 className="font-bold text-lg flex items-center gap-2 mb-5">
                    <CircleDot className="w-5 h-5 text-primary" />
                    Common Challenges You Face
                  </h3>
                  <ul className="space-y-3">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{c}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <blockquote className="text-sm italic text-foreground/80 leading-relaxed">
                      "{ind.testimonialQuote}"
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2">— Enzo's Customer</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Solutions accordion */}
              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2 mb-5">
                    <Wrench className="w-5 h-5 text-primary" />
                    How Enzo's Helps
                  </h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {ind.solutions.map((sol, si) => (
                      <AccordionItem
                        key={sol.name}
                        value={`${ind.id}-${si}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:bg-card data-[state=open]:shadow-sm"
                      >
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-accent" />
                            {sol.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <p className="text-sm text-muted-foreground mb-3">{sol.desc}</p>
                          <Link
                            to={sol.link}
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Learn more <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link to="/contact-us/">
                        Get a Custom Quote <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:4195020007">
                        <Phone className="w-4 h-4 mr-1" /> Call (419) 502-0007
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <CTASection
        title="Don't See Your Industry?"
        description="We work with dozens of industries beyond what's listed here. Tell us about your cleaning challenges and we'll design a solution that fits."
        buttonText="Schedule a Free Consultation"
        buttonLink="/services/free-consultations/"
      />
    </>
  );
}
