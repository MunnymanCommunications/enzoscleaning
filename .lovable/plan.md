

## Plan: Sliding Hero Carousel with 24+ Images and Dynamic Headlines

### Concept

Replace the static hero with a full-screen auto-advancing image carousel. Each slide pairs a high-quality background image with a unique, conversion-focused headline and subtitle tailored to Enzo's key verticals (municipalities, schools, fleet management, construction) with heavy emphasis on The Neutralizer / salt damage prevention as the highest-margin product.

### Slide Content Strategy

Each slide gets a headline, subtitle, and CTA link. Examples of the 24+ slides:

| # | Image | Headline | Target |
|---|-------|----------|--------|
| 1 | header-bg.jpg | "Are You Frustrated With Your Pressure Washer?" | General |
| 2 | neutralizer.jpg | "Stop Salt Corrosion Before It Costs You Millions" | Fleet/Municipalities |
| 3 | The-Neutralizer-Pressure-Washer.jpg | "The Neutralizer: Protect Your Fleet From Road Salt Damage" | Fleet |
| 4 | Undercarriage-wash-system.jpg | "Extend Vehicle Life By 5+ Years With Salt Neutralization" | Fleet |
| 5 | Enzo-Still-10.jpg | "Custom Wash Bay Solutions — Designed, Built & Installed" | General |
| 6 | Enzo-Still-13.jpg | "Trusted By Cities Across Ohio & Michigan" | Municipalities |
| 7 | Enzo-Still-8.jpg | "Keep Your School Bus Fleet Clean & Corrosion-Free" | Schools |
| 8 | DSC_0184.jpg | "Construction Equipment Cleaning That Keeps Projects Moving" | Construction |
| 9 | Enzos-Free-Consultations.jpg | "Free On-Site Consultation — We Come To You" | Lead gen |
| 10 | Enzos-Service-and-Repair.jpg | "24/7 Pressure Washer Service & Repair" | Services |
| 11 | Enzos-Preventive-Maintenance.jpg | "Preventive Maintenance Plans That Pay For Themselves" | Services |
| 12 | pressure-washer-service-and-repair.jpg | "Factory-Trained Technicians At Your Service" | Services |
| 13 | Electric-Pump-Fuel-Oil-Heat-Pressure-Washer.jpg | "Hotsy Pressure Washers — #1 Name In Hot Water Cleaning" | Equipment |
| 14 | Diesel-Hot-Water-Pressure-Washer.jpg | "Diesel Hot Water Power — Built For The Toughest Jobs" | Equipment |
| 15 | Natural-Gas-Hot-Water.jpg | "Natural Gas Pressure Washers — Lower Operating Costs" | Equipment |
| 16 | Electric-Cold-Water-Power-Washer.jpg | "Electric Cold Water Systems For Indoor Facilities" | Equipment |
| 17 | citymaster-product.png | "Hako Citymaster — Sweep, Clean & Maintain Year-Round" | Municipalities |
| 18 | citymaster-winter.png | "Winter Service Solutions — Snow Removal & De-Icing" | Municipalities |
| 19 | citymaster-lawn-turf.png | "Grounds Maintenance Made Simple" | Facilities |
| 20 | floor-cleaning.jpg | "Industrial Floor Cleaning Equipment" | Manufacturing |
| 21 | Pressure-Washer-Accessories.jpg | "OEM Parts & Accessories — Always In Stock" | Parts |
| 22 | Surface-Cleaner.jpg | "Surface Cleaners That Cut Cleaning Time In Half" | Accessories |
| 23 | hotsy_0003_Layer-0.jpg | "The Right Detergent Makes All The Difference" | Detergents |
| 24 | vog.jpg | "EPA-Compliant Cleaning Solutions For Every Industry" | Detergents |
| 25 | New-Project.jpg (2022/10) | "Your Fleet Deserves Better Than Rust" | Fleet/Neutralizer |
| 26 | downloads/neutralizer-flyer.jpg | "Download Our Salt Neutralizer Guide — Free" | Lead gen |

### Technical Implementation

1. **Install `embla-carousel-autoplay`** — needed for auto-advance (embla-carousel-react is already installed)

2. **Create `src/components/home/HeroCarousel.tsx`** — new component:
   - Uses Embla carousel with autoplay plugin (5-second interval), loop enabled, fade transition
   - Array of 24+ slide objects: `{ image, headline, subtitle, ctaText, ctaLink }`
   - Each slide: full-bleed background image with dark gradient overlay, animated text (fade-in on slide change using `AnimatePresence` from framer-motion), and a CTA button
   - Dot indicators at bottom, subtle prev/next arrows on hover
   - Pause autoplay on hover

3. **Update `src/pages/Index.tsx`**:
   - Replace the static hero `<section>` (lines 31-61) with `<HeroCarousel />`
   - Remove unused `Play` import

### Files Changed

| File | Action |
|------|--------|
| `package.json` | Add `embla-carousel-autoplay` dependency |
| `src/components/home/HeroCarousel.tsx` | Create — full carousel component with 24+ slides |
| `src/pages/Index.tsx` | Replace static hero with `<HeroCarousel />` |

