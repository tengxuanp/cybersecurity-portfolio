import React from 'react'
import tcu from '../assets/tcu.jpg'
import tcb from '../assets/tcb.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full h-auto text-black bg-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Portfolio</p>
                <p className='py-6'> &#47;&#47; Check out some of my recent works</p>
            </div>

    {/* Container */}
            <div className='grid sm:grid-cols-2 md:cols-3 gap-6'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage:`url(${tcu})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 transition-all'>
                        <span className='pb-2 text-xl font-bold text-black tracking-wider underline underline-offset-2'>
                        The Conjuring Universe
                        </span>
                        <div>
                            <ul style={{ listStyleType: "disc" }}><span className='font-bold'>Built with:</span>
                                <li className='cursor-auto'>Next JS</li>
                                <li className='cursor-auto'>SCSS</li>
                                <li className='cursor-auto'>Tailwind</li>
                            </ul>
                            <br />
                            <ul style={{ listStyleType: "disc" }}><span className='font-bold'>Libraries used:</span>
                                <li className='cursor-auto'>Framer Motion</li>
                                <li className='cursor-auto'>React Scroll</li>
                                <li className='cursor-auto'>React Scroll Motion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl border-2 border-black p-5'>
                    <h2 className='text-2xl font-bold pb-5'>The Conjuring Universe</h2>
                    <p>The Conjuring Universe is a simplified fandom website targetting users who are interested to get a better understanding of the America media franchise The Conjuring Universe.</p>
                    <br></br>
                    <div className=''><span className='font-bold py-2'>Video Demo:</span>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-b-2 transition-all' href='https://drive.google.com/file/d/1HD_1z-cgEs-yU2WW0JxmqtzTLSDikS_t/view?usp=sharing'>&nbsp;Desktop</a>|
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-b-2 transition-all' href='https://drive.google.com/file/d/1ghqqHJK7Jz8SiME3vvx28XRd5obd32LX/view?usp=sharing'>&nbsp;Mobile</a>
                    </div>
                    <div className='mt-4'>
                        <a className="mr-4 py-2 px-3 rounded-lg text-2xl bg-[#ffdede] border-4 border-[#ffdede] hover:border-black hover:border-4 hover:animate-none transition-all
                        after:content-[''] after:absolute after:border-green-500 after:bg-green-500 after:border-4 after:rounded-full after:w-2 after:h-2 after:animate-ping
                        before:content-[''] before:absolute before:translate-x-[2.8rem] before:border-green-500 before:bg-green-500 before:border-4 before:rounded-full before:w-2 before:h-2" href='https://the-conjuring-universe-for-noobs.vercel.app/'>
                        Live</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/the-conjuring-universe-for-noobs'>Github</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/the-conjuring-universe-for-noobs/blob/main/README.md'>Documentation</a>
                    </div>
                </div>


                {/* Grid Item */}
                <div 
                style={{backgroundImage:`url(${tcb})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 transition-all'>
                        <span className='pb-2 text-xl font-bold text-black tracking-wider underline underline-offset-2'>
                        The Chicken Bros
                        </span>
                        <div>
                            <ul style={{ listStyleType: "disc" }}><span className='font-bold'>Built with:</span>
                                <li className='cursor-auto'>React JS</li>
                                <li className='cursor-auto'>SCSS</li>
                                <li className='cursor-auto'>Tailwind</li>
                            </ul>
                            <br />
                            <ul style={{ listStyleType: "disc" }}><span className='font-bold'>Libraries used:</span>
                                <li className='cursor-auto'>AOS(Aminate on scroll)</li>
                                <li className='cursor-auto'>React Icons</li>
                                <li className='cursor-auto'>React Scroll</li>
                                <li className='cursor-auto'>Lottie Web</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='rounded-3xl border-2 border-black p-5'>
                <h2 className='text-2xl font-bold pb-5'>The Chicken Bros</h2>
                    <p>The Chicken Bros is a showcase of my artwork level with the theme of Chinese chicken restaurant. 90% of the assets are created with Photoshop / After Effects.</p>
                    <br></br>
                    <div className=''><span className='font-bold py-2'>Video Demo:</span>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-b-2 transition-all' href='https://drive.google.com/file/d/1O4zN3cLSGZ1v3jYRYEUpHurJ-fzaoVog/view?usp=sharing'>&nbsp;Desktop</a>
                    </div>
                    <div className='mt-4'>
                        <a className="mr-4 py-2 px-3 rounded-lg text-2xl bg-[#ffdede] border-4 border-[#ffdede] hover:border-black hover:border-4 hover:animate-none transition-all
                        after:content-[''] after:absolute after:border-green-500 after:bg-green-500 after:border-4 after:rounded-full after:w-2 after:h-2 after:animate-ping
                        before:content-[''] before:absolute before:translate-x-[2.8rem] before:border-green-500 before:bg-green-500 before:border-4 before:rounded-full before:w-2 before:h-2" href='https://the-chicken-bros.vercel.app/'>
                        Live</a>

                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/the-chicken-bros'>Github</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/the-chicken-bros/blob/main/README.md'>Documentation</a>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                className='group container rounded-md flex justify-center items-center mx-auto content-div2'
                >
                    <div className='flex justify-center self-center p-4 whitespace-nowrap text-2xl'>Other mini projects:</div>

                </div>

                <div className='rounded-3xl border-2 border-black p-5'>
                    <h2 className='text-xl font-bold pb-5'>Pricing Component with toggle</h2>
                    <div className=''>
                        <a className="mr-4 py-1 px-2 rounded-lg text-xl bg-[#ffdede] border-4 border-[#ffdede] hover:border-black hover:border-4 hover:animate-none transition-all
                        after:content-[''] after:absolute after:border-green-500 after:bg-green-500 after:border-4 after:rounded-full after:w-2 after:h-2 after:animate-ping
                        before:content-[''] before:absolute before:translate-x-[2.4rem] before:border-green-500 before:bg-green-500 before:border-4 before:rounded-full before:w-2 before:h-2" href='https://tengxuanp.github.io/pricing-component-with-toggle-master/'>
                        Live</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/pricing-component-with-toggle-master'>Github</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/pricing-component-with-toggle-master/blob/main/README.md'>Documentation</a>
                    </div>
                    <br />
                    <div className='flex border-[1px] border-black mb-1'></div>
                    <h2 className='text-xl font-bold pb-5'>FAQ Accordion Card</h2>
                    <div className=''>
                        <a className="mr-4 py-1 px-2 rounded-lg text-xl bg-[#ffdede] border-4 border-[#ffdede] hover:border-black hover:border-4 hover:animate-none transition-all
                        after:content-[''] after:absolute after:border-green-500 after:bg-green-500 after:border-4 after:rounded-full after:w-2 after:h-2 after:animate-ping
                        before:content-[''] before:absolute before:translate-x-[2.4rem] before:border-green-500 before:bg-green-500 before:border-4 before:rounded-full before:w-2 before:h-2" href='https://tengxuanp.github.io/faq-accordion-card/'>
                        Live</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/faq-accordion-card'>Github</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/faq-accordion-card/blob/main/README.md'>Documentation</a>
                    </div>
                    <br />
                    <div className='flex border-[1px] border-black mb-1'></div>
                    <h2 className='text-xl font-bold pb-5'>Interactive Rating Component</h2>
                    <div className=''>
                        <a className="mr-4 py-1 px-2 rounded-lg text-xl bg-[#ffdede] border-4 border-[#ffdede] hover:border-black hover:border-4 hover:animate-none transition-all
                        after:content-[''] after:absolute after:border-green-500 after:bg-green-500 after:border-4 after:rounded-full after:w-2 after:h-2 after:animate-ping
                        before:content-[''] before:absolute before:translate-x-[2.4rem] before:border-green-500 before:bg-green-500 before:border-4 before:rounded-full before:w-2 before:h-2" href='https://tengxuanp.github.io/interactive-rating-component/'>
                        Live</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/interactive-rating-component'>Github</a>
                        <a className='mr-2 border-[#ffdede] border-b-2 hover:border-black hover:border-y-4 transition-all' href='https://github.com/tengxuanp/interactive-rating-component/blob/main/README.md'>Documentation</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work