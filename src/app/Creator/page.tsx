"use client";
import React, { useEffect, useState } from 'react'
import CardCreator from '@/components/CardCreator';
require('dotenv').config()
import axios from 'axios';

function page() {
  const [apidata, setApidata] = useState([]);
  
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/allpost`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => {
      console.log(".then reached - - - - - - - -");    
      setApidata(res.data)}    
    )
    .catch(err => console.error(err));
  },[])
  console.log(" - - ",apidata)
  return (
    <div className='w-screen my-20'>
        <div className='w-full flex justify-center flex-wrap gap-3 lg:my-10'>
        {apidata.map(blogContent => (
          <CardCreator key={blogContent._id} blogContent={blogContent}/>
        ))}
        </div>
    </div>
  )
}

export default page