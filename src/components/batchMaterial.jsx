import React from 'react'

export const BatchMaterial = ({materialDetails}) => {
 
    return (
    <div className='text-white bg-black w-72 m-5 p-5 rounded-xl shadow-lg'>
        <h1 className='text-xl font-bold'>{materialDetails.heading}</h1>
        <p className='text-sm'>{materialDetails.postedAt}</p>
        <p className='h-40 overflow-hidden'>{materialDetails.body}</p>
        <p>{materialDetails.linkAttachment?materialDetails.linkAttachment:""}</p>
         <div className='flex flex-wrap mt-5 justify-center'>
        {
            materialDetails.imageAttachment.map((image)=>{
                if(image!=null){
                return(
                    <img className='m-3' width="100px" src={image.link} alt={image.alt}></img>
                )}
            })
        }
          </div>
        <div className='flex flex-wrap mt-5 justify-center'>
        {
            materialDetails.videoAttachment.map((video)=>{
                if(video!=null){
                return(
                    <video width="100px" className='m-3' id={video.id} autoPlay={true} onClick={(e)=>{
                       
                        if (e.target.paused) 
                        e.target.play(); 
                      else 
                      e.target.pause();
                    }} autoplay  >
<source src={video.link} type="video/mp4"></source>
                    </video>
                )}
            })
        }
        </div> 
              </div>
  )
}

