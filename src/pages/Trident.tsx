import { Link } from "react-router-dom";
import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Shield, Droplets, Sparkles, Layers, ChevronDown, ChevronUp, Star, CheckCircle2, ArrowRight, Wrench, GraduationCap, Truck } from "lucide-react";
import { useTridentPageTracking, useTridentProductTracking, useTridentEventTracking, useTridentSectionTracking } from "@/hooks/useTridentTracking";

/* ──────────────────────── PRODUCT DATA ──────────────────────── */

const sealers = [
  {
    name: "Hurricane CAT 5",
    sku: "TDS-HURRICAT5 K",
    tagline: "Ultimate New Generation 2-Part Urethane Wet Look Sealer",
    description: "Hurricane CAT 5 is the ultimate in 2-part sealers made with a new generation urethane providing ultra-durable surface protection. Its Armor Bond joint stabilization hardens joint sand to prevent sand washout. It provides the deepest color enhancement with high-gloss finish using T3 True Tone Technology. Added antifungal protects the sealer film from mold, moss and algae.",
    highlights: ["Ultra-durable urethane protection", "Armor Bond joint stabilization", "Deepest color enhancement — high gloss", "T3 True Tone Technology", "Anti-mold / anti-algae formula"],
    badge: "Best Seller",
  },
  {
    name: "Hurricane CAT 4",
    sku: "TDS-HURRICAT4-K",
    tagline: "Advanced Sealer Performance 2-Part Urethane Wet Look Sealer",
    description: "Hurricane CAT 4's advanced technology makes it the new industry standard of 2-part urethane sealers providing premium surface protection. Armor Bond joint stabilization hardens joint sand to prevent sand washout. Deep color enhancement with gloss finish using T3 True Tone Technology with added antifungal protection.",
    highlights: ["Premium urethane protection", "Armor Bond joint stabilization", "Deep color enhancement — gloss finish", "T3 True Tone Technology", "Concentrated water-based formula"],
    badge: "Pro Choice",
  },
  {
    name: "Hurricane CAT 3",
    sku: "TDS-HURRICAT3 K",
    tagline: "Pro Grade New Generation 2-Part Urethane Wet Look Sealer",
    description: "Hurricane CAT 3 is an improvement to the industry standard of 2-part sealers with a new generation urethane for advanced durability. Armor Bond joint stabilization hardens joint sand. Semi-gloss finish with T3 True Tone Technology and antifungal protection.",
    highlights: ["New generation urethane formula", "Armor Bond joint stabilization", "Semi-gloss finish", "Super concentrated — covers more per gallon", "Added antifungal protection"],
  },
  {
    name: "Hurricane EZ",
    sku: "TDS-HURRIEZ K",
    tagline: "Mix & Use — No Dilution Necessary",
    description: "Hurricane EZ is a mix-and-use 2-part sealer with new generation urethane for reliable durability. No dilution necessary — just mix and apply. Armor Bond joint stabilization, color enhancement with semi-gloss finish and T3 True Tone Technology.",
    highlights: ["No dilution required — saves time on site", "Armor Bond joint stabilization", "Semi-gloss finish", "New generation urethane", "Perfect for crews who want speed"],
  },
  {
    name: "Tsunami",
    sku: "TDS-TSUNAMI P",
    tagline: "Premium Wet Look Joint Stabilizing Sealer",
    description: "Tsunami deeply enhances the surface with a wet look and satin finish — enhancement level depends on the surface. Hardens joint sand to reduce washout, weeds and insect infestation. Rain safe in 90 minutes. Solvent-based film forming sealer.",
    highlights: ["Wet look with satin finish", "Rain safe in 90 minutes", "Joint sand stabilization", "Anti-weed & anti-insect", "Solvent-based for maximum adhesion"],
  },
  {
    name: "Typhoon",
    sku: "TDS-TYPHOON P",
    tagline: "Industry's Most Trusted Moderately Enhancing Joint Stabilizing Sealer",
    description: "Typhoon moderately enhances with a semi-gloss finish while protecting from contaminants and making maintenance easier. Hardens joint sand to reduce washout, weeds and insect infestation with added antifungal protection.",
    highlights: ["Moderate enhancement — semi-gloss", "30+ years of industry trust", "Joint sand stabilization", "Water-based film forming sealer", "Anti-mold / anti-algae"],
  },
  {
    name: "Cyclone",
    sku: "TDS-CYCLONE P",
    tagline: "Industry's Most Trusted Joint Stabilizing Sealer For Over 30 Years",
    description: "Cyclone locks in a clean, natural look with a matte finish. Protects from contaminants and makes cleaning easier. Hardens joint sand to reduce washout, weeds and insect infestation. Water-based film forming sealer with antifungal protection.",
    highlights: ["Natural matte finish", "Over 30 years of proven performance", "Joint sand stabilization", "Water-based — low VOC", "Anti-mold / anti-algae protection"],
  },
  {
    name: "Jetty",
    sku: "TDS-JETTY P",
    tagline: "Wet Look Hybrid Sealer",
    description: "Jetty is a high performance silane/siloxane polymer blend designed to deeply enhance surface tone of natural and manufactured stone while maintaining the natural look. Superior protection from water penetration, salt, freeze/thaw damage and staining. Water-based penetrating and film forming hybrid sealer.",
    highlights: ["Hybrid penetrating + film forming", "Deep tone enhancement for stone", "Salt & freeze/thaw protection", "Oil & food stain resistance", "Ideal for natural stone installations"],
  },
  {
    name: "Barrier",
    sku: "TDS-BARRIER P",
    tagline: "Ultimate Stain Blocking Surface Sealer",
    description: "Barrier is a penetrating sealer that blocks oil, organic and water staining, making cleaning and maintenance easier. Water-based formula offers ultra durable and long lasting protection without changing the look of the surface.",
    highlights: ["Penetrating stain blocker", "Invisible — doesn't change surface look", "Oil, organic & water stain protection", "Ultra durable & long lasting", "Water-based formula"],
  },
  {
    name: "Break Wall",
    sku: "TDS-BREAKWALL P",
    tagline: "Superior Water Repelling & Salt Blocking Sealer",
    description: "Break Wall is a high performance silane/siloxane blend that protects from water penetration, salt and freeze/thaw damage. Advanced reactive chemistry provides excellent surface protection. Water-based invisible penetrating sealer ideal for vertical surfaces.",
    highlights: ["Water repelling & salt blocking", "Freeze/thaw damage protection", "Invisible penetrating sealer", "Perfect for retaining walls & planters", "Water-based formula"],
  },
  {
    name: "Sea Wall",
    sku: "TDS-SEAWALL P",
    tagline: "Ultra Water Repelling & Salt Blocking Sealer",
    description: "Sea Wall is a high performance silane/siloxane blend with EZ Nano Technology providing the ultimate in surface protection from water penetration, salt and freeze/thaw damage. Solvent-based invisible penetrating sealer.",
    highlights: ["EZ Nano Technology", "Ultimate water & salt protection", "Solvent-based for deep penetration", "Invisible finish", "Advanced reactive chemistry"],
  },
];

