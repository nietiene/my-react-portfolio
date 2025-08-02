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
    { name: "About", target: "home", icon: <FaHome />},
    { name: "Skills", target: "home", icon: <FaHome />},
    { name: "Projects", target: "home", icon: <FaHome />},
    { name: "Contact Me", target: "home", icon: <FaHome />},
    { name: "Home", target: "home", icon: <FaHome />},
  ]
}