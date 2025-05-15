import { motion } from "framer-motion";
import { Link } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:py-40 flex items-center min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80')" }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#5f72be] to-[#9b59b6] bg-clip-text text-transparent">
              We Build Bold.
            </span>
            <span className="block">Code Clean. Deliver Fast.</span>
          </motion.h1>
          
          <motion.p 
            className="text-[#666666] text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A digital studio crafting exceptional experiences for forward-thinking brands and businesses.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/projects">
              <GradientButton size="lg">
                View Projects
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
