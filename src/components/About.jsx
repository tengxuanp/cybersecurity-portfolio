/* eslint-disable jsx-a11y/img-redundant-alt */
import chucky from '../assets/chucky.jpg'
import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {

  const [passion, setPassion] = useState(true);

  const chatbox = {
      initial: {
          scaleX: 0,    },
      animate: {
          scaleX: 1,
          transition: {
            delay: 0.25,
          },
      },
      };
  
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    
    <div name='about' className='about w-full h-auto p-8 bg-[#ffdede] text-black' >
         <div className=' block'>
            <div className='mt-10 ml-6 flex justify-center self-center z-[999]'>
            <img className='w-[12rem] translate-y-4 rounded-full object-top my-4 ' src={chucky} alt='Profile Picture' />
            </div>
            <div className='mt-10 mx-6 rotate-[0deg] text-center'>
                <motion.div
                variants={chatbox}
                initial='initial'
                whileInView={'animate'}
                className=" bg-white inline-block p-4 border-4 border-black rounded-md">
                    <p className="p-2 mb-4 text-3xl rounded-lg ">Hi. I'm <span className="text-5xl border-b-4 border-[#ffc8c8] underline underline-offset-4">Raphael Pang</span>, </p>
                    <p className="text-3xl drop-shadow-sm">nice to see you here. Please take a look around.</p>
                </motion.div>
                <br /><br />
                <div className="flex justify-center self-center text-xl">
                  <p className={passion ? 'font-bold' : ''}>Personal <br /> Passion</p>
                  <div className='inline-flex justify-center self-center bg-gray-300 rounded-xl border-4 border-black mb-10 scale-50 translate-y-[-1.3rem] cursor-pointer' onClick={()=>setPassion(!passion)}>
                    <div className={passion ? 'w-[160px] h-[100px] flex justify-start rounded-full p-[10px] min-w-[160px] ' : 'w-[160px] h-[100px] flex justify-end rounded-[50px] p-[10px] min-w-[160px]'}>
                      <motion.div className="handle w-[80px] h-[80px] bg-white rounded-full border-[4px] border-black" layout transition={spring} />
                    </div>
                  </div>
                  <p className={passion ? '' : 'font-bold'}>Personal <br /> Information</p>
                </div>
                
                <div className="flex justify-center self-start translate-y-[-2rem]">
                {passion? 
                  <p className=" text-black max-w-xl text-left">I am a front-end focused developer that passionate about building creative software & artworks.<br /> 
                      I see web as art, it's a very good platform to express oneself. 
                      <br /> <br /> 
                      I am in search of an opportunity to expand my web developing knowledge
                      as well as my art designing knowledge, to grow into a well-rounded developer.
                  </p>
                :
                  <p className="p-4 text-black max-w-xl text-left bg-white rounded-lg">
                    <span className='font-bold'>Full Name:</span> Raphael Pang Teng Xuan<br />
                    <span className='font-bold'>Age:</span> 25 years old<br /> 
                    <span className='font-bold'>Gender:</span> Male<br /> 
                    <span className='font-bold'>Nationality:</span> Malaysian<br />
                  </p>
                }
                </div>
            </div>

        </div>

        
    </div>

  )
}

export default About