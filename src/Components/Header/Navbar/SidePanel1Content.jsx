import React from 'react';
import Dropdowns from './Dropdowns';
import { Link } from 'react-router';
import { CgClose } from 'react-icons/cg';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SidePanel1Content = ({ sideMenu, setSideMenu }) => {
    return (
        <>
            <div className='flex justify-between border-b pb-4 -mx-4 mb-4'>
                <Link to='/' onClick={()=>{window.scrollTo(0,0); setSideMenu(!sideMenu)}} className='flex items-end mx-6'>
                    <figure className='w-10'>
                        <img className='relative right-2' src="logo.png" alt="N" />
                    </figure>
                    <figcaption className='-ml-3 text-xl logo-text'>aeem</figcaption>
                </Link>
                <button onClick={() => setSideMenu(!sideMenu)} className='mx-6 cursor-pointer'><CgClose /></button>
            </div>
            <ul className='border-b pb-4 -mx-4 flex flex-col gap-2 menu-list text-lg justify-center'>
                <li onClick={()=>{window.scrollTo(0,0); setSideMenu(!sideMenu)}}><Link to='/'>Home</Link></li>
                <li onClick={() => setSideMenu(!sideMenu)}><a href="/#about" className=''>About</a></li>
                <li onClick={() => setSideMenu(!sideMenu)}><a href="/#skill">Skill</a></li>
                <Dropdowns sideMenu={sideMenu} setSideMenu={setSideMenu} />                
            </ul>
            <div onClick={() => setSideMenu(!sideMenu)} className='flex items-center gap-3 social-area mt-6 ml-2'>
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
        </>
    );
};

export default SidePanel1Content;