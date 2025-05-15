import { motion } from "framer-motion";
import { Pencil, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

const introCards = [
  {
    icon: <Pencil className="h-8 w-8 text-[#5f72be]" />,
    title: "Design",
    description: "User-centered design with attention to every detail."
  },
  {
    icon: <Code className="h-8 w-8 text-[#5f72be]" />,
    title: "Development",
    description: "Clean, efficient, and maintainable code structures."
  },
  {
    icon: <Rocket className="h-8 w-8 text-[#5f72be]" />,
    title: "Deployment",
    description: "Fast, secure, and reliable delivery processes."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientText as="h2" className="text-3xl font-semibold mb-8">
              Our Mission
            </GradientText>
            <p className="text-[#666666] text-lg leading-relaxed mb-10">
              At ZoneBrozStudios, we believe in transforming ideas into exceptional digital experiences. 
              Our passion lies in creating intuitive, visually stunning, and high-performing solutions 
              that help our clients stand out in the digital landscape.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {introCards.map((card, index) => (
              <motion.div
                key={index}
                className="w-full md:w-[30%]"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="h-full shadow-md hover:shadow-xl transition-all">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="mb-4 mt-4">{card.icon}</div>
                    <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                    <p className="text-[#666666]">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
