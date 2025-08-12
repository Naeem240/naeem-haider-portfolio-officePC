import React, { useState } from 'react';
import Dropdowns from './Dropdowns';
import './Navbar.css';
import SidePanel1 from './SidePanel1';
import { Link } from 'react-router';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    console.log(window.scrollY);
    addEventListener('scroll', function () {
        window.scrollY >= 10 ? setScrollY(true) : setScrollY(false);
    })
    return (
        <nav className={`sticky top-0 ${scrollY ? 'bg-black' : 'bg-transparent'} transition-all duration-1000 z-[9999]`}>
            <div className='py-2 font-bold mx-10 lg:mx-15 text-white flex justify-between items-center'>
                <Link to='/' onClick={()=>window.scrollTo(0,0)} className='flex items-end'>
                    <figure className='w-10'>
                        <img className='relative right-2' src="logo.png" alt="N" />
                    </figure>
                    <figcaption className='-ml-3 text-xl logo-text'>aeem</figcaption>
                </Link>
                <div className='hidden lg:block'>
                    <ul className='flex gap-1 menu-list text-lg'>
                        <li onClick={()=>window.scrollTo(0,0)}><Link to='/'>Home</Link></li>
                        <li><a href="/#about">About</a></li>
                        <Dropdowns />
                        <li><a href="/#skill">Skill</a></li>
                    </ul>
                </div>
                <div className='hidden md:flex items-center gap-3 social-area'>
                    <a className='p-1 rounded-sm border border-[#f306f3]' href="https://www.linkedin.com/in/md-naeem-haider/" target='_blank'>
                        <FaLinkedin className="text-[#0A66C2]" size={24} />
                    </a>
                    <a className='p-1 rounded-sm border border-[#f306f3]' href="https://www.facebook.com/naeemhaiderun" target='_blank'>
                        <FaFacebook className="text-[#1877F2]" size={24} title="Facebook" />
                    </a>
                    <a className='p-1 rounded-sm border border-[#f306f3]' href="https://wa.me/8801576583605" target='_blank'>
                        <FaWhatsapp className="text-[#25D366]" size={24} title="WhatsApp" />
                    </a>
                    <a className='p-1 rounded-sm border border-[#f306f3]' href="mailto:haidermdnaeem@gmail.com" target='_blank'>
                        <SiGmail className="text-[#D44638]" size={24} title="Gmail" />
                    </a>
                </div>
                <div className='social-area md:hidden'>
                    <button onClick={() => setSideMenu(!sideMenu)} className='p-1 rounded-sm border'>
                        <svg id='menu-icon' className='social-icon bg-[#f306f3] rounded-sm w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        </svg>
                    </button>
                </div>

                <SidePanel1 sideMenu={sideMenu} setSideMenu={setSideMenu} />
            </div>
            {/* {sideMenu && <SidePanel1 sideMenu = {sideMenu} setSideMenu={setSideMenu}/>} */}
        </nav>
    );
};

export default Navbar;