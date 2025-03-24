import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-medium">
              HALO ARCHITECTS
            </h3>
            <p className="text-foreground/70 max-w-xs">
              Creating sustainable, modern, and luxurious spaces that inspire
              and endure.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-base">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/team"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-base">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Residential Design
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Commercial Projects
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Interior Design
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                3D Visualization
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-base">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-foreground/70 mt-0.5" />
                <span className="text-foreground/70">
                  123 Design Avenue, Architecture City, AC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-foreground/70" />
                <a href="tel: 123 456-7890" className="text-foreground/70">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-foreground/70" />
                <a
                  href="mailto:info@haloarchitects.com"
                  className="text-foreground/70"
                >
                  info@haloarchitects.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} HALO Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
