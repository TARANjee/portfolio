import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'


const Contact = ({ mode }) => {
    return (
        <div name='contact' className='w-full flex flex-col justify-center items-center mt-10'>
            <div className='pb-10 '>

                <div className='flex justify-center'>
                    <h1 className='text-4xl  border-b-4 border-[#448AFF] font-bold '>Contact</h1>
                </div>
            </div>

            <div className='max-w-[1000px] md:flex justify-between items-center pt-10 pb-10'>
                <div className='w-full flex flex-col justify-center '>
                    <h1 className='md:text-5xl text-3xl   font-bold '>Let's chat.</h1>
                    <h1 className='md:text-5xl text-3xl  font-bold '> Tell me about your project.</h1>
                    <div className='mt-4 text-lg text-slate-500'>Let's create something together🤘</div>
                    <div className='flex items-center p-5'>
                        <AiOutlineMail color={mode ? "" : "white"} style={{ padding: '5px ' }} size={40} className={`${mode ? "bg - [#F0FFFF]" : ""} rounded-lg`} />
                        <div className='flex flex-col ml-3'>
                            <div className='ml-2'>Mail me at</div>
                            <div className='text-[#448AFF] '><a href="mailto:taranjeets120@gmail.com" target='_blank' className='ml-2 font-bold'>taranjeets120@gmail.com</a></div>
                        </div>
                    </div>

                </div>
                <div className={`w-full shadow-md shadow-[#555555] rounded-md p-4  ${mode ? "bg-[#FEFEFE] " :"bg-[#222B45]"} flex flex-col justify-center duration-150 delay-150`}>
                    <h1 className='text-2xl p-4 font-bold'>Send me a message &#128640;</h1>

                    <form method='POST' action='https://getform.io/f/9d4aad5f-5092-4e96-ae03-4b9a86178bc1' className=' flex flex-col justify-center'>
                        <input className='focus:outline-none focus:border-[#448AFF] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-[#448AFF] bg-[#F0FFFF] text-black p-2' type="text" placeholder='Full name*' name='name' required />
                        <input className='mt-4 focus:outline-none focus:border-[#448AFF] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-[#448AFF] bg-[#F0FFFF] text-black p-2' type="email" id="email" placeholder='Email address*' name='email' required />
                        <input className='mt-4 focus:outline-none focus:border-[#448AFF] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-[#448AFF] bg-[#F0FFFF] text-black p-2' name='message' placeholder='Message*' required />
                        <label className='mt-4 text-sm font-bold'>Tell us more about your project</label>
                        <textarea className='mt-4 focus:outline-none focus:border-[#448AFF] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-[#448AFF] bg-[#F0FFFF] text-black p-2' name='project' rows="2" required />


                        <button className={`mr-2 shadow-sm bg-[#448AFF] p-2 mt-5 text-white rounded-lg border-[#448AFF] hover:bg-[#1a6eff] duration-300`}>
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

// const Contact = () => {
//     return (
//         <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center '>

//             <form method='POST' action='https://getform.io/f/9d4aad5f-5092-4e96-ae03-4b9a86178bc1' className='max-w-[600px] p-2 flex flex-col justify-center'>
//                 <div className='pb-5 text-gray-300'>
//                     <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
//                     <p className='py-4'>&frasl; &frasl; Submit the form below or shoot me an email -taranjeets120@gmail.com</p>
//                 </div>
//                 <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
//                 <input className='my-4 p-2 bg-[#ccd6f6]' type="email" id="email" placeholder='Email' name='email' required />
//                 <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message' required />
//                 <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
//             </form>

//         </div>
//     )
// }

export default Contact