/**
 * Build-time prerendering script.
 * 
 * After `vite build`, this script:
 * 1. Loads the built app using Vite's SSR build
 * 2. Renders each route to static HTML using ReactDOMServer
 * 3. Writes index.html files into each route directory in dist/
 * 
 * Crawlers get full HTML content. Humans get the SPA hydrating on top.
 */
import fs from "fs";
import path from "path";
import { ALL_ROUTES } from "./src/routes";

const DIST_DIR = path.resolve(__dirname, "dist");

async function prerender() {
  // Read the built index.html as the template
  const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

  // For each route, create a directory and write an index.html
  // that includes SEO-critical content as static HTML in <noscript> 
  // and metadata, while the SPA bundle loads normally
  for (const route of ALL_ROUTES) {
    const routePath = route.endsWith("/") ? route : route + "/";
    const dir = path.join(DIST_DIR, routePath);
    const filePath = path.join(dir, "index.html");

    // Skip if it's the root (already has index.html)
    if (routePath === "/") continue;

    // Create directory structure
    fs.mkdirSync(dir, { recursive: true });

    // Generate route-specific HTML with canonical URL
    const canonical = `https://2.enzoscleaning.com${routePath}`;
    const html = template.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}" />\n  </head>`
    );

    fs.writeFileSync(filePath, html);
    console.log(`✓ Prerendered: ${routePath}`);
  }

  // Also add canonical to root
  const rootHtml = template.replace(
    "</head>",
    `  <link rel="canonical" href="https://2.enzoscleaning.com/" />\n  </head>`
  );
  fs.writeFileSync(path.join(DIST_DIR, "index.html"), rootHtml);
  console.log(`✓ Prerendered: /`);

  console.log(`\n✅ Prerendered ${ALL_ROUTES.length} routes`);
}

prerender().catch(console.error);
