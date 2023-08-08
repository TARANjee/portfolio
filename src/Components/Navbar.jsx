import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'


import { useScrollPosition } from "../hooks/hooks"

import { Link } from 'react-scroll'


const Navbar = ({ mode, handleMode }) => {

    const scrollPosition = useScrollPosition()

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    console.log("scrollPosition->", scrollPosition)




    return (
        <div className='sticky top-0 flex justify-center items-center'>
            <div className={`  w-full  max-w-[1200px] h-[80px] flex justify-between items-center lg:p-10 origin-top transition-all`}>
                <div >
                    <div className=' text-3xl font-bold'> &lt;<span className='name text-2xl sm:text-4xl font-bold'>Taranjeet Singh </span>/&gt;</div>
                </div>
                {/* menu */}
                <div className='hidden lg:flex'>
                    <ul className='hidden md:flex font-semibold text-lg'>
                        <li >
                            <Link className='link' to="home" smooth={true} duration={500} >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to="Education" smooth={true} duration={500} >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to="skills" smooth={true} duration={500} >
                                Skills
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
                        {mode ? <MdOutlineDarkMode size={25} /> : <BsSun size={25} />}
                    </button>

                </div>


                {/* Hamburger */}
                <div className=' lg:hidden z-10 mr-5'>
                    {!show ?
                        <div className='w-full flex justify-between items-center   '>
                            <button className='rounded-full mr-5' onClick={handleMode} >
                                {mode ? <MdOutlineDarkMode size={25} /> : <BsSun size={25} />}
                            </button>
                            <FaBars color={mode ? "black" : "white"} onClick={handleClick} />
                        </div>
                        : <div className=''>
                            <FaTimes className='ml-5' color={mode ? "black" : "white"} onClick={handleClick} />
                        </div>

                    }

                </div>
                {/* Mobile Menu */}
                <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center '}>
                    <li className='py-6 text-4xl'>
                        <Link className='link' onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link className='link' onClick={handleClick} to="Education" smooth={true} duration={500} >
                            Education
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link className='link' onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Skills
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
        </div>
    )
}

export default Navbar