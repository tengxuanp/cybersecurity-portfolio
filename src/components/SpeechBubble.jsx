import React from 'react';

const SpeechBubble = ({description}) => {
  return (
    <div className="md:absolute right-[1rem] animate-hovering z-[70] drop-shadow-lg">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
        <p className="text-black">{description}</p>
      </div>
      {/* <div className="speech-arrow bg-black border-solid border-white border-t-4 border-r-4 h-4 w-4 absolute top-full left-1/2 transform -translate-x-1/2"></div> */}
      <div className="spiky-corner hidden md:block bg-white h-4 w-4 absolute top-[3rem] -left-2  transform rotate-45"></div>
    </div>
  );
};

export default SpeechBubble;
