import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const DashboardAttendanceBarGraph = ({chartData}) => {
  return (
    <div className=" flex md:h-72 h-fit justify-center " >
    <Bar data={chartData}  />
    </div>
  )
}

export default DashboardAttendanceBarGraph