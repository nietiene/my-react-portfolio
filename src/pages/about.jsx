import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutMe from "../assets/19362653.jpg"

const About = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800">
            <motion.img
               src={aboutMe}
               alt="About me Illustration"
               className="w-full md:w-1/2 max-w-lg mb-10 md:mb-0"
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1}}
            />

            <motion.div
              className="md:1/2 space-y-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold text-cyan-700">About Me</h2>
                <p className="text-lg loading-relaxed">
                    I'm <span className="font-semibold text-cyan-600">Etiene Niyomugabo</span>, a passosinate full stack developer
                    with strong desire to build clean, user-friendly, and impactful digital experiences. I started my coding
                    journey out of curiosity, but quick turned it into a real passion and carrer goal
                </p>

               <p className="text-lg">
                    I enjoy working with technologies like <span className="text-cyan-600 font-medium">React js</span>,
                    and <span className="text-cyan-600 font-semibold"> Node js</span>,
                    <span className="text-cyan-600 font-semibold"> Python</span> and its framework 
                    <span className="text-cyan-600 font-semibold"> Flask</span>,
                    <span className="text-cyan-600 font-semibold"> MySQL</span> and 
                    <span className="text-cyan-600 font-semibold"> MongoDB</span>. I'm particularly drawn to creating interactive
                    UI and solving real-world problem with code.  
               </p>

              <p className="text-lg">
                Currently, I'm seeking opportunities in freelancing and internships to sharpen my skills and contribute to 
                meaningful projects
              </p>

              <ul className="text-lg list-disc list-inside">
                <li>I love builing full-stack applications</li>
                <li>Always learing something new — like Typescript or Next.js</li>
                <li>Based in Rwanda, open to remote work</li>
              </ul>

              <Link to="/projects">
                  <button className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-md transition"
                  >
                    View My Projects
                </button>
            </Link>

            </motion.div>
        </section>
    )
} 


export default About