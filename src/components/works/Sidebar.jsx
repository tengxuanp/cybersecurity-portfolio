import React from 'react'

const Sidebar = ({workInfo}) => {
  return (
    <div className='absolute p-4 border-2 border-black w-64 bg-white rounded-lg z-[99] right-[1rem]'>
        <div className='my-2'>Project list:</div>
        <div className='flex flex-col'>
        {workInfo.map((item)=>
        <button className='mr-2 p-2 capitalize'>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
        </button>)}
        </div>
    </div>
  )
}

export default Sidebar