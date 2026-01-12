import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg sm:text-xl">B</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl">Bonacia Holdings</span>
            </div>
            <p className="text-primary-foreground/70 text-base sm:text-base mb-4 sm:mb-6 leading-relaxed">
              South African based multinational logistics, freights, supply and consultancy company with working partners across the globe.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/services/warehousing" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/services/customs-clearing" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Customs Clearing
                </Link>
              </li>
              <li>
                <Link to="/services/road-freight" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Road Freight
                </Link>
              </li>
              <li>
                <Link to="/services/sea-freight" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link to="/services/air-freight" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Air Freight
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-base sm:text-base">
                  44 Oleander Avenue, Kempton Park, 1625
                </span>
              </li>
              <li>
                <a href="tel:+27106342629" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-base sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  (+27) 10 634 2629
                </a>
              </li>
              <li>
                <a href="tel:+27790289940" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-base sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  (+27) 79 028 9940
                </a>
              </li>
              <li>
                <a href="mailto:info@bonaciaholdings.co.za" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-base sm:text-base break-all">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  info@bonaciaholdings.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-primary-foreground/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} Bonacia Holdings. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs sm:text-sm">
            Built by{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              lunexweb
            </a>
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
