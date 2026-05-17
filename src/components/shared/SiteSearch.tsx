import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { SEARCH_INDEX, type SearchEntry } from "@/data/searchIndex";

interface ScoredEntry extends SearchEntry {
  score: number;
}

function scoreEntry(entry: SearchEntry, terms: string[]): number {
  const titleLower = entry.title.toLowerCase();
  const descLower = entry.description.toLowerCase();
  const pathLower = entry.path.toLowerCase();
  let score = 0;
  for (const term of terms) {
    if (!term) continue;
    if (titleLower.includes(term)) score += 10;
    if (titleLower.startsWith(term)) score += 5;
    if (pathLower.includes(term)) score += 4;
    if (descLower.includes(term)) score += 2;
  }
  return score;
}

function highlight(text: string, terms: string[]) {
  if (!terms.length) return text;
  const pattern = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    pattern.test(part) ? (
      <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

interface SiteSearchProps {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

export default function SiteSearch({ variant = "desktop", onNavigate }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const terms = useMemo(
    () =>
      query
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((t) => t.length >= 2),
    [query],
  );

  const results = useMemo<ScoredEntry[]>(() => {
    if (!terms.length) return [];
    return SEARCH_INDEX.map((entry) => ({ ...entry, score: scoreEntry(entry, terms) }))
      .filter((e) => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [terms]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIdx]) handleSelect(results[activeIdx].path);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const isMobile = variant === "mobile";

  return (
    <div ref={containerRef} className={`relative ${isMobile ? "w-full" : "w-64"}`}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          role="searchbox"
          aria-label="Search site"
          placeholder="Search products & pages..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-full border border-border bg-background/80 backdrop-blur pl-9 pr-9 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl bg-white shadow-2xl border border-border overflow-hidden max-h-[70vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-sm text-muted-foreground text-center">
              {terms.length === 0
                ? "Keep typing to search..."
                : `No results found for "${query}"`}
            </div>
          ) : (
            <ul role="listbox" className="py-1">
              {results.map((r, idx) => (
                <li key={r.path}>
                  <Link
                    to={r.path}
                    onClick={() => handleSelect(r.path)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`block px-4 py-3 border-b border-border/40 last:border-b-0 transition-colors ${
                      idx === activeIdx ? "bg-primary/10" : "hover:bg-muted/60"
                    }`}
                  >
                    <div className="text-sm font-semibold text-foreground line-clamp-1">
                      {highlight(r.title.replace(/\s*\|\s*Enzo's Cleaning Solutions.*$/, ""), terms)}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {highlight(r.description, terms)}
                    </div>
                    <div className="text-[10px] text-primary/80 mt-1 font-mono truncate">
                      {r.path}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
