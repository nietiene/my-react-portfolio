import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
    siReact,
    SiNodedotjs,
    SiMongoDb,
    SiFirebase,
    SiTailwindcss,
    SiExpress,
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiReact

} from "react-icons/si"

import studentIllustration from "../assets/student.png"
import chatAppIllustration from "../assets/chat-app.png"
import libraryAppIllustration from "../assets/library-managment.png"

import myPortfolio from "../assets/portfolio.png"

const Projects = () => {
    const projects = [
        { 
            title: "Real-Time Chat Application",
            tech: [
                { icon: <SiReact className="text-cyan-400" />, name: "React"},
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js"},
                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase"},
            ],
            description: 
            "A socket.io based chat application with real-tie messaging, user authentication and message history.",
            illustration: chatAppIllustration,
            code: "https://github.com/nietiene/Chat-app-frontend"
        },
        {
            title: "Student Managment System",
            tech: [
                {icon: <SiPhp className="text-green-500"/>, name: "PHP"},
                {icon: <SiTailwindcss className="text-gray-300"/>, name: "Tailwindcss"},
                {icon: <SiFirebase className="text-green-600"/>, name: "Firebase"},
            ],
            description:
            "Student Management System with Student managment, user authentication, and Role based access control.",
            illustration: studentIllustration,
            code: "https://github.com/nietiene/Gikonko-Tss-Managment-system"
        },

        {
            title: "Portfolio Website",
            tech: [
                { icon: <SiNextdotjs className="text-white" />, name: "Next.js"},
                { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind"},
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript"},
            ],
            description: 
              "A responsive portfolio website showcasting project, skills and contact information with smooth animations.",
              illustration: myPortfolio,
              code: "https://github.com/nietiene/my-react-portfolio",
        },
        {
            title: "Library Management System",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React"},
                {icon: <SiNextdotjs className="text-green-500"/>, name: "Node.js"},
                {icon: <SiTailwindcss className="text-cyan-400"/>, name: "Tailwindcss"},
            ]
        }
    ]
}