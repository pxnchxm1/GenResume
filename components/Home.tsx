'use client'
import { FaCheck } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row justify-center items-center p-6 mt-6 bg-gradient-to-br hover:bg-gradient-to-r from-slate-900 dark:from-cyan-800 dark:to-slate-900 to-cyan-800  ">
        <section className="flex flex-col justify-center items-start gap-6">
            <div className="text-xl md:text-3xl lg:text-4xl text-white font-bold">
                Craft Your Future with the  
                <span className="text-cyan-600"> Perfect </span>
                Resume
            </div>
            <section className="lg:hidden ">
                <img src='/resume.png' alt="resume" className="h-52 w-52 p-2"></img>
            </section>
            <section className="flex  flex-col gap-2 items-start justify-start text-[0.7rem] md:text-[0.85rem]  font-normalhover:bg-gradient-to-r bg-gradient-to-l from-slate-800 via-gray-200 to-cyan-600 dark:to-white bg-clip-text text-transparent">
                    <div className="gap-2 flex flex-row items-center justify-center ">
                        <FaCheck className="text-green-700"/><div>Build the Resume That Opens Doors.</div>
                    </div>
                    <div className="gap-2 flex flex-row items-center justify-center ">
                        <FaCheck className="text-green-700"/><div>Your Dream Job Starts Here—Create the Perfect Resume.</div>
                    </div>
                    <div className="gap-2 flex flex-row items-center justify-center ">
                        <FaCheck className="text-green-700"/><div>Transform Your Skills into Opportunities with a Tailored Resume.</div>
                    </div>
                    <div className="gap-2 flex flex-row items-center justify-center">
                        <FaCheck className="text-green-700"/><div>Get Noticed with a Resume That Speaks Volumes.</div>
                    </div>

            </section>
        </section>

        <section className="hidden lg:flex ">
            <img src='/resume.png' alt="resume" className="h-80 w-96 p-2"></img>
        </section>
      
    </div>
  )
}

export default Home

{/* "Craft Your Future with the Perfect Resume."
This phrase emphasizes the app's role in helping users create a resume that sets them up for success. It has a motivational feel and suggests that the resume you build with the app can have a lasting impact on the user's career.

If you want to try a few variations, here are some more ideas:

"Build the Resume That Opens Doors."
"Your Dream Job Starts Here—Create the Perfect Resume."
"Transform Your Skills into Opportunities with a Tailored Resume."
"Your Career Journey Begins with the Right Resume."
"Get Noticed with a Resume That Speaks Volumes. */}