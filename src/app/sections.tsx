// components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Apple, Github, Monitor, Play, CalendarCheck, BriefcaseBusiness, Stethoscope, Scissors, Building2, Gamepad2, Worm, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

const iconMap: Record<string, ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
  "calender-check": CalendarCheck,
  "breifcase-business": BriefcaseBusiness,
  "stethoscope": Stethoscope,
  "cissors": Scissors,
  "building-2": Building2,
  "gamepad-2": Gamepad2,
  "worm": Worm
};

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  iconName?: string;
  technologies: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  webUrl?: string;
  githubUrl?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Employee Schedule Management App",
    description: "A comprehensive scheduler app enabling company managers to create shifts/jobs for specific locations. Employees can join preferred shifts with integrated Stripe premium features and Firebase Cloud Functions.",
    image: "/projects/roostergemak.webp", 
    iconName: "calender-check",
    technologies: ["React Native", "Firebase", "Stripe", "Cloud Functions", "Push Notifications"],
  },
  {
    id: 2,
    title: "Job Management App",
    description: "Platform connecting clients with technical issues to skilled technicians. Features job posting, skill-based matching, Square payment integration, and cross-platform React Native web support.",
    image: "/projects/apricot.webp", 
    iconName: "breifcase-business",
    technologies: ["React Native", "Square Payment", "TypeScript", "Redux"],
    // playStoreUrl: "https://play.google.com/store/apps/details?id=com.theapricotapp",
    // appStoreUrl: "https://apps.apple.com/gb/app/the-apricot-app/id1648860194",
    // webUrl: "https://hub.theapricotapp.com/"
  },
  {
    id: 3,
    title: "Dental Care App",
    description: "Patient registration app with QR code connectivity for dental clinics. Features teeth scan image viewing, doctor reports, and multiple clinic clones built with Expo EAS for scalability.",
    image: "/projects/oralcheck.webp", 
    iconName: "stethoscope",
    technologies: ["React Native", "Expo EAS", "QR Integration", "Firebase"],
    // playStoreUrl: "https://play.google.com/store/apps/developer?id=Omniminds",
    // appStoreUrl: "https://apps.apple.com/gb/app/oral-check/id1645686197",
  },
  {
    id: 4,
    title: "Salon Management",
    description: "Complete salon ecosystem with three specialized apps: Customer booking, Professional management, and Owner dashboard. Features appointment scheduling, salon registration, and professional onboarding.",
    image: "/projects/easeseat.webp", 
    iconName: "cissors",
    technologies: ["React Native", "Redux Toolkit", "Google Maps"],
    // playStoreUrl: "https://play.google.com/store/apps/developer?id=Omniminds",
  },
];

const miniProjectsData: Project[] = [
  {
    id: 5,
    title: "Textile Billing Management App",
    description: "Comprehensive textile business management app for tracking bills, payments, buyers, and agents. Features offline support, PDF invoice generation, and automatic due date reminders.",
    // image: "/projects/kapdabook.webp", 
    iconName: "building-2",
    technologies: ["Expo", "SQLite"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.textileexpoapp",
    webUrl: "https://kapdabook-website.vercel.app/"
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game brought to mobile. Play against yourself or challenge your friends in this engaging strategy game perfect for all ages.",
    // image: "/projects/tictactoe.webp",
    iconName: "gamepad-2",
    technologies: ["Expo"],
    playStoreUrl: "https://www.indusappstore.com/apps/board/tic-tac-toe/com.vishaldc.tictactoe/?page=details&id=com.vishaldc.tictactoe",
  },
  {
    id: 7,
    title: "Hungry Snake Game: The Classic Return",
    description: "Relive the magic of the classic Nokia Snake game on your smartphone. Steer your snake to eat apples, avoid obstacles, and survive as long as possible in this nostalgic and addictive retro experience.",
    // image: "/projects/snack.webp",
    iconName: "worm",
    technologies: ["Expo"],
    playStoreUrl: "https://www.indusappstore.com/apps/game/snake-game:-the-classic-return/com.vishaldc.snackGame/?page=details&id=com.vishaldc.snackGame",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const IconComponent = project.iconName ? iconMap[project.iconName] : null;

  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden h-64 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50 group-hover:from-purple-200 group-hover:to-blue-100 transition-colors duration-500">
        {IconComponent && (
          <IconComponent 
            className="w-32 h-32 text-purple-600/80 group-hover:scale-110 group-hover:text-purple-700 transition-all duration-500" 
            strokeWidth={1.5}
          />
        )}
        
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {project.playStoreUrl && (
              <motion.a
                href={project.playStoreUrl}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Play Store"
              >
                <Play size={18} />
              </motion.a>
            )}
            {project.appStoreUrl && (
              <motion.a
                href={project.appStoreUrl}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="App Store"
              >
                <Apple size={18} />
              </motion.a>
            )}
            {project.webUrl && (
              <motion.a
                href={project.webUrl}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Live Demo"
              >
                <Monitor size={18} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Source Code"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800 flex-1">{project.title}</h3>
          <div className="flex gap-2 ml-3">
            {project.playStoreUrl && (
              <motion.a
                href={project.playStoreUrl}
                className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download on Play Store"
              >
                <Play size={16} className="text-green-600" />
              </motion.a>
            )}
            {project.appStoreUrl && (
              <motion.a
                href={project.appStoreUrl}
                className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download on App Store"
              >
                <Apple size={16} className="text-blue-600" />
              </motion.a>
            )}
            {project.webUrl && (
              <motion.a
                href={project.webUrl}
                className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Live Demo"
              >
                <Monitor size={16} className="text-purple-600" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Source Code"
              >
                <Github size={16} className="text-gray-600" />
              </motion.a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MiniProjectCard = ({ project }: { project: Project }) => {
  const IconComponent = project.iconName ? iconMap[project.iconName] : null;

  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 p-6 flex flex-col h-full relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-blue-50 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-110"></div>
      
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-50 flex items-center justify-center flex-shrink-0">
          {IconComponent && (
            <IconComponent 
              className="w-7 h-7 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-700" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{project.title}</h3>
          
          <div className="flex gap-2 mt-2">
            {project.playStoreUrl && (
              <motion.a
                href={project.playStoreUrl}
                className="text-gray-400 hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Play Store"
              >
                <Play size={18} />
              </motion.a>
            )}
            {project.appStoreUrl && (
              <motion.a
                href={project.appStoreUrl}
                className="text-gray-400 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="App Store"
              >
                <Apple size={18} />
              </motion.a>
            )}
            {project.webUrl && (
              <motion.a
                href={project.webUrl}
                className="text-gray-400 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Live Demo"
              >
                <Monitor size={18} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                className="text-gray-400 hover:text-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Source Code"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3 relative z-10">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-50 text-gray-600 border border-gray-100 text-xs rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const MiniProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Mini / Own Projects</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A collection of smaller utility applications and personal explorations.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {miniProjectsData.map((project) => (
              <MiniProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};