import React, { useState } from "react";
import { motion } from "framer-motion"

import {
  FaHome, FaUser, FaCode,
  FaProjectDiagram, FaEnvelope
} from "react-icons/fa"

import  { Link } from "react-scroll"
import avataaars from "../assets/avataaars.svg"

const NavBar = () => {
  const [activeAction, setAction] = useState("home")

  const navItems = [
    { name: "Home", target: "home", icon: <FaHome />},
    { name: "About", target: "about", icon: <FaUser />},
    { name: "Skills", target: "skills", icon: <FaCode />},
    { name: "Projects", target: "projects", icon: <FaProjectDiagram />},
    { name: "Contact Me", target: "contact", icon: <FaEnvelope />},
  ];

return (
  <motion.div
   >

  </motion.div>
)

}