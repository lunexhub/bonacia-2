import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ship, Container, Globe, Package, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import seaImage from "@/assets/sea-freight-hero.jpg";

const features = [
  {
    icon: Container,
    title: "Container Options",
    description: "High cube, standard 40ft and 20ft containers, RORO, open containers, and more with our shipping line partners.",
  },
  {
    icon: Package,
    title: "Consolidation Service",
    description: "Groupage services for customers with small volume shipments. No matter the size, we have solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Secure space in vessels to different ports of destination worldwide with our time-tested partners.",
  },
];

const services = [
  "Full container load (FCL) services",
  "Less than container load (LCL)",
  "RORO (Roll-on/Roll-off) shipping",
  "Project cargo and heavy equipment",
  "Reefer container services",
  "Port-to-port and door-to-door delivery",
];

const SeaFreightPage = () => {
  return (
    <Layout>
      <ServicePageHero
        title="Sea Freight Solutions"
        subtitle="Ocean Shipping"
        description="Our sea freight team of experts together with time-tested partners across the globe secure space in vessels to ports worldwide. You can always count on us to deliver your goods."
        backgroundImage={seaImage}
        icon={Ship}
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
              Ocean Freight Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              From small parcels to heavy machinery, our sea freight services are tailored to meet your international shipping needs.
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

          {/* Services List */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Comprehensive Sea Freight Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our workforce has the requisite skills and know-how to move your heavy equipment and machinery. Custom documentations and other relevant documents are quickly prepared within stipulated time to clear your shipments at any sea port.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((item, index) => (
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
                Ship Across Oceans
              </h4>
              <p className="text-muted-foreground mb-6">
                Whether you need FCL or LCL services, our global shipping network ensures your cargo reaches any port safely and cost-effectively.
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

export default SeaFreightPage;
