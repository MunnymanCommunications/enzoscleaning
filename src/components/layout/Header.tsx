import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Services",
    path: "/services/",
    children: [
      { label: "Free Consultations", path: "/services/free-consultations/" },
      { label: "Service & Repair", path: "/services/pressure-washer-service-repair/" },
      { label: "Scheduled Maintenance", path: "/services/scheduled-maintenance/" },
    ],
  },
  {
    label: "Cleaning Equipment",
    path: "/cleaning-equipment/",
    children: [
      { label: "Pressure Washers", path: "/cleaning-equipment/pressure-washers/" },
      { label: "Hotsy Pressure Washers", path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" },
      { label: "Mi-T-M", path: "/cleaning-equipment/mi-t-m/" },
      { label: "Under Carriage Sprayers", path: "/cleaning-equipment/under-carriage-sprayers/" },
      { label: "Wash Bay Design", path: "/cleaning-equipment/wash-bay-design/" },
      { label: "Accessories", path: "/cleaning-equipment/pressure-washers-accessories/" },
      { label: "Floor Cleaning", path: "/cleaning-equipment/floor-cleaning/" },
    ],
  },
  {
    label: "The Neutralizer",
    path: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    label: "Disinfecting",
    path: "/disinfecting/",
    children: [
      { label: "Disinfectants & Sanitizers", path: "/disinfecting/our-disinfectants-sanitizers/" },
      { label: "Sprayers", path: "/disinfecting/our-disinfectant-sprayers/" },
      { label: "Vapore Dry Vapor", path: "/disinfecting/vapore-dry-vapor-disinfecting/" },
      { label: "Best Practices", path: "/disinfecting/disinfecting-best-practices/" },
    ],
  },
  {
    label: "Detergents",
    path: "/detergents/",
    children: [
      { label: "Transportation", path: "/detergents/transportation-truck-bus-wash/" },
      { label: "Construction", path: "/detergents/construction-equipment-cleaning/" },
      { label: "Degreasers", path: "/detergents/degreasers/" },
      { label: "Specialty", path: "/detergents/specialty-cleaning-products/" },
      { label: "Restoration", path: "/detergents/restoration-detergents/" },
      { label: "Trident", path: "/detergents/trident/" },
    ],
  },
  { label: "Industries We Serve", path: "/industries-we-serve/" },
  { label: "Touchless Drive Thru", path: "/touchless-drive-thru/" },
  { label: "About", path: "/about-us/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedItem(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scrollNav = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-xl shadow-lg" : "bg-card shadow-sm"}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-secondary to-primary">
        <div className="container flex items-center justify-between py-2 text-primary-foreground">
          <a href="tel:4195020007" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>Call Us: <strong className="text-base">419-502-0007</strong></span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://www.facebook.com/EnzosCleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-1.5 hover:bg-primary-foreground/10 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCBwyiTH6Acs0ubiRf10S2Ng" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full p-1.5 hover:bg-primary-foreground/10 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Logo + nav */}
      <div className="container flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://enzoscleaning.com/wp-content/uploads/2020/10/Enzos-logo-e1604588498498.png"
            alt="Enzo's Cleaning Solutions"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop scrollable nav */}
        <div className="hidden lg:flex items-center flex-1 min-w-0 relative">
          {canScrollLeft && (
            <button onClick={() => scrollNav("left")} className="absolute left-0 z-10 h-full px-1 bg-gradient-to-r from-card via-card/90 to-transparent">
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide scroll-smooth px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group flex-shrink-0"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                    location.pathname.startsWith(item.path) ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />}
                </Link>
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-border bg-card p-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-lg px-3 py-2.5 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button onClick={() => scrollNav("right")} className="absolute right-0 z-10 h-full px-1 bg-gradient-to-l from-card via-card/90 to-transparent">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>

        <Link
          to="/contact-us/"
          className="hidden lg:flex ml-2 flex-shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-secondary transition-colors items-center gap-2 shadow-md hover:shadow-lg"
        >
          Contact Us <Mail className="h-4 w-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="pb-4 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.path}>
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      className="flex-1 block px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                        className="px-4 py-3 text-muted-foreground hover:text-primary"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedItem === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && mobileExpandedItem === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-8 border-l-2 border-primary/20 ml-6">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/contact-us/"
                className="mx-6 mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
