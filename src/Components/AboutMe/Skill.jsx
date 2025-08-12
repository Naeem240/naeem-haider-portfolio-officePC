import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38b2ac" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
};

export default function Skill() {
  const [text] = useTypewriter({
    words: ["My Technical Skills", "Technologies I Work With", "My Skill Set"],
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1800,
  });

  return (
    <section id="skill" className="py-20">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4">
        {text}
        <Cursor cursorStyle="|" />
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-10 lg:mx-15"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map(({ name, Icon, color }) => (
          <motion.div
            key={name}
            className="bg-gray-100 rounded-xl p-5 shadow-md flex flex-col items-center cursor-default hover:scale-105 hover:shadow-xl transition-transform duration-300"
            variants={itemVariants}
          >
            <Icon className="w-12 h-12 mb-3" style={{ color }} />
            <h3 className="text-lg font-semibold mb-2 text-center text-black">{name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
