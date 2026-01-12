import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Globe, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import roadImage from "@/assets/road-freight-hero.jpg";

const features = [
  {
    icon: Globe,
    title: "Extensive Network",
    description: "Strong partner networks across Africa, Americas, Europe, Asia, and the Middle East for seamless deliveries.",
  },
  {
    icon: Shield,
    title: "Specialized Cargo",
    description: "Expert handling of dangerous goods (ADR), recycled materials, foodstuffs, and other specialized cargo.",
  },
  {
    icon: Clock,
    title: "Scheduled Groupage",
    description: "Extensive scheduled groupage pick-up and delivery distribution network with reliable timing.",
  },
];

const services = [
  "Full truckload (FTL) services",
  "Less than truckload (LTL) options",
  "Cross-border transportation",
  "Dangerous goods (ADR) transport",
  "Refrigerated cargo handling",
  "Integrated warehousing and customs",
];

const RoadFreightPage = () => {
  return (
    <Layout>
      <ServicePageHero
        title="Road Freight Services"
        subtitle="Reliable Transportation"
        description="Reliable road freight services in cooperation with our strong partner networks across Africa and beyond. All transports performed according to agreements made with our clients."
        backgroundImage={roadImage}
        icon={Truck}
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
              Ground Transportation Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              From local deliveries to cross-border shipments, our road freight solutions cover all your ground transportation needs.
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
                Complete Road Freight Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bonacia Holdings logistics and freights arm offers reliable road freight services with an extensive distribution network. Any additional services required during transportation, such as warehousing and customs clearances, are professionally handled by our partners.
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
                Ship by Road Today
              </h4>
              <p className="text-muted-foreground mb-6">
                Get competitive rates for your road freight needs. Our extensive network ensures your cargo reaches its destination safely and on time.
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

export default RoadFreightPage;
