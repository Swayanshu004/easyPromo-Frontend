"use client";
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

function page() {
  const [amount, setAmount] = useState(0);
  const [txSignature, setTxSignature] = useState("");
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  async function makePayment() {
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: publicKey!,
            toPubkey: new PublicKey("9Gs68NSs68PPNtKaDYiposrzY3ecyqMvVNrUHXJnJj32"),
            lamports: 10000000,
        })
    );

    const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight }
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendTransaction(transaction, connection, { minContextSlot });

    await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    setTxSignature(signature);
    console.log(signature);
    
  } 
  return (
    <div className="w-screen h-fit my-20 flex items-center justify-center">
    <div className="max-w-5/6 lg:w-2/5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        easyPROMO
      </h2>
      <p className="text-md font-semibold max-w-sm mt-2 text-violet-700">
          Add New Post
      </p>
      <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
          star(*) marked fields are mandatory to fill
      </p>
        <form className="my-8" action="http://localhost:7000/v1/brand/newpost" method='POST' encType="multipart/form-data">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
              <Label htmlFor="title">Title*</Label>
              <Input name="title" id="title" placeholder="title" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
              <Label htmlFor="price">Price*</Label>
              <div className='flex items-center gap-2'>
                <Input onChange={(e) => setAmount(e.target.value)} name="price" id="price" placeholder="0.00" type="number" step={0.001} /><span className='py-2 px-3 rounded-lg border-2 bg-zinc-800 hover:border-violet-700'>Sol</span>
              </div>
          </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
          <Label htmlFor="productUrl">URL*</Label>
          <Input name="productUrl" id="url" placeholder="product-url.com" type="url" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
          <Label htmlFor="ImageUrl">Banner*</Label>
          <Input name="ImageUrl" id="banner" type="file" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
          <Label htmlFor="category">Category*</Label>
          <select name="category" id="category" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
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
          <Label htmlFor="contentType">Type of Content*</Label>
          <select name="contentType" id="category" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400
            ">
            <option disabled value="">NA</option>
            <option value="Long">Long (min 5min long)</option>
            <option value="Short">Short (max 2min long)</option>
          </select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
          <Label htmlFor="creatorType">Type of Creator*</Label>
          <select name="creatorType" id="category" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400
            ">
              <option disabled value="">NA</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advance">Advance</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 flex">
          <label htmlFor="accept">
          <input name="accept" id="accept" type="checkbox" defaultChecked className='mr-2'/>
          Auto accept*
          </label>
          </LabelInputContainer>
          <LabelInputContainer>
              <Label htmlFor="description">Description</Label>
              <Input name="description" id="desc" placeholder="Describe your product" type="text" />
          </LabelInputContainer>

          {
            txSignature ?
            <div className='w-full flex flex-col items-center gap-2 mt-5'>
              <div className='flex'>
              <h3 className='font-semibold text-neutral-200'>txSignature : </h3>  
              <input 
              disabled 
              name="txSignature" 
              id="txSignature" 
              value={txSignature} 
              type="text" 
              className='w-fit text-center bg-transparent text-neutral-500' />
              </div>
              <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-violet-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type='submit'
              >
              Submit &rarr;
              <BottomGradient />
              </button>
            </div> :
            <button
            className=" mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            onClick={makePayment}
            type='button'
            >
            pay {amount} Sol
            <BottomGradient />
            </button>
          }
          
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