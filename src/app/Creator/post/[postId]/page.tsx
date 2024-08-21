"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from 'axios';

function page({params}: {params:{ postId: string};}) {
  // @ts-ignore
  const [apidata, setApidata] = useState([]);
  
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/post/${params.postId}`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => {
      console.log(".then reached - - - - - - - -");    
      setApidata(res.data[0])}    
    )
    .catch(err => console.error(err));
  },[])
  // console.log("appdata - ",apidata)

  //form submit
  const [data, setData] = useState({
    note: "",
  })
  let ele ;
  const handleInput = (e: any) => {
    ele = e.target;
    console.log(ele.category);
    setData({
      ...data,
      [ele.name]: ele.value
    })
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("Form submitted - ",e);
    try {
      const response = await fetch(`http://localhost:7000/v1/creator/request/${apidata._id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem('jwtToken')
        },
        body: JSON.stringify(data)
      });
      console.log("response - ",response);
      if(response.ok){
        setData({
          note: ""
        })
        console.log(response);
        
      }
    } catch (error) {
      console.error("Some Error In Fetch",error);
      
    }
  };
  return (
    <div className='w-screen flex flex-col items-center gap-5 mt-20 '>
        <div className='w-5/6 h-auto my-10 lg:h-56 rounded-3xl flex flex-col gap-5 items-center justify-around lg:flex-row'>
            <Image src={apidata.ImageUrl} alt="na" width={1000} height={1000} className='rounded-3xl max-h-full w-5/6 lg:w-1/4 border-8 border-violet-700'></Image>
            <div className='w-5/6 h-auto p-10 text-sm bg-neutral-200 rounded-2xl flex flex-col items-center justify-between lg:items-start lg:flex-row'>
              <div className='w-auto'>
                <h2 className='text-neutral-950 font-bold'>Title: <span className='text-violet-700 font-semibold'>{apidata.title}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>URL : <span className='text-violet-700 font-semibold'></span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Category : <span className='text-violet-700 font-semibold'>{apidata.category}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Brand : <span className='text-violet-700 font-semibold'>{apidata.createdBy}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold w-5/6'>Description : <span className='text-violet-700 font-semibold'>{apidata.description}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>ContentType : <span className='text-violet-700 font-semibold'>{apidata.contentType}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>CreatorType : <span className='text-violet-700 font-semibold'>{apidata.creatorType}</span>
                </h2>
                <h2 className='text-neutral-950 font-bold'>Auto Accept : <span className='text-violet-700 font-semibold'>{apidata.autoaccept? 'YES' : 'NO'}</span>
                </h2>
              </div>
              <div className='w-fit mt-5 lg:mt-0 flex flex-col items-start gap-5 h-full lg:flex-row'>
                <div className='w-full min-w-32 lg:w-fit h-full p-5 bg-violet-700 text-md text-neutral-300 font-semibold rounded-xl'>PricePoll : 
                <br />
                <span className='text-white text-4xl '>{apidata.price} $</span>
                </div>
              </div>
            </div>  
        </div>
        <div className='w-screen flex flex-col items-center'>
        <form className="mb-10 lg:mb-36" onSubmit={handleSubmit} >
            <LabelInputContainer className="mb-4">
            <Label htmlFor="note">Note*</Label>
            <Input
            name= "note"
            onChange={handleInput}
            value={data.note}
            id='note'
            placeholder="add note here" 
            type="text" />
            </LabelInputContainer>

            <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            >
            Request &rarr;
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