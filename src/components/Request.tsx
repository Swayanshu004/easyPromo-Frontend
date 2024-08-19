import React from 'react'
import Link from 'next/link'

function Request() {
    const req = {
        index: 1,
        Note: "Hii I'm a ig Creator.",
        CreatedBy: "Swaynshu",
    }
  return (
    <div className='w-5/6 h-auto my-3 py-2 rounded-xl bg-violet-300 flex items-center justify-between'>
        <h3 className='text-violet-700 font-bold w-1/6 text-center'>{req.index}.</h3>
        <h3 className='text-violet-700 font-bold w-2/6'>{req.Note}</h3>
        <Link href={"/Creator/profile"} className='w-1/6 text-violet-700 hover:text-violet-950'>
            <h3 className=' font-bold w-full'>{req.CreatedBy}</h3>
        </Link>
        <div className='w-2/6 flex items-center justify-around'>
            <Link href={"/"} className='w-1/3'>
                <div className='w-full bg-red-500 rounded-2xl text-center py-1'>x</div>
            </Link>
            <Link href={"/"} className='w-1/3'>
                <div className='w-full bg-green-500 rounded-2xl text-center py-1'>✔</div>
            </Link>
        </div>
    </div>
  )
}

export default Request