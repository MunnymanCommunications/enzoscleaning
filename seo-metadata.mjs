/**
 * Per-page SEO metadata for prerendering.
 * Used by prerender.mjs to inject unique <title>, <meta description>,
 * and Open Graph / Twitter tags into each page's HTML.
 */

export const SEO_METADATA = {
  "/": {
    title: "Enzo's Cleaning Solutions | Pressure Washers, Wash Bays & Industrial Cleaning Equipment",
    description: "Enzo's Cleaning Solutions — Ohio's source for fleet wash bays, Hotsy & Mi-T-M pressure washers, salt neutralizers, detergents and equipment service. Serving fleets, farms and facilities across Ohio, Michigan & PA.",
  },

  // ── Services ──────────────────────────────────────────────────
  "/services/": {
    title: "Our Services | Enzo's Cleaning Solutions",
    description: "At Enzo's Cleaning Solutions, you have a need, we have the solution. Explore our full range of services including free consultations, equipment service & repair, scheduled maintenance and wash bay design.",
  },
  "/services/free-consultations/": {
    title: "Free Consultations | Enzo's Cleaning Solutions",
    description: "Let us visit your operation and provide insights and solutions to make your work easier. Schedule a free consultation with Enzo's Cleaning Solutions today.",
  },
  "/services/pressure-washer-service-repair/": {
    title: "Pressure Washer Service & Repair | Enzo's Cleaning Solutions",
    description: "Get your equipment back to peak performance with Enzo's trained service technicians. We offer on-site and in-shop service and repair for all major pressure washer brands.",
  },
  "/services/scheduled-maintenance/": {
    title: "Scheduled Maintenance | Enzo's Cleaning Solutions",
    description: "Downtime is a killer of productivity. Prevent it with regular scheduled maintenance from Enzo's Cleaning Solutions. Keep your cleaning equipment running at peak efficiency.",
  },
  "/services/preventative-maintenance/": {
    title: "Preventative Maintenance | Enzo's Cleaning Solutions",
    description: "Downtime kills productivity. Prevent it with scheduled preventative maintenance from Enzo's Cleaning Solutions. Protect your investment and extend equipment life.",
  },

  // ── Cleaning Equipment ────────────────────────────────────────
  "/cleaning-equipment/": {
    title: "Cleaning Equipment | Enzo's Cleaning Solutions",
    description: "Find cleaning equipment to tackle your toughest dirt, grime and soils. Enzo's Cleaning Solutions carries pressure washers, floor cleaners, accessories and more from Hotsy, Mi-T-M, Kärcher and Minuteman.",
  },
  "/cleaning-equipment/pressure-washers/": {
    title: "Pressure Washers | Enzo's Cleaning Solutions",
    description: "Enzo's has a full line of pressure washers for every application — hot water, cold water, electric, gas and diesel models from Hotsy and Mi-T-M.",
  },

  // ── Hotsy Pressure Washers ────────────────────────────────────
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/": {
    title: "Hotsy Pressure Washers | Enzo's Cleaning Solutions",
    description: "The #1 name in hot water pressure washers. Choose from hot water or cold water models and select the power source that works best for your operation. Available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/": {
    title: "Hotsy Electric Pump Fuel Oil Heat Pressure Washers | Enzo's Cleaning Solutions",
    description: "Versatile cleaning machines with electric pump and fuel oil heating for a variety of applications. Find the right Hotsy hot water pressure washer for your operation at Enzo's.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/": {
    title: "Hotsy 1200 Series Gasoline Pump Hot Water Washers | Enzo's Cleaning Solutions",
    description: "Gas-powered, fuel oil heated pressure washers for outdoor and heavy soil cleaning. Hotsy 1200 Series available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/": {
    title: "Hotsy Natural Gas Hot Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Great for wash bays with simple connection and powerful cleaning. Hotsy natural gas hot water pressure washers available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/": {
    title: "Hotsy Electric Cold Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Plug and play convenience with Hotsy electric cold water pressure washers. Perfect for indoor use and light-duty applications. Available at Enzo's.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/": {
    title: "Hotsy Gasoline Cold Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Portability for cleaning on the go with gas-powered cold water machines from Hotsy. Available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/": {
    title: "Hotsy Diesel Hot Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Perfect for mobile cleaning needs with powerful diesel-powered performance. Hotsy diesel hot water pressure washers available at Enzo's Cleaning Solutions.",
  },

  // ── Mi-T-M ────────────────────────────────────────────────────
  "/cleaning-equipment/mi-t-m/": {
    title: "Mi-T-M Pressure Washers & Equipment | Enzo's Cleaning Solutions",
    description: "Experience the power, performance and reliability of Mi-T-M. Built to tackle the dirtiest jobs. Pressure washers and air compressors available at Enzo's.",
  },
  "/cleaning-equipment/mi-t-m/electric-hot-water/": {
    title: "Mi-T-M Electric Hot Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Same power and performance as traditional fuel units with portability for enclosed and outdoor cleaning. Mi-T-M electric hot water models at Enzo's.",
  },
  "/cleaning-equipment/mi-t-m/natural-gas-hot-water/": {
    title: "Mi-T-M Natural Gas Hot Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "The perfect solution for wash bays and cleaning operations. Mi-T-M natural gas hot water pressure washers available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/": {
    title: "Mi-T-M Gasoline Hot Water Portable Pressure Washers | Enzo's Cleaning Solutions",
    description: "Designed with portability in mind, making it easy to take cleaning power anywhere you need it. Mi-T-M gasoline hot water portable units at Enzo's.",
  },
  "/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/": {
    title: "Mi-T-M Gasoline Hot Water Skid Pressure Washers | Enzo's Cleaning Solutions",
    description: "Skid-mounted gas-powered hot water pressure washers — perfect for mobile wash trucks. Mi-T-M skid units available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/mi-t-m/electric-cold-water/": {
    title: "Mi-T-M Electric Cold Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Electric cold water pressure washers ready to make dirt and grime a thing of the past. Mi-T-M models available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/mi-t-m/air-compressor-gas/": {
    title: "Mi-T-M Gas Air Compressors | Enzo's Cleaning Solutions",
    description: "Gas-powered air compressors for industrial, construction and mobile applications. Mi-T-M air compressors available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/mi-t-m/air-compressor-electric/": {
    title: "Mi-T-M Electric Air Compressors | Enzo's Cleaning Solutions",
    description: "Electric air compressors for shop, facility and wash bay operations. Mi-T-M electric models available at Enzo's Cleaning Solutions.",
  },

  // ── Under Carriage & Wash Bay ─────────────────────────────────
  "/cleaning-equipment/under-carriage-sprayers/": {
    title: "Under Carriage Sprayers | Enzo's Cleaning Solutions",
    description: "Effective and efficient cleaning equipment for underneath your vehicles. Protect your fleet from salt and corrosion with undercarriage wash systems from Enzo's.",
  },
  "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/": {
    title: "The Neutralizer - Salt & Corrosion Undercarriage Wash System | Enzo's Cleaning Solutions",
    description: "Stop the corrosive effects of road salt and brine. The Neutralizer undercarriage wash system delivers a complete clean in under five minutes per vehicle. Available at Enzo's.",
  },
  "/cleaning-equipment/wash-bay-design/": {
    title: "Wash Bay Design | Enzo's Cleaning Solutions",
    description: "Efficient, effective and SAFE wash bay solutions for your fleet. Let the experts at Enzo's help design and build the perfect wash bay for your operation.",
  },
  "/cleaning-equipment/wash-bay-design/tower-brushes/": {
    title: "Tower Brushes | Enzo's Cleaning Solutions",
    description: "Full height cleaning for buses, tractor trailers and motorcoaches. Tower brush wash systems designed and installed by Enzo's Cleaning Solutions.",
  },

  // ── Accessories ───────────────────────────────────────────────
  "/cleaning-equipment/pressure-washers-accessories/": {
    title: "Pressure Washer Accessories | Enzo's Cleaning Solutions",
    description: "The right accessories and supplies for the most effective, efficient clean from your pressure washer. Surface cleaners, nozzles, guns, wands and more at Enzo's.",
  },
  "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/": {
    title: "Surface Cleaners | Enzo's Cleaning Solutions",
    description: "Blast away dirt from walkways, shop floors and other surfaces with pressure washer surface cleaners from Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/": {
    title: "Trigger Guns & Spray Guns | Enzo's Cleaning Solutions",
    description: "Full range of trigger guns and spray guns for powerful pressure washer performance. Available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers-accessories/nozzles/": {
    title: "Pressure Washer Nozzles | Enzo's Cleaning Solutions",
    description: "Properly sized nozzles are critical to proper pressure washer operation. Find the right nozzles for your machine at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers-accessories/wands-lances/": {
    title: "Wands & Lances | Enzo's Cleaning Solutions",
    description: "Several lines of wands and lances from Mecline, HPC, Suttner, General Pump and more. Available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/": {
    title: "Wet Sand Blasting Kit | Enzo's Cleaning Solutions",
    description: "Maximum cleaning power with dustless sandblasting capabilities. Wet sand blasting kits for pressure washers available at Enzo's.",
  },
  "/cleaning-equipment/pressure-washers-accessories/scaltrol/": {
    title: "Scaltrol Descaling Filters | Enzo's Cleaning Solutions",
    description: "Descaling filters designed for hot water pressure washers. Scaltrol protects your investment from hard water scale buildup. Available at Enzo's.",
  },

  // ── Floor Cleaning ────────────────────────────────────────────
  "/cleaning-equipment/floor-cleaning/": {
    title: "Floor Cleaning Equipment | Enzo's Cleaning Solutions",
    description: "Trusted brands in floor cleaning — Kärcher and Minuteman. Floor sweepers, scrubbers and cleaning machines available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/floor-cleaning/floor-sweepers/": {
    title: "Floor Sweepers | Enzo's Cleaning Solutions",
    description: "Walk-behind and ride-on floor sweepers for every facility. Keep your floors clean with industrial sweepers from Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/floor-cleaning/floor-scrubbers/": {
    title: "Floor Scrubbers | Enzo's Cleaning Solutions",
    description: "Deep-clean hard floors with powerful scrubbing machines. Industrial floor scrubbers available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/": {
    title: "Minuteman Floor Cleaners | Enzo's Cleaning Solutions",
    description: "Reliable Minuteman floor cleaning equipment built to last. Sweepers, scrubbers and cleaning machines available at Enzo's Cleaning Solutions.",
  },
  "/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/": {
    title: "Kärcher Floor Cleaners | Enzo's Cleaning Solutions",
    description: "Industry-leading Kärcher floor cleaning machines. Professional-grade sweepers and scrubbers available at Enzo's Cleaning Solutions.",
  },

  // ── Detergents ────────────────────────────────────────────────
  "/detergents/": {
    title: "Detergents & Disinfectants | Enzo's Cleaning Solutions",
    description: "Industrial detergents, degreasers, hospital-grade disinfectants, sanitizers, sprayers and dry vapor systems — complete cleaning chemistry from Enzo's Cleaning Solutions.",
  },
  "/detergents/degreasers/": {
    title: "Degreasers | Enzo's Cleaning Solutions",
    description: "Blast away grease and oil with powerful degreasing solutions from Enzo's Cleaning Solutions. Industrial-strength degreasers for every application.",
  },
  "/detergents/transportation-truck-bus-wash/": {
    title: "Transportation / Truck & Bus Wash Detergents | Enzo's Cleaning Solutions",
    description: "Keep your fleet looking clean with powerful truck and bus wash detergent solutions from Enzo's Cleaning Solutions.",
  },
  "/detergents/construction-equipment-cleaning/": {
    title: "Construction Equipment Cleaning Detergents | Enzo's Cleaning Solutions",
    description: "Keep your construction equipment clean and running at peak efficiency with specialized detergents from Enzo's Cleaning Solutions.",
  },
  "/detergents/restoration-detergents/": {
    title: "Restoration Detergents | Enzo's Cleaning Solutions",
    description: "Rejuvenate worn surfaces like brick, glass and concrete with restoration detergents from Enzo's Cleaning Solutions.",
  },
  "/detergents/specialty-cleaning-products/": {
    title: "Specialty Cleaning Products | Enzo's Cleaning Solutions",
    description: "Special cleaning solutions for leather, fabric, wood, rubber and metals. Specialty products available at Enzo's Cleaning Solutions.",
  },

  // ── Hardscaping / Trident ─────────────────────────────────────
  "/hardscaping/trident/": {
    title: "Trident Hardscape Products | Enzo's Cleaning Solutions",
    description: "Professional-grade sealers, cleaners, strippers, polymeric sand and application tools — trusted by contractors across Ohio. Available at Enzo's Cleaning Solutions.",
  },
  "/hardscaping/trident/university/": {
    title: "Trident University | Enzo's Cleaning Solutions",
    description: "Professional certification training for contractors — required for Trident product warranty coverage. Training offered through Enzo's Cleaning Solutions.",
  },

  // ── Disinfecting ──────────────────────────────────────────────
  "/disinfecting/": {
    title: "Disinfecting Equipment & Solutions | Enzo's Cleaning Solutions",
    description: "Find the right equipment and supplies to keep your workspace clean and sanitized. Disinfectants, sprayers and dry vapor systems at Enzo's Cleaning Solutions.",
  },
  "/disinfecting/our-disinfectants-sanitizers/": {
    title: "Disinfectants & Sanitizers | Enzo's Cleaning Solutions",
    description: "High-powered disinfectant and sanitizing solutions from Enzo's for every application. Keep your facility safe and clean.",
  },
  "/disinfecting/our-disinfectant-sprayers/": {
    title: "Disinfectant Sprayers | Enzo's Cleaning Solutions",
    description: "Efficient sprayers for faster application and more coverage. Professional disinfectant spraying equipment at Enzo's Cleaning Solutions.",
  },
  "/disinfecting/vapore-dry-vapor-disinfecting/": {
    title: "Vapore Dry Vapor Disinfecting | Enzo's Cleaning Solutions",
    description: "Clean, sanitize and disinfect any surface with hot vapor. Chemical-free dry vapor disinfecting technology available at Enzo's Cleaning Solutions.",
  },
  "/disinfecting/disinfecting-best-practices/": {
    title: "Disinfecting Best Practices | Enzo's Cleaning Solutions",
    description: "Guidelines and recommendations for effective disinfection. Learn proper techniques and protocols from Enzo's Cleaning Solutions.",
  },

  // ── Touchless Drive Thru ──────────────────────────────────────
  "/touchless-drive-thru/": {
    title: "Touchless Drive-Through Wash System | Enzo's Cleaning Solutions",
    description: "Completely automatic drive-through wash systems that deliver an unparalleled clean for your fleet. Protect, preserve and prolong with Enzo's Cleaning Solutions.",
  },

  // ── Industries ────────────────────────────────────────────────
  "/industries-we-serve/": {
    title: "Industries We Serve | Enzo's Cleaning Solutions",
    description: "From city streets to hospital rooms — Enzo's delivers cleaning solutions engineered for your industry's toughest challenges. Construction, agriculture, transportation, manufacturing and more.",
  },
  "/construction-cleaning-equipment/": {
    title: "Construction Cleaning Equipment | Enzo's Cleaning Solutions",
    description: "Keep your construction equipment CLEAN and operating at peak efficiency. Pressure washers, detergents and cleaning solutions for construction from Enzo's.",
  },
  "/agriculture-cleaning-equipment/": {
    title: "Agriculture Cleaning Equipment | Enzo's Cleaning Solutions",
    description: "Protect your agricultural machinery from corrosive fertilizers and the elements. Cleaning equipment and solutions for farming operations from Enzo's.",
  },
  "/transportation-and-fleet-management/": {
    title: "Transportation & Fleet Management Cleaning | Enzo's Cleaning Solutions",
    description: "No one knows transportation equipment like Enzo's Cleaning Solutions. Wash bays, pressure washers, detergents and fleet cleaning systems.",
  },
  "/manufacturing/": {
    title: "Manufacturing Cleaning Solutions | Enzo's Cleaning Solutions",
    description: "Keep production lines working safely and efficiently. Industrial cleaning equipment and solutions for manufacturing facilities from Enzo's.",
  },
  "/farming-equipment-cleaning/": {
    title: "Farming Equipment Cleaning | Enzo's Cleaning Solutions",
    description: "Protect your farming investment with proper cleaning. Equipment, detergents and maintenance solutions for farms from Enzo's Cleaning Solutions.",
  },
  "/solutions-for-road-construction-excavating/": {
    title: "Road Construction & Excavating Cleaning Solutions | Enzo's Cleaning Solutions",
    description: "Heavy-duty cleaning for road construction and excavation equipment. Pressure washers, degreasers and cleaning systems from Enzo's.",
  },
  "/protect-your-fleet-from-corrosion-downtime/": {
    title: "Protect Your Fleet from Corrosion & Downtime | Enzo's Cleaning Solutions",
    description: "Targeted chemistries and undercarriage systems that stop salt-related damage. Protect your vehicles from corrosion with Enzo's Cleaning Solutions.",
  },
  "/keep-plants-pavers-moving-remove-asphalt-not-time/": {
    title: "Keep Plants & Pavers Moving — Remove Asphalt, Not Time | Enzo's Cleaning Solutions",
    description: "Remove asphalt buildup without removing uptime. Specialized cleaning solutions for asphalt plants and paving equipment from Enzo's.",
  },

  // ── Healthcare ────────────────────────────────────────────────
  "/hospital-clinical-hygiene-overview-protocols/": {
    title: "Hospital & Clinical Hygiene Protocols | Enzo's Cleaning Solutions",
    description: "Comprehensive hygiene protocols for healthcare environments. Cleaning equipment, disinfecting solutions and hygiene systems from Enzo's Cleaning Solutions.",
  },
  "/our-hand-hygiene-systems/": {
    title: "Hand Hygiene Systems | Enzo's Cleaning Solutions",
    description: "Advanced hand hygiene dispensing and monitoring systems for healthcare facilities. Available from Enzo's Cleaning Solutions.",
  },
  "/implementation-in-hospitals/": {
    title: "Hospital Hygiene Implementation | Enzo's Cleaning Solutions",
    description: "Seamless implementation of cleaning and hygiene protocols in hospital environments. Professional support from Enzo's Cleaning Solutions.",
  },
  "/training-compliance-support/": {
    title: "Training & Compliance Support | Enzo's Cleaning Solutions",
    description: "Training programs and compliance tracking for healthcare teams. Ensure your staff meets hygiene standards with support from Enzo's.",
  },

  // ── Special Pages ─────────────────────────────────────────────
  "/wastewater-treatment-solutions/": {
    title: "Wastewater Treatment Solutions | Enzo's Cleaning Solutions",
    description: "Modular wastewater treatment solutions from oil/water separators to biological treatment for construction and fleet operations. Available at Enzo's.",
  },
  "/heaters/": {
    title: "Val 6 Infrared Heaters | Enzo's Cleaning Solutions",
    description: "Warm up any work space and keep working no matter the season. Val 6 infrared heaters for shops, wash bays and job sites from Enzo's.",
  },
  "/single-dual-axle-trailer/": {
    title: "Single & Dual Axle Pressure Washer Trailers | Enzo's Cleaning Solutions",
    description: "Mobile cleaning rigs on single and dual axle platforms. Fully customized pressure washer trailers built by Enzo's Cleaning Solutions.",
  },
  "/electric-hot-water/": {
    title: "Electric Hot Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Electric-powered hot water pressure washers for indoor and enclosed operations. Clean without fumes. Available at Enzo's Cleaning Solutions.",
  },
  "/residential-consumer-coldwater/": {
    title: "Residential Consumer Cold Water Pressure Washers | Enzo's Cleaning Solutions",
    description: "Home-grade cold water pressure washers for residential use. Driveways, decks, siding and more. Available at Enzo's Cleaning Solutions.",
  },
  "/citymaster-1650-650multifunction-sweeper/": {
    title: "Citymaster 1650 / 650 Multifunction Sweeper | Enzo's Cleaning Solutions",
    description: "The Citymaster 1650 and 650 multifunction sweepers for municipalities and commercial properties. Year-round versatility from Enzo's Cleaning Solutions.",
  },
  "/citymaster/": {
    title: "Citymaster Sweepers | Enzo's Cleaning Solutions",
    description: "Professional-grade multifunction sweeping solutions for municipalities and commercial properties. Citymaster sweepers available at Enzo's Cleaning Solutions.",
  },
  "/equipment-products/": {
    title: "Equipment & Products | Enzo's Cleaning Solutions",
    description: "Pressure washers, air compressors, degreasers and accessories. Browse our complete lineup of cleaning equipment and products at Enzo's.",
  },
  "/faq/": {
    title: "Frequently Asked Questions | Enzo's Cleaning Solutions",
    description: "Answers to common questions about our products, services, pressure washers, detergents and cleaning equipment. Get help from Enzo's Cleaning Solutions.",
  },
  "/ota/": {
    title: "FAQ | Enzo's Cleaning Solutions",
    description: "Answers to common questions about our products, services, pressure washers, detergents and cleaning equipment from Enzo's Cleaning Solutions.",
  },
  "/promotions/": {
    title: "Promotions & Deals | Enzo's Cleaning Solutions",
    description: "Current deals and promotions on cleaning equipment, pressure washers, detergents and accessories from Enzo's Cleaning Solutions.",
  },
  "/shop/": {
    title: "Shop Cleaning Equipment | Enzo's Cleaning Solutions",
    description: "Browse our full catalog of cleaning equipment, pressure washers, detergents and supplies. Shop online at Enzo's Cleaning Solutions.",
  },
  "/shop-now/": {
    title: "Shop Now | Enzo's Cleaning Solutions",
    description: "Browse and shop our full catalog of cleaning equipment, pressure washers, detergents and supplies at Enzo's Cleaning Solutions.",
  },
  "/about-us/": {
    title: "About Us | Enzo's Cleaning Solutions",
    description: "If You Have A Need, We Have The Solution! Learn about Enzo's Cleaning Solutions — serving Ohio, Pennsylvania and surrounding states with integrity and honesty.",
  },
  "/contact-us/": {
    title: "Contact Us | Enzo's Cleaning Solutions",
    description: "Get in touch with Enzo's Cleaning Solutions. Call 419-502-0007 or visit us at 2003 Superior St., Sandusky, OH 44870. Mon-Fri 8am-5pm.",
  },

  // ── Claude Test ───────────────────────────────────────────────
  "/claude-test/": {
    title: "Claude Test Page | Enzo's Cleaning Solutions",
    description: "Deployment verification page to confirm prerendered HTML and new pages deploy correctly through Lovable.",
  },

  // ── Referral ──────────────────────────────────────────────────
  "/hulabowl-ohiobrett/": {
    title: "Welcome from Our Partner | Enzo's Cleaning Solutions",
    description: "Enzo's Cleaning Solutions — Industrial & Commercial Cleaning Equipment, Detergents, and Service. Special partner referral offer.",
  },
  "/hulabowl-ohiobrett/ohiobrettform": {
    title: "Partner Referral Contact Form | Enzo's Cleaning Solutions",
    description: "Submit your information through our partner referral program. Enzo's Cleaning Solutions — Industrial & Commercial Cleaning Equipment.",
  },
};
