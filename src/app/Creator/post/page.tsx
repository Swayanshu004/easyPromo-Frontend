"use client"
import React from 'react'
import Image from 'next/image'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function page() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted - ",e);
    };
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
        <form className="mb-10 lg:mb-36" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="note">Note*</Label>
            <Input id="note" placeholder="example-ig.com" type="text" />
            </LabelInputContainer>

            <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            >
            Register &rarr;
            <BottomGradient />
            </button>
        </form>
        </div>
    </div>
  )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-violet-700 to-transparent" />
      </>
    );
};
const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
};

export default page;