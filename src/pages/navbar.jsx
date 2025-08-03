import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome, FaUser, FaCode,
  FaProjectDiagram, FaEnvelope,
  FaTimes, FaMoon, FaSun
} from "react-icons/fa";
import avataaars from "../assets/avataaars.svg";

const NavBar = () => {
  const [activeAction, setActiveAction] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // check local storage for saved preference or use system preference

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return JSON.parse(savedMode);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const navItems = [
    { name: "Home", target: "/", icon: <FaHome /> },
    { name: "About", target: "/about", icon: <FaUser /> },
    { name: "Skills", target: "/skills", icon: <FaCode /> },
    { name: "Projects", target: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact Me", target: "/contact", icon: <FaEnvelope /> },
  ];

  const handleNavClick = (target) => {
    setActiveAction(target);
    setMobileMenuOpen(false);
  };

// apply dark mode class to HTML element and save preferences
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/95 via-black/95 dark:from-gray-100/95 dark:via-white/95"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-cyan-500 dark:border-cyan-600 object-cover hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300"
              src={avataaars}
              alt="Etiene avatar"
            />
            <span className="text-white dark:text-gray-900 font-medium hidden md:inline-block text-xl bg-gradient-to-r from-cyan-400 to-cyan-200 dark:from-cyan-600 dark:to-cyan-800 bg-clip-text text-transparent">
              Etiene
            </span>
          </motion.div>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.target}
                to={item.target}
                className={({ isActive }) => 
                   `flex items-center gap-2 px-5 py-3 rounded-full text-lg font-medium ${
                  isActive
                    ? "text-cyan-400 dark:text-cyan-600 bg-gray-800/50 dark:bg-gray-200/50 shadow-inner shadow-cyan-500/20 dark:shadow-cyan-600/20"
                    : "text-gray-300 dark:text-gray-600 hover:text-cyan-300 dark:hover:text-cyan-500 hover:bg-gray-800/30 dark:hover:bg-gray-200/30"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => handleNavClick(item.target)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center gap-4">
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-300 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-cyan-600 focus:outline-none"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <FaSun className="h-6 w-6" />
              ) : (
                <FaMoon className="h-6 w-6" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-gray-300 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-cyan-600 focus:outline-none p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
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
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 dark:bg-gray-100/95 backdrop-blur-sm border-t border-gray-800 dark:border-gray-300"
          >
            <div className="px-4 py-3 flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.target}
                  to={item.target}
                  className={({ isActive}) => 
                    `flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium ${
                      isActive 
                      ? "text-cyan-400 dark:text-cyan-600 bg-gray-800/50 dark:bg-gray-200/50"
                      : "text-gray-300 dark:text-gray-600 hover:text-cyan-300 dark:hover:text-cyan-500"
                  } transition-all duration-300 cursor-pointer`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;