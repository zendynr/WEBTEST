import { useEffect } from "react";
import { motion } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import { GradientText } from "@/components/ui/gradient-text";

const About = () => {
  useEffect(() => {
    document.title = "About Us - ZoneBrozStudios";
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
              About ZoneBrozStudios
            </GradientText>
            <p className="text-lg text-[#666666] leading-relaxed">
              We are a creative digital studio founded on the principles of exceptional design,
              clean code, and lightning-fast delivery. Get to know our team, our story, and what drives us.
            </p>
          </motion.div>
        </div>
      </section>
      
      <AboutSection />
    </>
  );
};

export default About;
