import React, {useState} from 'react'
import AttendanceBatches from '../components/attendanceBatches';
import MaterialsBatch from '../components/materialsBatch';
import BatchAssignment from '../components/batchAssignment';


const BatchDetailedView = (batchname) => {
const [isAttendanceActive,setIsAttendanceActive]=useState(true);
const [isMaterialActive,setIsMaterialActive]=useState(false);
const [isAssignmentActive,setIsAssignmentActive]=useState(false);
const [isDiscussionActive,setIsDiscussionActive]=useState(false);

const tabChange=(tabname)=>{
if(tabname==="Attendance"){
if(!isAttendanceActive){
    setIsAttendanceActive(!isAttendanceActive);
    isMaterialActive?setIsMaterialActive(!isMaterialActive):setIsMaterialActive(isMaterialActive);
    isAssignmentActive?setIsAssignmentActive(!isAssignmentActive):setIsAssignmentActive(isAssignmentActive);
    isDiscussionActive?setIsDiscussionActive(!isDiscussionActive):setIsDiscussionActive(isDiscussionActive);
}
}
else if(tabname==="Material"){
    if(!isMaterialActive){
        setIsMaterialActive(!isMaterialActive);
        isAttendanceActive?setIsAttendanceActive(!isAttendanceActive):setIsAttendanceActive(isAttendanceActive);
        isAssignmentActive?setIsAssignmentActive(!isAssignmentActive):setIsAssignmentActive(isAssignmentActive);
        isDiscussionActive?setIsDiscussionActive(!isDiscussionActive):setIsDiscussionActive(isDiscussionActive);
    }
}
else if(tabname==="Assignment"){
    if(!isAssignmentActive){
        setIsAssignmentActive(!isAssignmentActive);
        isAttendanceActive?setIsAttendanceActive(!isAttendanceActive):setIsAttendanceActive(isAttendanceActive);
        isMaterialActive?setIsMaterialActive(!isMaterialActive):setIsMaterialActive(isMaterialActive);
        isDiscussionActive?setIsDiscussionActive(!isDiscussionActive):setIsDiscussionActive(isDiscussionActive);
    }
}
else if(tabname==="Discussion"){
    if(!isDiscussionActive){
        setIsDiscussionActive(!isDiscussionActive);
        isAttendanceActive?setIsAttendanceActive(!isAttendanceActive):setIsAttendanceActive(isAttendanceActive);
        isAssignmentActive?setIsAssignmentActive(!isAssignmentActive):setIsAssignmentActive(isAssignmentActive);
        isMaterialActive?setIsMaterialActive(!isMaterialActive):setIsMaterialActive(isMaterialActive);
    }
}
}
  return (
    <>
    <div className="w-5/6 m-auto md:my-10">
    <div className='flex flex-row w-full h-12  bg-yellow-400 text-black max-sm:mt-5' >
<div className='sm:flex sm:w-3/4 sm:py-1 sm:px-5 sm:float-left max-sm:flex max-sm:overflow-auto max-sm:mr-5'>
    <button onClick={()=>{tabChange("Attendance")}} className={ isAttendanceActive? `bg-orange-400 mx-1 px-4 rounded-xl font-semibold` : `mx-1 px-4 rounded-xl font-semibold hover:bg-orange-400`} >Attendance</button>
    <button onClick={()=>{tabChange("Material")}} className={ isMaterialActive? `bg-orange-400 mx-1 px-4 rounded-xl font-semibold` : `mx-1 px-4 rounded-xl font-semibold hover:bg-orange-400`} >Materials</button>
    <button onClick={()=>{tabChange("Assignment")}} className={ isAssignmentActive? `bg-orange-400 mx-1 px-4 rounded-xl font-semibold` : `mx-1 px-4 rounded-xl font-semibold hover:bg-orange-400`} >Assignment</button>
    <button onClick={()=>{tabChange("Discussion")}} className={ isDiscussionActive? `bg-orange-400 mx-1 px-4 rounded-xl font-semibold` : `mx-1 px-4 rounded-xl font-semibold hover:bg-orange-400`} >Discussion</button>
</div>
<div className="w-1/4 m-auto float-right"> 
    <select className='lg:max-w-44 md:max-w-36 bg-yellow-200 sm:max-w-20 max-w-16 mr-2'>
        <option>{"B. Tech Electrical 3rd Sem"}</option>
        <option>{"B. Tech Electrical 4rd Sem"}</option>
    </select>
</div>
    </div>
   
    {isAttendanceActive?<AttendanceBatches/>:<></>}
    {isMaterialActive?<MaterialsBatch/>:<></>}
    {isAssignmentActive?<BatchAssignment/>:<></>}
    </div>
    

    </>
  )
}

export default BatchDetailedView