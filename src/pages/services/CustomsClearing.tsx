import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileCheck, FileText, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServicePageHero from "@/components/sections/ServicePageHero";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import customsImage from "@/assets/customs-hero.jpg";

const features = [
  {
    icon: FileText,
    title: "Documentation Processing",
    description: "Expert handling of all import/export documentation to ensure compliance with Customs and Excise Law.",
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "Full compliance with customs regulations including examinations, stops, and special attendance at all ports.",
  },
  {
    icon: Clock,
    title: "Fast Clearance",
    description: "Deferment facility for duties and VAT at all ports of entry for AIR, ROAD, and SEA shipments.",
  },
];

const services = [
  "Import and export permit applications",
  "Tariff interpretation and advice",
  "Rebate and exemption processing",
  "Customs examination handling",
  "Technical compliance consulting",
  "Duty and VAT deferment facilities",
];

const CustomsClearingPage = () => {
  return (
    <Layout>
      <ServicePageHero
        title="Customs Clearing Services"
        subtitle="Expert Compliance"
        description="We help businesses with import and export customs documentation, ensuring full compliance with regulations at all ports of entry for AIR, ROAD, and SEA freight."
        backgroundImage={customsImage}
        icon={FileCheck}
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
              Streamlined Customs Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Navigate complex customs regulations with confidence. Our expert team handles all the paperwork so you can focus on your business.
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
                Comprehensive Customs Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our customs clearing specialists provide technical advice on tariff interpretation and rebates. We process shipments expertly to ensure full compliance with Customs and Excise Law, and we can apply for Import and Export permits on your behalf.
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
                Need Customs Assistance?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let our experts handle your customs documentation. We ensure smooth clearance at all ports of entry with minimal delays.
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

export default CustomsClearingPage;
