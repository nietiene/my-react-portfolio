import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope,
  FaGithub, 
  FaLinkedin, 
  FaEnvelope as FaMail 
} from "react-icons/fa";
import { Link } from "react-scroll";
import avatar from "../assets/avataaars.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  const navItems = [
    { name: "Home", target: "home", icon: <FaHome /> },
    { name: "About", target: "about", icon: <FaUser /> },
    { name: "Skills", target: "skills", icon: <FaCode /> },
    { name: "Projects", target: "projects", icon: <FaProjectDiagram /> },
    { name: "Contact", target: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Avatar on left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-cyan-500 object-cover hover:border-cyan-400 transition-all duration-300"
              src={avatar}
              alt="Etiene avatar"
            />
            <span className="text-white font-medium hidden md:inline-block text-xl bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Etiene
            </span>
          </motion.div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(item.target)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-lg font-medium ${
                  activeSection === item.target
                    ? "text-cyan-400 bg-gray-800/50 shadow-inner shadow-cyan-500/20"
                    : "text-gray-300 hover:text-cyan-300 hover:bg-gray-800/30"
                } transition-all duration-300 cursor-pointer`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-4 text-2xl">
            <a
              href="mailto:niyomugaboetiene53@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              <FaMail />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;