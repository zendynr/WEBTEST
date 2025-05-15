import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "ZoneBrozStudios - Creative Digital Studio";
  }, []);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
