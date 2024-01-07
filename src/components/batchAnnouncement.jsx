import React from 'react'

const BatchAnnouncement = (announcement) => {
    console.log(announcement)
  return (
    <div className='flex bg-slate-950 m-5 p-7 rounded-2xl flex-col flex-wrap text-white'>
<h1 className='text-2xl'>{announcement.announcement.Announcement}</h1>

<p>{announcement.announcement.announcedAt}</p>
    </div>
  )
}

export default BatchAnnouncement