const cleaners = [
  {
    name: "Wipe Out",
    sku: "TDC-WIPEOUT",
    tagline: "Robust Surface Cleaner",
    description: "Wipe Out restores and deep cleans by eliminating deep-set dirt, grime, tire scuffing and environmental soiling. Prepares the surface for sealing by creating optimal conditions for sealer adhesion and ultimate aesthetic value. Flexi-dilute super concentrated formula is customizable to match stain severity.",
    highlights: ["Removes deep-set dirt & grime", "Eliminates tire scuffing", "Flexi-dilute concentration system", "Prepares surface for optimal sealer adhesion", "Super concentrated — goes further per gallon"],
    sizes: ["1 Gallon Bottles", "5 Gallon Pail"],
  },
  {
    name: "White Water",
    sku: "TDC-WHITEWTR",
    tagline: "Powerful Efflorescence, Salt & Mineral Stain Remover",
    description: "White Water removes efflorescence, mineral and salt deposit stains quickly. Attacks and cleans stains from irrigation systems, iron and hard water. Deep cleans and prepares the surface for sealing by creating optimal conditions for adhesion. Flexi-dilute concentrated formula.",
    highlights: ["Removes efflorescence fast", "Cleans mineral & salt deposits", "Iron & hard water stain removal", "Flexi-dilute formula", "Optimal surface prep for sealing"],
    sizes: ["1 Gallon Bottles", "5 Gallon Pail"],
  },
  {
    name: "Point Break",
    sku: "TDC-POINTBRK",
    tagline: "Advanced Organic Stain Remover",
    description: "Point Break is a powerful organic spot cleaner that dislodges common non-greasy stains. Efficiently cleans moss, mold, mildew, berries and leaf stains. Tough on rust, wine and non-greasy food stains. Also attacks fertilizer and mud dauber stains. Flexi-dilute concentrated formula.",
    highlights: ["Removes moss, mold & mildew stains", "Cleans berry & leaf stains", "Attacks rust & wine spots", "Fertilizer stain removal", "Flexi-dilute concentration"],
  },
  {
    name: "Safe Harbor",
    sku: "TDC-SAFEHARBR",
    tagline: "Fast Acting Oil & Grease Spot Remover",
    description: "Safe Harbor is a powerful grease and oil spot cleaner that works on both petroleum and food-based oil stains. Ready-to-use formula with Clean Rinse Technology — dirt and residue rinse away easily.",
    highlights: ["Petroleum & food oil removal", "Ready to use — no dilution", "Clean Rinse Technology", "Fast acting formula", "Professional-grade spot treatment"],
    sizes: ["1 Gallon Bottles", "5 Gallon Pail"],
  },
];

