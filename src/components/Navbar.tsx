"use client"
import React ,{useState, useEffect} from 'react'
import Link from 'next/link'

function Navbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [pathname, setPathname] = useState(window.location.pathname);
  let route = pathname.split('/')
  ;
  useEffect(()=>{
    setCurrentPath(window.location.origin);
    setPathname(window.location.pathname);
  }, [window.location])
  
  return (
    <div className='w-screen fixed z-20 px-10 py-5 top-0 flex items-center justify-between bg-gradient-to-b from-neutral-900 to-transparent'>
        <Link href={"/"}>
        <h1  className="text-4xl font-bold text-violet-700">ezPROMO</h1>
        </Link>
        <Link href={`${currentPath}/${route[1]}/profile`}>        
            <button className='bg-neutral-300 px-5 py-2 font-bold dark:text-black rounded-3xl w-[130px] hover:bg-violet-700 hover:text-white'>
                PROFILE
            </button>
        </Link>
    </div>
  )
}

export default Navbar