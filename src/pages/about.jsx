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
            />
        </section>
    )
} 