import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";
import { ALL_ROUTES } from "./src/routes";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: ALL_ROUTES,
        renderer: new (require("@prerenderer/renderer-puppeteer"))({
          maxConcurrentRoutes: 4,
          renderAfterTime: 5000,
        }),
        postProcess(renderedRoute: any) {
          // Strip inline scripts/styles that aren't needed for bots
          // Keep the HTML content clean for crawlers
          renderedRoute.html = renderedRoute.html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(
              "</head>",
              `<link rel="canonical" href="https://2.enzoscleaning.com${renderedRoute.route}" />\n</head>`
            );
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
