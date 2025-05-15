import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import { GradientText } from "@/components/ui/gradient-text";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - ZoneBrozStudios";
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientText as="h1" className="text-4xl md:text-5xl font-semibold mb-6">
              Get In Touch
            </GradientText>
            <p className="text-lg text-[#666666] leading-relaxed">
              Whether you have a project in mind or just want to say hello, we'd love to hear from you.
              Reach out and let's start a conversation about your digital needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default Contact;
