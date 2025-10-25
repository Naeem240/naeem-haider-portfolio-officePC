import React from "react";
import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const educationData = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Joypurhat Govt. College",
    year: "2017",
    result: "GPA 5.00",
    icon: <FaSchool className="text-yellow-400 w-8 h-8" />,
  },
  {
    degree: "B.Sc. in Civil & Water Resources Engineering (CWRE)",
    institution: "Chittagong University of Engineering & Technology (CUET)",
    year: "2018 – 2020",
    result: "Status: Incomplete",
    icon: <MdEngineering className="text-blue-400 w-8 h-8" />,
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const lineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "100%",
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Education() {
  return (
    <section id="education" className="py-20 backdrop-blur-sm backdrop-brightness-90">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-secondary border-b pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Educational Qualification
      </motion.h2>

      {/* Timeline Container */}
      <motion.div
        className="relative flex flex-col items-center mx-6 md:mx-12 lg:mx-24 space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated Vertical Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-secondary to-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>

        {/* Education Cards */}
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`border-2 border-secondary relative bg-gray-100 rounded-xl shadow-md w-full md:w-2/3 p-6 flex flex-col md:flex-row items-center md:items-start gap-4 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] ${
              index % 2 === 0 ? "md:self-start" : "md:self-end"
            }`}
            variants={cardVariants}
          >
            {/* Glowing Dot Connector */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-linear-to-r from-secondary to-pink-500 border-2 border-white shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Icon */}
            <div className="shrink-0 p-3 bg-white rounded-full shadow-md">{edu.icon}</div>

            {/* Text Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-1">
                {edu.year} &nbsp;•&nbsp; {edu.result}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
