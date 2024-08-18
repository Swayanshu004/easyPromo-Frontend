import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-screen absolute z-10 px-10 py-5 top-0 flex items-center justify-between bg-gradient-to-b from-neutral-900 to-transparent'>
        <Link href={"/"}>
        <h1  className="text-4xl font-bold text-violet-700">ezPROMO</h1>
        </Link>
        <Link href={"/auto"}>        
            <button className='bg-neutral-300 px-5 py-2 font-bold dark:text-black rounded-3xl w-[130px] hover:bg-violet-700 hover:text-white'>
                Add Wallet
            </button>
        </Link>
    </div>
  )
}

export default Navbar