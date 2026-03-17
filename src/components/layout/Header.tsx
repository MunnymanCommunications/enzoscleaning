import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

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
    label: "Fleet Preservation – The Neutralizer",
    path: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/",
  },
  {
    label: "Disinfecting",
    path: "/disinfecting/",
    children: [
      { label: "Disinfectants & Sanitizers", path: "/disinfecting/our-disinfectants-sanitizers/" },
      { label: "Sprayers", path: "/disinfecting/our-disinfectant-sprayers/" },
      { label: "Vapore Dry Vapor", path: "/disinfecting/vapore-dry-vapor-disinfecting/" },
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
    ],
  },
  { label: "Touchless Drive Thru", path: "/touchless-drive-thru/" },
  { label: "About", path: "/about/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-2 text-primary-foreground">
          <a href="tel:4195020007" className="flex items-center gap-2 text-sm font-semibold hover:opacity-80">
            <Phone className="h-4 w-4" />
            <span>Call Us: <strong className="text-lg">419-502-0007</strong></span>
          </a>
          <div className="hidden items-center gap-4 md:flex">
            <a href="https://www.facebook.com/EnzosCleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCBwyiTH6Acs0ubiRf10S2Ng" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Logo + nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://enzoscleaning.com/wp-content/uploads/2020/10/Enzos-logo-e1604588498498.png"
            alt="Enzo's Cleaning Solutions"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-md border bg-popover p-1 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact-us/"
            className="ml-2 rounded-md bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:bg-secondary transition-colors flex items-center gap-2"
          >
            Contact Us <Mail className="h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background pb-4">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className="block px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-8">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact-us/"
            className="mx-6 mt-2 block rounded-md bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
