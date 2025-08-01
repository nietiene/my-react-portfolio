import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaNodeJs, FaPython, FaPhp, FaDatabase, FaGitAlt,
    FaGitHub, FaFigma
} from "react-icons/fa"
import {
  SiTailwindcss, SiExpress, SiFlask, SiDjango, SiMongoDb,
  SiPostman, SiVercel, SiVisualstudiocode, SiSocketio,
  SiPython, 
} from "react-icons/si"

import skillsIllustration from "../assets/skills.webp"

const skills = () => {
    const skillsCategories = [
        {
            name: "Frontend",
            items: [
                { icon: <FaHtml5 className="text-orange-500"/>, name: "HTML5"},
                { icon: <FaCss3Alt className="text-blue-500"/>, name: "CSS3"},
                { icon: <FaJs className="text-yellow-400"/>, name: "JavaScript"},
                { icon: <FaReact className="text-cyan-400"/>, name: "React"},
                { icon: <FaBootstrap className="text-purple-500"/>, name: "Bootastrap"},
                { icon: <SiTailwindcss className="text-cyan-300"/>, name: "Tailwind"},
            ]
        },
        {
            name: "Backend",
            items: [
                { icon: <FaNodeJs className="text-green-500" name="Node.js"/>},
                { icon: <SiExpress className="text-gray-300" name="Express"/>},
                { icon: <SiFlask className="text-gray-300" name="Flask"/>},
                { icon: <SiPython className="text-blue-400" name="Python"/>},
                { icon: <SiDjango className="text-emerald-800" name="Django"/>},
                { icon: <FaPhp className="text-indigo-500" name="PHP"/>},
            ]
        },
        {
            name: "Databases",
            items: [
                { icon: <FaDatabase className="text-amber-500"/>, name: "MySql"},
                { icon: <SiMongoDb className="text-grren-600"/>, name: "MongoDB"}
            ]
        },
        {
        name: "Dev Tools",
        items: [
            { icon: <FaGitAlt className="text-orange-600"/>, name: "Git"},
            { icon: <FaGitHub className="text-white"/>, name: "GitHub"},
            { icon: <SiVisualstudiocode className="text-blue-500"/>, name: "VS Code"},
            { icon: <SiPostman className="text-orange-400"/>, name: "Postman"},
            { icon: <FaFigma className="text-purple-400"/>, name: "Figma"},
        ]
        },
        {
            name: "Other",
            item: [
                { name: "REST APIs", icon: <span className="text-green-400">API</span> },
                { icon: <SiSocketio className="text-white"/>, name: "Socket.IO"},
                { name: "EJS", icon: <span className="text-yellow-400">EJS</span> },
                { name: "Multer", icon: <span className="text-blue-400">MUL</span> },
                { name: "Sessions", icon: <span className="text-green-400">SESS</span> },
                { name: "Auth", icon: <span className="text-green-400">API</span> },
                { name: "REST APIs", icon: <span className="text-cyan-400">AUTH</span> },
                { name: "Passport", icon: <span className="text-cyan-400">PASS</span> },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 1, y: 20 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section
          name="skills"
          className="min-h-sreen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 
            text-gray-300 flex items-center justify-center px-4 md:px-16 py-20"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
                {/* skills grid on left side*/}
                <motion.div
                 className="flex-1"
                 initial={{ opacity: 1, x: -100 }}
                 animate={{ opacity:1, x: 0 }}
                 transition={{ duration: 0.8, type: "spring" }}
                >
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    )
}