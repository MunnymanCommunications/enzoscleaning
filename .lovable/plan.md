

# Enzo's Cleaning Solutions - Website Recreation Plan

## Project Overview
Recreate the entire enzoscleaning.com website as a modern React application while preserving 100% of the URL structure for SEO continuity. The domain transfer will be seamless with all existing Google rankings pointing to their equivalent new pages.

---

## Phase 1: Foundation & Core Structure

### 1.1 Site Architecture Setup
- Create the full URL routing structure matching the existing site exactly
- Set up the main navigation with all menu items and dropdowns
- Configure the blue/white color scheme matching the current branding
- Set up responsive layouts for mobile, tablet, and desktop

### 1.2 Core Pages
- **Home Page** - Hero section, services overview, products grid, YouTube video embed, "CLEAN Accountability Plan" section
- **Contact Us** - Contact form, business info, phone number (419.502.0007), address display
- **Services Landing Page** - Overview of all services with links to sub-pages

---

## Phase 2: Services Section (~4 pages)

### Pages to Create:
1. `/services/` - Services overview
2. `/services/free-consultations/` - Free consultation offering
3. `/services/pressure-washer-service-repair/` - Repair services with technical details
4. `/services/scheduled-maintenance/` - Preventive maintenance programs

### Features:
- Service descriptions with imagery
- Clear call-to-action buttons for consultations
- Contact form integration

---

## Phase 3: Cleaning Equipment Section (~30+ pages)

### 3.1 Main Equipment Pages
- `/cleaning-equipment/` - Equipment overview
- `/cleaning-equipment/pressure-washers/` - Pressure washer categories

### 3.2 Hotsy Equipment (Deep hierarchy)
- `/cleaning-equipment/pressure-washers/hotsy-pressure-washers/`
- Sub-pages for each type: Electric Pump/Fuel Oil Heat, Gasoline Pump, Natural Gas, Electric Cold Water, Gasoline Cold Water, Diesel Hot Water

### 3.3 Mi-T-M Equipment
- `/cleaning-equipment/mi-t-m/`
- Sub-pages for each type: Electric Hot Water, Natural Gas, Gasoline Hot Water (Portable/Skid), LP Hot Water, Air Compressors, Electric Cold Water

### 3.4 Undercarriage & Wash Bay
- `/cleaning-equipment/under-carriage-sprayers/`
- `/cleaning-equipment/under-carriage-sprayers/the-neutralizer/` - Featured product
- `/cleaning-equipment/wash-bay-design/`
- `/cleaning-equipment/wash-bay-design/tower-brushes/`

### 3.5 Accessories
- `/cleaning-equipment/pressure-washers-accessories/`
- `/cleaning-equipment/pressure-washers-accessories/surface-cleaners/`
- Trigger guns, nozzles, and other accessory pages

### Features:
- Product specification displays
- PDF spec sheet download buttons
- Product image galleries
- "Connect with Enzo's" CTAs

---

## Phase 4: Detergents Section (~5+ pages)

### Pages to Create:
- `/detergents/` - Detergents overview
- `/detergents/degreasers/` - Industrial degreasers
- `/detergents/transportation-truck-bus-wash/` - Fleet cleaning solutions
- `/detergents/restoration-detergents/` - Surface restoration products
- `/disinfecting/` - Disinfectants (alternate URL noted on home page)

### Features:
- Product cards with dilution ratios and key benefits
- Organized product listings
- Contact CTAs

---

## Phase 5: Special Landing Pages

### 5.1 Touchless Drive-Thru Page
- `/touchless-drive-thru/` - High-converting landing page
- "Protect, Preserve, Prolong" messaging
- Wash system options display
- Customer testimonials
- Consultation scheduling CTA

---

## Phase 6: Global Components & Features

### 6.1 Navigation
- Sticky header with logo and contact info
- Dropdown menus matching site structure
- Mobile hamburger menu

### 6.2 Footer
- Business address and phone
- Quick links to main sections
- Copyright and basic legal

### 6.3 Forms
- Contact form (sends email notifications)
- Quote request forms on relevant pages

### 6.4 Media
- YouTube video embeds
- Image galleries for products
- PDF download functionality for spec sheets

---

## Phase 7: SEO & Migration Preparation

### 7.1 URL Preservation
- All 90 URLs will match exactly
- Trailing slashes handled consistently
- Proper 404 page for any missed routes

### 7.2 Meta Tags
- Page titles matching current site
- Meta descriptions for each page
- Open Graph tags for social sharing

### 7.3 Structured Data
- Local business schema
- Product/service schema where applicable

---

## Content Workflow

Since you'll provide the sitemap and we'll scrape the content:

1. **You provide**: The complete sitemap URL list
2. **We implement**: Firecrawl integration to scrape content from each page
3. **You review**: Approve the pulled content for accuracy
4. **We build**: Each page with the extracted content

---

## Technical Approach

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS matching the blue/white brand colors
- **Routing**: React Router with exact URL path matching
- **Forms**: Contact forms with email functionality via Supabase Edge Functions
- **Images**: All product images downloaded and hosted
- **PDFs**: Spec sheets linked/hosted for download

---

## Estimated Pages: ~90 total
- Home: 1
- Services: 4
- Equipment (Hotsy, Mi-T-M, Accessories, Wash Bay): ~40
- Detergents: 5
- Special pages: 2
- Individual product pages: ~38