const strippers = [
  {
    name: "Rip Tide",
    sku: "TDC-RIPTIDE P",
    tagline: "Powerful Sealer Stripper",
    description: "Rip Tide effectively strips away a variety of sealers including acrylic, acrylic latex, polyurethane and other resins. Also used as a spot cleaner to remove paint spots. Reliable application process — spray, scrub, rinse away old sealer easily with Clean Rinse Technology. Ready to use, no dilution required.",
    highlights: ["Strips acrylic, latex & polyurethane", "Removes paint spots", "Clean Rinse Technology", "Ready to use — no dilution", "Spray, scrub & rinse process"],
  },
  {
    name: "Tidal Wave X",
    sku: "TDC-TIDALWAVE P",
    tagline: "X-Treme Universal Sealer Stripper",
    description: "Tidal Wave X is the sealer stripper you trust, now in an improved hybrid formula designed for both spray and roll-on applications. Effectively removes acrylic, acrylic latex, polyurethane and other resin-based coatings. Surface-friendly formula delivers reliable stripping while remaining gentle on the substrate.",
    highlights: ["Improved hybrid formula", "Spray or roll-on application", "Strips all major sealer types", "Surface-friendly — gentle on substrate", "Professional contractor preferred"],
    badge: "New Formula",
  },
];

