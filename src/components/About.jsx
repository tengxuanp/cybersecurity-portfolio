/* eslint-disable jsx-a11y/img-redundant-alt */
import chucky from '../assets/chucky.jpg'
import profile from '../assets/profile.jpg'
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import javascript_p from '../assets/javascript_p.png'
import react_p from '../assets/react_p.png'
import tailwind_p from '../assets/tailwind_p.png'
import redux_p from '../assets/redux_p.png'
import node_p from '../assets/node_p.png'

const About = () => {

  const [showAgeDetail, setShowAgeDetail] = useState(false)
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateAge = () => {
    const birthDate = new Date('1997-01-31');
    const currentDate = new Date();

    const timeDifference = currentDate - birthDate;

    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    const remainingMilliseconds = timeDifference % (365.25 * 24 * 60 * 60 * 1000);

    const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remainingMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainingMilliseconds % (60 * 1000)) / 1000);

    setAge({
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateAge();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [passion, setPassion] = useState(true);

  // *IntroBoard
  const chatbox = {
    initial: {
      scaleX: 0,
    },
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


  // *Icons
  const js = {
    initial: {
      translateY: 0,
    },
    animate: {
      translateY: -100,
      transition: {
        delay: 0.1,
        duration: 2,
      },
    },
  };

  const tw = {
    initial: {
      translateY: -350,
      scale: 1.5
    },
    animate: {
      translateY: -450,
      transition: {
        delay: 0.1,
        duration: 2,
      },
    },
  };

  const react = {
    initial: {
      translateY: -150,
      scale: 2
    },
    animate: {
      translateY: -250,
      transition: {
        delay: 0.1,
        duration: 2,
      },
    },
  };

  const rdx = {
    initial: {
      translateY: 0,
      scale: 2
    },
    animate: {
      translateY: -20,
      transition: {
        delay: 0.1,
        duration: 2,
      },
    },
  };


  return (
    // bg-[#10101b]
    <div name='about' className='about w-full p-8 bg-white text-black' style={{ height: "100vh" }} >
         <div className=' block'>
            <div className='mt-10 ml-6 flex justify-center self-center z-[999]'>
            {/* <img className='w-[12rem] translate-y-4 rounded-full object-top my-4 ' src={chucky} alt='Profile Picture' /> */}
            {/* <img className='w-[12rem] translate-y-8 rounded-full object-top my-4 border-[#ffc8c8]' src={profile} alt='Profile Picture' /> */}
            </div>
            <div className='mt-10 mx-6 rotate-[0deg] text-center'>
                <motion.div
                variants={chatbox}
                initial='initial'
                whileInView={'animate'}
                className=" bg-white inline-block p-4 border-4 border-black rounded-md">
                    <p className="p-2 mb-4 text-3xl text-black rounded-lg ">Hi. I'm <span className="text-5xl border-b-4 border-[#ffc8c8] underline underline-offset-4">Rafael Pang</span>, </p>
                    <p className="text-3xl text-black drop-shadow-sm">Please take a moment to explore my site.</p>
                </motion.div>
                <br /><br />
                <div className="flex justify-center self-center text-xl">
                  <p className={passion ? 'font-bold' : 'text-gray-300'}>Verbose <br /> Introduction</p>
                  <div className='inline-flex justify-center self-center bg-gray-300 rounded-xl drop-shadow-lg shadow-inner inset-4 mb-10 scale-50 translate-y-[-1.3rem] cursor-pointer' onClick={()=>setPassion(!passion)}>
                    <div className={passion ? 'w-[160px] h-[100px] flex justify-start rounded-full p-[10px] min-w-[160px] ' : 'w-[160px] h-[100px] flex justify-end rounded-[50px] p-[10px] min-w-[160px]'}>
                      <motion.div className="handle w-[80px] h-[80px] bg-white rounded-full shadow-inner inset-2" layout transition={spring} />
                    </div>
                  </div>
                  <p className={passion ? 'text-gray-300' : 'font-bold'}>Personal <br /> Information</p>
                </div>
                
                <div className='flex justify-center self-center'>
                <div className="translate-y-[-2rem] p-4 h-[10rem] w-[30rem]">
                {passion? 
                  <p className=" text-black max-w-xl text-left first-letter:text-5xl first-letter:mr-3 first-letter:float-left">I am an aspiring Penetration Tester with a Master’s in Cybersecurity and over 4 years of technical experience across frontend development and IT infrastructure. While I began my career crafting digital experiences, I have shifted my focus to cybersecurity, driven by a passion for safeguarding digital assets and combating cyber threats. <br /> <br />
                      <br />
                      I am an active CTF competitor and Hack The Box user, currently ranked in the top 11% globally (1011/9850) for Season 9. I am always committed to continuous growth through industry-recognized certifications.
                  </p>
                :
                  <p className="p-4 text-black max-w-1 text-justify rounded-lg">
                    <span className='font-bold'>Name:</span> Rafael Pang TX<br />
                    <span className='font-bold'>Age <span onClick={()=>(setShowAgeDetail(!showAgeDetail))} className='text-xs italic cursor-pointer text-right hover:underline transition'>{showAgeDetail?`collapse`:`in detail`}</span> :</span> {showAgeDetail?(<span>{`${age.years} years ${age.months} months ${age.days} days ${age.hours} hours ${age.minutes} minutes ${age.seconds} seconds old.`}</span>):(<span>29 years old</span>)} <br /> 
                    <span className='font-bold'>Gender:</span> Male<br /> 
                    <span className='font-bold'>Nationality:</span> Malaysian<br />
                  </p>
                }
                </div>
                </div>
            </div>
            <div className='hidden md:flex justify-around'>
              <motion.div
              variants={js}
              initial='initial'
              whileInView={'animate'}
              className=' w-[5rem] blur-sm opacity-20 -z-[99]'
              >
                <img src={javascript_p} />
              </motion.div>

              <motion.div
              variants={tw}
              initial='initial'
              whileInView={'animate'}
              className=' w-[5rem] blur-[1px] opacity-25 -z-[99]'
              >
                <img src={tailwind_p} />
              </motion.div>

              <motion.div
              variants={react}
              initial='initial'
              whileInView={'animate'}
              className=' w-[5rem] blur-[1px] opacity-10 -z-[99]'
              >
                <img src={react_p} />
              </motion.div>

              <motion.div
              variants={rdx}
              initial='initial'
              whileInView={'animate'}
              className=' w-[5rem] blur-[1px] opacity-25 -z-[99]'
              >
                <img src={redux_p} />
              </motion.div>

              <motion.div
              variants={react}
              initial='initial'
              whileInView={'animate'}
              className=' w-[5rem] blur-[1px] opacity-25 -z-[99]'
              >
                <img src={node_p} />
              </motion.div>
            </div>
        </div>
    </div>

  )
}

export default About