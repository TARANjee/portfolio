import React from 'react';
import BoxOffice from '../assets/box-office.PNG';
import sgrruspace from '../assets/sgrruspace.PNG';


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center '>
            <div className='max-w-[1000px] p-4  flex flex-col justify-center  mx-auto w-full  '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>&frasl; &frasl; Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${BoxOffice})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Box Office
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://taranjee.github.io/box-office/' target="_blank"rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/TARANjee/box-office' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${sgrruspace})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Sgrru Space
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://sgrruspace.live/' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/TARANjee/sgrru-space' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    
                </div>
            </div>
        </div>
    );
};

export default Work;