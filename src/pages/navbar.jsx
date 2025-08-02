import React, { useState } from "react";
import { motion } from "framer-motion"

import {
  FaHome, FaUser, FaCode,
  FaProjectDiagram, FaEnvelope
} from "react-icons/fa"

import  { Link } from "react-scroll"
import avataaars from "../assets/avataaars.svg"

const NavBar = () => {
  const [activeAction, setAction] = useState("home")

  const navItems = [
    { name: "Home", target: "home", icon: <FaHome />},
    { name: "About", target: "about", icon: <FaUser />},
    { name: "Skills", target: "skills", icon: <FaCode />},
    { name: "Projects", target: "projects", icon: <FaProjectDiagram />},
    { name: "Contact Me", target: "contact", icon: <FaEnvelope />},
  ];

return (
  <motion.div
     initial={{ y: 100 }}
     animate={{ y: 0 }}
     transition={{ duration: 0.5 }}
     className="fixed top-0 left-0 ring-0 z-50 bg-gradient-to-b from-gray-900/95 via-black/95
        backdrop-blur-sm shadow-lg shadow-cyan-500/10"
   >
    <div className="max-w-6xl mx-auto px-4 md:px-16">
      <div className="flex items-center justify-between h-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 flex items-center gap-3"
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-cyan-500 object-cover hover:border-cyan-400
              transition-all duration-300"
              src={avataaars}
              alt="Etiene avatar"
            />
            <span className="text-white font-medium hidden md:inline-block text-xl bg-gradient-to-r from-cyan-400
                to-cyan-200 bg-clip-text text-transparent"
            >
              Etiene
            </span>
        </motion.div>

        {/* nav items */}
        <div className="hidden md:flex items-center gap-4"></div>
      </div>
    </div>

  </motion.div>
)

}