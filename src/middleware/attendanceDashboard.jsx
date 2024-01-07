import React, { useState } from 'react'
import DashboardAttendanceBarGraph from '../components/dashboardAttendanceBarGraph'



const AttendanceDashboard = () => {

const AttendanceData=[
  {
    id:1,
    batch:"2026 3rd Sem",
    attendance:"50",
    noOfClasses:"12"
  },
  {
    id:2,
    batch:"2027 1st Sem",
    attendance:"60",
    noOfClasses:"10"
  },
  {
    id:3,
    batch:"2025 5th Sem",
    attendance:"30",
    noOfClasses:"12"
  },
  {
    id:4,
    batch:"2024 7th Sem",
    attendance:"40",
    noOfClasses:"8"
  }
]

const [attendanceData,setAttendanceData]=useState({
  labels: AttendanceData.map((data)=>data.batch),
  datasets: [{
    label:"Attendance",
    data:AttendanceData.map((data)=>data.attendance),
    backgroundColor:["yellow","red","orange","pink"]

  }]
});


  return (
    <>
    
    <div className='text-white flex flex-col  md:float-left w-full md:w-1/2 md:h-96 h-fit px-10 rounded-xl'>
<div>
    <h1 className='text-3xl float-left md:p-0 p-5'>Attendance</h1>
    </div>
    <div className='bg-black w-full md:h-80 h-fit md:mt-6 mt-4 rounded-xl p-5 attendanceChart' >
<DashboardAttendanceBarGraph chartData={attendanceData}/>
    </div>
    </div>
    </>
  )
}

export default AttendanceDashboard