import React from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import graphics from '../assets/graphics.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = ({ mode }) => {

  const [text] = useTypewriter({
    words: ['Taranjeet Singh', 'Web Developer','FrontEnd Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });

  return (
    <div name='home' className=''>
      <div className=' w-full py-20 md:flex  justify-center items-center  '>
        <div className='mb-10'>
          <p className={`origin-top transition-all ml-4 text-sm ${mode ? 'text-slate-500' : 'white'} tracking-wide font-bold`}>Welcome to my portfolio website</p>
          <h1 className={`text-4xl mt-5  font-bold origin-top transition-all `}> Hey folks, I'm {' '}
            <div className='text-[#448AFF] font-bold '>{text}   <Cursor cursorColor={mode ? "black" : "white"} /></div>

          </h1>

          <p className='text-[#8892b0] mt-3 py-4 max-w-[650px] '>I'm a Web Developer specializing in building React Applications. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div className='sm:flex items-center '>
            <a target="_blank" href='https://drive.google.com/file/d/1C5oSRD2s-oPzFrDmSYEwRvAl4Mlfl3Yg/view?usp=sharing' >
              <span className={`mr-2 shadow-sm hover:shadow-[#448AFF] group border-2 border-[${mode ? "black" : "white"}] px-6 py-3 my-2 flex items-center  rounded-full justify-center  hover:text-white hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <HiOutlineFolderDownload color={mode ? "" : "white"} /> <p className='ml-2'>Download Resume</p>
              </span>
            </a>

            <div className='flex justify-center mt-10 sm:m-1'>
              <a href="https://www.linkedin.com/in/tjsingh47/" target='_blank' className=' p-2' >
                <span className={`shadow-sm  hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full  ${mode ? "bg-black" : "bg-white"} hover:bg-[#448AFF] justify-center hover:border-[#448AFF] duration-300`}>
                  <BiLogoLinkedin size={25} color={mode ? "white" : "black"} />
                </span>
              </a>
              <a href="https://github.com/TARANjee" target='_blank' className=' p-2' >
                <span className={`shadow-sm  hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full   ${mode ? "bg-black" : "bg-white"}  hover:bg-[#448AFF] justify-center  hover:border-[#448AFF] duration-300`}>
                  <AiFillGithub size={25} color={mode ? "white" : "black"} />
                </span>
              </a>
              <a href="mailto:taranjeets120@gmail.com" target='_blank' className='p-2' >
                <span className={`shadow-sm  hover:shadow-[#448AFF] border-2 border-[${mode ? "black" : "white"}] px-2 py-2 flex rounded-full   ${mode ? "bg-black" : "bg-white"}  hover:bg-[#448AFF] justify-center  hover:border-[#448AFF] duration-300`}>
                  <AiOutlineMail size={25} color={mode ? "white" : "black"} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src={graphics} alt="" width={500} />
        </div>
      </div>

    </div>
  )
}

export default Home