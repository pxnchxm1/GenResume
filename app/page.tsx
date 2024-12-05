"use client"
import dynamic from "next/dynamic"

const ThemeToggler = dynamic(()=>import('@/components/ThemeToggler'))
const Navbar = dynamic(()=>import('@/components/Navbar'))
const page = () => {
  return (
    <div className=" flex flex-col min-h-screen w-full justify-between items-center dark:bg-slate-950">
      <Navbar/>
      <div>Include Home</div>
      <div>Include footer</div>
    </div>
  )
}

export default page
