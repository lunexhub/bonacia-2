import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Clock, DollarSign, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import airImage from "@/assets/air-freight-hero.jpg";

const features = [
  {
    icon: Clock,
    title: "Time-Critical Delivery",
    description: "Advance custom declarations and procedures are done efficiently to prevent delays and demurrage on your shipments.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Affordable and cost-effective air freight solutions that save you time and money despite rising transport costs.",
  },
  {
    icon: Globe,
    title: "Worldwide Network",
    description: "Indomitable export team across Africa, Asia, Europe, Americas, and the Middle East with hundreds of airline partners.",
  },
];

const services = [
  "Express and priority air cargo",
  "Standard air freight services",
  "Charter flights for urgent cargo",
  "Door-to-door delivery worldwide",
  "Advance customs clearance",
  "Temperature-controlled shipping",
];

const AirFreightPage = () => {
  return (
    <Layout>
      <ServicePageHero
        title="Air Freight Services"
        subtitle="Fast Delivery"
        description="With a combined team of experts across various airports worldwide, we provide advanced custom solutions to clear your goods upon arrival and avoid any delays. Choose BH Air Freight to save cost and time."
        backgroundImage={airImage}
        icon={Plane}
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
              Swift Air Cargo Solutions
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              When time is of the essence, our air freight services deliver your cargo swiftly and safely to any destination worldwide.
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
                <p className="text-muted-foreground text-base leading-relaxed">
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
                Complete Air Freight Solutions
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Our export team efficiently and effectively handles tons of cargo including equipment, food, textiles, and even the smallest parcel or box. With costs of transport rising across the world, BH Exports provides affordable and cost-effective air freight.
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
                    <span className="text-foreground text-base">{item}</span>
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
                Fly Your Cargo Today
              </h4>
              <p className="text-muted-foreground text-base mb-6">
                Need urgent delivery? Our air freight services get your cargo where it needs to be, fast. Contact us for competitive rates.
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

export default AirFreightPage;
