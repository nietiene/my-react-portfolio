import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-scroll"

const Home = () => {
 
    return (
        <section
          name="home"
          className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex items-center justify-center"
        >
           <div className="text-center px-4">
             <p className="text-lg text-center text-gray-400">Welcome to my portfolio</p>
             <h1 className="text-4xl sm:text-6xl font-bold mt-4">
                Hi, I'm <span className="text-cyan-400">Etiene</span>
             </h1>
             <h2 className="text-2xl sm:text-3xl mt-2 text-gray-300">
                Web Developer & Problem Solver
             </h2>
            </div>
        </section>
    )
}