import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { IoCodeDownload } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='overflow-hidden flex justify-between items-center text-white mx-6 md:mx-10 lg:mx-15 flex-col-reverse md:flex-row md:h-[90vh]'>
            <div className='text-2xl md:text-3xl font-bold leading-12 md:leading-18 w-full md:w-1/2 text-center md:text-left'>
                <h1>Hi... <br /> I am Naeem Haider, a <br />
                    <TypeAnimation
                        sequence={['Full Stack Developer.', 1000, 'Mern Stack Developer.', 1000, 'Freelancer.', 1000]}
                        speed={10}
                        deletionSpeed={10}
                        repeat={Infinity}
                        className='text-[#f306f3] text-2xl md:text-4xl'
                    />
                </h1>
                <p className='text-lg font-normal mt-6'>
                    "I am a full-stack web developer with a passion for building robust and user-friendly applications. I specialize in React, Node.js, Tailwind, MUI, MongoDB and deliver efficient, scalable solutions."
                </p>

                <a href='https://drive.usercontent.google.com/download?id=1-Ub8ae4eDtne6BvHunTvQQy4bqC_JYXi&export=download&authuser=0' target='_blank' className='inline-flex items-center gap-2 cursor-pointer mt-12 text-2xl border py-2 px-4 rounded-lg text-black bg-[#f306f3] transition-all duration-1000 hover:bg-black hover:text-[#f306f3]'>
                    <IoCodeDownload />
                    Download CV
                </a>
            </div>
            <div className='w-full md:w-1/2'>
                <figure className='flex justify-center md:justify-end'>
                    <img className='w-55 md:w-90 pr-4 md:pr-0' src="20250403_223802-Photoroom (1).png" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;