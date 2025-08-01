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
                    I'm <span className="font-semibold text-cyan-600">Etiene Niyomugabo</span>
                </p>

            </motion.div>
        </section>
    )
} 


export default About