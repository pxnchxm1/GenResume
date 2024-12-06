'use client'
import dynamic from 'next/dynamic';
import { VscDebugBreakpointData } from "react-icons/vsc";


const BuildCV = dynamic(()=> import('@/components/BuildCv'))
const Home = () => {

  

  return (
    
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className="flex flex-col w-full lg:flex-row justify-center items-center p-6 mt-4  ">
                <section className="flex flex-col justify-center items-start gap-6">
                    <div className="text-xl md:text-3xl lg:text-4xl  font-bold">
                        Craft Your Future with the  
                        <span className="text-cyan-600"> Perfect </span>
                        Resume
                    </div>
                    <section className="lg:hidden ">
                        <img src='/resume.png' alt="resume" className="h-52 w-52 p-2"></img>
                    </section>
                    <section className="flex  flex-col gap-2 items-start justify-start text-[0.8rem] md:text-[0.85rem]  font-normal hover:bg-gradient-to-r bg-gradient-to-l from-slate-800  to-cyan-700 dark:from-cyan-400 dark:to-white bg-clip-text text-transparent">
                            <div className="gap-2 flex flex-row items-center justify-center ">
                                <VscDebugBreakpointData  className="text-cyan-700"/><div>Build the Resume That Opens Doors.</div>
                            </div>
                            <div className="gap-2 flex flex-row items-center justify-center ">
                                <VscDebugBreakpointData  className="text-cyan-700"/><div>Your Dream Job Starts Here—Create the Perfect Resume.</div>
                            </div>
                            <div className="gap-2 flex flex-row items-center justify-center ">
                                <VscDebugBreakpointData  className="text-cyan-700"/><div>Transform Your Skills into Opportunities with a Tailored Resume.</div>
                            </div>
                            <div className="gap-2 flex flex-row items-center justify-center">
                                <VscDebugBreakpointData  className="text-cyan-700"/><div>Get Noticed with a Resume That Speaks Volumes.</div>
                            </div>

                    </section>
                </section>

                <section className="hidden lg:flex ">
                    <img src='/resume.png' alt="resume" className="h-80 w-96 p-2"></img>
                </section>
            
            </div>
            <BuildCV/>

        </div>
    
  )
}

export default Home
