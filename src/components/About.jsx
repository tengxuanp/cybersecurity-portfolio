/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import chucky from '../assets/chucky.jpg'
import { motion } from "framer-motion";

const About = () => {
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
                <p className=" text-black">I am passionate about building interesting software & artworks that
                    can amuse people / help people. I see web as art, it's a very good platform to express oneself. Hope you like my works and would be really apppreciated
                    if you can drop me some suggestions regarding anything!</p>
            </div>

        </div>

        
    </div>

  )
}

export default About