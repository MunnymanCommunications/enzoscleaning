import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// If the root already has prerendered HTML content, hydrate over it
// so React smoothly takes over without destroying and re-creating the DOM.
// Otherwise, do a fresh render (dev mode or fallback).
if (root.innerHTML.trim().length > 0) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
