/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import chucky from '../assets/chucky.jpg'
import { motion } from "framer-motion";

const About = () => {

  return (
    
    <div name='about' className='w-full h-screen bg-[white] text-[black]' >
 
        <div className='flex flex-col justify-center items-center w-full h-full'>
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
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{duration:0.8,delay:0.3}}
                      className='text-3xl font-bold
                        sm:flex sm:text-right sm:mr-4'>
                        <img className='rounded-full object-top	my-4 sm:translate-y-[-5rem]' src={chucky} alt='Profile Picture' />
                        <p>Hi. I'm Raphael, nice to meet you. Please take a look around.</p>
                    </motion.div>
                
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{duration:0.8,delay:0.6}}
                    >
                        <p>I am passionate about building interesting software & artworks that
                            can amuse people / help people. I see web as art, it's a very good platform to express oneself. Hope you like my works and would be really apppreciated
                            if you can drop me some suggestions regarding anything!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default About