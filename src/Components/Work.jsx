import React from 'react';
import BoxOffice from '../assets/box-office.PNG';
import portfolio from '../assets/portfolio.png';
import Project from './Work/Project';


const Work = ({ mode }) => {
    return (
        <div name='Projects' className='w-full md:h-screen flex justify-center items-center '>
            <div className='max-w-[1000px] p-4  flex flex-col justify-center  mx-auto w-full  '>
                <div className='pb-8'>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl  border-b-4 border-[#448AFF] font-bold '>Projects</h1>
                    </div>
                    <p className='py-6 flex justify-center text-lg'>Here you will find some of the personal and clients projects that I have created. </p>

                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                    <Project
                        projectImg={portfolio}
                        projectName="My Portfolio"
                        demoLink="https://taranjee.github.io/portfolio/"
                        codeLink="https://github.com/TARANjee/portfolio"
                        mode={mode}
                    />

                    <Project
                        projectImg={BoxOffice}
                        projectName="Box Office"
                        demoLink="https://taranjee.github.io/box-office/"
                        codeLink="https://github.com/TARANjee/box-office"
                        mode={mode}
                    />


                </div>
            </div>
        </div>
    );
};

export default Work;