// src/components/Home.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import avataaars from "../assets/avataaars.svg" 
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 md:px-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-cyan-400">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-bold mt-2 leading-tight">
            Hi, I'm <span className="text-cyan-500">Etiene </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 mt-2">
            Full Stack Developer & UI Enthusiast
          </h2>

          <Link
            to="projects"
            smooth
            duration={500}
            className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="inline-block mt-6 border border-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300 cursor-pointer"
          >
            Download Resume
          </Link>

          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
            <a
              href="https://github.com/nietiene"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
           
            <a
              href="https://www.linkedin.com/in/etiene-niyomugabo-1b7072373"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
           
            <a
              href="mailto:niyomugaboetiene53@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* my avatar vector image */}
        <motion.div
           className="flex-1"
           initial={{ opacity:0, x: 40 }}
           animate={{ opacity:1, x:0 }}
           transition={{ duration: 0.8 }}
        >
           <img src={avataaars} alt="Etiene the developer" 
             className="w-full max-w-md mx-auto drop-shadow-lg hover:scale-105 transition duration-500"/>
        </motion.div>
      </div>
    </section>

  );
};

export default Home;
