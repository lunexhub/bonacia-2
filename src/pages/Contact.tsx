import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Let's Discuss Your Logistics Needs
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Get a free quote or speak to our experts. We're here to help you find the perfect logistics solution.
            </p>
            <Button asChild variant="cta" size="lg" className="scroll-mt-24">
              <a href="#contact-form">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Have questions about our services? Our team is ready to assist you with all your logistics needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-base">
                      44 Oleander Avenue,<br />
                      Kempton Park, 1625<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-base">
                      <a href="tel:+27106342629" className="hover:text-accent transition-colors">
                        (+27) 10 634 2629
                      </a>
                      <br />
                      <a href="tel:+27790289940" className="hover:text-accent transition-colors">
                        (+27) 79 028 9940
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-base">
                      <a href="mailto:info@bonaciaholdings.co.za" className="hover:text-accent transition-colors">
                        info@bonaciaholdings.co.za
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-base">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-soft border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground text-base mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your quote request has been submitted. Our team will contact you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-base font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-base font-medium text-foreground mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="customs-clearing">Customs Clearing</option>
                        <option value="road-freight">Road Freight</option>
                        <option value="sea-freight">Sea Freight</option>
                        <option value="air-freight">Air Freight</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
                        Tell us about your shipment *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your cargo, origin, destination, and any special requirements..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Quote Request
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
