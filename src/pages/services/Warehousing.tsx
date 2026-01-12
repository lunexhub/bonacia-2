import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Warehouse, Shield, Package, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import warehousingImage from "@/assets/warehousing-hero.jpg";

const features = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "High-tech security installations safeguarding your goods around the clock with advanced surveillance systems.",
  },
  {
    icon: Package,
    title: "Hazardous Goods Handling",
    description: "Licensed experts for proper packaging and storage of dangerous goods according to regulatory requirements.",
  },
  {
    icon: Clock,
    title: "Flexible Storage",
    description: "Short-term and long-term storage solutions tailored to your business needs and inventory cycles.",
  },
];

const capabilities = [
  "Modern warehousing facilities with climate control",
  "Professional labeling and packaging services",
  "Inventory management and tracking systems",
  "Seamless integration with transportation",
  "Cross-docking and distribution services",
  "Specialized storage for various cargo types",
];

const WarehousingPage = () => {
  return (
    <Layout>
      <ServicePageHero
        title="Warehousing & Storage Solutions"
        subtitle="Secure Facilities"
        description="Bespoke warehousing and storage facilities fitted with modern technology and high-tech security installations to safeguard your goods or shipments 24/7."
        backgroundImage={warehousingImage}
        icon={Warehouse}
      />

      {/* Features Section */}
      <section id="service-content" className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Our warehousing solutions are designed to meet individual and corporate cargo storage needs with the highest standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-soft border border-border"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Our Warehousing Capabilities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under MAIBH Logistics and Freight, in collaboration with our global networks, we provide warehousing facilities that are properly equipped to handle any type of cargo. Professional labeling of your goods in suitable containers for transportation is at the heart of our warehousing services.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted p-8 rounded-2xl"
            >
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Ready to Store Your Cargo?
              </h4>
              <p className="text-muted-foreground mb-6">
                Get in touch with our team to discuss your warehousing requirements. We offer competitive rates and flexible solutions.
              </p>
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </Layout>
  );
};

export default WarehousingPage;
