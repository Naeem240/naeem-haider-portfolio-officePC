import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { CgDetailsMore } from "react-icons/cg";
import { RiRobot2Line } from "react-icons/ri";

const projects = [
  {
    title: "Career Ostad | AI Powered Job Matcher",
    description:
      "Unlock your career potential with AI-powered guidance. Explore opportunities, get smart advice, and grow your skills with Career Ostad.",
    image: "https://i.ibb.co.com/TxN3ykyW/image.png",
    live: "https://career-ostad.vercel.app/",
    repo: "https://github.com/Naeem240/CareerOstad-AI-Job-Matching",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs, color: "white" },
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Express", Icon: SiExpress, color: "white" },
      { name: "Gemini API", Icon: RiRobot2Line, color: "#FF6F61" },
    ],
  },
  {
    title: "Newsly",
    description:
      "A news aggregator web app with category filters and search. Focused on responsive layout and fast UX.",
    image: "https://i.ibb.co.com/N6DpFrKh/image.png",
    live: "https://newsly-552bf.web.app",
    repo: "https://github.com/Naeem240/newsly-main",
    tech: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    title: "Libri Sphere",
    description:
      "A small library/catalog app with book details, search and a clean UI for reading discovery.",
    image: "https://i.ibb.co.com/xKFn6Y06/image.pngv",
    live: "https://libri-sphere.web.app",
    repo: "https://github.com/Naeem240/libri-sphere",
    tech: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    title: "Room Sync",
    description:
      "A room-sharing prototype demonstrating CRUD flows and a simple real-time feel (simulated).",
    image: "https://i.ibb.co.com/vvgfzKxB/image.png",
    live: "https://room-sync-5dd52.web.app",
    repo: "https://github.com/Naeem240/roomsync-main",
    tech: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
];

export default function ProjectsCarousel() {
  const [isActive, setIsActive] = useState(false);

  const onceViewport = { once: true, amount: 0.3 };

  const titleVariant = {
    hidden: { opacity: 0, x: -80, rotate: -8 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  const descVariant = {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7 } },
  };

  const badgesContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const badgeItem = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, mass: 0.6, bounce: 0.7, delay: 1, duration: 0.7 },
    },
  };

  const buttonLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { delay: 1.6, duration: 0.5 } } };
  const buttonRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { delay: 1.3, duration: 0.5 } } };
  const buttonMiddle = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.5 } } };

  const imageReveal = {
    hidden: { opacity: 0, x: -80, rotateY: 18 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 relative z-0 backdrop-blur-sm backdrop-brightness-80">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#f306f3] border-b pb-4">
        Projects
      </h2>

      <div className="mx-6 md:mx-10 lg:mx-15 relative">
        {/* Prev / Next buttons */}
        <motion.button
          aria-label="Previous project"
          className="animate-pulse cursor-pointer custom-prev absolute -left-5 md:-left-12 top-[42.5%] md:top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black/70 text-[#f306f3] border border-[#f306f3] p-2 md:p-3 rounded-full shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={onceViewport}
          variants={buttonLeft}
        >
          <FaChevronLeft className="w-4 h-4 animate-pulse" />
        </motion.button>

        <motion.button
          aria-label="Next project"
          className="animate-pulse cursor-pointer custom-next absolute -right-5 md:-right-12 top-[42.5%] md:top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black/70 text-[#f306f3] border border-[#f306f3] p-2 md:p-3 rounded-full shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={onceViewport}
          variants={buttonRight}
        >
          <FaChevronRight className="w-4 h-4 animate-pulse" />
        </motion.button>

        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination]}
          speed={800}
          spaceBetween={24}
          loop
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 1, spaceBetween: 18 },
            1024: { slidesPerView: 1, spaceBetween: 24 },
            1280: { slidesPerView: 1, spaceBetween: 28 },
          }}
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.title}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Project Info */}
                <div className="md:w-1/2 w-full">
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={onceViewport}
                    variants={titleVariant}
                    className="text-2xl md:text-3xl font-bold mb-3 text-gray-100"
                  >
                    {p.title}
                  </motion.h3>

                  <motion.p
                    className="text-base text-gray-300 mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={onceViewport}
                    variants={descVariant}
                  >
                    {p.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3 mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={onceViewport}
                    variants={badgesContainer}
                  >
                    {p.tech.map((t) => {
                      const Icon = t.Icon;
                      return (
                        <motion.span
                          key={t.name}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-50"
                          variants={badgeItem}
                        >
                          <Icon className="w-4 h-4" style={{ color: t.color }} />
                          <span>{t.name}</span>
                        </motion.span>
                      );
                    })}
                  </motion.div>

                  <div className="flex gap-1 md:gap-3 mt-2">
                    <motion.a
                      href={`/projects#${index + 1}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#f306f3] text-[#f306f3] hover:bg-[#f306f3] hover:text-black text-sm font-medium transition-colors duration-300"
                      initial="hidden"
                      whileInView="visible"
                      viewport={onceViewport}
                      variants={buttonLeft}
                    >
                      <CgDetailsMore className="w-4 h-4" />
                      Details
                    </motion.a>

                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#f306f3] text-[#f306f3] hover:bg-[#f306f3] hover:text-black text-sm font-medium transition-colors duration-300"
                      initial="hidden"
                      whileInView="visible"
                      viewport={onceViewport}
                      variants={buttonMiddle}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live
                    </motion.a>

                    <motion.a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#f306f3] text-[#f306f3] hover:bg-[#f306f3] hover:text-black text-sm font-medium transition-colors duration-300"
                      initial="hidden"
                      whileInView="visible"
                      viewport={onceViewport}
                      variants={buttonRight}
                    >
                      <FaGithub className="w-4 h-4" />
                      Repo
                    </motion.a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                  <motion.div
                    style={{ perspective: 1200 }}
                    className="relative rounded-xl w-full max-w-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={onceViewport}
                    variants={imageReveal}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setIsActive((s) => !s)}
                  >
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="relative block rounded-lg overflow-hidden group">
                      <motion.img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full h-56 md:h-64 object-cover rounded-lg border-2 border-[#f306f3] transition-transform duration-500 group-hover:scale-102"
                      />
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-6 flex gap-2" />
      </div>
    </section>
  );
}
