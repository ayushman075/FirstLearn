import React, { useEffect, useState } from 'react'

const AttendanceBatches = () => {
const [attendancePercentage,setAttendancePercentage]=useState(60);
const [noOfClass,setNoOfClass]=useState(12);
const [attendanceDates,setAttendanceDates]=useState([]);
const [studentAttendanceDatas,setStudentAttendanceDatas]=useState([]);



useEffect(()=>{
    setStudentAttendanceDatas([{
        "studentName":"Abhishek",
        "Date1":true,
        "Date2":false,
    },
    {
        "studentName":"Adarsh",
        "Date1":true,
        "Date2":true,
    },
    {
     "studentName":"Aman",
     "Date1":false,
     "Date2":false,
},
{
    "studentName":"Ayush",
    "Date1":false,
    "Date2":true,
}

])
},[])



useEffect(()=>{
    setAttendanceDates([{"Date":"1/12","Time":"11:00 AM"},{"Date":"5/12","Time":"10:00 AM"},])
},[]);




  return (
    <div className='text-white w-full border border-yellow-400 h-4/5'>
        <div className=' flex flex-row w-full'>
            <div className='px-5 flex flex-row m-auto max-sm:w-fit flex-wrap'>
            <h1 className='mx-5'>Total No. Classes :- {noOfClass}</h1>
            <h1 className='mx-5'>Atendance :- {attendancePercentage}% </h1>
            </div>
            <div className='flex float-right'>
            <button className='px-2 mx-3 rounded-l my-3 hover:bg-yellow-400 hover:text-black py-2'>Add Attendance</button>
            </div>
        </div>
        <div>
            <table className='m-auto my-5'>
                <thead className='border-yellow-400 bg-yellow-300 text-black border-2'>
<th className='border-yellow-400 border-2 px-3 py-1'>Student</th>


    {attendanceDates.map((attendanceDate)=>{
        return(
<th className='border-yellow-400 border-2 px-3 py-1'>{attendanceDate.Date+"  "+attendanceDate.Time}</th>
        )
  
    })}
      
    
   

                </thead>
                <tbody>

    {studentAttendanceDatas.map((studentAttendanceData)=>{
         
        return(
            <tr className='border-yellow-400 border-2 px-3 py-1'>
                
  <td className='border-yellow-400 border-2'>{studentAttendanceData.studentName}</td>
  <td className='border-yellow-400 border-2'>{studentAttendanceData.Date1?"Pre":"Abs"}</td>
  <td className='border-yellow-400 border-2'>{studentAttendanceData.Date2?"Pre":"Abs"}</td>
            </tr>
        )
           
        
    
    })}

                </tbody>
            </table>
        </div>
        
        </div>
  )
}

export default AttendanceBatches