import React, { useEffect, useState } from "react";
import { delay, motion, useReducedMotion } from "framer-motion";
import { FaReact, FaNodeJs, FaBolt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

/*
  About.jsx
  - Personalized for: MD Naeem Haider
  - Features:
    • Typewriter for a short tagline under the name (optional and respectful of reduced-motion).
    • Skill chips with brand/representative icons using react-icons.
    • Each skill reveals one-by-one with a spring (bouncy) animation when the skills area scrolls into view.
    • Tailwind CSS for responsive layout and styling.

  Installation notes (run once in your project):
    npm install framer-motion react-icons

  Put this file in: src/components/About.jsx (or your preferred path) and import it where you need it.
*/

// --- Small internal typewriter (optional) ---
function SimpleTypewriter({ words = [], speed = 80 }) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words || !words.length) return;
        const current = words[wordIndex % words.length];
        let timeout = null;

        if (!isDeleting && charIndex <= current.length) {
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex));
                setCharIndex((c) => c + 1);
            }, speed);
        } else if (!isDeleting && charIndex > current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex - 1));
                setCharIndex((c) => c - 1);
            }, Math.max(30, speed / 2));
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, speed]);

    return (
        <span className="inline-block align-middle">
            {text}
            <span className="inline-block w-[6px] h-5 ml-1 bg-current align-middle animate-pulse" />
        </span>
    );
}

export default function About() {
    const name = "MD Naeem Haider";
    const avatarSrc = "/naeem-haider.png"; // replace with your avatar path or import
    const typeWords = ["Front End Web Developer", "MERN Stack Developer"];
    const shouldReduceMotion = useReducedMotion();

    const links = [
        { name: "Newsly", href: "https://newsly-552bf.web.app" },
        { name: "Libri Sphere", href: "https://libri-sphere.web.app" },
        { name: "Room Sync", href: "https://room-sync-5dd52.web.app" },
    ];


    // Skills + icons
    const skills = [
        { name: "React", Icon: FaReact, colorClass: "text-sky-500" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-teal-500" },
        { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-neutral-800" },
        { name: "MongoDB", Icon: SiMongodb, colorClass: "text-green-600" },
        { name: "Node.js", Icon: FaNodeJs, colorClass: "text-green-700" },
        { name: "Express", Icon: SiExpress, colorClass: "text-gray-700" },
        { name: "Framer Motion", Icon: FaBolt, colorClass: "text-indigo-500" },
    ];

    // Container for the main section reveal (keeps existing behavior)
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    // Separate variants for the skills list with a bouncy (spring) reveal
    const skillsContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const skillItem = {
        hidden: { opacity: 0, y: 12, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 2,
            },
        },
    };

    return (
        <motion.section
            id="about"
            className="py-20 text-white"
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.18 }}
            variants={shouldReduceMotion ? undefined : container}
        >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4">About me:</h2>
            <div className="mx-10 lg:mx-15 flex flex-col-reverse md:flex-row items-start md:items-center gap-8 justify-between">
                {/* Left: text */}
                <motion.div className="w-full md:w-1/2" variants={shouldReduceMotion ? undefined : item}>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">
                        Hi, I&apos;m <span className="text-[#f306f3]">{name}</span>
                        <span className="mx-2">•</span>
                        {!shouldReduceMotion ? (
                            <div className="md:inline"><SimpleTypewriter words={typeWords} speed={75} /></div>
                        ) : (
                            <span className="text-sm">Front End Web Developer</span>
                        )}
                    </h3>

                    <motion.p className="text-base leading-7 mb-4" variants={shouldReduceMotion ? undefined : item}>
                        I started with curiosity — building small HTML/CSS pages and exploring what JavaScript could do. As I learned
                        React and Tailwind, I became interested in building full web applications, then expanded into the MERN stack with
                        Node, Express and MongoDB. I enjoy making interfaces that feel clear, fast and pleasant to use.
                    </motion.p>

                    <motion.p className="text-base leading-7 mb-4" variants={shouldReduceMotion ? undefined : item}>
                        I like working on end-to-end features: from wireframe to UI, to server routes and databases. I pay attention to
                        accessibility and responsive design, and I enjoy solving problems with clean, maintainable code.
                    </motion.p>

                    <motion.p className="text-base leading-7 mb-4" variants={shouldReduceMotion ? undefined : item}>
                        Outside of work, my hobby is learning to code — I spend free time experimenting with new tools, reading docs and
                        building small projects to level up my skills.
                    </motion.p>

                    <motion.div className="mt-4" variants={shouldReduceMotion ? undefined : item}>
                        <h4 className="font-semibold mb-2">Some of my projects:</h4>
                        <motion.ul
                            className="list-disc list-inside text-[#f306f3] space-y-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    variants={{
                                        hidden: { opacity: 0, x: -200, rotate: -10 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            rotate: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 220,
                                                damping: 18,
                                                delay: 0.2 + index * 0.3,
                                                duration: 0.2,
                                            },
                                        },
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Skills with icons — reveals one-by-one with a spring bounce */}
                    <motion.div
                        className="flex flex-wrap gap-3 mt-4"
                        variants={shouldReduceMotion ? undefined : skillsContainer}
                        initial={shouldReduceMotion ? undefined : "hidden"}
                        whileInView={shouldReduceMotion ? undefined : "visible"}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        {skills.map(({ name: skillName, Icon, colorClass }, index) => (
                            <motion.div
                                key={skillName}
                                variants={shouldReduceMotion ? undefined : skillItem}
                                className=""
                                role="listitem"
                                aria-label={skillName}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -200, rotate: -10 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            rotate: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 220,
                                                damping: 18,
                                                delay: 0.9 + index * 0.2,
                                                duration: 1,
                                            },
                                        },
                                    }}

                                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-200 bg-white shadow-sm">
                                    <span className={`w-6 h-6 flex items-center justify-center ${colorClass}`}>
                                        <Icon className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">{skillName}</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div className="mt-6 flex flex-wrap gap-3" variants={shouldReduceMotion ? undefined : item}>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-[#f306f3] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-70 transition-all duration-1000"
                        >
                            View projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-black transition"
                        >
                            Get in touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: avatar / visual */}
                <motion.div className="w-full md:w-1/2" variants={shouldReduceMotion ? undefined : item}>
                    <div className="rounded-2xl overflow-hidden shadow-lg p-1">
                        <img
                            src={avatarSrc}
                            alt={`${name} avatar`}
                            className="w-full md:relative md:left-30 md:bottom-30 object-cover rounded-xl block"
                            onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/300x300?text=Avatar";
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
