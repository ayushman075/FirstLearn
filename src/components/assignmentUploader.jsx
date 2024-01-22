import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {InfinitySpin} from 'react-loader-spinner'
import assignmentData from '../assets/data/assignmets'



const AssignmentUploader = (type) => {

  const [heading,setHeading]=useState("");
  const [description,setDescription]=useState("");
  const [deadline,setDeadline]=useState("");
  const [files,setFiles]=useState([]);
  const [isLoaderVisible,setIsLoaderVisible]=useState(false);

 

 



  const submitAssignment=()=>{

    if(heading=="" || description=="" || deadline==""){
      toast.error("Some fields are empty !!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
    else{

    setIsLoaderVisible(true);



      setTimeout(() => {
  
        setIsLoaderVisible(false);
      }, 8000);


      if(type.type==="Assignment"){

          assignmentData.push({
            "heading":heading,
            "description":description,
            "deadline":deadline
          })

        toast.success("Assignment Uploaded !!",{
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      
        }
    
        if(type.type==="Material"){
    
    
    
          toast.success("Material Uploaded !!",{
            position: "top-center",
            autoClose: 8000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        
          }
    }

}

  return (
    <div className='flex justify-center'>
         
      
     
         <ToastContainer />
        
        <div className='flex flex-col  md:w-1/2'>
          <div className='flex max-sm:flex-col justify-between'>
          <label className='flex-col max-sm:m-1 h-10 my-3 text-xl font-medium p-1 align-middle' name='head'>Heading</label>
          <input className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 rounded-xl h-10 p-2 font-medium text-xl mx-5 my-3 w-full' value={heading}  onChange={((e)=>{setHeading(e.target.value)})} name="head"></input>
          </div>
          <div className='flex max-sm:flex-col justify-between'>
          <label className='flex-col max-sm:m-1 h-10 my-3 text-xl font-medium p-1 align-middle' name='description'>Description</label>
          <input className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 rounded-xl h-10 p-2 font-medium text-xl mx-5 my-3 w-full' value={description}  onChange={((e)=>{setDescription(e.target.value)})} name='description'></input>
         
          </div>
          <div className='flex max-sm:flex-col justify-between'>
           <label className='flex-col max-sm:m-1 h-10 my-3 text-xl font-medium p-1 align-middle'>Deadline</label>
          <input className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 rounded-xl h-10 p-2 font-medium text-xl mx-5 my-3 w-full' value={deadline}  onChange={((e)=>{setDeadline(e.target.value)})} name='deadline' type='date'></input>
          </div>
          <div className='flex max-sm:flex-col justify-between'>
          <input className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 max-sm:mt-5 rounded-xl h-13 p-2 font-medium text-xl mx-5 my-3 w-full' name='attachment' type='file' multiple></input>
          <button className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 rounded-xl max-sm:mt-5 max-sm:mb-5 h-13 p-2 font-medium text-xl mx-5 my-3 w-full'  onClick={submitAssignment} >Submit</button>
          {isLoaderVisible&&
          <InfinitySpin
  visible={true}
  width="150"
  color="#f0dc5b"
  className='bg-gray-700 max-sm:m-auto max-sm:w-3/4 rounded-xl max-sm:mt-5 max-sm:mb-5 h-13 p-2 font-medium text-xl mx-5 my-3 w-full'
  ariaLabel="infinity-spin-loading"

  />}
          </div>
        </div>
    </div>
  )
}

export default AssignmentUploader