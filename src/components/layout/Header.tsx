import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import enzosLogo from "@/assets/enzos-logo.png";
import SiteSearch from "@/components/shared/SiteSearch";

const navItems = [
  {
    label: "Services",
    path: "/services/",
    children: [
      { label: "Free Consultations", path: "/services/free-consultations/" },
      { label: "Service & Repair", path: "/services/pressure-washer-service-repair/" },
      { label: "Scheduled Maintenance", path: "/services/scheduled-maintenance/" },
      { label: "Preventative Maintenance", path: "/services/preventative-maintenance/" },
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
      { label: "Citymaster", path: "/citymaster-1650-650multifunction-sweeper/" },
    ],
  },
  {
    label: "The Neutralizer",
    path: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    label: "Detergents & Disinfectants",
    path: "/detergents/",
    children: [
      { label: "Transportation", path: "/detergents/transportation-truck-bus-wash/" },
      { label: "Construction", path: "/detergents/construction-equipment-cleaning/" },
      { label: "Degreasers", path: "/detergents/degreasers/" },
      { label: "Specialty", path: "/detergents/specialty-cleaning-products/" },
      { label: "Restoration", path: "/detergents/restoration-detergents/" },
      { label: "Disinfectants & Sanitizers", path: "/disinfecting/our-disinfectants-sanitizers/" },
      { label: "Disinfectant Sprayers", path: "/disinfecting/our-disinfectant-sprayers/" },
      { label: "Vapore Dry Vapor", path: "/disinfecting/vapore-dry-vapor-disinfecting/" },
      { label: "Disinfecting Best Practices", path: "/disinfecting/disinfecting-best-practices/" },
    ],
  },
  {
    label: "Hardscaping",
    path: "/hardscaping/",
    children: [
      { label: "Trident Overview & Training", path: "/hardscaping/" },
      { label: "Trident Product Catalog", path: "/hardscaping/trident/" },
      { label: "T3 University", path: "/hardscaping/trident/university/" },
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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
      {/* Top utility bar */}
      <div className="bg-secondary">
        <div className="container flex items-center justify-between py-1.5 text-secondary-foreground">
          <a href="tel:4195020007" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>Call Us: <strong>419-502-0007</strong></span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://www.facebook.com/EnzosCleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-1.5 hover:bg-secondary-foreground/10 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCBwyiTH6Acs0ubiRf10S2Ng" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full p-1.5 hover:bg-secondary-foreground/10 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header — glass effect when scrolled */}
      <div className={`border-b border-border transition-all duration-500 ${scrolled ? "glass-strong" : "bg-card"}`}>
        <div className="container flex items-center justify-between py-2 gap-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={enzosLogo}
              alt="Enzo's Cleaning Solutions"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop: search + contact CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-1 justify-end max-w-md ml-auto">
            <SiteSearch />
            <Link
              to="/contact-us/"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-bold text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 active:scale-[0.97] flex-shrink-0"
            >
              Contact Us <Mail className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors active:scale-95"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop navigation bar */}
      <nav className="hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary">
        <div className="container">
          <ul className="flex items-stretch">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    location.pathname.startsWith(item.path)
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-full z-50 min-w-[240px] rounded-b-xl glass-strong py-1 shadow-2xl"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-border glass-strong overflow-hidden"
          >
            <div className="pb-4 max-h-[70vh] overflow-y-auto">
              <div className="px-4 py-3 border-b border-border/40">
                <SiteSearch variant="mobile" onNavigate={() => setMobileOpen(false)} />
              </div>
              {navItems.map((item) => (
                <div key={item.path}>
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      className="flex-1 block px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                        className="px-4 py-3 text-muted-foreground hover:text-primary"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpandedItem === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && mobileExpandedItem === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                className="mx-6 mt-4 block rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-center text-sm font-bold text-primary-foreground"
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
