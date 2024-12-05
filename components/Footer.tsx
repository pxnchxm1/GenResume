'use client'
import dynamic from 'next/dynamic'

const AppLogo = dynamic(()=>import('@/components/AppLogo'))
const Footer = () => {
  return (
    <div className="px-2 py-6 flex flex-col justify-center items-center gap-2 w-full bg-slate-900  text-bg-slate-900 text-cyan-600 hover:text-cyan-500 
                    font-normal text-sm md:text-md xl:text-xl ">
      
      <div>@ copyrights</div>
    </div>
  )
}

export default Footer
