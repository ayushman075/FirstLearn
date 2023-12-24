import React from "react";
import { useState } from 'react';

export const Batches=({batchname,description,lastOpenedOn})=>{


    return(
 <>
 <div className='bg-black m-10 w-80 h-64 rounded-2xl'>
    <h1 className='text-white text-2xl p-5'>{batchname}</h1>
    <p className="text-white p-3 h-1/2 overflow-hidden">Description :- 
    {description}
    </p>
    <h2 className="text-white m-5 pb-5">Last opened on :- {lastOpenedOn}</h2>
 </div>
 </>   
)
}

