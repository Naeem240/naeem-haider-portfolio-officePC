import React from 'react';
import SidePanel1Content from './SidePanel1Content';
import { CgClose } from 'react-icons/cg';

const SidePanel1 = ({ sideMenu, setSideMenu }) => {
    return (
        <>
            <div onClick={() => setSideMenu(!sideMenu)} className={`md:hidden fixed z-50 top-0 right-0 transition-all duration-1000 ${sideMenu ? '' : 'hidden'} text-white bg-black opacity-85 p-4 w-full h-screen cursor-no-drop`}>
                <div className='cursor-pointer text-5xl relative left-[85%]'>
                    <CgClose/>
                </div>
            </div>
            <div className={`md:hidden fixed top-0 transition-all z-10000 duration-1000 ${sideMenu ? '-left-0' : '-left-200'} text-white bg-black p-4 w-2/3 h-screen `}>
                <div>
                    <SidePanel1Content sideMenu={sideMenu} setSideMenu={setSideMenu} />
                </div>
            </div>
        </>
    );
};

export default SidePanel1;