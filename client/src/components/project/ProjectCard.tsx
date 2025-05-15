import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(95,114,190,0.9)] to-[rgba(155,89,182,0.8)] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
            <div className="text-center">
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    className="bg-white text-[#5f72be] px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    className="border border-white text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium mb-2">{project.title}</h3>
          <p className="text-[#666666] mb-3">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-[#f9f9f9] rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