const sands = [
  {
    name: "PolySweep Polymeric Sand",
    tagline: "Advanced Polymer-Modified Joint Sand",
    description: "PolySweep hardens when activated with water — locks joints, prevents weed growth and resists insect intrusion. Available in six colors to match any installation.",
    colors: ["Black", "Fieldstone", "Gray", "Pearl", "Platinum", "Tan"],
    highlights: ["Hardens with water activation", "Prevents weed growth", "Resists insect intrusion", "6 color options", "Resists washout"],
    badge: "Most Popular",
  },
  {
    name: "PS-1500 RJS Rapid Joint Sand",
    tagline: "Premium Rapid-Set Polymeric Sand",
    description: "PS-1500 RJS is a premium rapid-set polymeric sand for segmental pavers and stone. Delivers faster cure times and superior joint stability for demanding commercial installations.",
    colors: ["Driftwood", "Pebble", "Slate"],
    highlights: ["Rapid set formula", "Superior joint stability", "Commercial grade performance", "3 natural color options", "Premium polymer technology"],
  },
  {
    name: "Jointing Sand",
    tagline: "Clean, Consistent Joint Fill Sand",
    description: "Standard joint-fill sand for paver installations — clean, consistent and easy to apply. Available in six colors to coordinate with any hardscape design.",
    colors: ["Black", "Fieldstone", "Gray", "Pearl", "Platinum", "Tan"],
    highlights: ["Clean & consistent", "Easy to apply", "6 color options", "Ideal for standard installations", "Economical choice"],
  },
];

const tools = [
  {
    name: "Trident Power Sprayer",
    sku: "TDT-PWRSPRAYER",
    tagline: "Professional Application Equipment",
    description: "Heavy-duty power sprayer designed for water-based sealers and cleaners. Delivers consistent, even coverage across large surface areas — essential for professional contractor efficiency.",
    highlights: ["Built for water-based sealers & cleaners", "Consistent even coverage", "Covers large areas fast", "Professional grade build quality"],
  },
  {
    name: '30" Double Foam Surface Squeegee',
    sku: "TDT-DBLFMSQGE",
    tagline: "For Joint Stabilizing Sealers",
    description: "Wide-format double foam squeegee for even sealer distribution across paver surfaces. Ensures sealer penetrates joints for maximum stabilization.",
    highlights: ["30-inch coverage width", "Double foam design", "Optimal joint penetration", "Designed for joint stabilizing sealers"],
  },
  {
    name: '9" Slit Foam Roller — Solvent Based',
    sku: "TDT-SFR-9SB",
    tagline: "For Solvent Based Sealers",
    description: "Purpose-built foam roller for solvent-based sealer application. Slit foam design ensures even coat distribution without bubbles or streaks.",
    highlights: ["Solvent-resistant foam", "Slit design prevents bubbles", "Even coat distribution", "Professional finish"],
  },
  {
    name: '9" Slit Foam Roller — Water Based',
    sku: "TDT-SFR-9WB",
    tagline: "For Water Based Sealers",
    description: "Purpose-built foam roller for water-based sealer application. Delivers smooth, consistent results on pavers and concrete.",
    highlights: ["Designed for water-based sealers", "Smooth consistent application", "Slit foam technology", "Affordable consumable"],
  },
];

/* ──────────────────────── COMPONENTS ──────────────────────── */

