import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import moon from '../assets/half-moon.png';
import sun from '../assets/sun.png';
import { useScrollPosition } from "../hooks/hooks"

import { Link } from 'react-scroll'


const Navbar = ({ mode, handleMode }) => {

    const scrollPosition = useScrollPosition()

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    console.log("scrollPosition->", scrollPosition)


   

    return (
        <div className={`sticky top-0 w-full h-[80px] flex justify-between items-center px-20  `}>
            <div>
                <div className='logo'> &lt;<span className='name'>Taranjeet Singh </span>/&gt;</div>
            </div>
            {/* menu */}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex font-semibold text-lg'>
                    <li >
                        <Link className='link' to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link className='link' to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="Education" smooth={true} duration={500} >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="Projects" smooth={true} duration={500} >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a className='link' href="https://drive.google.com/file/d/1Towet6N__y2L98K4u7VAIvfVWnrU9wgt/view?usp=sharing" target="_blank" rel="noreferrer" >
                            Resume
                        </a>
                    </li>
                    <li >
                        <Link className='link' to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>

                </ul>
                <button className='rounded-full ' onClick={handleMode} >
                    <img src={mode ? moon : sun} alt={mode ? "night-mode" : "dark-mode"} />
                </button>

            </div>


            {/* Hamburger */}
            <div className='md:hidden z-10'>
                {!show ?
                    <div className='w-full flex justify-between items-center mr-5  '>
                        <button className='rounded-full ' onClick={handleMode} >
                            <img src={mode ? moon : sun} alt={mode ? "night-mode" : "dark-mode"} />
                        </button>
                        <FaBars color={mode ? "black" : "white"} onClick={handleClick} />
                    </div>
                    : <div className=''>
                        <FaTimes className='ml-5' color={mode ? "black" : "white"} onClick={handleClick} />
                    </div>

                }

            </div>
            {/* Mobile Menu */}
            <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] text-gray-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link className='link' onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link className='link' onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link className='link' onClick={handleClick} to="Education" smooth={true} duration={500} >
                        Education
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link className='link' onClick={handleClick} to="Projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <a className='link' href="https://drive.google.com/file/d/1Towet6N__y2L98K4u7VAIvfVWnrU9wgt/view?usp=sharing" target="_blank" rel="noreferrer" >
                        Resume
                    </a>
                </li>

                <li className='py-6 text-4xl'>
                    <Link className='link' onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

        </div >
    )
}

export default Navbar