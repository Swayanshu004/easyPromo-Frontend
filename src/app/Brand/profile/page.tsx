"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'
import axios from 'axios'

function page() {
  // @ts-ignore
  const [apidata1, setApidata1] = useState({});
  const [apidata2, setApidata2] = useState([]);
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand/profile`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => {
      let brandDetails = {};
      // console.log("reached .then  - - - - - - - -");
      const data = res.data; 
      
      brandDetails = data.brandDetails[0];
      setApidata1(brandDetails);
      setApidata2(data.allPost) 
    })
    .catch(err => console.error(err));
  },[])
  console.log(apidata1);
  
  return (
    <div className='w-screen flex flex-col items-center gap-5 mt-20 '>
        <div className='w-5/6 h-5/6 mt-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src="/BrandLogo.png" alt="na" width={1000} height={1000} className='w-1/5 rounded-full'></Image>
            <div className='w-5/6 h-full p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div>
                <h2 className='text-neutral-500 font-semibold'>Name: <span className='text-black'>{apidata1.name}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>URL 1 : <span className='text-black'>{apidata1.officialUrl}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>category : <span className='text-black'>{apidata1.category}</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <Link href={"Brand/newpost"}>
                  <div className='w-full h-full p-12 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-5xl text-neutral-300 font-light rounded-xl '>+</div>
                </Link>
              </div>
            </div>  
        </div>
        <div className='w-2/3 flex flex-wrap gap-2 lg:my-10'>
        {
          apidata2.length === 0 ? 
          <p className='w-full text-center bg-neutral-700 font-semibold text-xl text-violet-300 my-10 py-5 rounded-xl'>no post</p>:
          <>
          {
            apidata2.map(blogContent => (
              <Card key={blogContent._id} blogContent={blogContent}/>
            ))
          }
          </>
        }
        </div>
    </div>
  )
}

export default page