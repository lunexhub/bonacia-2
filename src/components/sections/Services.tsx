import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Warehouse, FileCheck, Truck, Ship, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Bespoke warehousing and storage facilities with modern technology and 24/7 security installations to safeguard your goods.",
    path: "/services/warehousing",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileCheck,
    title: "Customs Clearing",
    description: "Expert processing of import/export documentation ensuring full compliance with Customs and Excise Law at all ports of entry.",
    path: "/services/customs-clearing",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description: "Reliable road freight services with an extensive scheduled groupage pick-up and delivery distribution network across Africa.",
    path: "/services/road-freight",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Full container and consolidation services with our global shipping line partners. No shipment too big or small.",
    path: "/services/sea-freight",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Affordable and time-efficient air cargo solutions with our worldwide network of airline and logistics partners.",
    path: "/services/air-freight",
    color: "from-rose-500 to-rose-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From warehousing to worldwide delivery, we provide end-to-end logistics services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-border hover:border-accent/30"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
