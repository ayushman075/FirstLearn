import React from 'react'
import { Topbar } from '../components/topbar'
import BatchDetailedView from '../middleware/batchDetailedView'

const Batch = (batchname) => {
  return (
    <>
   <Topbar/>
   <BatchDetailedView batchname={batchname}/>
   </>
  )
}

export default Batch