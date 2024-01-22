import React, { useState } from 'react'
import assignmentData from '../assets/data/assignmets'

const AssignmentList = () => {
    const [assignmentDatas,setAssignmentDatas]=useState(assignmentData);

    
  return (
    <div>
        <h1 className='text-2xl font-bold'>Assignments</h1>
        {
            assignmentDatas.map((data)=>{
                return(
                    <div className='bg-black my-5 p-5 w-1/2 rounded-xl max-sm:overflow-scroll  max-sm:w-5/6 m-auto'>        
                        <div className='flex justify-center'>
                         <h1 className='text-xl font-bold'>{data.heading}</h1>
                         <h1 className='mt-2 mx-5 text-sm'>{data.deadline}</h1>
                         
                         </div>
                         <p className='text-xl'>{data.description}</p>
</div>

                )
            })
        }

    </div>
  )
}

export default AssignmentList