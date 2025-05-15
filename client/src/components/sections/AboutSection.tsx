import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNodedotjs, 
  SiFigma, 
  SiFirebase, 
  SiSass, 
  SiFlutter, 
  SiJavascript 
} from "react-icons/si";
import { Check } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiSass />, name: "SASS" },
  { icon: <SiFlutter />, name: "Flutter" },
];

const values = [
  "User-centered design in everything we create",
  "Transparent communication and collaboration",
  "Continuous learning and improvement",
  "Quality over quantity in all our work"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <GradientText as="h2" className="text-3xl font-semibold">
              About Our Studio
            </GradientText>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="ZoneBrozStudios Team at work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium mb-4">Who We Are</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Founded in 2020, ZoneBrozStudios started as a collaboration between two design and development enthusiasts with a shared vision: to create digital products that are both beautiful and functional.
              </p>
              <p className="text-[#666666] leading-relaxed mb-8">
                Today, we're a small but mighty team of designers, developers, and strategists working together to deliver exceptional results for clients across various industries.
              </p>
              
              <h3 className="text-2xl font-medium mb-4">Our Values</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-gradient-to-r from-[#5f72be] to-[#9b59b6] rounded-full p-1 mr-3 mt-1">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-[#666666]">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-center">Our Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl text-[#5f72be] mb-2">{tech.icon}</div>
                  <p className="text-sm font-medium">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
