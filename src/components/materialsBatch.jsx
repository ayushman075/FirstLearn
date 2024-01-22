import React, {useState,useEffect} from 'react'
import {Collapse} from 'react-collapse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BatchMaterial} from './batchMaterial';
import BatchAnnouncement from './batchAnnouncement';

import AssignmentUploader from './assignmentUploader';
import { IoMdClose } from "react-icons/io";


const MaterialsBatch = () => {
const [isAnnouncementSubmitActive,setisAnnouncementSubmitActive]=useState(false);
const [announcement,setAnnouncement]=useState("");
const [announcements,setAnnouncements]=useState([]);
const [materials,setMaterials]=useState([]);
const [isMaterialAddVisible,setIsMaterialAddVisible]=useState(false);




const announcementChangeHandler=(e)=>{
setAnnouncement(e.target.value);

if(announcement!==null){setisAnnouncementSubmitActive(true)}

if(isAnnouncementSubmitActive===true && e.target.value===""){
setisAnnouncementSubmitActive(false);
}

}

const submitAnnouncement=(e)=>{
  e.preventDefault();
 
  setAnnouncements((prev)=>[...prev,{
    Announcement:announcement,
    announcedAt:"7/1/2024 10:00"
  }]);
 
  toast.success("Announcement Submitted !!",{
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


useEffect(()=>{
setMaterials([
  {
    heading:"Heading 1",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageAttachment:[
      {
        link:"https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image1"
      },
      {
        link:"https://plus.unsplash.com/premium_photo-1664546293940-95fb53a13646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image2"
      },
      {
        link:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image3"
      }
  ],
    videoAttachment:[
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test5.mp4?updatedAt=1704387157299",
        id:"video1"
      },
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test7.mp4?updatedAt=1704387208633",
        id:"video2"
      }
    ],
    documentAttachment:[],
    linkAttackment:"www.wikipedia.com",
    postedAt:"1/1/2024 9:24 AM"

  },
  {
    heading:"Heading 2",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageAttachment:[
      {
        link:"https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image1"
      },
      {
        link:"https://plus.unsplash.com/premium_photo-1664546293940-95fb53a13646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image2"
      },
      {
        link:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image3"
      }
    ],
    videoAttachment:[
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test5.mp4?updatedAt=1704387157299",
        id:"video3"
      },
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test7.mp4?updatedAt=1704387208633",
        id:"video4"
      }
    ],
    documentAttachment:[],
    linkAttackment:"www.wikipedia.com",
    postedAt:"2/1/2024"

  },
  {
    heading:"Heading 3",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageAttachment:[
      {
        link:"https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image1"
      },
      {
        link:"https://plus.unsplash.com/premium_photo-1664546293940-95fb53a13646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image2"
      },
      {
        link:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image3"
      }
    ],
    videoAttachment:[
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test5.mp4?updatedAt=1704387157299",
        id:"video5"
      },
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test7.mp4?updatedAt=1704387208633",
        id:"video6"
      }
    ],
    documentAttachment:[],
    linkAttackment:"www.wikipedia.com",
    postedAt:"3/1/2024"

  },
  {
    heading:"Heading 4",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageAttachment:[
      {
        link:"https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image1"
      },
      {
        link:"https://plus.unsplash.com/premium_photo-1664546293940-95fb53a13646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image2"
      },
      {
        link:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
        alt:"image3"
      }
    ],
    videoAttachment:[
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test5.mp4?updatedAt=1704387157299",
        id:"video7"
      },
      {
        link:"https://ik.imagekit.io/z0jh3exz9/test7.mp4?updatedAt=1704387208633",
        id:"video8"
      }
    ],
    documentAttachment:[],
    linkAttackment:"www.wikipedia.com",
    postedAt:"4/1/2024"

  }
]
)

},[])

useEffect(()=>{
  setAnnouncements([{
    Announcement:"Announcement 1",
    announcedAt:"1/1/2024 9:20",
  },
  {
    Announcement:"Announcement 2",
    announcedAt:"2/1/2024 19:20",
  },

])

},[])

const handleAddMaterialClick=()=>{
  setIsMaterialAddVisible((prev)=>!prev);
}




  return (
    <div className='text-white w-full border border-yellow-400 h-4/5'>
      <ToastContainer />
      
    <div className=' flex flex-wrap flex-row w-full '>
            <form className='md:float-left md:w-3/5  md:mx-5 md:my-5 md:px-2 md:py-2 max-sm:mx-2 max-sm:my-2 max-sm:w-full '>
              <div className='border flex-row rounded-md h-12 px-3 border-yellow-100'>
            <input type='text' value={announcement} onChange={(e)=>{announcementChangeHandler(e)}} placeholder='Make an Announcement' className='text-xl bg-slate-900 py-2 float-start max-sm:w-3/5 md:w-1/2  outline-none lg:w-4/5'></input>
            {isAnnouncementSubmitActive&&
            <input type='submit' onClick={submitAnnouncement} className='bg-slate-900 hover:bg-orange-400 active:border-none hover:text-black px-3 my-0.5 py-1.5 rounded-xl text-center text-xl '></input>
            }
            </div>
            </form>
            <div className=' m-auto flex w-1/4'>
           
           <button className='m-auto p-3 rounded-xl hover:text-black text-l hover:bg-orange-400' onClick={handleAddMaterialClick}>{isMaterialAddVisible?<IoMdClose />:"Add Material"}</button>
           
            </div>
        </div>
        <Collapse isOpened={isMaterialAddVisible}>
<AssignmentUploader type="Material"/>
</Collapse>
        <div>
        
          {
            announcements.map((body)=>
            {
              return(
                <BatchAnnouncement announcement={body}/>
              )
            })
          }
      </div>
      
        <div className='w-full flex justify-center flex-wrap'>
          {
            materials.map((material)=>{
              return(
              <BatchMaterial  materialDetails={material}/>
              )
            })
          }
  
       
        </div>
        
    </div>
  )
}

export default MaterialsBatch