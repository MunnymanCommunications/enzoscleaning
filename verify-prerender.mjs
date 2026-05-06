/**
 * Prerender verification script.
 *
 * Usage:
 *   node verify-prerender.mjs           # full audit (needs a prior `npm run build`)
 *   node verify-prerender.mjs --routes  # just compare routes vs sitemap, no build needed
 *
 * Checks:
 *   1. Every sitemap URL has a matching entry in ALL_ROUTES (will be prerendered)
 *   2. Every ALL_ROUTES entry has an entry in SEO_METADATA (unique title/description)
 *   3. After a build: every dist/{route}/index.html exists and contains:
 *        - <div id="root"> with real content (not empty)
 *        - A <title> that isn't the generic fallback
 *        - A <meta name="description"> that isn't the generic fallback
 *        - A <link rel="canonical"> pointing to the correct URL
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Import source-of-truth data ───────────────────────────────────────────────
// Inline ALL_ROUTES here so this script is self-contained and doesn't need to
// import prerender.mjs (which also runs a full build when imported).
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
  // Trident routes excluded: password-gated (TridentGate), no prerender
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

// Pages intentionally not prerendered (served as SPA / excluded for a reason)
const EXCLUDED_FROM_PRERENDER = new Set([
  "/hardscaping/trident/",
  "/hardscaping/trident/university/",
  "/admin/trident/",
]);

const GENERIC_TITLE = "Enzos Cleaning Solutions";
const GENERIC_DESC_FRAGMENT = "If You Have A Need We Have The Solution";
const BASE_URL = "https://2.enzoscleaning.com";
const DIST_DIR = path.resolve(__dirname, "dist");
const SITEMAP_PATH = path.resolve(__dirname, "public/sitemap.xml");

// ── Helpers ───────────────────────────────────────────────────────────────────
const ok    = (msg) => console.log(`  ✅ ${msg}`);
const warn  = (msg) => console.warn(`  ⚠️  ${msg}`);
const fail  = (msg) => { console.error(`  ❌ ${msg}`); errors++; };

let errors = 0;
let warnings = 0;

// ── 1. Parse sitemap ──────────────────────────────────────────────────────────
function parseSitemapRoutes() {
  const xml = fs.readFileSync(SITEMAP_PATH, "utf-8");
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => {
    const url = m[1].trim();
    return url.replace(BASE_URL, "") || "/";
  });
}

// ── 2. Route coverage audit ───────────────────────────────────────────────────
function auditRoutes(sitemapRoutes) {
  console.log("\n📋  ROUTE COVERAGE\n");

  const prerenderedSet = new Set(ALL_ROUTES);
  const sitemapSet = new Set(sitemapRoutes);

  // Sitemap URLs not covered by prerender
  const sitemapNotPrerendered = sitemapRoutes.filter(
    (r) => !prerenderedSet.has(r) && !EXCLUDED_FROM_PRERENDER.has(r)
  );
  if (sitemapNotPrerendered.length) {
    sitemapNotPrerendered.forEach((r) =>
      fail(`In sitemap but NOT prerendered: ${r}`)
    );
  } else {
    ok("All sitemap URLs are prerendered");
  }

  // Prerendered routes not in sitemap (internal/test pages are expected)
  const INTERNAL = new Set(["/claude-test/", "/ota/", "/shop-now/", "/hulabowl-ohiobrett/", "/hulabowl-ohiobrett/ohiobrettform"]);
  const prerenderedNotInSitemap = ALL_ROUTES.filter(
    (r) => !sitemapSet.has(r) && !INTERNAL.has(r)
  );
  if (prerenderedNotInSitemap.length) {
    prerenderedNotInSitemap.forEach((r) =>
      warn(`Prerendered but NOT in sitemap (won't be crawled): ${r}`)
    );
    warnings += prerenderedNotInSitemap.length;
  }

  // Excluded (gated) routes
  console.log(`\n  ℹ️   Intentionally NOT prerendered (gated/admin):`);
  EXCLUDED_FROM_PRERENDER.forEach((r) => console.log(`       ${r}`));
}

// ── 3. SEO metadata coverage ──────────────────────────────────────────────────
async function auditMetadata() {
  console.log("\n🏷️   SEO METADATA COVERAGE\n");
  const { SEO_METADATA } = await import("./seo-metadata.mjs");

  let missing = 0;
  for (const route of ALL_ROUTES) {
    if (!SEO_METADATA[route]) {
      fail(`No SEO metadata for route: ${route}`);
      missing++;
    }
  }
  if (missing === 0) ok(`All ${ALL_ROUTES.length} routes have SEO metadata`);
}

// ── 4. Built HTML file audit ──────────────────────────────────────────────────
function auditBuiltFiles() {
  console.log("\n🗂️   BUILT HTML FILES\n");

  if (!fs.existsSync(DIST_DIR)) {
    warn("dist/ directory not found — run `npm run build` first, then re-run this script.");
    warnings++;
    return;
  }

  for (const route of ALL_ROUTES) {
    const routePath = route.endsWith("/") ? route : route + "/";
    const htmlPath = path.join(DIST_DIR, routePath, "index.html");

    if (!fs.existsSync(htmlPath)) {
      fail(`Missing: dist${routePath}index.html`);
      continue;
    }

    const html = fs.readFileSync(htmlPath, "utf-8");
    const routeErrors = [];

    // Check root div has content
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    if (!rootMatch || rootMatch[1].trim().length < 100) {
      routeErrors.push("root div is empty or suspiciously short");
    }

    // Check title isn't the generic fallback
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : "";
    if (!title || title === GENERIC_TITLE) {
      routeErrors.push(`generic/missing <title>: "${title}"`);
    }

    // Check description isn't the generic fallback
    const descMatch = html.match(/<meta name="description" content="([\s\S]*?)"/);
    const desc = descMatch ? descMatch[1].trim() : "";
    if (!desc || desc.startsWith(GENERIC_DESC_FRAGMENT)) {
      routeErrors.push(`generic/missing <meta description>`);
    }

    // Check canonical
    const canonical = `${BASE_URL}${routePath}`;
    if (!html.includes(`rel="canonical" href="${canonical}"`)) {
      routeErrors.push(`missing or wrong canonical (expected ${canonical})`);
    }

    if (routeErrors.length) {
      fail(`${route}\n      → ${routeErrors.join("\n      → ")}`);
    } else {
      ok(`${route}  "${title}"`);
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
const routesOnly = process.argv.includes("--routes");

console.log("=".repeat(60));
console.log("  PRERENDER VERIFICATION");
console.log("=".repeat(60));

const sitemapRoutes = parseSitemapRoutes();
auditRoutes(sitemapRoutes);

if (!routesOnly) {
  await auditMetadata();
  auditBuiltFiles();
}

console.log("\n" + "=".repeat(60));
if (errors === 0) {
  console.log(`✅  All checks passed${warnings ? ` (${warnings} warning${warnings > 1 ? "s" : ""})` : ""}.`);
} else {
  console.log(`❌  ${errors} error${errors > 1 ? "s" : ""}${warnings ? `, ${warnings} warning${warnings > 1 ? "s" : ""}` : ""} found.`);
  process.exit(1);
}
console.log("=".repeat(60) + "\n");
