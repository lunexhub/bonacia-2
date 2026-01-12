import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  "Customer-first approach in every interaction",
  "Transparency in pricing and operations",
  "Excellence in service delivery",
  "Continuous improvement and innovation",
  "Strong ethical business practices",
  "Environmental responsibility",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Delivering Excellence Since Day One
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              At Bonacia Holdings, we deliver your logistics and freight needs excellently, timely, and affordably.
            </p>
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Bonacia Holdings team"
                  className="rounded-2xl shadow-large w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-4 rounded-xl shadow-accent">
                  <div className="font-display text-3xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Global Logistics Partner
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Bonacia Holdings is a South African based multinational logistics, freights, supply and consultancy company with working partners across the globe. Our well-assembled team of various expertise are strategically positioned with our global partners to handle your air, sea, road, and cross-border exports and imports freight.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Whether you need to move small personal effects or heavy industrial equipment, from perishables including seafood and fruits to complex machinery—we have logistics solutions tailored to your needs, no matter where you are in the world.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{value}</span>
                  </motion.div>
                ))}
              </div>

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

      {/* Mission Section */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="font-display text-2xl font-bold text-accent">M</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                You, the customer, are our topmost priority and focus. We're constantly growing our network to provide our clients with a genuinely worldwide partner and utilizing turnkey solutions to provide industry-leading goods and services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="font-display text-2xl font-bold text-accent">V</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To be the leading logistics partner in Africa and beyond, known for delivering excellence, reliability, and innovation. We envision a world where seamless freight movement drives global commerce forward.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </Layout>
  );
};

export default About;
