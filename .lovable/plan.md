

## Plan: Neutralizer Flyer + Citymaster Page Overhaul

### 1. Host Neutralizer Flyer as Downloadable PDF

- Copy `user-uploads://NEUTRALIZER_flyer_-_Snow_Plow-1.jpg` to `public/downloads/neutralizer-flyer.jpg`
- Update `TheNeutralizer.tsx` to add a prominent "Download Flyer" button/link that points to `/downloads/neutralizer-flyer.jpg` with a `download` attribute
- Place it in the hero area and/or the CTA section for visibility

### 2. Overhaul Citymaster Pages with Real Content and Images

The existing `Citymaster.tsx` and `CitymasterSweeper.tsx` are thin placeholders. Consolidate into one rich, comprehensive Citymaster page.

**Copy uploaded images to project:**
- `user-uploads://city_master_product_image.png` -> `src/assets/citymaster-product.png`
- `user-uploads://City_master_lawn_and_turf.png` -> `src/assets/citymaster-lawn-turf.png`
- `user-uploads://Citymaster_Winter_Service.png` -> `src/assets/citymaster-winter.png`
- `user-uploads://CityMaster_1650_650.png` -> `src/assets/citymaster-multifunction.png`
- `user-uploads://Enzos_Cleaning_City_Master_re-print_proof_2.pdf` -> `public/downloads/citymaster-brochure.pdf`

**Rewrite `CitymasterSweeper.tsx`** as the main detailed page with:
- Hero with Citymaster 1650/650 product image
- Overview section (from PDF: "versatile implement carrier and professional sweeper all in one")
- **Surface Cleaning** section: City Cleaner attachment (48.9" width, 3x18" disc brushes, 0-330 lbs variable downpressure), Pressure Washer (3.43 GPM @ 1,740 PSI)
- **Lawn and Turf** section with image: Mowing Deck (part #701305/701301), Weed Removal (#701306/701302), Wander Hose (#99144510)
- **Winter Service** section with image: Snow Blower (#99600200), V Snow Plough (#99581500/99602140), Sweeping Broom (#99602160), Winter Spreader (#701307/701303)
- Downloadable brochure PDF link
- CTA section

**Keep `Citymaster.tsx`** as a lightweight landing/overview page that links to the detailed sweeper page.

### 3. Add Citymaster to Navigation

Update `Header.tsx` to add "Citymaster" as a child under the "Cleaning Equipment" dropdown menu.

### 4. Files Changed

| File | Action |
|------|--------|
| `src/assets/citymaster-*.png` (4 files) | Create (copy images) |
| `public/downloads/citymaster-brochure.pdf` | Create (copy PDF) |
| `public/downloads/neutralizer-flyer.jpg` | Create (copy flyer) |
| `src/pages/CitymasterSweeper.tsx` | Rewrite with full content, images, attachment specs |
| `src/pages/Citymaster.tsx` | Update to link to detailed page |
| `src/pages/TheNeutralizer.tsx` | Add download flyer button |
| `src/components/layout/Header.tsx` | Add Citymaster to Cleaning Equipment dropdown |

