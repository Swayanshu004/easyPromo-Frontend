"use client"
import React from 'react'

function RequestCreator(data: any) {
  const apidata = data.data;
  console.log(apidata);
  return (
    <div className='w-full h-auto my-3 py-2 px-5 rounded-xl bg-violet-300 flex items-center justify-around'>
        <h3 className='text-sm text-violet-800 font-bold  px-2'>{apidata.note}</h3>
        <h3 className='text-sm text-violet-800 font-semibold w-2/6'>{apidata.createdBy}</h3>
        <div className='w-1/6'>
        {
          apidata.approved ? 
          <p className='text-md font-semibold'>approved </p>  :
          <p className='text-md font-semibold text-red-600'>not approved Yet</p> 
        }
        </div>
    </div>
  )
}

export default RequestCreator