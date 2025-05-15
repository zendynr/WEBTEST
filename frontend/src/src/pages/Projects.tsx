import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { GradientText } from "@/components/ui/gradient-text";

const Projects = () => {
  useEffect(() => {
    document.title = "Our Projects - ZoneBrozStudios";
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
              Our Projects
            </GradientText>
            <p className="text-lg text-[#666666] leading-relaxed">
              Explore our portfolio of web, mobile, and branding projects. Each project represents our commitment
              to crafting exceptional digital experiences with attention to every detail.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ProjectsSection />
    </>
  );
};

export default Projects;
