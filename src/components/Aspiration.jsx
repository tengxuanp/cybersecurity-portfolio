import React from 'react'
import { Parallax, Background } from 'react-parallax';

const Aspiration = () => {
  return (
    <Parallax 
      strength={600}
      bgImage={require('../assets/analyst.jpg')}
      bgImageAlt="scene"
      className='w-full h-auto  mx-4 flex justify-center items-center  drop-shadow-3xl' 
      >
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
        }}>
      </div>
      <div className='text-left'>
      <h1 
        className='text-4xl p-[20rem] relative z-10 text-white w-full'>
        I aspire to advance my career as <span className='font-bold text-5xl'>a SOC Analyst,</span> leveraging my skills to <span className='font-bold '>strengthen organizational cybersecurity and proactively address emerging threats</span>. 
      </h1>
      </div>
    </Parallax>
  );
}

export default Aspiration