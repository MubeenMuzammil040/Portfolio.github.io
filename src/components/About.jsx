import React from 'react'

const About = () => {
  return (
    <div className=' w-full h-2screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg mx-auto  items-center justify-left h-full  px-4 md:flex-row '>
            <div className= ''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <div className='text-gray-500 text-xl mt-20'>
            <p>
            I take pride in my expertise with the MERN stack, a powerful combination of MongoDB, Express.js, React, and Node.js. With my comprehensive
             knowledge of these technologies, I can create seamless and dynamic web solutions that cater to diverse needs.    </p> <br></br>
            <h3 className='font-bold text-2xl text-white'>MongoDB:</h3>
 <p>I'm experienced in working with MongoDB to ensure efficient data storage and retrieval. It allows me to build scalable 
    and robust databases that support the smooth functioning of web applications.</p>
    <h3 className='font-bold text-2xl text-white' >Express.js:</h3>
    <p>
 Leveraging Express.js, I build server-side applications that are fast, secure, 
 and scalable. Its simplicity and flexibility enable me to create APIs and handle complex backend logic effortlessly.</p>
<h3 className='font-bold text-2xl text-white' >React:</h3>
<p>
 Crafting immersive and user-friendly front-end experiences is my forte. 
 React's component-based architecture allows me to design interactive user
  interfaces that captivate and engage users.</p>
<h3 className='font-bold text-2xl text-white' >Node.js:</h3>
<p>
 With Node.js, I can ensure seamless server-side execution, enhancing
  the performance and responsiveness of web applications. Its non-blocking
   I/O model makes it an ideal choice for real-time applications.</p>
<br></br>

<p>
Throughout my journey as a MERN stack developer, I have had the opportunity to work on a diverse range of projects that have refined my skills and allowed 
me to grow both professionally and personally. Notable among them are:
</p>
<br></br>
<h3 className='font-bold text-2xl text-white'>
    Real Time ChatApp:
</h3>
<p>Building a real-time chat application using Node.js was a transformative experience for me.
     I successfully implemented WebSocket technology to enable instant messaging and seamless communication between users. The project honed my ability to handle asynchronous events effectively, and the satisfaction of witnessing live updates in the chatroom was immensely rewarding. This experience solidified my passion for backend developmen
    t and further fueled my enthusiasm for creating interactive and dynamic web applications.</p>
   </div>
        </div>
    </div>
  );
};

export default About;