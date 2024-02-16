import React from 'react'
import default_preview from '../../assets/default_preview.png'

const WorkComponent = (props) => {

  const {name, category, url, description, imgPath, tech, demo, steps} = props;

  return (
    <div className="project-card grid md:grid-cols-5 min-h-[330px]">
      <div className='hidden md:grid md:col-span-2'>
        {imgPath?
            <div className='flex justify-center items-center z-10 w-[100rem] h-[20rem] md:scale-[0.2] lg:scale-[0.3] -translate-x-[40rem]'>
            <img 
              className='absolute left-0 animate-hovering_s drop-shadow-2xl ' 
              src={imgPath} 
              alt={`Image of ${name}`}
            />
          </div>
          :
            <div className='flex justify-center items-center z-10 w-[100rem] h-[20rem] md:scale-[0.2] lg:scale-[0.3] -translate-x-[40rem]'>
              <img 
                className='absolute left-0 animate-hovering_s drop-shadow-2xl ' 
                src={default_preview} 
                alt={`Image of ${name}`}
              />
            </div>
        }
        
        <div className='pl-5 flex justify-start self-center'>
          <p>
              {category.map((cat, index) => (
              <span key={index} className="text-xs italic">#{cat} </span>
            ))}
          </p>
        </div>
      </div>

      <div className="project-details mt-2 col-span-3">
        <div>
          <h3 className="flex justify-center self-center md:justify-start md:self-start text-2xl font-bold">{name}</h3>
          <div className="overline decoration-dotted">
          <h4 className='flex justify-center self-center md:justify-start md:self-start underline decoration-dotted underline-offset-8'>
            {tech.map((tec, index) => (
              <span key={index}>
                {tec}
                {index < tech.length - 1 && <span className="bullet-dot"> &#8226; </span>}
              </span>
            ))}
          </h4>
          </div>
        </div>
        {steps ? <p className='text-sm mt-2' >{steps.map((step,index)=>(<li className='cursor-text mb-2' key={index}>{step}</li>))}</p>:''}
        
        <br />
        
        <div className="project-links flex justify-center md:justify-start">
          <a className='transition rounded-full bg-white p-2 mr-2 drop-shadow-lg font-bold hover:drop-shadow-sm hover:bg-[#D6D6D6] active:bg-black active:text-white' href={url} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          {demo && (
            <a className='transition rounded-full bg-white p-2 mr-2 drop-shadow-lg font-bold hover:drop-shadow-sm hover:bg-[#D6D6D6] active:bg-black active:text-white' href={demo} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkComponent