import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import codingIllustration from "../assets/Programmer Illustration.svg";
import webDevIllustration from "../assets/web developmen.png";
import databaseIllustration from "../assets/database.png";
import uiIllustration from "../assets/user interface.png";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      tech: [
        { icon: <SiReact className="text-cyan-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
      ],
      description:
        "A socket.io based chat application with real-time messaging, user authentication, and message history.",
      illustration: codingIllustration,
      code: "https://github.com/yourusername/chat-app",
    },
    {
      title: "E-Commerce Backend API",
      tech: [
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-300" />, name: "Express" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      ],
      description:
        "RESTful API for an e-commerce platform with product management, user authentication, and order processing.",
      illustration: databaseIllustration,
      code: "https://github.com/yourusername/ecommerce-api",
    },
    {
      title: "Portfolio Website",
      tech: [
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      ],
      description:
        "A responsive portfolio website showcasing projects, skills, and contact information with smooth animations.",
      illustration: uiIllustration,
      code: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Task Management System",
      tech: [
        { icon: <SiReact className="text-cyan-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      ],
      description:
        "Full-stack task management application with drag-and-drop functionality and team collaboration features.",
      illustration: webDevIllustration,
      code: "https://github.com/yourusername/task-manager",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      name="projects"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 flex items-center justify-center px-4 md:px-16 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold text-cyan-500 mb-8 text-center"
            variants={itemVariants}
          >
            My <span className="text-white">Projects</span>
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my projects available on GitHub. Each demonstrates different aspects of my full-stack development skills.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-700/30">
                  <img
                    src={project.illustration}
                    alt={project.title}
                    className="w-2/3 h-2/3 object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="flex gap-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-700/50 rounded-full transition-colors"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
