import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const Project = () => {
  const [match, params] = useRoute("/projects/:id");
  const projectId = params?.id;
  
  const project = projects.find(p => p.id.toString() === projectId);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - ZoneBrozStudios`;
    } else {
      document.title = "Project Not Found - ZoneBrozStudios";
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [project]);
  
  if (!project) {
    return (
      <div className="pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-semibold mb-4">Project Not Found</h1>
        <p className="text-[#666666] mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link href="/projects">
          <Button>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <section className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GradientText as="h1" className="text-4xl md:text-5xl font-semibold mb-6">
                {project.title}
              </GradientText>
              <p className="text-xl text-[#666666] mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-sm px-3 py-1 bg-[#f9f9f9] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-medium mb-4">Project Overview</h2>
                <p className="text-[#666666] mb-6">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <GradientButton>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </GradientButton>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
                <ul className="space-y-2 text-[#666666]">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-[#5f72be]"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
