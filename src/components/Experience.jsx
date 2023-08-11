import React from 'react';
import html from "../images/js.png";
import js from "../images/javascript.jpg";
import Talwind from "../images/talwind.png";
import Next from "../images/next.png";
import reactjs from "../images/react.png";
import Github from "../images/githum.jpg";

const Experience = () => {
  const tech=[
    {
      id:1,
      src:html,
      style:"shadow-orange-500"

    },
    {
      id:2,
      src:js,
      style:"shadow-yellow-500"

    },
    {
      id:3,
      src:Talwind,
      style:"shadow-blue-500"

    },
    {
      id:4,
      src:Next,
      style:"shadow-white"

    },
    {
      id:5,
      src:reactjs,
      style:"shadow-sky-600"

    },
    {
      id:6,
      src:Github,
      style:"shadow-pink-400"

  
    
    },
  ];
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full h-1/screen '>
        <div className='max-w-screen-lg mx-auto to p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold  border-b-4 border-gray-500 p-2 inline text-gray-500'>Experience</p>
            <p className='py-6 text-2xl text-white '>This are the Technologies I've Worked with:</p>
          </div>

<div className='w-full grid grid-cols-2 sm: grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
  tech.map(({id,src,style}) =>(
<div key={id} className= {`shadow -md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
    <img src={src} alt='' className='w-50 mx-auto'/>
    
  </div>
  ))
}


  
</div>

        </div>
       
    </div>
  )
}

export default Experience