function ProductCard({ product, index, onView }: { product: typeof sealers[0] & { colors?: string[]; sizes?: string[] }; index: number; onView?: (name: string, sku: string) => void }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    if (!expanded && onView) {
      onView(product.name, product.sku);
    }
    setExpanded(!expanded);
  };

  return (
    <AnimatedSection delay={Math.min(index * 0.05, 0.3)} variant="fadeUp">
      <div className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300">
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              <Star className="h-3 w-3" /> {product.badge}
            </span>
          </div>
        )}

        <div className="p-6">
          <div className="mb-1">
            {product.sku && (
              <span className="text-xs font-mono text-muted-foreground/60">{product.sku}</span>
            )}
          </div>
          <h3 className="font-heading text-lg font-bold">{product.name}</h3>
          <p className="text-sm font-medium text-primary mt-1">{product.tagline}</p>

          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {expanded ? product.description : product.description.slice(0, 120) + (product.description.length > 120 ? "..." : "")}
          </p>

          {product.description.length > 120 && (
            <button
              onClick={handleExpand}
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          )}

          <div className="mt-4 space-y-1.5">
            {product.highlights.slice(0, expanded ? undefined : 3).map((h) => (
              <div key={h} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-xs text-muted-foreground">{h}</span>
              </div>
            ))}
          </div>

          {product.colors && (
            <div className="mt-4">
              <span className="text-xs font-semibold text-foreground">Available Colors:</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {product.colors.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mt-3">
              <span className="text-xs font-semibold text-foreground">Available Sizes:</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {product.sizes.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-border">
            <Link
              to="/contact-us/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Get Contractor Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function CategorySection({
  icon: Icon,
  title,
  subtitle,
  description,
  products,
  id,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  products: any[];
  id: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <AnimatedSection variant="blurIn">
        <div className="flex items-start gap-4 mb-3">
          <div className="rounded-xl bg-primary/10 p-3 shrink-0">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">{title}</h2>
            <p className="text-sm font-medium text-primary mt-1">{subtitle}</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">{description}</p>
      </AnimatedSection>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────── MAIN PAGE ──────────────────────── */

const categories = [
  {
    id: "sealers",
    icon: Shield,
    title: "Sealers",
    subtitle: `${sealers.length} Products — From Wet Look to Invisible Protection`,
    description: "Protect and enhance pavers, concrete and natural stone with professional-grade sealers. Trident's sealer lineup covers every finish — from the ultra high-gloss Hurricane CAT 5 to the invisible penetrating Barrier. Every product features advanced chemistry built for contractors who demand durability, color enhancement and joint stabilization that lasts.",
    products: sealers,
  },
  {
    id: "cleaners",
    icon: Sparkles,
    title: "Cleaners",
    subtitle: `${cleaners.length} Products — Deep Clean Before You Seal`,
    description: "Surface prep is everything. Trident cleaners are formulated to remove deep-set dirt, efflorescence, organic stains, oil and grease — creating the optimal surface conditions for sealer adhesion. The flexi-dilute system lets you customize concentration to match stain severity, saving product and maximizing results.",
    products: cleaners,
  },
  {
    id: "strippers",
    icon: Droplets,
    title: "Removers & Strippers",
    subtitle: `${strippers.length} Products — Strip Old Sealers Fast`,
    description: "When a surface needs to be re-sealed or restored, Trident strippers remove old acrylic, latex, polyurethane and resin-based coatings quickly and cleanly. Clean Rinse Technology means less time scrubbing and faster turnaround between jobs.",
    products: strippers,
  },
  {
    id: "sand",
    icon: Layers,
    title: "Polymeric Sand & Jointing Sand",
    subtitle: `${sands.length} Product Lines — Lock Joints, Prevent Weeds`,
    description: "Lock paver joints in place, prevent weed growth and resist insect intrusion with Trident's sand systems. From the advanced PolySweep polymeric sand to the rapid-set PS-1500 RJS, every formula is designed for contractor efficiency and long-term joint stability. Multiple color options to match any installation.",
    products: sands,
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Application Tools & Equipment",
    subtitle: `${tools.length} Products — The Right Tools for the Job`,
    description: "Professional results require professional tools. Trident's application equipment is purpose-built to work with their sealer and cleaner formulas — from the power sprayer for large commercial projects to foam rollers engineered to eliminate bubbles and streaks.",
    products: tools,
  },
];

const navItems = categories.map((c) => ({ id: c.id, label: c.title, count: c.products.length }));

export default function Trident() {
  useTridentPageTracking();
  useTridentSectionTracking();
  const { trackEvent } = useTridentEventTracking();

  return (
    <>
      <PageHero
        title="Trident Hardscape Products"
        subtitle="Professional-grade sealers, cleaners, strippers, polymeric sand and application tools — trusted by contractors across Ohio."
      />

      {/* Trident University CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary py-6">
        <div className="container">
          <AnimatedSection variant="fadeIn">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-heading font-bold text-lg">Trident University — Contractor Certification</h3>
                  <p className="text-sm text-primary-foreground/80">Training is required for warranty coverage. Next session: May 7, 2025</p>
                </div>
              </div>
              <Link
                to="/hardscaping/trident/university/"
                onClick={() => trackEvent("clicked_university_button", { location: "top_banner" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:scale-105 transition-all whitespace-nowrap"
              >
                Learn More & Register <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + trust signals */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enzo's is proud to be your local source for <strong className="text-foreground">Trident</strong> — a leader in hardscape protection and maintenance. Whether you're sealing a new paver patio, stripping an old coating, or locking joints with polymeric sand, Trident has the right product for the job.
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

          {/* Trust bar */}
          <AnimatedSection variant="scaleIn" delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { value: "30+", label: "Years of Industry Trust" },
                { value: "40+", label: "Products Available" },
                { value: "100%", label: "Contractor Focused" },
                { value: "Local", label: "Stock & Support from Enzo's" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick nav */}
          <AnimatedSection variant="fadeIn" delay={0.15}>
            <div className="sticky top-20 z-30 -mx-4 px-4 py-3 mb-12 glass rounded-xl">
              <div className="flex flex-wrap justify-center gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    {item.label}
                    <span className="rounded-full bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{item.count}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Product categories */}
          <div className="space-y-24">
            {categories.map((cat) => (
              <CategorySection key={cat.id} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Rigs & Equipment Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need a Rig? We Build Those Too.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mobile pressure washing contractors, landscapers and hardscape professionals often need more than just products — they need a complete rig to get the job done. A "rig" can be a trailer-mounted system or a truck-mounted system, and Enzo's can help you build exactly what you need.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Truck, title: "Trailer-Mounted Systems", desc: "Complete trailer rigs with pressure washers, water tanks, hose reels and chemical systems — ready to tow to any job site." },
              { icon: Wrench, title: "Truck-Mounted Systems", desc: "Skid-mounted units designed for pickup beds and flatbeds. All the power of a trailer rig with a smaller footprint." },
              { icon: Shield, title: "Rig Service & Parts", desc: "Hose reels, wands, high-pressure hoses, fittings, accessories and replacement parts. Plus full rig service and repairs." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm h-full">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-heading font-bold text-xl mb-3">From Training to the Job Site</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Completing Trident University doesn't just certify you on products — it opens the door to a full partnership with Enzo's. Once you're trained and working with Trident products, we can help with rig builds, upgrades, service, replacement parts, and ongoing support. Everything you need to run a professional hardscape sealing and cleaning operation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rigs", "Trailer Systems", "Truck Mounts", "Hose Reels", "Wands", "High-Pressure Hoses", "Accessories", "Parts & Service"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{item}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why contractors choose Trident */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimatedSection variant="blurIn">
            <h2 className="font-heading text-2xl font-bold text-center md:text-3xl mb-12">
              Why Contractors Choose Trident Through Enzo's
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Proven Chemistry", desc: "Over 30 years of R&D in sealer technology. Trident products are formulated by chemists who understand hardscape — not repackaged generics." },
              { title: "Contractor-First Pricing", desc: "Contact Enzo's for volume pricing and contractor accounts. We'll match the right products to your project scope and budget." },
              { title: "Local Inventory & Support", desc: "No waiting for shipments. Enzo's keeps Trident products in stock so you can pick up what you need and get back to the job site." },
              { title: "Complete System Approach", desc: "From surface prep with Wipe Out to sealing with Hurricane CAT 5 to locking joints with PolySweep — Trident covers the entire workflow." },
              { title: "Color Matching", desc: "Multiple sand colors and sealer finish options ensure every installation looks exactly the way your client expects." },
              { title: "Certification & Training", desc: "Enzo's hosts Trident University — complete training and certification so your crew is warranty-approved and field-ready." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} variant="fadeUp">
                <div className="glass rounded-xl p-6 h-full">
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Order Trident Products?"
        description="Contact Enzo's for contractor pricing, product recommendations and local pickup. Our team will match the right Trident products to your project."
      />
    </>
  );
}
