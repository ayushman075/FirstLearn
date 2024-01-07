import React from "react";
import {Topbar} from "../components/topbar";
import { DashboardBatches } from "../middleware/dashboardBatches";
import AttendanceDashboard from "../middleware/attendanceDashboard";
import DiscussionDashboard from "../middleware/discussionDashboard";


export const Dashboard=()=>{
  return(
    <>
    <Topbar/>  
    <DashboardBatches/>
    <AttendanceDashboard/>
    <DiscussionDashboard/>
    </>
  
  )
 
}

 