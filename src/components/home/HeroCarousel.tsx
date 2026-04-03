import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/uploads/2020/09/header-bg.jpg",
    headline: "Are You Frustrated With Your Pressure Washer?",
    subtitle: "Sales, service & installation of wash bay equipment, pressure washers, and cleaning solutions across Ohio & Michigan.",
    ctaText: "Let's Talk",
    ctaLink: "/contact-us/",
  },
  {
    image: "/uploads/2020/10/neutralizer-drive-over.jpg",
    headline: "Stop Salt Corrosion Before It Costs You Millions",
    subtitle: "The Neutralizer eliminates road salt residue that destroys undercarriages — saving fleets $8,000–$15,000 per vehicle in rust damage.",
    ctaText: "See The Neutralizer",
    ctaLink: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    image: "/uploads/2021/02/The-Neutralizer-Pressure-Washer.jpg",
    headline: "The Neutralizer: Protect Your Fleet From Road Salt Damage",
    subtitle: "Our patented undercarriage wash system neutralizes corrosive salt on contact. Trusted by municipalities and fleet managers.",
    ctaText: "Request A Demo",
    ctaLink: "/services/free-consultations/",
  },
  {
    image: "/uploads/2021/02/Undercarriage-wash-system.jpg",
    headline: "Extend Vehicle Life By 5+ Years With Salt Neutralization",
    subtitle: "Every winter, road salt eats away at your fleet. One wash bay investment pays for itself in the first season.",
    ctaText: "Calculate Your Savings",
    ctaLink: "/contact-us/",
  },
  {
    image: "/uploads/2020/11/Enzo-Still-10.jpg",
    headline: "Custom Wash Bay Solutions — Designed, Built & Installed",
    subtitle: "From Maine to Alabama, Enzo's has designed and installed wash bays for cities, school districts, and private fleets.",
    ctaText: "Explore Wash Bay Design",
    ctaLink: "/cleaning-equipment/wash-bay-design/",
  },
  {
    image: "/uploads/2020/11/Enzo-Still-13.jpg",
    headline: "Trusted By Cities Across Ohio & Michigan",
    subtitle: "Municipal fleets rely on Enzo's to keep plows, fire trucks, and utility vehicles running longer with less downtime.",
    ctaText: "Industries We Serve",
    ctaLink: "/industries-we-serve/",
  },
  {
    image: "/uploads/2020/11/SchoolBus-v2.jpg",
    headline: "Keep Your School Bus Fleet Clean & Corrosion-Free",
    subtitle: "Protect your district's investment. Our salt neutralization systems keep buses safe, clean, and road-ready year after year.",
    ctaText: "Solutions For Schools",
    ctaLink: "/industries-we-serve/",
  },
  {
    image: "/uploads/2020/09/DSC_0184.jpg",
    headline: "Construction Equipment Cleaning That Keeps Projects Moving",
    subtitle: "Heavy equipment demands heavy-duty cleaning. Hot water pressure washers and degreasers built for the jobsite.",
    ctaText: "Construction Solutions",
    ctaLink: "/industries-we-serve/road-construction-excavating/",
  },
  {
    image: "/uploads/2021/01/Enzos-Free-Consultations.jpg",
    headline: "Free On-Site Consultation — We Come To You",
    subtitle: "Our team visits your operation, evaluates your needs, and recommends the right equipment and detergents — no obligation.",
    ctaText: "Book Your Free Visit",
    ctaLink: "/services/free-consultations/",
  },
  {
    image: "/uploads/2021/01/Enzos-Service-and-Repair.jpg",
    headline: "Pressure Washer Down? We Fix It Fast.",
    subtitle: "Factory-trained technicians service and repair all major brands — at your location or ours. Minimize downtime, maximize uptime.",
    ctaText: "Request Service",
    ctaLink: "/services/pressure-washer-service-repair/",
  },
  {
    image: "/uploads/2021/01/Enzos-Preventive-Maintenance.jpg",
    headline: "Preventive Maintenance Plans That Pay For Themselves",
    subtitle: "The cheapest repair is the one you never need. Our CLEAN Accountability Plan keeps your systems running at peak performance.",
    ctaText: "Learn About Maintenance",
    ctaLink: "/services/scheduled-maintenance/",
  },
  {
    image: "/uploads/2021/01/pressure-washer-service-and-repair.jpg",
    headline: "Factory-Trained Technicians At Your Service",
    subtitle: "Hotsy and Mi-T-M certified. We know your equipment inside and out — because we've been doing this for decades.",
    ctaText: "Our Services",
    ctaLink: "/services/",
  },
  {
    image: "/uploads/2021/04/Electric-Pump-Fuel-Oil-Heat-Pressure-Washer.jpg",
    headline: "Hotsy Pressure Washers — #1 Name In Hot Water Cleaning",
    subtitle: "When the job demands hot water, Hotsy delivers. Industry-leading pressure washers for the toughest commercial applications.",
    ctaText: "View Hotsy Equipment",
    ctaLink: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/",
  },
  {
    image: "/uploads/2021/04/871ss-Diesel-Pressure-Washer.png",
    headline: "Diesel Hot Water Power — Built For The Toughest Jobs",
    subtitle: "Portable, powerful, and built to last. Diesel hot water units go where you need them and clean what others can't.",
    ctaText: "Shop Diesel Units",
    ctaLink: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-hot-water/",
  },
  {
    image: "/uploads/2021/04/Natural-Gas-Hot-Water.jpg",
    headline: "Natural Gas Pressure Washers — Lower Operating Costs",
    subtitle: "Cut fuel costs without cutting cleaning power. Stationary natural gas systems are ideal for permanent wash bay installations.",
    ctaText: "Natural Gas Options",
    ctaLink: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/",
  },
  {
    image: "/uploads/2021/04/1700-electric-cold-water.jpg",
    headline: "Electric Cold Water Systems For Indoor Facilities",
    subtitle: "No fumes, no exhaust. Clean quietly and efficiently inside warehouses, food plants, and manufacturing floors.",
    ctaText: "Electric Cold Water",
    ctaLink: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/",
  },
  {
    image: "/uploads/2022/10/New-Project.jpg",
    headline: "Your Fleet Deserves Better Than Rust",
    subtitle: "Road salt doesn't take a day off — and neither should your corrosion prevention. The Neutralizer works 24/7 so your fleet lasts.",
    ctaText: "Protect Your Fleet",
    ctaLink: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    image: "/uploads/2022/10/New-Project-2.jpg",
    headline: "One Wash Bay. Every Vehicle. Zero Corrosion.",
    subtitle: "From school buses to snowplows, The Neutralizer handles your entire fleet in one automated pass.",
    ctaText: "See How It Works",
    ctaLink: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    image: "/uploads/2020/10/floor-cleaning.jpg",
    headline: "Industrial Floor Cleaning Equipment",
    subtitle: "Floor scrubbers, sweepers, and burnishers from Minuteman and Kärcher. Keep your facility floors spotless and safe.",
    ctaText: "Floor Cleaning",
    ctaLink: "/cleaning-equipment/floor-cleaning/",
  },
  {
    image: "/uploads/2021/02/Pressure-Washer-Accessories.jpg",
    headline: "OEM Parts & Accessories — Always In Stock",
    subtitle: "Nozzles, trigger guns, wands, surface cleaners, and more. Get the right parts to keep your system performing.",
    ctaText: "Shop Accessories",
    ctaLink: "/cleaning-equipment/pressure-washer-accessories/",
  },
  {
    image: "/uploads/2021/02/Surface-Cleaner.jpg",
    headline: "Surface Cleaners That Cut Cleaning Time In Half",
    subtitle: "Cover more ground in less time. Professional-grade surface cleaners for concrete, asphalt, and fleet wash pads.",
    ctaText: "View Surface Cleaners",
    ctaLink: "/cleaning-equipment/pressure-washer-accessories/surface-cleaners/",
  },
  {
    image: "/uploads/2020/11/hotsy_0003_Layer-0.jpg",
    headline: "The Right Detergent Makes All The Difference",
    subtitle: "Purpose-formulated detergents, degreasers, and disinfectants matched to your industry and cleaning challenge.",
    ctaText: "Browse Detergents",
    ctaLink: "/detergents/",
  },
  {
    image: "/uploads/2020/09/vital-oxide-products.jpg",
    headline: "EPA-Compliant Cleaning Solutions For Every Industry",
    subtitle: "Biodegradable, effective, and safe for your team. Cleaning chemistry that works as hard as you do.",
    ctaText: "View Solutions",
    ctaLink: "/detergents/",
  },
  {
    image: "/uploads/2020/11/vapore-dry-vapor.jpg",
    headline: "Dry Vapor Cleaning — Certified To Destroy Pathogens",
    subtitle: "Temperatures up to 347°F with no dry time. Ecological dry vapor systems eliminate bacteria, viruses, and mold on contact.",
    ctaText: "Explore Vapore Systems",
    ctaLink: "/cleaning-equipment/vapore-dry-vapor/",
  },
  {
    image: "/uploads/2020/11/custom-trailers.jpg",
    headline: "Custom Pressure Washer Trailers — Take The Power Anywhere",
    subtitle: "Mobile hot water cleaning rigs built to your specs. Perfect for fleet washing, construction sites, and remote locations.",
    ctaText: "View Trailer Options",
    ctaLink: "/cleaning-equipment/pressure-washer-accessories/single-dual-axle-trailer/",
  },
  {
    image: "/uploads/2020/11/wash-bay-facility.jpg",
    headline: "Wash Bay Installation & Upgrades For Any Fleet",
    subtitle: "From design to installation, we build wash bays that handle school buses, fire trucks, and heavy equipment — built to last decades.",
    ctaText: "Wash Bay Design",
    ctaLink: "/cleaning-equipment/wash-bay-design/",
  },
  {
    image: "/uploads/2020/10/Untitled-1.jpg",
    headline: "Wastewater Compliance Without The Headache",
    subtitle: "Stay ahead of regulations with wash water treatment and recycling systems designed for commercial operations.",
    ctaText: "Wastewater Solutions",
    ctaLink: "/cleaning-equipment/wastewater-treatment/",
  },
  {
    image: "/uploads/2020/10/Untitled-2.jpg",
    headline: "Val6 Infrared Heaters — Warm Your Bay, Not Your Budget",
    subtitle: "Fuel-efficient radiant heat for wash bays, shops, and warehouses. Instant warmth with lower operating costs.",
    ctaText: "View Val6 Heaters",
    ctaLink: "/cleaning-equipment/val-6-heaters/",
  },
  {
    image: "/uploads/2020/10/pressure-washers.jpg",
    headline: "Find The Right Pressure Washer For Your Operation",
    subtitle: "Hot water, cold water, electric, gas, diesel, natural gas — we carry every configuration for every application.",
    ctaText: "Browse Pressure Washers",
    ctaLink: "/cleaning-equipment/pressure-washers/",
  },
];

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden group">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 min-h-[600px] md:min-h-[700px]">
              {/* Background image with parallax feel */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms]"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/60" />
              {/* Glass noise texture */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_hsl(var(--accent)/0.08)_0%,_transparent_60%)]" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full min-h-[600px] md:min-h-[700px]">
                <div className="container text-center py-24 px-6">
                  <AnimatePresence mode="wait">
                    {selectedIndex === i && (
                      <motion.div
                        key={`slide-text-${i}`}
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h1 className="text-3xl font-black text-primary-foreground md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mx-auto" style={{ lineHeight: 1.1 }}>
                          {slide.headline}
                        </h1>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/80 leading-relaxed"
                        >
                          {slide.subtitle}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35, duration: 0.5 }}
                          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                          <Link
                            to={slide.ctaLink}
                            className="group/btn rounded-full glass-strong px-8 py-4 text-base font-bold text-primary shadow-xl hover:shadow-2xl active:scale-[0.97] transition-all duration-300 flex items-center gap-2"
                          >
                            {slide.ctaText} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                          <Link
                            to="/contact-us/"
                            className="rounded-full border-2 border-primary-foreground/30 backdrop-blur-md px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200"
                          >
                            Contact Us
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glass prev / next arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full glass-dark p-3 text-primary-foreground opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full glass-dark p-3 text-primary-foreground opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Glass dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 glass-dark rounded-full px-4 py-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-500 ${
              selectedIndex === i
                ? "w-8 h-2.5 bg-primary-foreground shadow-[0_0_8px_hsl(var(--primary-foreground)/0.5)]"
                : "w-2.5 h-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
