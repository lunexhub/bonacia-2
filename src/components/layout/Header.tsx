import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Warehousing", path: "/services/warehousing" },
  { name: "Customs Clearing", path: "/services/customs-clearing" },
  { name: "Road Freight", path: "/services/road-freight" },
  { name: "Sea Freight", path: "/services/sea-freight" },
  { name: "Air Freight", path: "/services/air-freight" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary hidden md:block">
        <div className="container-wide py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <a href="tel:+27106342629" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              (+27) 10 634 2629
            </a>
            <a href="mailto:info@bonaciaholdings.co.za" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              info@bonaciaholdings.co.za
            </a>
          </div>
          <div className="text-sm text-primary-foreground/80">
            44 Oleander Avenue, Kempton Park, 1625
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="backdrop-blur-md">
        <div className="container-wide py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-xl">B</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Bonacia Holdings
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${
                  location.pathname.startsWith("/services")
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-medium border border-border overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                          isActive(service.path)
                            ? "bg-accent/10 text-accent"
                            : "text-foreground"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-accent ${
                isActive("/contact") ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container-wide py-4 space-y-4">
                <Link
                  to="/"
                  className="block py-2 font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block py-2 font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                <div>
                  <button
                    className="flex items-center gap-1 py-2 font-medium text-foreground w-full"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block py-2 text-sm text-muted-foreground"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  className="block py-2 font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Button asChild variant="cta" className="w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
