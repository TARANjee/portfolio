import React from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import graphics from '../assets/graphics.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
          <p className={` ml-4 text-sm ${mode ? 'text-slate-500' : 'white'} tracking-wide font-bold`}>Welcome to my portfolio website</p>
          <h1 className={`text-4xl mt-5  font-bold  `}> Hey folks, I'm {' '}
            <span className='text-[#448AFF] font-bold '>{text}</span>
            <Cursor cursorStyle={'|'} />
          </h1>

          <p className='text-[#8892b0] py-4 max-w-[650px]'>I'm a Web Developer specializing in building React Applications. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div>
            <a href='https://drive.google.com/file/d/1C5oSRD2s-oPzFrDmSYEwRvAl4Mlfl3Yg/view?usp=sharing' >
              <button className={`group border-2 border-[${mode ? "black" : "white"}] px-6 py-3 my-2 flex items-center  rounded-full  hover:text-white hover:bg-[#448AFF] hover:border-[#448AFF] duration-300`}>
                <HiOutlineFolderDownload color={mode ? "" : "white"} /> <p className='ml-2'>Download Resume</p>
              </button>
            </a>
          </div>
        </div>
        <div className=' '>
          <img src={graphics} alt="" width={500} />
        </div>
      </div>

    </div>
  )
}

export default Home