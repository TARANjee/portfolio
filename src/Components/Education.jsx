import React from 'react'
import Card from './Education/Card'

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

                    <Card
                        course="Master of Computer Application(MCA)"
                        institute="Graphic Era Hill University,Dehradun"
                        cgpa="7.4"
                        year="2024"
                    />
                    <Card
                        course="Bachelor of Computer Application(BCA)"
                        institute="Shri guru Ram Rai University ITS,Dehradun"
                        cgpa="8.3"
                        year="2022"
                    />

                    <Card
                        course="12th Standard"
                        institute="Shri guru Ram Rai Public School,Dehradun"
                        cgpa="7.0"
                        year="2019"
                    />

                    <Card
                        course="10th Standard"
                        institute="Shri guru Ram Rai Public School,Dehradun"
                        cgpa="7.0"
                        year="2017"
                    />

                </div>
            </div>
        </div>
    )
}

export default Education