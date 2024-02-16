import React from 'react'
import scene from '../assets/scene.png'

const Scenery = () => {
  return (
    <div 
      className='md:w-[50rem] h-full bg-fixed mx-4 flex justify-center items-center  drop-shadow-3xl' 
      style={{ 
        backgroundImage: `url(${scene})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden', // Prevents text from overflowing outside the parent div
      }}>
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
          backdropFilter: 'blur(4px)', // Adjust the blur radius as needed
        }}>
      </div>
      <div className='text-left'>
      <h1 
        className='text-4xl p-[20rem] relative z-10 text-white w-[60rem]'>
        The only way to do <span className='font-bold '>great work</span> is to <span className='font-bold '>love what you do</span>. 
        <br />
        <a className="italic text-3xl text-end" href='https://www.youtube.com/watch?v=JV3OqaRmBk4&ab_channel=LexClips' target="_blank"> - <span className='hover:underline'>Steve Jobs</span></a>
      </h1>
      </div>
    </div>
  );
}

export default Scenery