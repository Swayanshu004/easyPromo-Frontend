"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Request from '@/components/Request';
import axios from 'axios';
import RequestCreator from '@/components/RequestCreator';

axios.defaults.withCredentials = true; 
function page() {
  // @ts-ignore
  const [apidata1, setApidata1] = useState<any>({});
  const [apidata2, setApidata2] = useState([]);
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/profile`, {  
      headers: { 
        "authorization" : `Bearer ${localStorage.getItem("jwtToken")}`;
      }
    })
    .then(res => {
      let creatorDetails = {};
      // console.log("reached .then  - - - - - - - -");
      const data = res.data; 
      creatorDetails = data.creatorDetails[0];
      setApidata1(creatorDetails);
      setApidata2(data.requestFromCreator);
    })
    .catch(err => console.error(err));
  },[])
  return (
    <div className='w-screen flex flex-col justify-center items-center gap-5 mt-20 '>
        <div className='w-5/6 h-5/6 mt-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src="/person.png" alt="na" width={1000} height={1000} className='w-1/5 rounded-full'></Image>
            <div className='w-5/6 h-full p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div>
                <h2 className='text-neutral-500 font-semibold'>Name: <span className='text-black'>{apidata1.name}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>URL 1 : <span className='text-black'>{apidata1.instagramUrl}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>URL 2 : <span className='text-black'>{apidata1.youtubeUrl}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>Phone No : <span className='text-black'>+91 {apidata1.phoneNo}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>Category : <span className='text-black'>{apidata1.category}</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <div className='w-full lg:w-fit h-full p-5 bg-gray-600 text-md text-neutral-300 font-semibold rounded-xl'>Pending Amount : 
                <br />
                <span className='text-white text-4xl'>{apidata1.pendingAmount} SOL</span>
                </div>
                <div className='w-full lg:w-fit h-full p-5 bg-gray-600 text-md text-neutral-300 font-semibold rounded-xl'>Balance : 
                <br />
                <span className='text-white text-4xl'>{apidata1.balance} SOL</span>
                <br />
                </div>
              </div>
            </div>  
        </div>
        <Link href={"/Creator"}><button className='bottom-4 bg-green-600 px-5 py-2 rounded-lg mt-5 hover:bg-neutral-900'>ALLPOST</button></Link>
        <div className='w-2/3 flex items-center justify-center'>
        {
          apidata2.length === 0 ? 
            <p className='w-full text-center bg-neutral-700 font-semibold text-xl text-violet-300 my-10 py-5 rounded-xl'>no request</p> :
            <>
              {apidata2.map((content:any) => (
                <RequestCreator key={content._id} data={content}/>
              ))}
            </>
        }
        </div>
    </div>
  )
}

const blogContent = {
  brand: "apple",
  title: "Amazing Watch With Sports Mode",
  image: "/startframe__xspkedg7rsiu_xlarge.jpg",
  price: 50
};

export default page
