'use client'
import { Button } from "./ui/button"

const BuildCv = () => {

  const descriptions = [
    {
        des : "Quick and easy, All within your browser.",
        imagesrc:"/img1.png"
    },
    {
        des : "Match your skills and interests.",
        imagesrc:"/img2.png"
    },
    {
        des : "land a secure job.",
        imagesrc:"/img3.png"
    },
    {
        des : "In no time with our intuitive builder",
        imagesrc:"/img4.png"
    },
    {
        des : "Highlight your strengths and skills.",
        imagesrc:"/img5.png"
    },
    {
        des :"Craft a resume that showcases your best self in minutes",
        imagesrc:"/img6.png"
    }
    ]
    const logos = [
        {
            logo :'ios.svg',
        },
        {
            logo :'ms.svg',
        },
        {
            logo :'social.png',
        },
        {
            logo :'google.svg',
        },
        {
            logo :'amazon.png',
        },
        {
            logo :'tesla.svg',
        },

    ]
    return (
        <div className='p-4 flex flex-col text-center justify-center items-center gap-2 md:mt-[4rem] md:mb-[4rem]'>
            <div className="p-1 font-extrabold text-xl md:text-3xl xl:text-4xl">Build <span className="text-cyan-600">CV's</span> with ease, all <br/> within your  browser
            </div>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 p-1">
                {
                    descriptions.map((item,index)=>{
                        return (
                            <div key={index} className="flex flex-col justify-center items-center p-2">
                                <img src={item.imagesrc} alt="profiles" className="h-24 w-24"></img>
                                <p className="text-center text-sm md:text-md xl:text-xl text-gray-700 dark:text-gray-400">{item.des}</p>

                            </div>

                        );
                    })
                }

            </section>
           
            <section className="flex flex-col md:flex-row justify-center  items-center md:mt-[4rem] md:mb-[4rem] px-2 md:px-4 xl:px-6">
                <div className="flex flex-col justify-start items-start gap-8 ">
                        <div className="p-1 font-extrabold text-xl md:text-3xl xl:text-4xl text-center md:text-left ">Get <span className="text-cyan-600">hired at</span> Top Companies .<br/>
                            </div>
                            <div className="grid md:hidden grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 w-full">
                                            {logos.map((i,idx)=>{
                                                return (
                                                    <div key={idx}>
                                                        <div className="flex justify-center items-center text-center dark:bg-cyan-950  bg-gray-100 rounded-md p-2">
                                                            <img src={i.logo} alt="logo" className="h-12 w-12"></img>
                                                        </div>
                                                    
                                                    </div>
                                                );
                                            })}

                            </div>
                            <p className="text-justify text-sm md:text-md xl:text-xl text-gray-700 dark:text-gray-400 md:w-[72%] ">
                                    GenResume has helped 20,000+ customers to land a secure job among their interested domains.
                                    Create a professional resume with ease in just a few clicks.
                                    Get a job-ready resume in minutes. No design experience needed.
                                    Start making your resume.
                            </p>
                            <Button className="bg-cyan-700 rounded-full py-2 dark:bg-slate-900 hover:dark:bg-slate-800">Build Resume</Button>

                </div>
                    
                <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {logos.map((i,idx)=>{
                            return (
                                <div key={idx}>
                                    <div className="flex justify-center items-center text-center  p-4 dark:bg-cyan-950  bg-gray-100 rounded-md">
                                        <img src={i.logo} alt="logo" className="h-20 w-20"></img>
                                    </div>
                                
                                </div>
                            );
                        })}

                </div>
                    



            </section>
        </div>
    )
}

export default BuildCv
