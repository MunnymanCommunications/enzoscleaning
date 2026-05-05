import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SchematicHotspot {
  id: string;
  label: string;
  description: string;
  x: string; // percentage
  y: string; // percentage
}

const hotspots: SchematicHotspot[] = [
  {
    id: "d-salt-tank",
    label: "250-Gallon D-Salt Tank",
    description: "Stores D-Salt neutralizing detergent that chemically neutralizes road salt and brine on contact — not just washing, but stopping corrosion at the source.",
    x: "5%",
    y: "55%",
  },
  {
    id: "fleet-wash",
    label: "Fleet Wash (Alkaline) System",
    description: "Alkaline cleaning system that removes heavy road grime, grease, and dirt from vehicle exteriors before the rinse cycle.",
    x: "18%",
    y: "28%",
  },
  {
    id: "detergent-tank",
    label: "Detergent Tank",
    description: "Central detergent distribution tank feeding the soap arch. Automatically mixes and delivers cleaning solution at the optimal concentration.",
    x: "30%",
    y: "32%",
  },
  {
    id: "water-holding-tank",
    label: "250–750 Gallon Water Holding Tank",
    description: "High-capacity water reservoir ensures consistent water pressure and flow even during peak wash demand — no interruptions mid-wash.",
    x: "32%",
    y: "15%",
  },
  {
    id: "soap-arch",
    label: "Soap Arch — 10 Nozzles",
    description: "65° spray pattern at 40 GPM @ 30 PSI. Delivers uniform soap coverage across the full width and height of any vehicle passing through.",
    x: "38%",
    y: "72%",
  },
  {
    id: "wash-arch",
    label: "Wash Arch — 43 Nozzles",
    description: "25° spray pattern at 120 GPM @ 60 PSI. High-pressure wash arch blasts away dirt and contaminants with precision coverage.",
    x: "52%",
    y: "25%",
  },
  {
    id: "ro-system",
    label: "Reverse Osmosis Rinse System",
    description: "Advanced water purification delivers a spot-free final rinse — no water spots, no mineral deposits, just a clean, professional finish every time.",
    x: "60%",
    y: "12%",
  },
  {
    id: "rinse-arch",
    label: "Rinse Arch — 23 Nozzles",
    description: "40° spray at 70 GPM @ 22 PSI. Final rinse arch using RO-purified water for a streak-free, spot-free finish.",
    x: "82%",
    y: "12%",
  },
  {
    id: "undercarriage-bar-entry",
    label: "Neutralizer Undercarriage Wash Spray Bar",
    description: "8 nozzles at 25° delivering 35 GPM @ 100 PSI. Drive-over undercarriage spray bar blasts salt and brine from underneath — the most critical area for corrosion prevention.",
    x: "35%",
    y: "85%",
  },
  {
    id: "undercarriage-bar-exit",
    label: "Neutralizer Undercarriage Wash Spray Bar (Exit)",
    description: "Second 8-nozzle spray bar at the exit ensures complete undercarriage coverage — nothing gets missed, even on the longest vehicles.",
    x: "78%",
    y: "62%",
  },
];

export default function InteractiveSchematic() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* Schematic Image */}
      <div className="relative rounded-2xl overflow-hidden bg-white p-4 md:p-8 shadow-xl border border-border">
        <img
          src="/uploads/wash-bay-schematic.png"
          alt="Enzo's Automatic Drive-Through Wash System schematic showing D-Salt tank, soap arch, wash arch, reverse osmosis rinse system, and Neutralizer undercarriage spray bars"
          className="w-full h-auto"
          loading="lazy"
          width={1300}
          height={850}
        />

        {/* Hotspots */}
        {hotspots.map((spot) => {
          const xNum = parseFloat(spot.x);
          const yNum = parseFloat(spot.y);
          const isOpen = activeHotspot === spot.id;
          // Position tooltip horizontally: flip to the left side if hotspot is on the right half
          const horizontalSide = xNum > 55 ? "right" : "left";
          // Position vertically: flip above if hotspot is in lower half
          const verticalSide = yNum > 60 ? "above" : "below";

          return (
            <div
              key={spot.id}
              className="absolute z-10"
              style={{ left: spot.x, top: spot.y }}
            >
              <button
                className="group relative -translate-x-1/2 -translate-y-1/2 block"
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
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

              {/* Pop-up tooltip near the dot */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    role="tooltip"
                    className="absolute z-20 w-56 sm:w-64 md:w-72 p-3 md:p-4 rounded-xl bg-card border border-primary/30 shadow-2xl pointer-events-none"
                    style={{
                      [horizontalSide]: "12px",
                      [verticalSide === "below" ? "top" : "bottom"]: "16px",
                    } as React.CSSProperties}
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
            </div>
          );
        })}
      </div>

      {/* Instruction hint */}
      {!activeHotspot && (
        <p className="text-center text-xs text-muted-foreground mt-3 animate-pulse">
          Hover or tap the blue dots to explore each system component
        </p>
      )}
    </div>
  );
}
