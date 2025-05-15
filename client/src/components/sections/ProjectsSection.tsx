import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { GradientText } from "@/components/ui/gradient-text";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectFilter from "@/components/project/ProjectFilter";
import { projects } from "@/lib/data";

type ProjectCategory = "all" | "web" | "mobile" | "branding";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientText as="h2" className="text-3xl font-semibold mb-4">
              Our Projects
            </GradientText>
            <p className="text-[#666666] text-center mb-12 max-w-2xl mx-auto">
              Explore our latest work across web, mobile, and brand design projects.
            </p>
          </motion.div>
          
          <ProjectFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredProjects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <ProjectCard project={project} index={index} />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
