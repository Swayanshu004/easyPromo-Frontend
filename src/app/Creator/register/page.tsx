"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted - ",e);
};
return (
<div className="w-screen h-screen my-20 flex items-center justify-center">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Welcome to <span>easyPROMO</span>
    </h2>
    <p className="text-md font-semibold max-w-sm mt-2 text-violet-700">
        Signin As A CREATOR
    </p>
    <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
        star(*) marked fields are mandatory to fill
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
            <Label htmlFor="name">Name*</Label>
            <Input id="name" placeholder="name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="address">Address*</Label>
            <Input id="address" placeholder="wallet address" type="text" />
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="url1">Social-Media URL*</Label>
        <Input id="url1" placeholder="example-ig.com" type="url" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="url2">Social-Media URL</Label>
        <Input id="url2" placeholder="example-yt.com" type="url" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="phNo">Phone No.</Label>
        <Input id="phNo" placeholder="+91" type="text" />
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
          <option value="">ans - 1</option>
          <option value="">ans - 2</option>
          <option value="">ans - 3</option>
          <option value="">ans - 4</option>
        </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password*</Label>
        <Input id="password" placeholder="••• •••" type="password" />
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

export default page