import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/4338ed21-dc0a-424f-a738-3a7e8cceb3be" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black my-5'> &#47;&#47; Submit the form below or shoot me an email - tengxuanp@hotmail.com</p>
            </div>
            <input className='bg-[#F6EEEE] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#F6EEEE]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#F6EEEE] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className=' text-black border-2 border-black hover:bg-black hover:border-white hover:text-white duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact