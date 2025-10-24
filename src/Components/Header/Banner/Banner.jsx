import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { IoCodeDownload } from "react-icons/io5";
import { motion } from 'framer-motion';
import FloatingIcons from '../../AboutMe/FloatingIcons';

const Banner = () => {
    return (
        <section className="banner backdrop-blur-sm backdrop-brightness-90">
            <FloatingIcons/>
            <div className='overflow-hidden flex justify-between items-center text-white mx-6 md:mx-10 lg:mx-15 flex-col-reverse md:flex-row md:h-[90vh]'>
                {/* === Left Side === */}
                <div className='text-2xl md:text-3xl font-bold leading-12 md:leading-18 w-full md:w-1/2 text-center md:text-left'>
                    <h1>
                        Hi... <br /> I am Naeem Haider, a <br />
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer.', 1000,
                                'Mern Stack Developer.', 1000,
                                'Freelancer.', 1000
                            ]}
                            speed={10}
                            deletionSpeed={10}
                            repeat={Infinity}
                            className='text-[#f306f3] text-2xl md:text-4xl'
                        />
                    </h1>

                    <p className='text-lg font-normal mt-6'>
                        "I’m a full-stack web developer who loves building clean, scalable, and user-friendly web apps. 
                        I work with React, Next.js, Node.js, TypeScript, and MongoDB, using tools like Tailwind, MUI, and Shadcn 
                        for smooth and modern UI design. Lately, I’ve been exploring 
                        <span className='font-semibold text-secondary'> AI integration </span> 
                        to bring smarter, more dynamic experiences to my projects."
                    </p>

                    {/* === Animated Download Button === */}
                    <motion.a
                        href='https://drive.usercontent.google.com/download?id=1DFZINDJ0yB4e6PFMdYEx3HYw61Kh5zNy&export=download&authuser=0'
                        className='animate-bounce inline-flex items-center gap-2 cursor-pointer mt-12 text-2xl border py-2 px-4 rounded-lg text-black bg-[#f306f3] transition-all duration-1000 hover:bg-black hover:text-[#f306f3]'
                        animate={{
                            scale: [1, 1.05, 1, 1, 1.08, 1],
                            boxShadow: [
                                "0px 0px 0px rgba(243, 6, 243, 0)",
                                "0px 0px 12px rgba(243, 6, 243, 0.5)",
                                "0px 0px 0px rgba(243, 6, 243, 0)",
                                "0px 0px 0px rgba(243, 6, 243, 0)",
                                "0px 0px 15px rgba(243, 6, 243, 0.7)",
                                "0px 0px 0px rgba(243, 6, 243, 0)"
                            ]
                        }}
                        transition={{
                            duration: 10, // slow and natural
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 3 // small pause between cycles
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 20px rgba(243, 6, 243, 0.8)"
                        }}
                    >
                        <IoCodeDownload className='' />
                        Download Resume
                    </motion.a>
                </div>

                {/* === Right Side (Image) === */}
                <div className='w-full md:w-1/2'>
                    <figure className='flex justify-center md:justify-end'>
                        <img
                            className='w-55 md:w-90 pr-4 md:pr-0'
                            src="naeem-haider1.png"
                            alt="Naeem Haider"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Banner;
