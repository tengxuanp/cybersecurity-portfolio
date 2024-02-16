import React, { useEffect, useRef, useState } from 'react'
import tcu from '../assets/tcu.jpg'
import tcb from '../assets/tcb.jpg'
import rps from '../assets/rps.jpg'
// import btp from '../assets/btp.jpg'
import btp from '../assets/btp.png'
import '../styles/Work.css'
import WorkComponent from './works/WorkComponent'
import workInfo from './works/info.json'
import { motion,AnimatePresence } from "framer-motion";
import Sidebar from './works/Sidebar'

import WorkCard from './works/WorkCard'
import SpeechBubble from './SpeechBubble'



  const Slide = ({ id,name,url,description,imgPath,tech,demo,category,steps}) => (
    <div className="slide p-4 drop-shadow-lg bg-white bg-gradient-to-r from-[#ffdede] to-orange-50">
      <div className='bg-white'>
        <WorkComponent id={id} name={name} url={url} description={description} imgPath={imgPath} tech={tech} demo={demo} category={category} steps={steps} />
      </div>
    </div>
  )


const Work = () => {
    const [cat, setCat] = useState([])
    const [activeCat, setActiveCat] = useState(['all'])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState('left')

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 === slides.length ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevious = () => {
        setDirection("left");
    
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
        );
      };
    
      const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
      };

    let slides = activeCat.includes('all')? workInfo.map(item => 
    <Slide 
      key={item.id} 
      name={item.name} 
      url={item.url} 
      description={item.description} 
      imgPath={item.imgPath}
      tech={item.tech} 
      demo={item.demo}
      category={item.category}
      steps={item.steps}
    />)
    :workInfo.filter(obj =>
        Object.values(obj.category).some(value => {
        return  activeCat.includes(value)
        })
      ).map(item=> 
        {return <Slide 
                  key={item.id} 
                  name={item.name} 
                  url={item.url} 
                  description={item.description} 
                  imgPath={item.imgPath}
                  tech={item.tech} 
                  demo={item.demo}
                  category={item.category}
                  steps={item.steps}
                />})

    useEffect(() => {
        const cats = workInfo.map((item)=>item.category)
        const concatCats = cats.reduce((acc, curr) => acc.concat(curr), []);
        const filteredCat = new Set(concatCats);
        const uniqueCat = Array.from(filteredCat);
        setCat(uniqueCat)
      },[]);

    const handleCat = (item) => {
        if(activeCat.includes(item) && item !== 'all'){
            setActiveCat(activeCat.filter(item1 => item1 !== item))
        }
        else if(activeCat.includes(item) && item === 'all'){
            return
        }

        else{
            const newArr = [...activeCat,item]
            setActiveCat(newArr)
        }
        setCurrentIndex(0);
    }

    useEffect(()=>{
        const lastIndex = activeCat.length-1
        if(activeCat.includes('all') && activeCat.length>=2 && activeCat[lastIndex]!=='all'){
             setActiveCat(activeCat.filter(item2 => item2 !== 'all'))
        }

        if(activeCat[lastIndex]==='all'&& activeCat.length > 1){
             setActiveCat(activeCat.filter(item3 => item3 === 'all'))
        }
    },[setActiveCat,activeCat])


    const slideVariants = {
        hiddenRight: {
          x: "100%",
          opacity: 0,
        },
        hiddenLeft: {
          x: "-100%",
          opacity: 0,
        },
        visible: {
          x: "0",
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        },
        exit: {
          opacity: 0,
          scale: 1,
          transition: {
            duration: 0,
          },
        },
      };

      const slidersVariants = {
        hover: {
          scale: 1.2,
        },
        active: {
          scale: 1.2,
          backgroundColor: "#373737",
        },

      };

    const dotsVariants = {
        initial: {
          y: 0,
        },
        animate: {
          y: -10,
          scale: 1.3,
          transition: { type: "spring", stiffness: 1000, damping: "10" },
        },
        hover: {
          scale: 1.1,
          transition: { duration: 0.2 },
        },
      };
  

  return (
    <div name='work' className='w-full h-full text-black my-8'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div className='pb-8'>

            <div className='grid md:grid-cols-5 justify-center'>
              <div className='md:col-span-2'>
                {/* //*Toggle */}
                <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Work</p>
                <p className='py-6 italic text-sm'> &#47;&#47; Check out some of my recent works</p>

                {/* //*Filter */}
                <div className='my-2'>
                    <div className='my-2'>Tag Filter:</div>
                    <button className={activeCat.includes('all')?'mr-2 px-2 border-black border-2 bg-black rounded-lg h-8 capitalize text-white':'mr-2 px-2 drop-shadow text-black bg-white rounded-lg h-8 capitalize hover:bg-[#dddddd] transition-colors'} onClick={()=>handleCat('all')}>show all</button>
                    {cat.map((item,index)=>
                    <button id='catId' key={index} className={activeCat.includes(item)?'mr-2 mb-2 px-2 border-black border-2 bg-black rounded-lg h-8 capitalize text-white':'mr-2 mb-2 px-2 drop-shadow text-black bg-white rounded-lg h-8 capitalize hover:bg-[#dddddd] transition-colors'} onClick={()=>handleCat(item)}>{item}</button>)}
                </div>
              </div>

              <div className='flex md:inline md:col-span-3'>
                <div className='relative'>
                {(slides[currentIndex] && slides[currentIndex].props !== undefined) ?
                  <SpeechBubble description={slides[currentIndex].props.description} />
                  : <SpeechBubble description='Hey please select a few tags so you can check out my projects!' />}
                </div>
                <div className='human relative flex justify-start self-start'>
                  <img className='absolute w-[50x] h-[150px] md:-z-[20] md:w-[350px] md:h-[500px] md:-translate-y-[7rem]' src={btp} alt='Human' />
                </div>
              </div>
            </div>

            {/* //*Carousel */}
            <div className="carousel flex">
            {/* //? lg:w-[1200px] lg:h-[500px] */}
              <div className="carousel-images flex relative overflow-hidden p-4">
                <AnimatePresence>
                  <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                  >
                    {slides[currentIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="carousel-indicator flex justify-center gap-5 hover:cursor-pointer mt-2">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`${currentIndex === index ? "bg-[#f8a0a0]" : "bg-[#818181]"} w-4 h-4 rounded-full`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                  />
                ))}
            </div>

            <div className="scale-[1.10] flex justify-between md:justify-center -translate-y-[8rem] md:self-center md:translate-y-0 mt-4">
                <div className="pr-4 slide_direction flex col-span-1 md:justify-between md:justify-self-center md:self-center hover:cursor-pointer">
                  <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left block bg-white border-2 border-black pt-2.5 pr-2 pb-2 pl-3 rounded-full relative bottom-0 h-12 w-12 drop-shadow-lg transition active:bg-black"
                    onClick={handlePrevious}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 560 960"
                      width="20"
                    >
                      <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                  </motion.div>
                </div>
                
                <div className="pl-4 slide_direction col-span-1 justify-self-start self-center hover:cursor-pointer">
                  <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right block bg-white border-2 border-black pt-2.5 pr-2 pb-2 pl-3 rounded-full relative bottom-0 h-12 w-12 drop-shadow-lg transition active:bg-black"
                    onClick={handleNext}
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 560 960"
                      width="20"
                    >
                      <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                    </svg>
                  </motion.div>
                </div>

            </div>

            {/* //?<Sidebar workInfo={workInfo} /> */}
          </div>

          {/* //?<WorkCard workInfo={workInfo} /> */}

        </div>
    </div>
  )
}

export default Work