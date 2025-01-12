import React from 'react'
import default_preview from '../../assets/default_preview.png'

const WorkComponent = (props) => {

  const {id,topic,reflection,challenges,goal,steps} = props;

  return (
    <div className="project-card grid md:grid-cols-2 min-h-[330px]">
      <div className="project-details mt-2 col-span-3">
        <div className='m-4'>
          <h3 className="flex justify-center self-center md:justify-start md:self-start text-2xl font-bold">{topic}</h3>

          <div className='my-4'>
          <div><p className='text-xl'>Reflection:</p></div>
          <div>{reflection}</div>
          </div>

          <div className='my-4'>
          <div><p className='text-xl'>Challenges:</p></div>
          <div>{challenges}</div>
          </div>

          <div className='my-4'>
          <div><p className='text-xl'>Goal:</p></div>
          <div>{goal}</div>
          </div>
        </div>
        {steps ? <p className='text-sm mt-2' >{steps.map((step,index)=>(<li className='cursor-text mb-2' key={index}>{step}</li>))}</p>:''}
    

      </div>
    </div>
  )
}

export default WorkComponent