import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Card(blogdata: any) {
    // console.log(blogdata.blogContent.ImageUrl);
  return (
    <div className="w-72 mt-5">
      <Link href={`Creator/post/${blogdata.blogContent._id}`}>
        <div className="relative overflow-hidden h-fit rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={blogdata.blogContent.ImageUrl}
              alt="thumbnail"
              width={1000}
              height={1000}
              objectFit='object'
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className="p-4 flex gap-5 items-center justify-between">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {blogdata.blogContent.title}
            </h2>
            <div className="flex flex-row justify-between items-center">
              <div className="relative z-10 flex gap-1 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                {blogdata.blogContent.price}<span> $</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card