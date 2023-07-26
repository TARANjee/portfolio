import React from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'


import graphics from '../assets/graphics.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const Home = ({ mode }) => {

  const [text] = useTypewriter({
    words: ['Taranjeet Singh', 'Web Developer', 'FrontEnd Developer', 'BackEnd Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });

  return (
    <div name='home' className=''>
      <div className=' w-full py-20 flex  justify-center items-center '>
        <div>
          <p className={`origin-top transition-all ml-4 text-sm ${mode ? 'text-slate-500' : 'white'} tracking-wide font-bold`}>Welcome to my portfolio website</p>
          <h1 className={`text-4xl mt-5  font-bold origin-top transition-all `}> Hey folks, I'm {' '}
            <span className='text-[#448AFF] font-bold '>{text}</span>
            <span><Cursor /></span>
          </h1>

          <p className='text-[#8892b0] py-4 max-w-[650px] '>I'm a Web Developer specializing in building React Applications. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div className='flex '>
            <a target="_blank" href='https://drive.google.com/file/d/1C5oSRD2s-oPzFrDmSYEwRvAl4Mlfl3Yg/view?usp=sharing' >
              <button className={` shadow-lg ${mode ? "shadow-black" : "shadow-white"} hover:shadow-[#448AFF] group border-2 border-[${mode ? "black" : "white"}] px-6 py-3 my-2 flex items-center  rounded-full  hover:text-white hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <HiOutlineFolderDownload color={mode ? "" : "white"} /> <p className='ml-2'>Download Resume</p>
              </button>
            </a>
          </div>
          <div className='flex'>
            <a href="https://www.linkedin.com/in/tjsingh47/" target='_blank' className='flex p-2' >
              <span className={`shadow-2xl ${mode ? "shadow-black" : "shadow-white"} hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full  ${mode ? "bg-black" : "bg-white"} hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <BiLogoLinkedin size={25}  color={mode ? "white" : "black"} />
              </span>
            </a>
            <a href="https://github.com/TARANjee" target='_blank' className='flex p-2' >
              <span className={`shadow-2xl ${mode ? "shadow-black" : "shadow-white"} hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full   ${mode ? "bg-black" : "bg-white"}  hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <AiFillGithub size={25} color={mode ? "white" : "black"} />
              </span>
            </a>
            <a href="mailto:taranjeets120@gmail.com" target='_blank' className='flex p-2' >
              <span className={`shadow-2xl ${mode ? "shadow-black" : "shadow-white"} hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full   ${mode ? "bg-black" : "bg-white"}  hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <AiOutlineMail size={25} color={mode ? "white" : "black"} />
              </span>
            </a>
          </div>
        </div>
        <div >
          <img src={graphics} alt="" width={500} />
        </div>
      </div>

    </div>
  )
}

export default Home