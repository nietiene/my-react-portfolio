import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const Home = () => {
 
    return (
        <section
          name="home"
          className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 md:px-16"
        >
           <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                   className="flex items-center md:text-left"></motion.div>
            </div>
        </section>
    )
}


export default Home