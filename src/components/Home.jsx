import React, { useState, useEffect } from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Cupid from '../assets/cupid.png';

const Home = () => {
// parallax
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
 window.addEventListener("scroll", handleScroll);

 return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>
        {/* Container */}
        <div className='max-w=[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
          <div className='grid grid-cols-2 gap-1'>


            {/* div of left side */} 
            <div className='m-auto ml-5' style={{transform: `translateX(-${offsetY * 0.7}px)` }}>
              <p><span className='text-xl text-[#black] max-w-[700px]'>Hello there, I'm </span><span className='text-3xl sm:text-3xl font-bold text-[#black]'>Raphael Pang</span></p>
              <p className='text-xl text-[#black] py-3 max-w-[700px]'>—Pursuing the way of digital product craftsmanship.</p>

              {/* About Me button */}
              <Link to="about" smooth={true} duration={500}>
              <button className='text-black group px-6 py-3 my-2 flex items-center '>
                  Read more about me 
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
              </span>
              </button>
              </Link>

              {/* View Work button */}
              <Link className='max-w-[550px] flex place-content-end' to="work" smooth={true} duration={500}>
              <button className='text-[black] bg-[#d3d3d3] py-4 px-4 self-start inline hover:text-black 
                                 hover:bg-[#ffdede] rounded-3xl hover:rounded-xl duration-300'>
                View Work
              </button>
              </Link>

            </div>

            {/* div of right side */}
            <div className='hidden md:block w-auto mx-auto' style={{transform: `translateX(${offsetY * 0.7}px)` }}>
            <img className='hidden md:block w-auto mx-auto animate-hovering' src={Cupid} alt="Cupid" />
            <div className='flex place-content-center'>
              <div className='relative w-40 h-5 bg-black rounded-full animate-shadowing filter blur-xl'></div>
            </div>
            </div>

            

            
            

            </div>
          <div>
          

          </div>

        </div>
    </div>
    
  )
}

export default Home