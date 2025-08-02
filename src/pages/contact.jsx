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

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">
                Your Name
              </label>

              <input type="text" name="name" id="name" 
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus-within:outline-none focus:ring-2 focus:ring-cyan-500"
                 placeholder="Enter your name"
                 disabled={isSubmittting}
                />
            </motion.div>

          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
            >
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">
                Your Email
              </label>

              <input type="email" name="email" id="email" 
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="w-full py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus-within:outline-none focus:ring-2 focus:ring-cyan-500"
                 placeholder="Enter your name"
                 disabled={isSubmittting}
                />
            </motion.div>
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">
                Your Name
              </label>

              <input type="text" name="name" id="name" 
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus-within:outline-none focus:ring-2 focus:ring-cyan-500"
                 placeholder="Enter your name"
                 disabled={isSubmittting}
                />
            </motion.div>
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">
                Your Name
              </label>

              <input type="text" name="name" id="name" 
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus-within:outline-none focus:ring-2 focus:ring-cyan-500"
                 placeholder="Enter your name"
                 disabled={isSubmittting}
                />
            </motion.div>
        </form>
     
     </motion.div>
    </section>
  );
};

export default Contact;
