import { motion } from "framer-motion";

type ProjectCategory = "all" | "web" | "mobile" | "branding";

interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  setActiveFilter: (category: ProjectCategory) => void;
}

const ProjectFilter = ({ activeFilter, setActiveFilter }: ProjectFilterProps) => {
  const filters: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "branding", label: "Branding" },
  ];

  return (
    <motion.div 
      className="flex justify-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex bg-[#f9f9f9] rounded-full p-1">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === filter.value
                ? "bg-white shadow-md text-[#5f72be]"
                : "text-[#666666] hover:text-[#5f72be]"
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectFilter;
