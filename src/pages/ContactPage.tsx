import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";

import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 }, // Start fully transparent
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }, // Fade in smoothly
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }, // Fade out before next page appears
};

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | HALO Architects";
    window.scrollTo(0, 0);
  }, []);

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Design Avenue, Architecture City, AC 12345",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(123) 456-7890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@haloarchitects.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Monday - Friday: 9am - 6pm",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <div className="min-h-screen">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Get in Touch
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl max-w-2xl">
                Have a project in mind or interested in learning more about our
                services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <RevealOnScroll>
          <section className="pb-24 md:pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-6">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {contactDetails.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-foreground/70">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl mb-6">
                    Our Process
                  </h2>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-medium">01</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Initial Consultation
                        </h3>
                        <p className="text-foreground/70">
                          We begin with a conversation to understand your
                          vision, requirements, and goals for your project.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-medium">02</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Concept Development
                        </h3>
                        <p className="text-foreground/70">
                          Our team develops initial design concepts and 3D
                          visualizations to bring your ideas to life.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-medium">03</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Design Refinement
                        </h3>
                        <p className="text-foreground/70">
                          We refine the design based on your feedback,
                          incorporating all technical requirements.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-medium">04</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Implementation
                        </h3>
                        <p className="text-foreground/70">
                          Our team works closely with contractors and
                          consultants to bring your project to fruition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="glass rounded-lg p-8 md:p-10">
                    <h2 className="font-display text-2xl md:text-3xl mb-6">
                      Send Us a Message
                    </h2>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Map Section */}
        <RevealOnScroll>
          <section className="pb-20 md:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-80 md:h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                  alt="Office location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <Footer />
      </div>
    </motion.div>
  );
};

export default ContactPage;
