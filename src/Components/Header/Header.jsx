import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css';
import SidePanel1 from './Navbar/SidePanel1';
import About from '../AboutMe/About';
import ProjectsCarousel from '../AboutMe/ProjectsCarousel';
import Skill from '../AboutMe/Skill';
import Contact from '../AboutMe/Contact';
import ContactInformation from '../AboutMe/ContactInformation';
import Education from '../AboutMe/Education';
const Header = () => {
    // const [sideMenu, setSideMenu] = useState(false);
    return (
        <header className='main-header'>
            <Navbar/>
            {/* <SidePanel1 sideMenu = {sideMenu} setSideMenu={setSideMenu}/> */}
            <Banner/>
            <About/>
            <ProjectsCarousel/>
            <Skill/>
            <Education/>
            <ContactInformation/>
            <Contact/>            
        </header>
    );
};

export default Header;