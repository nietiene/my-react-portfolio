import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import avataaars from "../assets/avataaars"

const Home = () => {
 
    return (
        <section
          name="home"
          className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 md:px-16"
        >
           <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                   className="flex items-center md:text-left"
                   initial={{ opacity: 0, x: -40 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8}}
                >
                    <p className="text-lg text-cyan-400"> Welcome to my portfolio</p>
                    <h1 className="text-4xl sm:text-6xl font-bold mt-2 leading-tight">
                        Hi mI'm <span className="text-cyan-600">Etiene</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}


export default Home