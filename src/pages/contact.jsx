import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmittting, setIsSubmitting] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      await axios.post("http://localhost:5000/send", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message:"" });

    } catch (err) {
      console.error(err);
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-300 px-4 md:20 flex items-center justify-center"
    >

      <motion.div
         className="max-w-4xl w-full bg-gray-800/70 rounded-xl shadow-lg md:p-12"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
        > 
        <motion.h2 className="text-4xl font-bold text-cyan-500 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            Get In <span className="text-white">Touch</span>
        </motion.h2>
     
     </motion.div>
    </section>
  );
};

export default Contact;
