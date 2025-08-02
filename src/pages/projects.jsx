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
            "A socket.io based chat application with real-tie messaging, user authentication and message history.",
            illustration: chatAppIllustration,
            code: "https://github.com/nietiene/Chat-app-frontend"
        },
        {
            title: "E-Commerce Backend API",
            tech: [
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js"},
                {icon: <SiExpress className="text-gray-300"/>, name: "Express"},
                {icon: <SiMongoDb className="text-green-600"/>, name: "MongoDB"},
            ],
            description:
            "RESTFUL API an e-commerce platform with product managment, user authentication, and order proccessing.",
            illustration: eccomerceIllustration,
            code: ""
        }
    ]
}