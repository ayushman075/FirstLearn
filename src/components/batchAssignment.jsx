import React from 'react'
import AssignmentUploader from './assignmentUploader'
import AssignmentList from './assignmentList'

const BatchAssignment = () => {
  return (
    <div className='text-white  w-full border border-yellow-400 h-4/5'>
        
        <AssignmentUploader type="Assignment"/>
        <AssignmentList/>

    </div>
  )
}

export default BatchAssignment