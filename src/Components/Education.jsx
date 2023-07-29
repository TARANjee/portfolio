import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { ImArrowRight } from 'react-icons/im'
import { RiIncreaseDecreaseLine } from 'react-icons/ri'
import { BsCalendarEvent } from 'react-icons/bs'


const Education = ({ mode }) => {
    return (
        <div name='Education' className=' my-20  w-full transition-all'>
            <div className='flex justify-center'>
                <h1 className='text-4xl  border-b-4 border-[#448AFF] font-bold '>Education</h1>
            </div>
            <div className='flex flex-row justify-center mt-10 '>
                <div>
                    <div className={`vertical border-${mode ? 'black' : 'white'}`}></div>
                </div>
                <div>
                    <div className='flex flex-row  justify-center items-center mt-20 '>
                        <div >
                            <ImArrowRight className='text-2xl' />
                        </div>
                        <div className='ml-2 flex flex-col border-4   p-2 '>
                            <div className='text-2xl bold flex items-center '>
                                <HiMiniComputerDesktop className='text-2xl' />
                                <div className='m-2'>Master of Computer Application(MCA)</div>
                            </div>
                            <h1 className='ml-4 text-xl bold flex items-center'>
                                <FaUniversity className='text-2xl' />
                                <div className='m-2'>Graphic Era Hill University,Dehradun</div>
                            </h1>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <RiIncreaseDecreaseLine className='text-2xl' />
                                <div className='m-2'>CGPA: 7.4</div>
                            </p>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <BsCalendarEvent className='text-2xl' />
                                <div className='m-2'>2024</div>
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row  justify-center items-center mt-20 '>
                        <div >
                            <ImArrowRight className='ml-4 text-2xl' />
                        </div>
                        <div className='ml-2 flex flex-col border-4   p-2 '>
                            <div className='text-2xl bold flex items-center '>
                                <HiMiniComputerDesktop className='text-2xl' />
                                <div className='m-2'>Bachelor of Computer Application(BCA)</div>
                            </div>
                            <h1 className='ml-4 text-xl bold flex items-center'>
                                <FaUniversity className='text-2xl' />
                                <div className='m-2'>Shri guru Ram Rai University ITS,Dehradun</div>
                            </h1>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <RiIncreaseDecreaseLine className='text-2xl' />
                                <div className='m-2'>CGPA: 8.3</div>
                            </p>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <BsCalendarEvent className='text-2xl' />
                                <div className='m-2'>2022</div>
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row  justify-center items-center mt-20 '>
                        <div >
                            <ImArrowRight className='text-2xl' />
                        </div>
                        <div className='ml-2 flex flex-col border-4 p-2 '>
                            <div className='text-2xl bold flex items-center '>
                                <HiMiniComputerDesktop className='text-2xl' />
                                <div className='m-2'>12th Standard</div>
                            </div>
                            <h1 className='ml-4 text-xl bold flex items-center'>
                                <FaUniversity className='text-2xl' />
                                <div className='m-2'>Shri guru Ram Rai Public School,Dehradun</div>
                            </h1>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <RiIncreaseDecreaseLine className='text-2xl' />
                                <div className='m-2'>CGPA: 7.0</div>
                            </p>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <BsCalendarEvent className='text-2xl' />
                                <div className='m-2'>2019</div>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row  justify-center items-center mt-20 '>
                        <div >
                            <ImArrowRight className='text-2xl' />
                        </div>
                        <div className='ml-2 flex flex-col border-4   p-2 '>
                            <div className='text-2xl bold flex items-center '>
                                <HiMiniComputerDesktop className='text-2xl' />
                                <div className='m-2'>10th Standard</div>
                            </div>
                            <h1 className='ml-4 text-xl bold flex items-center'>
                                <FaUniversity className='text-2xl' />
                                <div className='m-2'>Shri guru Ram Rai Public School,Dehradun</div>
                            </h1>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <RiIncreaseDecreaseLine className='text-2xl' />
                                <div className='m-2'>CGPA: 7.0</div>
                            </p>
                            <p className='ml-4 text-lg italic flex items-center'>
                                <BsCalendarEvent className='text-2xl' />
                                <div className='m-2'>2017</div>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education