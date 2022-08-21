import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Cupid from '../assets/cupid.png';
import { motion } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut} from "react-scroll-motion";


const Home = () => {
  const name = {
    initial: {
        x: '-100vw',
    },
    animate: {
        x: 0,
        transition: {
        delay: 0.5,
        },
    },
    };

  return (
    <div name='home' className='w-full h-screen bg-white'>
        {/* Container */}
        <div className='max-w=[1000px] mx-auto flex flex-col justify-center h-full'>
          <div className='flex sm:grid sm:grid-cols-2 gap-1'>

            {/* div of left side */} 
            <motion.div
              variants={name}
              initial='initial'
              animate='animate'
             className='m-auto px-2'>
              <p><span className='text-xl text-[#black] text-center'>Hello there, I'm </span>
                <span className='text-[4rem] sm:text-[6rem] font-bold text-[#black]'>Raphael</span></p>
              <div className="bg-[#ffdede] inline-block px-2 pt-2">
              <p className=' text-black rounded-sm p-2 text-center max-w-[700px] animate-typing overflow-hidden whitespace-nowrap inline-block py-0'>
                <span className="animate-blinkCaret border-r-2 border-black">Front-end Developer & Art Enthusiast. </span></p>
              </div>
              {/* About Me button */}
              <Link to="about" smooth={true} duration={500}>
              <button className='text-black group py-3 my-2 flex items-center'>
                  Read more about me 
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
              </span>
              </button>
              </Link>

              {/* View Work button */}
              <Link className='max-w-[550px] h-[100px] flex place-content-end' to="work" smooth={true} duration={500}>
              <button className='text-[black] bg-white py-4 px-4 self-start inline border-black border-t-2 border-l-2 border-r-4 border-b-4
              hover:text-black hover:bg-[#ffdede] hover:border-r-2 hover:border-b-2 duration-300 active:bg-[#f8a0a0]'>
                View Work
              </button>
              </Link>

            </motion.div>

            <ScrollContainer>
              <ScrollPage>
                <Animator animation={batch(Fade(), MoveOut(500, 0))}>
                {/* div of right side */}
                <div className='hidden md:block md:translate-y-12 w-auto mx-auto'>
                  <img className='hidden md:block w-auto mx-auto animate-hovering' src={Cupid} alt="Cupid" />
                  <div className='flex place-content-center'>
                    <div className='relative w-40 h-5 bg-black rounded-full animate-shadowing filter blur-xl'></div>
                  </div>
                </div>
                </Animator>
              </ScrollPage>
            </ScrollContainer>

            </div>
          <div>
          

          </div>

        </div>
    </div>
    
  )
}

export default Home