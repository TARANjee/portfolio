import React from 'react'


const Contact = () => {
    return (
        <div name='contact' className='w-full h-full  bg-[#0a192f] flex flex-col justify-center items-center '>
            <div className='p-3 text-gray-300 w-full max-w-[1000px] mx-auto'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className='py-4'>&frasl; &frasl; Submit the form below or shoot me an email -taranjeets120@gmail.com</p>
            </div>
            <form method='POST' action='https://getform.io/f/9d4aad5f-5092-4e96-ae03-4b9a86178bc1' className='w-full max-w-[600px]  p-2 mx-auto h-full flex flex-col justify-center'>

                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" id="email" placeholder='Email' name='email' required />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows="5" placeholder='Message' required />
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

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