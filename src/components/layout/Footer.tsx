import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import enzosLogo from "@/assets/enzos-logo.png";

const quickLinks = [
  { label: "Services", path: "/services/" },
  { label: "Cleaning Equipment", path: "/cleaning-equipment/" },
  { label: "Detergents", path: "/detergents/" },
  { label: "Disinfecting", path: "/disinfecting/" },
  { label: "Touchless Drive Thru", path: "/touchless-drive-thru/" },
  { label: "Industries We Serve", path: "/industries-we-serve/" },
  { label: "The Neutralizer", path: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" },
  { label: "About Us", path: "/about-us/" },
  { label: "Contact Us", path: "/contact-us/" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="https://enzoscleaning.com/wp-content/uploads/2020/08/Enzos-logo-white.png" alt="Enzo's Cleaning Solutions" className="h-14 w-auto mb-4" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">Specializing in sales, service, and installation of wash bay equipment, pressure washers, detergents and cleaning equipment.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}><Link to={link.path} className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="tel:4195020007" className="flex items-start gap-3 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />419-502-0007</a></li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />2003 Superior St., Sandusky, OH 44870</li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70"><Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />Mon–Fri: 8am – 5pm</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/EnzosCleaning" target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary-foreground/10 p-3 hover:bg-primary transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCBwyiTH6Acs0ubiRf10S2Ng" target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary-foreground/10 p-3 hover:bg-primary transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Our Partners</h4>
              <div className="flex flex-wrap gap-2">
                {["Hotsy", "Mi-T-M", "Kärcher", "Vital Oxide"].map((p) => (
                  <span key={p} className="text-xs bg-secondary-foreground/10 rounded-full px-3 py-1">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 text-center text-sm text-secondary-foreground/50">© {new Date().getFullYear()} Enzo's Cleaning Solutions LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
