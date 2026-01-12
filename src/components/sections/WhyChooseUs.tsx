import { motion } from "framer-motion";
import { Globe, Clock, Shield, HeadphonesIcon, DollarSign, Award } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Partners across Africa, Americas, Europe, Asia, and the Middle East for seamless worldwide logistics.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable scheduling and real-time tracking to ensure your cargo arrives exactly when expected.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "24/7 monitored facilities and licensed handling of all goods, including hazardous materials.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account managers providing expert guidance before, during, and after every shipment.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Affordable pricing without compromising quality. Get the best value for your logistics needs.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 15 years of experience handling complex freight operations across multiple industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Why Bonacia Holdings
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Your Cargo, Our Priority
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4 sm:px-0">
            We deliver your cargo—even the tiniest package—at the best price with the greatest possible service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
