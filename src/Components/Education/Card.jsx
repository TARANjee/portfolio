import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { ImArrowRight } from 'react-icons/im'
import { RiIncreaseDecreaseLine } from 'react-icons/ri'
import { BsCalendarEvent } from 'react-icons/bs'

const card = ({ course, institute, cgpa, year }) => {
    return (
        <div className='flex flex-row  justify-center items-center mt-20 '>
            <div  >
                <ImArrowRight className={`${year == 2022 ? "ml-4" : ""} text-2xl`} />
            </div>
            <div className='ml-2 flex flex-col border-4 shadow-lg  p-2 hover:scale-105 hover:shadow-[#000000] duration-500 '>
                <div className='text-2xl bold flex items-center '>
                    <HiMiniComputerDesktop className='text-2xl' />
                    <div className='m-2'>{course}</div>
                </div>
                <h1 className='ml-4 text-xl bold flex items-center'>
                    <FaUniversity className='text-2xl' />
                    <div className='m-2'>{institute}</div>
                </h1>
                <p className='ml-4 text-lg italic flex items-center'>
                    <RiIncreaseDecreaseLine className='text-2xl' />
                    <div className='m-2'>CGPA: {cgpa}</div>
                </p>
                <p className='ml-4 text-lg italic flex items-center'>
                    <BsCalendarEvent className='text-2xl' />
                    <div className='m-2'>{year}</div>
                </p>
            </div>
        </div>
    )
}

export default card