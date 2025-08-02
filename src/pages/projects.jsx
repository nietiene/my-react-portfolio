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
    SiReact
} from "react-icons/si"

import eccomerceIllustration from "../assets/ecomerce.png"
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
            "A socket.io based"
        }
    ]
}