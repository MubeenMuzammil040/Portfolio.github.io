import React from 'react'
/*import img2 from "./images/img.png";*/

import {MdOutlineKeyboardArrowRight} from "react-icons/md";   //this is for taking arrow icons
const Home = () => {
  return (
    <div  className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-left h-full  px-4 md:flex-row'>
        <div className='  justify-center   '> 
        <h2  className='text-4xl sm:text-5xl font-bold text-white max-w-md'>
          I'm Full Stack Web Developer</h2>
        <p className='text-gray-500 py-4 max-w-md'>I'm highly skilled in web development, using techonologies like React, Tailwind CSS, and Node.js. I create dynamic and visually appealing web applications with responsive 
          user interfaces and efficient server-side logic to meet diverse client needs.</p>
         
      <div>
        <button className='group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 
        to-blue-500 cursor-pointer'>Portofolio
       <span className='group-hover:rotate-90 duration-300'>
       <MdOutlineKeyboardArrowRight/>
        </span>
        
        </button>

      </div>
    </div>
   <div>
     
  </div>
    </div>
    </div>
   
  
  );
};

export default Home;