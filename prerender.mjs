/**
 * Post-build prerendering script.
 * 
 * Usage: node prerender.mjs
 * 
 * After `vite build`, this script:
 * 1. Builds the SSR bundle using Vite
 * 2. Renders each route to static HTML
 * 3. Injects rendered content into the template HTML
 * 4. Writes route-specific index.html files to dist/
 */
import { build } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SEO_METADATA } from "./seo-metadata.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "dist");
const SSR_DIR = path.resolve(__dirname, "dist-ssr");

/** Escape special HTML characters in metadata strings */
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Replace the generic <title>, <meta description>, OG and Twitter tags
 * with page-specific values from SEO_METADATA.
 */
function injectMetadata(html, route) {
  const meta = SEO_METADATA[route];
  if (!meta) return html;

  const { title, description } = meta;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  // Use [\s\S]*? to match content attributes that span multiple lines
  return html
    // Replace <title>
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    // Replace meta description
    .replace(
      /<meta name="description" content="[\s\S]*?">/,
      `<meta name="description" content="${safeDesc}">`
    )
    // Replace OG title & description
    .replace(
      /<meta property="og:title" content="[\s\S]*?">/,
      `<meta property="og:title" content="${safeTitle}">`
    )
    .replace(
      /<meta property="og:description" content="[\s\S]*?">/,
      `<meta property="og:description" content="${safeDesc}">`
    )
    // Replace Twitter title & description
    .replace(
      /<meta name="twitter:title" content="[\s\S]*?">/,
      `<meta name="twitter:title" content="${safeTitle}">`
    )
    .replace(
      /<meta name="twitter:description" content="[\s\S]*?">/,
      `<meta name="twitter:description" content="${safeDesc}">`
    );
}

const ALL_ROUTES = [
  "/",
  "/services/",
  "/services/free-consultations/",
  "/services/pressure-washer-service-repair/",
  "/services/scheduled-maintenance/",
  "/services/preventative-maintenance/",
  "/cleaning-equipment/",
  "/cleaning-equipment/pressure-washers/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/",
  "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/",
  "/cleaning-equipment/mi-t-m/",
  "/cleaning-equipment/mi-t-m/electric-hot-water/",
  "/cleaning-equipment/mi-t-m/natural-gas-hot-water/",
  "/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/",
  "/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/",
  "/cleaning-equipment/mi-t-m/electric-cold-water/",
  "/cleaning-equipment/mi-t-m/air-compressor-gas/",
  "/cleaning-equipment/mi-t-m/air-compressor-electric/",
  "/cleaning-equipment/under-carriage-sprayers/",
  "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  "/cleaning-equipment/wash-bay-design/",
  "/cleaning-equipment/wash-bay-design/tower-brushes/",
  "/cleaning-equipment/pressure-washers-accessories/",
  "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/",
  "/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/",
  "/cleaning-equipment/pressure-washers-accessories/nozzles/",
  "/cleaning-equipment/pressure-washers-accessories/wands-lances/",
  "/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/",
  "/cleaning-equipment/pressure-washers-accessories/scaltrol/",
  "/cleaning-equipment/floor-cleaning/",
  "/cleaning-equipment/floor-cleaning/floor-sweepers/",
  "/cleaning-equipment/floor-cleaning/floor-scrubbers/",
  "/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/",
  "/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/",
  "/detergents/",
  "/detergents/degreasers/",
  "/detergents/transportation-truck-bus-wash/",
  "/detergents/construction-equipment-cleaning/",
  "/detergents/restoration-detergents/",
  "/detergents/specialty-cleaning-products/",
  "/hardscaping/trident/",
  "/hardscaping/trident/university/",
  "/disinfecting/",
  "/disinfecting/our-disinfectants-sanitizers/",
  "/disinfecting/our-disinfectant-sprayers/",
  "/disinfecting/vapore-dry-vapor-disinfecting/",
  "/disinfecting/disinfecting-best-practices/",
  "/touchless-drive-thru/",
  "/industries-we-serve/",
  "/construction-cleaning-equipment/",
  "/agriculture-cleaning-equipment/",
  "/transportation-and-fleet-management/",
  "/manufacturing/",
  "/farming-equipment-cleaning/",
  "/solutions-for-road-construction-excavating/",
  "/protect-your-fleet-from-corrosion-downtime/",
  "/keep-plants-pavers-moving-remove-asphalt-not-time/",
  "/hospital-clinical-hygiene-overview-protocols/",
  "/our-hand-hygiene-systems/",
  "/implementation-in-hospitals/",
  "/training-compliance-support/",
  "/wastewater-treatment-solutions/",
  "/heaters/",
  "/single-dual-axle-trailer/",
  "/electric-hot-water/",
  "/residential-consumer-coldwater/",
  "/citymaster-1650-650multifunction-sweeper/",
  "/citymaster/",
  "/equipment-products/",
  "/faq/",
  "/ota/",
  "/promotions/",
  "/shop/",
  "/shop-now/",
  "/about-us/",
  "/contact-us/",
  "/claude-test/",
  "/hulabowl-ohiobrett/",
  "/hulabowl-ohiobrett/ohiobrettform",
];

async function prerender() {
  console.log("🔨 Building SSR bundle...");

  // Build SSR version
  await build({
    build: {
      ssr: true,
      outDir: SSR_DIR,
      rollupOptions: {
        input: "src/entry-server.tsx",
        output: {
          format: "esm",
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });

  // Load the SSR module
  const { render } = await import(path.join(SSR_DIR, "entry-server.js"));

  // Read the client-built index.html as template
  const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

  let successCount = 0;
  let errorCount = 0;

  for (const route of ALL_ROUTES) {
    try {
      const appHtml = render(route);
      const canonical = `https://2.enzoscleaning.com${route.endsWith("/") ? route : route + "/"}`;

      // Inject rendered HTML into the root div, add canonical, and set per-page metadata
      let html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        .replace("</head>", `  <link rel="canonical" href="${canonical}" />\n  </head>`);
      html = injectMetadata(html, route);

      // Write to appropriate directory
      const routePath = route.endsWith("/") ? route : route + "/";
      const dir = path.join(DIST_DIR, routePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
      
      successCount++;
      console.log(`  ✓ ${route}`);
    } catch (err) {
      errorCount++;
      console.error(`  ✗ ${route}: ${err.message}`);
    }
  }

  // Cleanup SSR build
  fs.rmSync(SSR_DIR, { recursive: true, force: true });

  console.log(`\n✅ Prerendered ${successCount}/${ALL_ROUTES.length} routes`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} routes had errors (they'll still work as SPA fallback)`);
  }
}

prerender().catch(console.error);
