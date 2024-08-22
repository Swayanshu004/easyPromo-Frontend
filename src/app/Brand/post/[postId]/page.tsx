"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Request from '@/components/Request'
import axios from 'axios'

function page({params}: {params:{ postId: string};}) {
  const [apidata1, setApidata1] = useState({});
  const [apidata2, setApidata2] = useState([]);
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand/post/${params.postId}`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => {
      let creatorDetails = {};
      // console.log("reached .then  - - - - - - - -");
      const data = res.data; 
      creatorDetails = data.postDetails[0];
      setApidata1(creatorDetails);
      setApidata2(data.allRequest)
    })
    .catch(err => console.error(err));
  },[])
  console.log(apidata1);
  return (
    <div className='w-screen flex flex-col items-center gap-5 mt-20 '>
        <div className='w-5/6 h-auto my-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src={apidata1.ImageUrl} alt="na" width={1000} height={1000} className='rounded-3xl max-h-full w-5/6 lg:w-1/4 border-8 border-violet-700'></Image>
            <div className='w-5/6 h-auto p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div className='w-auto'>
                <h2 className='text-neutral-950 font-bold'>Title: <span className='text-violet-700 font-semibold'>{apidata1.title}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>URL : <span className='text-violet-700 font-semibold'></span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Category : <span className='text-violet-700 font-semibold'>{apidata1.category}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Brand : <span className='text-violet-700 font-semibold'>{apidata1.createdBy}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold w-5/6'>Description : <span className='text-violet-700 font-semibold'>{apidata1.description}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>ContentType : <span className='text-violet-700 font-semibold'>{apidata1.contentType}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>CreatorType : <span className='text-violet-700 font-semibold'>{apidata1.creatorType}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Auto Accept : <span className='text-violet-700 font-semibold'>{apidata1.autoaccept? 'YES' : 'NO'}</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <div className='w-full min-w-32 lg:w-fit h-full p-5 bg-violet-700 text-md text-neutral-300 font-semibold rounded-xl'>PricePoll : 
                <br />
                <span className='text-white text-4xl '>{apidata1.price} $</span>
                </div>
              </div>
            </div>  
        </div>
        <div className='w-screen flex flex-col items-center'>
          {
            apidata2.length === 0 ? 
              <p className='w-full text-center bg-neutral-700 font-semibold text-xl text-violet-300 my-10 py-5 rounded-xl'>no request</p> :
              <>
                {apidata2.map(content => (
                  <Request key={content._id} data={content}/>
                ))}
              </>
          }
        </div>
    </div>
  )
}

export default page