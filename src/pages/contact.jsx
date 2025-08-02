import React, { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
