import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // For now, just simulate submission
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="mx-10 lg:mx-15 mb-12 text-center text-gray-300 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Have a project in mind or just want to say hi? I'd love to hear from you!
      </motion.p>

      {submitted && (
        <motion.div
          className=" mb-8 p-4 bg-green-100 text-green-800 rounded shadow-sm text-center font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Thank you! Your message has been sent.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mx-10 lg:mx-15 space-y-6">
        <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-200">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`placeholder-gray-400 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f306f3] transition ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
        </motion.div>

        <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-200">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
        </motion.div>

        <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-200">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full placeholder-gray-400 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your message here..."
          />
          {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
        </motion.div>

        <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <button
            type="submit"
            className="cursor-pointer mt-12 text-2xl border py-2 px-4 rounded-lg text-black bg-[#f306f3] transition-all duration-1000 hover:bg-black hover:text-[#f306f3] w-full"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </section>
  );
}
