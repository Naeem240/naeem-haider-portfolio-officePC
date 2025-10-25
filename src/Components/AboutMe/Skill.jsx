import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFileWord,
  FaFileExcel,
  FaComments,
  FaDocker,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiNginx,
  SiGo,
  SiShadcnui,
} from "react-icons/si";

const skills = {
  "Front End": [
    { name: "React", Icon: FaReact, color: "#61dafb" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38b2ac" },
    { name: "ShadCN", Icon: SiShadcnui, color: "black" },
  ],
  "Back End": [
    { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
    { name: "Express", Icon: SiExpress, color: "#000000" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
    { name: "AI Integration", Icon: FaRobot, color: "#f59e0b" },
  ],
  "Soft Skills": [
    { name: "MS Excel", Icon: FaFileExcel, color: "#217346" },
    { name: "MS Word", Icon: FaFileWord, color: "#2B579A" },
    { name: "English Communication", Icon: FaComments, color: "#FBBF24" },
  ],
  "Upcoming Skills": [
    { name: "Golang", Icon: SiGo, color: "#00ADD8" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
    { name: "Nginx", Icon: SiNginx, color: "#009639" },
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
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
    <section id="skill" className="py-20 backdrop-blur-sm backdrop-brightness-90">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#f306f3] border-b pb-4">
        {text}
        <Cursor cursorStyle="|" />
      </h2>

      <div className="space-y-16 mx-6 md:mx-10 lg:mx-20">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <motion.h3
              className={`text-xl md:text-2xl font-bold mb-6 ${category === "Soft Skills"
                  ? "text-[#2563eb]"
                  : category === "Upcoming Skills"
                    ? "text-[#059669]"
                    : "text-secondary"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {category}:
              {
                category === "Upcoming Skills" && (
                  <span className="text-sm md:text-base font-bold text-secondary ml-2">
                    (Learning in Progress
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>                    
                    )
                  </span>
                )
              }

            </motion.h3>

            <motion.div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skillList.map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  className={`bg-gray-100 rounded-xl p-5 shadow-md flex flex-col items-center cursor-default hover:scale-105 hover:shadow-xl transition-transform duration-300 border-2 ${category === "Soft Skills"
                  ? "border-[#2563eb]"
                  : category === "Upcoming Skills"
                    ? "border-[#059669]"
                    : "border-secondary"
                }`}
                  variants={itemVariants}
                >
                  {Icon && <Icon className="w-12 h-12 mb-3" style={{ color }} />}
                  <h4 className="text-center font-semibold text-black">{name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
