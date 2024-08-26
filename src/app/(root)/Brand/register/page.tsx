"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  WalletMultiButton,
  WalletDisconnectButton
} from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";

function page() {
  const { publicKey, signMessage } = useWallet();
  const [data, setData] = useState({
    name: "",
    address: "",
    officialUrl: "",
    category: "",
    password: ""
  })
  let ele ;
  const handleInput = (e: any) => {
    ele = e.target;
    // console.log(ele.category);
    setData({
      ...data,
      [ele.name]: ele.value
    })
  };
  const handleSubmit = async (e: any) => {
    // console.log("Form submitted - ",e);
    e.preventDefault();
    if (!publicKey) {
      return;
    }
    const message = new TextEncoder().encode("Sign into easyPROMO");
    const signature = await signMessage?.(message);
    console.log(signature);
    console.log(publicKey?.toString());
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand/signin`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          publicKey: publicKey?.toString(),
          signature,
        })
      });
      if(response.ok){
        setData({
          name: "",
          address: "",
          officialUrl: "",
          category: "",
          password: ""
        })
        const data = await response.json();
        console.log("response - ",data);
        localStorage.setItem('jwtToken',data.token);
      }
    } catch (error) {
      console.error("Some Error In Fetch",error);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Welcome to <span>easyPROMO</span>
        </h2>
        <p className="text-md font-semibold max-w-sm mt-2 text-violet-700">
            Signin As A BRAND
        </p>
        <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
            star(*) marked fields are mandatory to fill
        </p>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col items-end md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
                <Label htmlFor="name">Name*</Label>
                <Input name="name" onChange={handleInput} value={data.name} id="name" placeholder="name" type="text" />
            </LabelInputContainer>
            <div className="w-4/5">
              {
                publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />
              }
            </div>
            </div>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="officialUrl">Official URL*</Label>
            <Input name="officialUrl" onChange={handleInput} value={data.officialUrl} id="url1" placeholder="example-brand.com" type="url" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="category">Category*</Label>
            <select name="category" onChange={handleInput} value={data.category} id="category" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
              group-hover/input:shadow-none transition duration-400
              ">
              <option disabled value="">Select a Catagory</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Beauty">Beauty</option>
              <option value="Fitness">Fitness</option>
              <option value="Tech">Tech</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Gaming">Gaming</option>
              <option value="Educational">Educational</option>
              <option value="Parenting">Parenting</option>
            </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input name="password" onChange={handleInput} value={data.password} id="password" placeholder="••• •••" type="password" />
            </LabelInputContainer>
            <Link href="/Brand">
              <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              >
              Register &rarr;
              <BottomGradient />
              </button>
            </Link>
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

export default page