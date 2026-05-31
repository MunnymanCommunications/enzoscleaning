import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SchematicHotspot {
  id: string;
  label: string;
  description: string;
  x: string; // percentage
  y: string; // percentage
}

// x/y are percentages of the schematic image itself (not the padded wrapper),
// so positions are identical across every device.
// Each dot center is placed so its right edge clears the first word by ~10 px.
// Reference: "Neutralizer Undercarriage Wash Spray Bar" entry dot at 27 %, 87 %
// — the user confirmed that position looks correct.
const hotspots: SchematicHotspot[] = [
  {
    id: "d-salt-tank",
    label: "250-Gallon D-Salt Tank",
    description: "Stores D-Salt neutralizing detergent that chemically neutralizes road salt and brine on contact — not just washing, but stopping corrosion at the source.",
    x: "2%",
    y: "43%",
  },
  {
    id: "fleet-wash",
    label: "Fleet Wash (Alkaline) System",
    description: "Alkaline cleaning system that removes heavy road grime, grease, and dirt from vehicle exteriors before the rinse cycle.",
    x: "22%",
    y: "24%",
  },
  {
    id: "detergent-tank",
    label: "Detergent Tank",
    description: "Central detergent distribution tank feeding the soap arch. Automatically mixes and delivers cleaning solution at the optimal concentration.",
    x: "30%",
    y: "29%",
  },
  {
    id: "water-holding-tank",
    label: "250–750 Gallon Water Holding Tank",
    description: "High-capacity water reservoir ensures consistent water pressure and flow even during peak wash demand — no interruptions mid-wash.",
    x: "32%",
    y: "17%",
  },
  {
    // y aligned to the first word "Soap", not the spec line below it
    id: "soap-arch",
    label: "Soap Arch — 10 Nozzles",
    description: "65° spray pattern at 40 GPM @ 30 PSI. Delivers uniform soap coverage across the full width and height of any vehicle passing through.",
    x: "44%",
    y: "71%",
  },
  {
    id: "wash-arch",
    label: "Wash Arch — 43 Nozzles",
    description: "25° spray pattern at 120 GPM @ 60 PSI. High-pressure wash arch blasts away dirt and contaminants with precision coverage.",
    x: "61%",
    y: "65%",
  },
  {
    id: "ro-system",
    label: "Reverse Osmosis Rinse System",
    description: "Advanced water purification delivers a spot-free final rinse — no water spots, no mineral deposits, just a clean, professional finish every time.",
    x: "57%",
    y: "8%",
  },
  {
    id: "rinse-arch",
    label: "Rinse Arch — 23 Nozzles",
    description: "40° spray at 70 GPM @ 22 PSI. Final rinse arch using RO-purified water for a streak-free, spot-free finish.",
    x: "73%",
    y: "10%",
  },
  {
    id: "undercarriage-bar-entry",
    label: "Neutralizer Undercarriage Wash Spray Bar",
    description: "8 nozzles at 25° delivering 35 GPM @ 100 PSI. Drive-over undercarriage spray bar blasts salt and brine from underneath — the most critical area for corrosion prevention.",
    x: "27%",
    y: "87%",
  },
  {
    id: "undercarriage-bar-exit",
    label: "Neutralizer Undercarriage Wash Spray Bar (Exit)",
    description: "Second 8-nozzle spray bar at the exit ensures complete undercarriage coverage — nothing gets missed, even on the longest vehicles.",
    x: "77%",
    y: "59%",
  },
];

export default function InteractiveSchematic() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const activeSpot = hotspots.find((s) => s.id === activeHotspot) ?? null;

  return (
    <div className="relative w-full">
      {/* Schematic container — no overflow-hidden so desktop cards aren't clipped */}
      <div className="relative rounded-2xl bg-white p-4 md:p-8 shadow-xl border border-border">
        {/* Inner wrapper hugs the image exactly so dot percentages map to the
            image — not the padding — keeping positions identical on every device. */}
        <div className="relative">
        <img
          src="/uploads/wash-bay-schematic.png"
          alt="Enzo's Automatic Drive-Through Wash System schematic showing D-Salt tank, soap arch, wash arch, reverse osmosis rinse system, and Neutralizer undercarriage spray bars"
          className="w-full h-auto rounded-xl"
          loading="lazy"
          width={1300}
          height={850}
        />

        {/* Hotspot dots */}
        {hotspots.map((spot) => {
          const xNum = parseFloat(spot.x);
          const yNum = parseFloat(spot.y);
          const isOpen = activeHotspot === spot.id;

          // Flip card to the left only for right-edge hotspots to prevent overflow.
          // Default: card opens to the RIGHT → dot sits to the left of the card text.
          const cardLeft = xNum <= 62;
          // Flip card above when the hotspot is near the bottom of the diagram.
          const cardBelow = yNum <= 65;

          return (
            <div
              key={spot.id}
              className="absolute z-10"
              style={{ left: spot.x, top: spot.y }}
            >
              <button
                className="group relative -translate-x-1/2 -translate-y-1/2 block"
                onMouseEnter={() => { if (!isMobile) setActiveHotspot(spot.id); }}
                onMouseLeave={() => { if (!isMobile) setActiveHotspot(null); }}
                onClick={() => setActiveHotspot(isOpen ? null : spot.id)}
                aria-label={`Learn about ${spot.label}`}
              >
                <motion.div className="relative" whileHover={{ scale: 1.3 }}>
                  <span
                    className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                  <span className="relative block w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary border-2 border-white shadow-lg cursor-pointer" />
                </motion.div>
              </button>

              {/* Desktop tooltip — positioned relative to dot, never shown on mobile */}
              {!isMobile && (
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      role="tooltip"
                      className="absolute z-20 w-64 lg:w-72 p-3 md:p-4 rounded-xl bg-card border border-primary/30 shadow-2xl pointer-events-none"
                      style={{
                        ...(cardLeft ? { left: "14px" } : { right: "14px" }),
                        ...(cardBelow ? { top: "-6px" } : { bottom: "-6px" }),
                      }}
                    >
                      <h4 className="font-heading font-bold text-primary text-sm md:text-base mb-1 leading-tight">
                        {spot.label}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                        {spot.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
        </div>
      </div>

      {/* Mobile modal — fixed centered overlay with X button */}
      <AnimatePresence>
        {isMobile && activeSpot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            onClick={() => setActiveHotspot(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm rounded-2xl bg-card border border-primary/30 shadow-2xl p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 p-1.5 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                onClick={() => setActiveHotspot(null)}
                aria-label="Close"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
              <h4 className="font-heading font-bold text-primary text-base mb-2 leading-tight pr-8">
                {activeSpot.label}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeSpot.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeHotspot && (
        <p className="text-center text-xs text-muted-foreground mt-3 animate-pulse">
          Hover or tap the blue dots to explore each system component
        </p>
      )}
    </div>
  );
}
