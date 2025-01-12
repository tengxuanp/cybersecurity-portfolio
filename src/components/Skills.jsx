import React from 'react';

// import HTML from '../assets/html.png';
import GNS3 from '../assets/gns3.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Autopsy from '../assets/autopsy.png';
import Photoshop from '../assets/photoshop.png';
import KAPE from '../assets/kape.png';
import Tailwind from '../assets/tailwind.png';
import SqlServer from '../assets/sql.png';
import Splunk from '../assets/splunk.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[white] text-black'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-black '>Technical Skills</p>
                <p className='py-4'> &#47;&#47; These are the technologies that I've most experienced in:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={GNS3} alt="GNS3 icon" />
                    <p className='my-4'>GNS3</p>
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
                    <p className='my-4'>REACT JS</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={KAPE} alt="KAPE icon" />
                    <p className='my-4'>KAPE</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={SqlServer} alt="SQL Server icon" />
                    <p className='my-4'>SQL</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto hover:rotate-12 duration-500' src={Autopsy} alt="Autopsy icon" />
                    <p className='my-4'>AUTOPSY</p>
                </div>

                <div className='hover:scale-110 duration-200'>
                    <img className='w-40 h-20 mx-auto hover:rotate-12 duration-500' src={Splunk} alt="Splunk icon" />
                    <p className='my-4'>SPLUNK</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills