import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'

function page() {
  return (
    <div className='w-screen flex flex-col items-center gap-5 mt-20 '>
        <div className='w-5/6 h-5/6 mt-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src="/person.png" alt="na" width={1000} height={1000} className='w-1/5 rounded-full'></Image>
            <div className='w-5/6 h-full p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div>
                <h2 className='text-neutral-500 font-semibold'>Name: <span className='text-black'>{blogContent.brand}</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>URL 1 : <span className='text-black'>demo.ig.com</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>URL 2 : <span className='text-black'>demo.utube.com</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>Phone No : <span className='text-black'>+91 ----- -----</span>
                </h2>
                <h2 className='text-neutral-500 font-semibold'>Category : <span className='text-black'>music</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <div className='w-full lg:w-fit h-full p-5 bg-gray-600 text-md text-neutral-300 font-semibold rounded-xl'>Balance : 
                <br />
                <span className='w-fit text-white text-4xl'>196$</span>
                </div>
                <Link href={"Brand/newpost"}>
                  <div className='w-full h-full p-12 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-5xl text-neutral-300 font-light rounded-xl '>+</div>
                </Link>
              </div>
            </div>  
        </div>
        <div className='w-2/3 flex flex-wrap gap-2 lg:my-10'>
          <Card blogContent={blogContent}/>
          <Card blogContent={blogContent}/>
          <Card blogContent={blogContent}/>
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