export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  category: "web" | "mobile" | "branding";
  image: string;
  tags: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Analytics Dashboard",
    shortDescription: "Modern data visualization platform",
    description: "A powerful analytics dashboard for tracking business metrics in real-time",
    longDescription: "This comprehensive analytics dashboard provides businesses with real-time insights into their performance metrics. Featuring interactive charts, customizable widgets, and automated reporting, it empowers teams to make data-driven decisions quickly and efficiently.",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "D3.js", "Firebase"],
    technologies: ["React", "Redux", "D3.js", "Firebase", "Material UI", "Jest"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/zonebrozstudios/analytics-dashboard",
  },
  {
    id: 2,
    title: "FitTrack Mobile App",
    shortDescription: "Fitness tracking and workout planning",
    description: "Fitness tracking app with personalized workout plans and progress monitoring",
    longDescription: "FitTrack is a comprehensive fitness companion that helps users achieve their health goals through personalized workout plans, nutrition tracking, and progress visualization. The app features exercise libraries, custom workout creation, and seamless integration with wearable devices.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Flutter", "Firebase", "Health API"],
    technologies: ["Flutter", "Firebase", "Google Health API", "Provider State Management", "SQLite", "Dio"],
    demoUrl: "https://example.com/fittrack-demo",
    githubUrl: "https://github.com/zonebrozstudios/fittrack-app",
  },
  {
    id: 3,
    title: "EcoVibe Brand Identity",
    shortDescription: "Eco-friendly lifestyle brand design",
    description: "Complete brand identity design for an eco-friendly lifestyle company",
    longDescription: "We developed a comprehensive brand identity for EcoVibe, including logo design, typography, color palette, and brand guidelines. The design reflects the company's commitment to sustainability and eco-friendly practices while maintaining a modern and appealing aesthetic.",
    category: "branding",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Branding", "Logo Design", "Packaging"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "InDesign", "Brand Strategy"],
    demoUrl: "https://example.com/ecovibe-casestudy",
  },
  {
    id: 4,
    title: "Fake Intimidation – Streetwear Brand",
    shortDescription: "A fashion label critiquing luxury culture through bold minimalist design.",
    description: "A conceptual clothing brand focused on redefining authenticity in fashion.",
    longDescription: "Fake Intimidation is a streetwear brand that challenges the elitism and power structures of luxury fashion. Through minimalist yet bold visuals, it confronts how major brands intimidate smaller creatives and commodify identity. The brand features oversized hoodies, jackets, and tees with strong typographic elements, Chinese character symbolism, and phrases like 'The Fear of Being FAKE.' Built with a high-end aesthetic similar to Fear of God and Nocta, it emphasizes clean design, deep messaging, and visual impact.",
    category: "branding",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Streetwear", "Branding", "Minimalism", "Fashion Critique"],
    technologies: ["Adobe Illustrator", "Figma", "Photoshop", "Mockup Tools"],
    demoUrl: "https://example.com/fake-intimidation",
  },
  {
    id: 5,
    title: "QuickBite Food Delivery",
    shortDescription: "On-demand food ordering platform",
    description: "Fast and intuitive food delivery application with real-time tracking",
    longDescription: "QuickBite revolutionizes the food delivery experience with its intuitive interface and real-time tracking features. Users can browse restaurants, customize orders, track delivery in real-time, and manage payment methods seamlessly. The app also includes a sophisticated order dispatch system for restaurants and delivery partners.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React Native", "Node.js", "Google Maps"],
    technologies: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Google Maps API", "Stripe", "Socket.io"],
    demoUrl: "https://example.com/quickbite-demo",
    githubUrl: "https://github.com/zonebrozstudios/quickbite-app",
  },
  {
    id: 6,
    title: "LearnWave Platform",
    shortDescription: "Interactive education platform",
    description: "Interactive online learning platform with courses, quizzes, and progress tracking",
    longDescription: "LearnWave provides a comprehensive learning management system for educators and students. The platform features course creation tools, interactive lesson content, assessment capabilities, student progress tracking, and a virtual classroom environment for live sessions and collaborative learning.",
    category: "web",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Vue.js", "AWS", "Express"],
    technologies: ["Vue.js", "Vuex", "Node.js", "Express", "PostgreSQL", "AWS S3", "AWS Lambda", "Socket.io"],
    demoUrl: "https://example.com/learnwave-demo",
    githubUrl: "https://github.com/zonebrozstudios/learnwave-platform",
  },
];
