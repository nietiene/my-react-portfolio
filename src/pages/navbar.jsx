import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import avatar from "../assets/avataaars.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
    { name: "Resume", target: "resume" },
  ];

  const handleNavClick = (target) => {
    setActiveSection(target);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-md shadow-lg shadow-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Avatar on left */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0 flex items-center"
          >
            <img
              className="h-10 w-10 rounded-full border-2 border-cyan-400 object-cover hover:border-cyan-300 transition-colors duration-300"
              src={avatar}
              alt="Your avatar"
            />
            <span className="ml-3 text-white font-medium hidden md:inline-block bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.div>

          {/* Navigation items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.target}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(34, 211, 238, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.target)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    activeSection === item.target
                      ? "text-cyan-400 bg-gray-800/50 shadow-inner shadow-cyan-500/20"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-gray-800/30"
                  } transition-all duration-300`}
                >
                  {item.name === "Resume" ? (
                    <div className="flex items-center gap-2">
                      <FaFileDownload className="text-xs" />
                      <span>Resume</span>
                    </div>
                  ) : (
                    item.name
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
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