import React from "react";
import { useState } from 'react';
import { Batches } from "../components/batch";

export const DashboardBatches=()=>{
return(
<>
<div className="py-6 px-10">
<h1 className='text-white text-3xl float-left '>Batches</h1>
<p className='text-white float-right hover:cursor-pointer'>view all</p>
</div>
<div className="w-full md:overflow-x-hidden overflow-x-scroll">
<div className="flex flex-row w-max">
    <Batches batchname={"Batch 1"} lastOpenedOn={"9:08 AM"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 2"} lastOpenedOn={"23/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 3"} lastOpenedOn={"22/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 4"} lastOpenedOn={"21/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 5"} lastOpenedOn={"20/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 6"} lastOpenedOn={"19/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />
    <Batches batchname={"Batch 7"} lastOpenedOn={"18/12/2023"}  description={"This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. This is first class. "} />

</div>
</div>

</>
)
}