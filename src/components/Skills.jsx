import React from 'react';

import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Illustrator from '../assets/illustrator.png';
import Photoshop from '../assets/photoshop.png';
import Figma from '../assets/figma.png';
import Tailwind from '../assets/tailwind.png';
import SqlServer from '../assets/sql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[white] text-black'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-black '>Skill</p>
                <p className='py-4'> &#47;&#47; These are the technologies that I've most experienced in:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={Tailwind} alt="CSS icon" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={JavaScript} alt="Javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={Photoshop} alt="Photoshop icon" />
                    <p className='my-4'>PHOTOSHOP</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={SqlServer} alt="SQL Server icon" />
                    <p className='my-4'>SQL Server</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={Figma} alt="Figma icon" />
                    <p className='my-4'>FIGMA</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={Illustrator} alt="Illustrator icon" />
                    <p className='my-4'>ILLUSTRATOR</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills