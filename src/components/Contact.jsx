import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full p-4 h-2screen text-white'>
 <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Contact</p>
        <p className='py-6'>
            Submit the form below to get in touch with me.
        </p>
    </div>
<div>
    <form action='https://getform.io/f/5f2e8822-6b23-436f-8c95-fb03c9483fc5' method="POST" className='flex flex-col w-1/2 md:1/2'>
        <input type='text' name='name' placeholder='Enter your name' className='p-2 m-4 bg-transparent border-2 rounded-md text-white focus:cutline-none '/>
        
        <input type='text' name='email' placeholder='Enter your email' className='p-2 m-4 bg-transparent border-2 rounded-md text-white focus:cutline-none'/>
   
   <textarea name='message' rows="10" className='p-4  m-4 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
   
   <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto h-10 flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
    </form>
    </div>
</div>
    </div>
  )
}

export default Contact