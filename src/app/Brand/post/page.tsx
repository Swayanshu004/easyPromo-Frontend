import React from 'react'
import Image from 'next/image'
import Request from '@/components/Request'

function page() {
  return (
    <div className='w-screen flex flex-col items-center gap-5 mt-20 '>
        <div className='w-5/6 h-auto my-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src="/startframe__xspkedg7rsiu_xlarge.jpg" alt="na" width={1000} height={1000} className='rounded-3xl w-5/6 lg:w-1/4 border-8 border-violet-700'></Image>
            <div className='w-5/6 h-auto p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div className='w-auto'>
                <h2 className='text-neutral-950 font-bold'>Title: <span className='text-violet-700 font-semibold'>Apple Smart-Watch Eith Sports Mode</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>URL : <span className='text-violet-700 font-semibold'>demo.product.com</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Category : <span className='text-violet-700 font-semibold'>Tech</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Brand : <span className='text-violet-700 font-semibold'>Apple</span>
                </h2>
                <h2 className='text-neutral-950 font-bold w-5/6'>Description : <span className='text-violet-700 font-semibold'>dol dolor,or,consectetur adipisicing elit. recusandae voluptatum? dolor iste aperiam non modi natus tenetur !!</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>ContentType : <span className='text-violet-700 font-semibold'>Long</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>CreatorType : <span className='text-violet-700 font-semibold'>ADVANCE</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Auto Accept : <span className='text-violet-700 font-semibold'>ON</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <div className='w-full min-w-32 lg:w-fit h-full p-5 bg-violet-700 text-md text-neutral-300 font-semibold rounded-xl'>PricePoll : 
                <br />
                <span className='text-white text-4xl '>50 $</span>
                </div>
              </div>
            </div>  
        </div>
        <div className='w-screen flex flex-col items-center'>
            <Request />
            <Request />
            <Request />
            <Request />
        </div>
    </div>
  )
}

export default page