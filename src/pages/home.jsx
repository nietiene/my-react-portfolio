// src/components/Contact.jsx
import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pk0qepk",     // Replace with your actual EmailJS service ID
      "template_4wnqsjh",    // Replace with your actual template ID
      form.current,
      "L8K9DEETs0q15rl9w"      // Replace with your public API key
    ).then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      }).
      catch((error) => {
            console.error("EmailJS error:", error);
        alert("Failed to send message. Try again later.");
      }
    )
  };

  return (
    <section
      name="contact"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 md:px-16 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-cyan-400">Let's connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">Contact Me</h2>
          <p className="text-gray-300 mt-4">
            I'm currently <span className="text-cyan-500">available</span> for freelance or full-time roles. Feel free to reach out!
          </p>

          <div className="mt-6 space-y-2 text-lg">
            <p>Email: <a href="mailto:niyomugaboetiene53@gmail.com" className="text-cyan-400 hover:underline">niyomugaboetiene53@gmail.com</a></p>
            <p>Location: Kigali, Rwanda</p>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
            <a href="https://github.com/nietiene" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/etiene-niyomugabo-1b7072373" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/250791234567" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <FaWhatsapp />
            </a>
            <a href="mailto:niyomugaboetiene53@gmail.com" className="hover:text-cyan-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
