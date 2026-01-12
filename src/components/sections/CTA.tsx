import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Ready to Ship Your Cargo?
          </h2>
          <p className="text-primary-foreground/90 sm:text-primary-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            Get a free quote today and discover why businesses across the globe trust Bonacia Holdings with their logistics needs.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
