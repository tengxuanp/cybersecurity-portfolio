import React from 'react'
import send_email from '../assets/send_email.png'

const Contact = () => {
  const emailAddress = 'tengxuanp@hotmail.com';

  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
      {/* #fce7e7 */}
      <div className='flex-col text-right -ml-8'>
        <div className='border-2 border-black border-dashed rounded-full text-xl bg-[#ffada8] pr-8 py-2 cursor-pointer -mr-8 ml-8 hover:-mr-5 hover:ml-5 transition-all'><a href={`mailto:${emailAddress}`}>Email</a></div>
        <div className='border-2 border-black border-dashed rounded-full text-xl bg-[#91ff76] -mt-1 pr-8 py-2 cursor-pointer -mr-8 ml-8 hover:-mr-5 hover:ml-5 transition-all'><a href='https://www.linkedin.com/in/rafael-pang-tx/' target="_blank">LinkedIn</a></div>
        <div className='border-2 border-black border-dashed rounded-full text-xl bg-[#76cdff] -mt-1 pr-8 py-2 cursor-pointer -mr-8 ml-8 hover:-mr-5 hover:ml-5 transition-all'><a href='https://github.com/tengxuanp' target="_blank">Github</a></div>
        {/* <div className='border-2 border-black border-dashed rounded-full text-xl bg-[#f991f6] -mt-1 pl-4 pr-8 py-2 cursor-pointer -mr-8 ml-8 hover:-mr-5 hover:ml-5 transition-all'><a href='/resume.pdf' target="_blank" download>Résumé</a></div> */}
      </div>
        <form 
          method='POST' action="https://getform.io/f/4338ed21-dc0a-424f-a738-3a7e8cceb3be" 
          className='flex flex-col max-w-[600px] w-full border-2 border-black border-dashed p-8 rounded-lg bg-yellow-100'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black my-5 italic text-sm'> &#47;&#47; Submit the form below or shoot me an email - <a href={`mailto:${emailAddress}`} className="text-blue-500 hover:underline">{emailAddress}</a></p>
            </div>
            <input className='bg-yellow-300 p-2 border-2 border-black' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-yellow-300 border-2 border-black' type='email' placeholder='Email' name='email' />
            <textarea className='bg-yellow-300 p-2 border-2 border-black' name='message' rows='10' placeholder='Message'></textarea>
            <button className='group text-black duration-300 px-4 py-3 my-8 mx-auto  flex items-center relative'>
              Submit 
              <span className="ml-2 flex items-center">
                <img src={send_email} className='w-[1.5rem] h-[1.5rem] -translate-y-1 group-hover:animate-wiggle transition-all' alt="send email" />
              </span>
            </button>
        </form>
    </div>
  )
}

export default Contact