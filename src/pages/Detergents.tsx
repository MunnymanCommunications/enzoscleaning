import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DetergentList from "@/components/shared/DetergentList";

type Section = {
  id: string;
  title: string;
  link: string;
  intro: string;
  bgImage?: string;
  image?: string;
  products?: { name: string; bullets: string[]; specLink?: string }[];
  simpleProducts?: { name: string; desc: string }[];
  features?: { title: string; desc: string }[];
  videoEmbed?: string;
};

const sections: Section[] = [
  {
    id: "transportation",
    title: "Transportation / Truck & Bus Wash",
    link: "/detergents/transportation-truck-bus-wash/",
    intro:
      "Keep your trucks, buses and other fleet equipment looking clean with powerful detergent solutions designed to wash away the soils of the road.",
    products: [
      { name: "D-Salt", bullets: ["Salt Neutralizer & Brine Remover", "Diluted 20:1", "Non-acid", "Dissolves all ice melt residue"] },
      { name: "EZ Stay Wet", bullets: ["Extended dwell brushless truck wash", "Clings to surfaces longer for deeper cleaning", "Ideal for heavy road film and diesel soot"] },
      { name: "Squadrant", bullets: ["Multi-purpose fleet wash detergent", "Effective on painted surfaces and polished aluminum", "Streak-free, spot-free finish"] },
      { name: "EZ Brite SS", bullets: ["Stainless Steel and Aluminum cleaner", "Dilutes 8:1", "Removes rust stains without scrubbing"] },
      { name: "EZ Platinum", bullets: ["Cleans aluminum livestock trailers without scrubbing", "Removes black streaks and dirt"] },
      { name: "Sizzle", bullets: ["Brushless truck wash", "Dilutes 20:1", "Apply with high or low pressure or foaming arch"] },
      { name: "Sabre", bullets: ["General purpose cleaner"] },
    ],
  },
  {
    id: "construction",
    title: "Construction Equipment Cleaning",
    link: "/detergents/construction-equipment-cleaning/",
    intro:
      "Construction is dirty work. Tar, asphalt, grease and grime build up fast — our cleaners cut through it and protect your machinery.",
    products: [
      { name: "EZ Melt", bullets: ["Tar & Asphalt remover", "Removes cold tar sealer, asphalt sealer, asphalt and roofing tar", "Solvent based, Non-foaming"] },
      { name: "C-Tar Melt", bullets: ["Tar & Asphalt remover", "Water soluble, easily rinseable & non-hazardous", "Safe for wood, metal and masonry"] },
      { name: "EZ Slideout", bullets: ["Water-soluble", "Designed for application to truck beds prior to asphalt load", "Visual coating with minimal moisture"] },
      { name: "Asphalt", bullets: ["Removes asphalt buildup from equipment and tools", "Effective on fresh and cured asphalt"] },
      { name: "EZ Asphalt Remover G", bullets: ["Biodegradable and environmentally friendly", "Dissolves asphalt, tar and bitumen"] },
      { name: "Chisel", bullets: ["Sugar acid concrete cleaner", "Diluted 4:1", "Softens cured concrete", "Will not etch windows"] },
    ],
  },
  {
    id: "degreasers",
    title: "Degreasers",
    link: "/detergents/degreasers/",
    intro:
      "Grease is tenacious — water alone won't cut it. These degreasers blast away grease and oil from equipment, vehicles and surfaces.",
    products: [
      { name: "Grease Beast", bullets: ["Heavy duty cleaner and degreaser", "Formulated with pine oil", "Use on floors, walls, equipment, machinery"] },
      { name: "AP Plus BC", bullets: ["Water-based degreaser", "Removes heavy grease, oil build up and stains", "Cleans pressure washer coils as it runs"], specLink: "https://eacochem.com/wp-content/uploads/2024/11/productSpec_APPlusBC.pdf" },
      { name: "Rig Cleaner", bullets: ["Heavy-duty rig and equipment degreaser", "Removes drilling mud, crude oil and hydraulic fluid"] },
      { name: "Buckshot 10 Gauge", bullets: ["Extra heavy-duty degreaser", "Cuts heavy grease and oil on rigs, engines, forklifts", "Biodegradable"] },
      { name: "Buckshot 12 Gauge", bullets: ["Heavy duty degreaser", "Cuts film, oil, and grease from industrial parts and chassis", "Biodegradable"] },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Cleaning Products",
    link: "/detergents/specialty-cleaning-products/",
    intro:
      "Not every surface can be cleaned the same way. These specialty products are formulated for specific materials — from leather to chrome.",
    simpleProducts: [
      { name: "Leather Cleaner", desc: "Gently cleans and conditions leather upholstery and trim." },
      { name: "Fabric Cleaner", desc: "Removes stains and odors from fabric seats, carpets and headliners." },
      { name: "Wood Cleaner", desc: "Safe formula for wood surfaces — decks, fences and furniture." },
      { name: "Rubber & Tire Dressing", desc: "Restores and protects rubber surfaces with a lasting finish." },
      { name: "Metal Polish", desc: "Brings back the shine on aluminum, stainless steel and chrome." },
      { name: "Glass Cleaner", desc: "Streak-free clarity for automotive and commercial glass." },
    ],
  },
  {
    id: "restoration",
    title: "Restoration Detergents",
    link: "/detergents/restoration-detergents/",
    intro:
      "Rejuvenate worn surfaces like brick, glass and concrete. Restore the appearance of building surfaces with professional results.",
    simpleProducts: [
      { name: "EZ Renew", desc: "Restores appearance of brick, glass, concrete and stone surfaces." },
      { name: "EZ Restore", desc: "Removes efflorescence, mineral deposits and staining from masonry." },
      { name: "Graffiti Remover", desc: "Safely removes spray paint and graffiti without damage." },
      { name: "Concrete Cleaner", desc: "Heavy-duty formula for oil, grease and tire marks on concrete." },
    ],
  },
  {
    id: "disinfectants",
    title: "Disinfectants & Sanitizers",
    link: "/disinfecting/our-disinfectants-sanitizers/",
    image: "/uploads/2020/09/images.jpg",
    intro:
      "High-powered disinfectant and sanitizing solutions for use with pressure washers, sprayers, mist bottles and more.",
    simpleProducts: [
      { name: "Vital Oxide", desc: "Hospital-grade disinfectant safe around pets, children and everyday surfaces." },
      { name: "EPA-Registered Sanitizers", desc: "Eliminate germs, bacteria and viruses on hard surfaces." },
      { name: "Multi-Surface Disinfectants", desc: "Versatile formulas safe for many materials and applications." },
    ],
    videoEmbed: "https://www.youtube.com/embed/gPDj-PuufHg",
  },
  {
    id: "sprayers",
    title: "Disinfectant Sprayers",
    link: "/disinfecting/our-disinfectant-sprayers/",
    image: "/uploads/2020/09/download-1.jpg",
    intro:
      "Apply disinfectants and sanitizers quickly and efficiently with professional-grade sprayers — from electrostatic to backpack to handheld.",
    simpleProducts: [
      { name: "Electrostatic Sprayers", desc: "Charged droplets wrap around surfaces for complete coverage of hard-to-reach areas." },
      { name: "Backpack Sprayers", desc: "Large-capacity portable sprayers for gyms, classrooms and open areas." },
      { name: "Handheld Sprayers", desc: "Compact sprayers for high-touch surfaces and small spaces." },
    ],
  },
  {
    id: "vapore",
    title: "Vapore Dry Vapor Disinfecting",
    link: "/disinfecting/vapore-dry-vapor-disinfecting/",
    image: "/uploads/2020/10/Preventive_sm.jpg",
    intro:
      "Vapore's commercial vapor cleaning equipment cleans, sanitizes and disinfects any surface using hot vapor (4–6% humidity) — no chemicals required.",
    features: [
      { title: "Chemical-Free", desc: "Just water and heat for a completely ecological clean." },
      { title: "Low Dry Time", desc: "Only 4-6% humidity means surfaces dry almost instantly." },
      { title: "Versatile", desc: "Safe for electronics, upholstery, engines and medical equipment." },
    ],
  },
  {
    id: "best-practices",
    title: "Disinfecting Best Practices",
    link: "/disinfecting/disinfecting-best-practices/",
    intro:
      "Effective disinfection takes more than spraying a surface. Follow these protocols to actually eliminate harmful pathogens.",
    simpleProducts: [
      { name: "Choose the Right Product", desc: "Select EPA-registered disinfectants for the pathogens you need to eliminate." },
      { name: "Follow Contact Time", desc: "Disinfectants need wet contact time. Don't wipe too soon." },
      { name: "Clean Before Disinfecting", desc: "Remove visible dirt first — disinfectants work best on clean surfaces." },
      { name: "Use Proper PPE", desc: "Gloves, eye protection, and ventilation during application." },
      { name: "High-Touch Surfaces First", desc: "Doorknobs, light switches, handrails, restrooms, shared equipment." },
      { name: "Document Your Protocol", desc: "Maintain cleaning logs and schedules for compliance." },
    ],
  },
];

export default function Detergents() {
  return (
    <>
      <PageHero
        title="Detergents & Disinfectants"
        subtitle="Powerful cleaning, sanitizing and disinfecting solutions for every application."
        bgImage="/uploads/2020/11/hotsy_0003_Layer-0.jpg"
      />
      <section className="py-12">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            From specialty detergents and degreasers to hospital-grade disinfectants and dry vapor systems, Enzo's offers a complete chemistry lineup. Browse the categories below — every product can be paired with the right equipment for the job.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {sections.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-padding scroll-mt-24 ${idx % 2 === 0 ? "bg-muted/30" : ""}`}
        >
          <div className="container">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary">{s.title}</h2>
                  <p className="mt-3 max-w-3xl text-muted-foreground">{s.intro}</p>
                </div>
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
                >
                  View {s.title} →
                </Link>
              </div>
            </AnimatedSection>

            {s.image && (
              <AnimatedSection>
                <div className="mb-8 max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </AnimatedSection>
            )}

            {s.videoEmbed && (
              <AnimatedSection>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto mb-8">
                  <iframe
                    src={s.videoEmbed}
                    title={s.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </AnimatedSection>
            )}

            {s.products && <DetergentList items={s.products} />}

            {s.simpleProducts && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {s.simpleProducts.map((p, i) => (
                  <AnimatedSection key={p.name} delay={i * 0.05}>
                    <div className="bg-card rounded-xl border border-border p-5 h-full hover:border-primary/30 hover:shadow-md transition-all">
                      <h3 className="font-heading font-bold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}

            {s.features && (
              <div className="grid gap-4 sm:grid-cols-3">
                {s.features.map((f, i) => (
                  <AnimatedSection key={f.title} delay={i * 0.08}>
                    <div className="bg-card rounded-xl border border-border p-5 text-center">
                      <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                      <p className="text-xs text-muted-foreground mt-2">{f.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <CTASection
        title="Get the Right Chemistry for Your Job"
        description="Enzo's offers a complete catalog of detergents, degreasers, disinfectants and application equipment. Let our team help you find the right solution."
      />
    </>
  );
}
