"use client"

import dynamic from "next/dynamic"

const ThemeToggler = dynamic(()=>import('@/components/ThemeToggler'))
const page = () => {
  return (
    <div className=" flex flex-col min-h-screen w-full justify-center items-center ">
      <ThemeToggler/>
    </div>
  )
}

export default page
