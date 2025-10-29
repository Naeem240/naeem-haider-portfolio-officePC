import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const educationData = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Joypurhat Govt. College",
    year: "2017",
    result: "GPA 5.00",
    statusColor: "text-green-600",
    icon: <FaSchool className="text-yellow-400 w-8 h-8" />,
  },
  {
    degree: "B.Sc. in Civil & Water Resources Engineering (CWRE)",
    institution: "Chittagong University of Engineering & Technology (CUET)",
    year: "2018 – 2020",
    result: "Status: Incomplete",
    statusColor: "text-red-500",
    icon: <MdEngineering className="text-blue-400 w-8 h-8" />,
  },
  {
    degree: "Complete Web Development Course (Level-1)",
    institution: "Programming Hero",
    year: "2024-2025",
    result: "Status: Completed",
    statusColor: "text-green-500",
    icon: <img src="ph.PNG" className="text-blue-400 w-8 h-8" />,
    certificate: true,
  },
  {
    degree: "Next Level Web Development (Level-2)",
    institution: "Programming Hero",
    year: "2025-Present",
    result: "Status: In Progress",
    statusColor: "text-yellow-500",
    icon: <img src="ph.PNG" className="text-blue-400 w-8 h-8" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

export default function Education() {
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const cardRefs = useRef([]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 backdrop-blur-sm backdrop-brightness-90 relative min-h-screen"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#f306f3] border-b pb-4 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Educations & Certifications
      </motion.h2>

      <div className="relative flex flex-col items-center mx-6 md:mx-10 lg:mx-15 space-y-8 md:space-y-12">       

        {/* Education Cards */}
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`relative z-10 w-full max-w-2xl border-2 border-secondary bg-white/90 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white ${i % 2 === 0 ? "md:self-start" : "md:self-end"
              } ${i === 0 ? "mt-4" : ""} ${i === educationData.length - 1 ? "mb-4" : ""}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated dot connector */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-linear-to-r from-purple-600 to-pink-500 border-2 border-white shadow-[0_0_15px_rgba(236,72,153,0.6)] z-20 md:left-1/2 md:transform-none"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 15px rgba(236,72,153,0.6)",
                  "0 0 25px rgba(236,72,153,0.8)",
                  "0 0 15px rgba(236,72,153,0.6)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />

            <div className="shrink-0 p-3 bg-white rounded-full shadow-md border border-gray-200">
              {edu.icon}
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
              <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
              <p className={`text-sm font-semibold mt-1 ${edu.statusColor}`}>
                {edu.year} • {edu.result}
              </p>

              {edu.certificate && (
                <button
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer mt-4 px-5 py-2 text-sm font-semibold rounded-lg bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] transform"
                >
                  See Certificate
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4 h-screen m-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-3xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-gray-900 bg-white rounded-full p-1 shadow-md z-10"
            >
              <IoMdClose size={24} />
            </button>
            <h3 className="text-xl md:text-2xl font-bold text-center text-purple-600 mb-4">
              Complete Web Development Certificate
            </h3>
            <div className="relative select-none">
              <img
                src="certificate.png"
                alt="Certificate Preview"
                className="w-full rounded-lg pointer-events-none border border-gray-200"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/10 pointer-events-none rounded-lg" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                This certificate verifies the completion of the Complete Web Development Course
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}