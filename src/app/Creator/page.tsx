"use client"
import React, { useState } from 'react'
import Card from '@/components/Card';

function page() {
    const [brand, setBrand] = useState("apple - samsung - ");
    const blogContent = {
        brand: "apple",
        title: "Amazing Watch With Sports Mode",
        image: "/startframe__xspkedg7rsiu_xlarge.jpg",
        price: 50
      };
      
  return (
    <div className='w-screen my-20'>
        <div className='w-full flex justify-center flex-wrap gap-3 lg:my-10'>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        <Card blogContent={blogContent}/>
        </div>
    </div>
  )
}

export default page