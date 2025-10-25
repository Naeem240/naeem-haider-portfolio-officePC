import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import FloatingIcons from "./FloatingIcons";

export default function AboutMe() {
    const sectionRef = useRef(null);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
    const opacity = useTransform(smoothY, [0, 0.5, 1], [0.3, 0.9, 0.3]);
    const translateY = useTransform(smoothY, [0, 1], [0, -50]);

    // Floating icons with individual sine-wave drift
    

    return (
        <motion.section
            ref={sectionRef}
            id="about"
            className="relative py-20 text-white overflow-hidden backdrop-blur-sm backdrop-brightness-80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
            {/* 🌌 Floating Icons with Organic Sine-Wave Motion */}
            <FloatingIcons/>

            {/* ✨ Section Title */}
            <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#f306f3] border-b pb-4 relative z-10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
                About Me
            </motion.h2>

            {/* 💬 Main Content */}
            <div className="relative z-10 mx-6 md:mx-10 lg:mx-15 flex flex-col md:flex-row items-start gap-8">
                <motion.div
                    className="text-justify w-full"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <p className="text-base leading-7 mb-5">
                        Hi, I’m <span className="text-[#f306f3] font-semibold">MD Naeem Haider</span> — a{" "}
                        <span className="text-[#f306f3] font-semibold">Full Stack MERN Developer</span> passionate about
                        crafting smooth, fast, and user-friendly web experiences. I love transforming ideas into clean,
                        functional applications that make an impact.
                    </p>

                    <p className="text-base leading-7 mb-5">
                        My learning journey began with{" "}
                        <span className="text-[#f306f3] font-semibold">HTML & CSS</span>, then explored{" "}
                        <span className="text-[#f306f3] font-semibold">JavaScript</span>. Discovering{" "}
                        <span className="text-[#f306f3] font-semibold">React</span> sparked my love for front-end development,
                        expanding to full-stack mastery with <span className="text-[#f306f3] font-semibold">Node.js, Express, and MongoDB</span>.
                    </p>

                    <p className="text-base leading-7 mb-5">
                        I embraced <span className="text-[#f306f3] font-semibold">Next.js</span> for scalability,{" "}
                        <span className="text-[#f306f3] font-semibold">TypeScript</span> for reliability, and{" "}
                        <span className="text-[#f306f3] font-semibold">AI integration</span> to build smarter web applications.
                    </p>

                    <p className="text-base leading-7">
                        Today, I focus on delivering{" "}
                        <span className="text-[#f306f3] font-semibold">modern, AI-enhanced, and scalable web experiences</span>,
                        combining clean design with efficient functionality to create impactful projects.
                    </p>

                    {/* 🎯 Buttons */}
                    <motion.div
                        className="mt-8 flex flex-wrap gap-3"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <a
                            href="#projects"
                            className="bg-[#f306f3] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-all"
                        >
                            View My Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-black transition"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
