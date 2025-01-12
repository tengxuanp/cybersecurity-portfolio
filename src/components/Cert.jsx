import React from 'react'
import CDSA from '../assets/cdsa.jpg';
import ISO27001 from '../assets/ISO27001.jpg';

const Cert = () => {
  return (
    <>
    <div name='cert' className='w-full h-screen bg-[white] text-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-black '>Certificaitons & Training</p>
                <p className='py-4'> &#47;&#47; These are the certifications I have acquired, and training I have completed:</p>
            </div>
            <div className='grid justify-center self-center'>
                <div>
                    <a href="https://www.credly.com/earner/earned/badge/bf0e2272-6829-42c8-90fd-70dec5857aec" target="_blank">
                    <img
                    className='drop-shadow-2xl my-5 w-[50rem]'
                    src={CDSA} 
                    alt="CDSA" 
                    />
                    </a>
                </div>
                <div className=''>
                    <h3>CDSA - Certified Defensive Security Analyst</h3>
                    <p>by Hack The Box | 2024</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cert