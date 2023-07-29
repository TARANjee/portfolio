import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Android from '../assets/android_new.png';
import Cpp from '../assets/cpp.png';
import Git from '../assets/git.png';
import mongodb from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import AndroidStudio from '../assets/android-studio.png';

import Java from '../assets/java.png';

// import AWS from '../assets/aws.png';
// import Mongo from '../assets/mongo.png';


const Skills = () => {
    return (
        <div name='skills' className='w-full h-auto flex justify-center items-center '>
            <div className='max-w-[1000px] p-4  flex flex-col justify-center   w-full  '>
                <div className='flex justify-center'>
                    <p className=' text-4xl font-bold inline border-b-4 border-[#448AFF]'>
                        Skills
                    </p>
                </div>

                {/* Languages */}
                <div className='flex justify-center mt-10'>
                    <p className=' text-2xl font-bold  '>
                        Programming Languages
                    </p>
                </div>
                <div className='w-full md:flex  justify-evenly items-center  text-center mt-5'>

                    <div className='  hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={Cpp} alt="c++ icon" />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="JAVA icon" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='  hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>

                </div>

                {/* FrameWork */}
                <div className='flex justify-center mt-10'>
                    <p className=' text-2xl font-bold   '>
                        Frameworks and Technologies
                    </p>
                </div>

                <div className='w-full md:flex  justify-evenly items-center  text-center mt-5'>

                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Android} alt="React icon" />
                        <p className='my-4'>ANDROID</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT JS</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>

                </div>




                {/* Tools & Platforms */}
                <div className='flex justify-center mt-10'>
                    <p className=' text-2xl  font-bold '>
                        Tools & Platforms
                    </p>
                </div>

                <div className='w-full md:flex  justify-evenly items-center  text-center mt-5'>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AndroidStudio} alt="React icon" />
                        <p className='mt-4 mr-4 ml-4'>ANDROID</p>
                        <p className='mb-4 mr-4 ml-4'>STUDIO</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt="React icon" />
                        <p className='my-4'>GIT</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Node icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>

                </div>
                {/* Databases */}
                <div className='flex justify-center mt-10'>
                    <p className=' text-2xl font-bold   '>
                        Databases
                    </p>
                </div>

                <div className='w-full md:flex  justify-evenly items-center  text-center mt-5'>

                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mysql} alt="React icon" />
                        <p className='my-4'>MY SQL</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongodb} alt="React icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="React icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>


                </div>
            </div>
        </div>
    );
};


export default Skills