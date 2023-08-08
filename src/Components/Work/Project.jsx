import React from 'react'

const Project = ({ projectImg, projectName, demoLink, codeLink ,mode}) => {
    return (
        <div>
            {/* Grid Item */}
            <div
                style={{ backgroundImage: `url(${projectImg})`,backgroundSize:'cover',backgroundPosition:'center' }}
                className={`shadow-lg ${mode ? "shadow-[#040c16] " :"shadow-[#C0C0C0]"}  group container  rounded-md flex justify-center items-center mx-auto content-div`}
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 group-hover:scale-95   duration-300  ease-in-out delay-50'>
                    <div className='text-2xl text-center font-bold text-white tracking-wider'>
                        {projectName}
                    </div>
                    <div className='pt-8 text-center '>
                        <a href={demoLink} target="_blank" rel="noreferrer" >
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-black delay-50 duration-150 ease-in'>
                                Demo
                            </button>
                        </a>
                        <a href={codeLink} target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-black delay-50 duration-150 ease-in'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project