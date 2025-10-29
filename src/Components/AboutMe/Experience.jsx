import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";

// Experience Data
const experienceData = [
  {
    title: "Web Developer Intern",
    company: "ElevateX.io",
    year: "2025 – Present",
    description:
      "Working as a Web Developer Intern, contributing to full-stack feature development and UI enhancement using React, Express, and MongoDB.",
    icon: <FaLaptopCode className="text-pink-500 w-8 h-8" />,
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    title: "Self-Learning & Personal Projects",
    company: "Independent Practice",
    year: "2022 – Present",
    description:
      "Over 2 years of hands-on experience in building modern web applications using React, Node.js, Express, and MongoDB. Developed and deployed several full-stack projects independently.",
    icon: <FaUserGraduate className="text-secondary w-8 h-8" />,
    color: "from-secondary to-pink-500",
  },
  {
    title: "Full Stack Web Developer (Training)",
    company: "Programming Hero",
    year: "2024 – 2025",
    description:
      "Completed multiple real-world projects under mentorship while mastering frontend, backend, and deployment best practices through the Programming Hero course.",
    icon: <FaProjectDiagram className="text-yellow-400 w-8 h-8" />,
    color: "from-yellow-400 to-amber-500",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 backdrop-blur-sm backdrop-brightness-90">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#f306f3] border-b pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      {/* Timeline Container */}
      <motion.div
        className="relative flex flex-col items-center mx-6 md:mx-10 lg:mx-15 space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Curly Connector Line */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M50 50 Q75 150, 50 250 Q25 350, 50 450 Q75 550, 50 650 Q25 750, 50 850"
            fill="none"
            stroke="url(#gradientLine)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Experience Cards */}
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative w-full md:w-[70%] bg-gray-100 rounded-xl shadow-md border-2 border-secondary p-6 flex flex-col md:flex-row items-center md:items-start gap-4 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] ${
              index % 2 === 0 ? "md:self-start" : "md:self-end"
            }`}
            variants={cardVariants}
          >
            {/* Dot Connector */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-pink-500 border-2 border-white shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Icon */}
            <div className="shrink-0 p-3 bg-white rounded-full shadow-md">{exp.icon}</div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.year}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
