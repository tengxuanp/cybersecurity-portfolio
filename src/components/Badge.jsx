import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import badgesData from '../data/badges.json'
import '../styles/Work.css'
import btp from '../assets/btp.png'
import SpeechBubble from './SpeechBubble'

// Import badge images
import ccBadge from '../assets/badge/cc_badge.png'
import cdsaBadge from '../assets/badge/cdsa_badge.png'
import ejptBadge from '../assets/badge/ejpt_badge.png'
import coaBadge from '../assets/badge/coa_badge.png'

const badgeImages = {
  'badge/cc_badge.png': ccBadge,
  'badge/cdsa_badge.png': cdsaBadge,
  'badge/ejpt_badge.png': ejptBadge,
  'badge/coa_badge.png': coaBadge
}



const BadgeSlide = ({ id, name, category, description, skillsTags, credentialUrl, imagePath, issuer, dateEarned, expiryDate }) => {
  const handleVerifyClick = () => {
    window.open(credentialUrl, '_blank');
  };

  return (
    <div className="slide p-4 drop-shadow-lg bg-white bg-gradient-to-r from-[#ffdede] to-orange-50">
      <div className='bg-white p-6 rounded-lg'>
        <div className="text-center mb-4">
          <img 
            src={badgeImages[imagePath]} 
            alt={name}
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-1">{issuer}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Skills Validated:</h4>
          <div className="flex flex-wrap gap-1">
            {skillsTags.map((skill, index) => (
              <span 
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-xs text-gray-600 mb-4">
          <div className="flex justify-between">
            <span>Earned: {new Date(dateEarned).toLocaleDateString()}</span>
            <span>Expires: {new Date(expiryDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <button 
          onClick={handleVerifyClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Verify Credential
        </button>
      </div>
    </div>
  );
};


const Badge = () => {
    const [categories, setCategories] = useState([])
    const [activeCategories, setActiveCategories] = useState(['all'])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState('left')

    // Swipe detection constants
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    // ...existing code...
    const filteredBadges = activeCategories.includes('all') 
      ? badgesData 
      : badgesData.filter(badge => 
          activeCategories.some(activeCat => 
            badge.category.toLowerCase().includes(activeCat.toLowerCase())
          )
        );

    const slides = filteredBadges.map(badge => 
      <BadgeSlide 
        key={badge.id}
        {...badge}
      />
    );

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

    useEffect(() => {
        // Extract unique categories from badges
        const uniqueCategories = [...new Set(badgesData.map(badge => badge.category))];
        setCategories(uniqueCategories);
    }, []);

    const handleCategoryFilter = (category) => {
        if (activeCategories.includes(category) && category !== 'all') {
            setActiveCategories(activeCategories.filter(cat => cat !== category));
        } else if (activeCategories.includes(category) && category === 'all') {
            return;
        } else {
            const newCategories = [...activeCategories, category];
            setActiveCategories(newCategories);
        }
        setCurrentIndex(0);
    };

    useEffect(() => {
        const lastIndex = activeCategories.length - 1;
        if (activeCategories.includes('all') && activeCategories.length >= 2 && activeCategories[lastIndex] !== 'all') {
            setActiveCategories(activeCategories.filter(cat => cat !== 'all'));
        }
        if (activeCategories[lastIndex] === 'all' && activeCategories.length > 1) {
            setActiveCategories(activeCategories.filter(cat => cat === 'all'));
        }
    }, [setActiveCategories, activeCategories]);

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
        <div name='badges' className='w-full h-full text-black my-8'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <div className='grid md:grid-cols-5 justify-center'>
                        <div className='md:col-span-2'>
                            {/* Title */}
                            <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Badges</p>
                            <p className='py-6 italic text-sm'> &#47;&#47; Check out some of my recent collection of cybersecurity badges.</p>

                            {/* Filter */}
                            <div className='my-2'>
                                <div className='my-2'>Tag Filter:</div>
                                <button 
                                    className={activeCategories.includes('all') ? 'mr-2 px-2 border-black border-2 bg-black rounded-lg h-8 capitalize text-white' : 'mr-2 px-2 drop-shadow text-black bg-white rounded-lg h-8 capitalize hover:bg-[#dddddd] transition-colors'} 
                                    onClick={() => handleCategoryFilter('all')}
                                >
                                    show all
                                </button>
                                {categories.map((category, index) => (
                                    <button 
                                        id='catId' 
                                        key={index} 
                                        className={activeCategories.includes(category) ? 'mr-2 mb-2 px-2 border-black border-2 bg-black rounded-lg h-8 capitalize text-white' : 'mr-2 mb-2 px-2 drop-shadow text-black bg-white rounded-lg h-8 capitalize hover:bg-[#dddddd] transition-colors'} 
                                        onClick={() => handleCategoryFilter(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex md:inline md:col-span-3'>
                            <div className='relative'>
                                {(slides[currentIndex] && slides[currentIndex].props !== undefined) ?
                                    <SpeechBubble description={slides[currentIndex].props.description} />
                                    : <SpeechBubble description='Hey, please select a few tags so you can check out my cybersecurity badges!' />}
                            </div>
                            <div className='human relative flex justify-start self-start'>
                                <img className='absolute w-[50x] h-[150px] md:-z-[20] md:w-[350px] md:h-[500px] md:-translate-y-[7rem]' src={btp} alt='Human' />
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="carousel flex relative">
                        <div className="carousel-images flex relative overflow-hidden p-4 w-full">
                            <AnimatePresence>
                                <motion.div
                                    key={currentIndex}
                                    variants={slideVariants}
                                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                                    animate="visible"
                                    exit="exit"
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(offset.x, velocity.x);
                                        if (swipe < -swipeConfidenceThreshold) {
                                            handleNext();
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            handlePrevious();
                                        }
                                    }}
                                >
                                    {slides[currentIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows - positioned on the sides of carousel */}
                        <motion.div
                            variants={slidersVariants}
                            whileHover="hover"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 drop-shadow-lg transition active:bg-black hover:cursor-pointer z-10"
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

                        <motion.div
                            variants={slidersVariants}
                            whileHover="hover"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 drop-shadow-lg transition active:bg-black hover:cursor-pointer z-10"
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

                    <div className="carousel-indicator flex justify-center gap-5 hover:cursor-pointer mt-4">
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
{/* 
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Badge