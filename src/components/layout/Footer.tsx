import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src="https://enzoscleaning.com/wp-content/uploads/2020/10/Enzos-logo-white.png"
              alt="Enzo's Cleaning Solutions"
              className="mb-4 h-14 w-auto"
            />
            <p className="text-sm opacity-80">
              If You Have A Need, We Have The Solution!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Services", path: "/services/" },
                { label: "Cleaning Equipment", path: "/cleaning-equipment/" },
                { label: "Detergents", path: "/detergents/" },
                { label: "Touchless Drive Thru", path: "/touchless-drive-thru/" },
                { label: "About", path: "/about/" },
                { label: "Contact Us", path: "/contact-us/" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a href="tel:4195020007" className="hover:opacity-80">419-502-0007</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>2003 Superior St.<br />Sandusky, OH 44870</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>M-F: 7:30am – 4pm<br />Sat: By appointment<br />Sun: Closed</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/EnzosCleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCBwyiTH6Acs0ubiRf10S2Ng" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="opacity-80 hover:opacity-100">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Enzo's Cleaning Solutions LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
