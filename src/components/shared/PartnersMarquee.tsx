const partners = [
  { name: "Hotsy", src: "/uploads/partners/hotsy.png" },
  { name: "Kärcher", src: "/uploads/partners/karcher.png" },
  { name: "Minuteman", src: "/uploads/partners/minuteman.png" },
  { name: "Mi-T-M", src: "/uploads/partners/mi-t-m.png" },
  
  { name: "Southeast VAL6", src: "/uploads/partners/southeast-val6.png" },
  { name: "Vital Oxide", src: "/uploads/partners/vital-oxide.jpg" },
  { name: "Awash Eco Wash Systems", src: "/uploads/partners/awash.jpg" },
  { name: "EZClean", src: "/uploads/partners/ezclean.jpg" },
];

export default function PartnersMarquee() {
  const loop = [...partners, ...partners];
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold mb-10">
          Our <span className="text-gradient-shine">Partners</span>
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((p, i) => (
            <div key={i} className="flex h-24 w-48 shrink-0 items-center justify-center">
              <img
                src={p.src}
                alt={`${p.name} logo`}
                className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
