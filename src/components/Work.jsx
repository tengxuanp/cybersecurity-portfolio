import React from 'react'
import Kowloon from '../assets/kowloon.jpg'
import Marvel from '../assets/marvel.jpg'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Work</p>
                <p className='py-6'>// Check out some of my recent works</p>
            </div>

    {/* Container */}
            <div className='grid sm:grid-cols-2 md:cols-3 gap-6'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage:`url(${Kowloon})`}} 
                className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        KawLoon City 狗籠城寨
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl border-2 border-black p-5'>
                    <h2 className='text-2xl font-bold pb-5'>KowLoon City 狗籠城寨</h2>
                    <p>KowLoon City 狗籠城寨 is a showcase to my artwork of many references to classic movies.</p>
                    <br></br>
                    <p>FYI: Dive in the city with a strong heart!</p>
                </div>


                {/* Grid Item */}
                <div 
                style={{backgroundImage:`url(${realEstate})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Applicaiton
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='rounded-3xl border-2 border-black p-5'>
                    <h2 className='text-2xl font-bold pb-5'>USE CASE: Edifun - A Photoshop Service Company</h2>
                    <p>Edifun provides Photoshop services such as photo retouching, editing.</p>
                    <br></br>
                    <p></p>
                </div>

                {/* Grid Item */}
                <div 
                style={{backgroundImage:`url(${Marvel})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Applicaiton
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='rounded-3xl border-2 border-black p-5'>
                    <h2 className='text-2xl font-bold pb-5'>USE CASE: MCUFD - MCU Fandom</h2>
                    <p>MCUFD is a MCU Fandom website.</p>
                    <br></br>
                    <p></p>
                </div>



                {/* <div 
                style={{backgroundImage:`url(${realEstate})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Applicaiton
                        </span>
                        <div>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Work