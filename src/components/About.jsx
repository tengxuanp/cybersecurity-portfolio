import React, { useState, useEffect } from "react";


const About = () => {
// parallax
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
 window.addEventListener("scroll", handleScroll);

 return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (

    
    <div name='about' className='w-full h-screen bg-[white] text-[black]' >

 
        <div className='flex flex-col justify-center items-center w-full h-full' style={{transform: `translateY(${offsetY * 0.1}px)` }}>
            <div className='bg-white'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[black]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'm Raphael, nice to meet you. Please take a look around.</p>
                    </div>
                
                    <div>
                        <p>I am passionate about building interesting software & artworks that
                            amuse people. I love creating stuff with horror (unsettling) 
                            elements adding in. Hope you like my works and would be really apppreciated
                            if you can drop me some suggestions regarding anything!

                        </p>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default About