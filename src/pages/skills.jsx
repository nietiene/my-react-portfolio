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
                { icon: <FaDatabase className="text-amber-500"/>, name: "MySql"}
                { icon: <SiMongoDb className="text-grren-600"/>, name: "MongoDB"}
            ]
        }
    ]
}