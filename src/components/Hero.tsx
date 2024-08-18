import React from 'react'
import Link from 'next/link'
import WordRotate from './magicui/word-rotate'
import Particles from './magicui/particles'
import ShimmerButton from './magicui/shimmer-button'

function Hero() {
    return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"ffffff"}
        refresh
        />
        <h2 className='font-bold text-8xl my-10'>Find, Connect, Promote</h2>
        <h2 className='text-violet-400 text-6xl my-5'>The Ultimate Platform for </h2>
        <WordRotate
        className="text-7xl font-bold text-violet-700"
        words={["Influencers", "Brands"]}
        />
        <div className='flex flex-col md:flex-row gap-5'>
            <Link href={"/Creator/register"}>        
                <ShimmerButton 
                className="shadow-2xl mt-5 cursor-auto">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Register Creator
                    </span>
                </ShimmerButton>
            </Link>
            <Link href={"/Brand/register"}>        
                <ShimmerButton 
                className="shadow-2xl mt-5 cursor-auto">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Register Brand
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    </div>
  )
}

export default Hero