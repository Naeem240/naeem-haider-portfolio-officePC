import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiGeminiFill, RiRobot2Line } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";

export default function FloatingIcons({ icons = [
    { id: 1, icon: <SiNextdotjs size={45} color="white" />, x: 10, y: 20, freq: 0.8, ampX: 15, ampY: 10 },
    { id: 1, icon: <SiTypescript size={45} color="#61DBFB" />, x: 10, y: 45, freq: 0.9, ampX: 10, ampY: 20 },
    { id: 2, icon: <FaNodeJs size={45} color="#8CC84B" />, x: 70, y: 30, freq: 1, ampX: 12, ampY: 15 },
    { id: 3, icon: <SiMongodb size={40} color="#4DB33D" />, x: 25, y: 70, freq: 0.6, ampX: 18, ampY: 12 },
    { id: 4, icon: <RiRobot2Line size={45} color="#f306f3" />, x: 60, y: 80, freq: 0.9, ampX: 10, ampY: 20 },
    { id: 4, icon: <RiGeminiFill size={45} color="#7A00FF" />, x: 70, y: 50, freq: 0.9, ampX: 10, ampY: 20 },
    { id: 5, icon: <FaReact size={35} color="#61DBFB" />, x: 60, y: 5, freq: 0.7, ampX: 20, ampY: 15 },
] }) {
    const sectionRef = useRef(null);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
    const opacity = useTransform(smoothY, [0, 0.5, 1], [0.3, 0.9, 0.3]);
    const translateY = useTransform(smoothY, [0, 1], [0, -50]);

    return (
        <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
            {icons.map(({ id, icon, x, y, freq = 1, ampX = 15, ampY = 10 }) => (
                <motion.div
                    key={id}
                    className="absolute opacity-40 hover:opacity-90 transition-all"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={{
                        x: [0, ampX, -ampX, 0],
                        y: [0, -ampY, ampY, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10 / freq,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        filter: "drop-shadow(0 0 10px rgba(243,6,243,0.8))",
                    }}
                >
                    <motion.div style={{ opacity, y: translateY }}>{icon}</motion.div>
                </motion.div>
            ))}
        </div>
    );
}
