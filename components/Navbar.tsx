"use client"
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Button } from './ui/button';


const ThemeToggler = dynamic(() => import('@/components/ThemeToggler'))
const AppLogo = dynamic(() => import('@/components/AppLogo'))


const Navbar = () => {
    const ref = useRef<HTMLDivElement>(null);

    // `useInView` hook to check if the element is in view
    const isInView = useInView(ref, { once: true });
    const [menu,setMenu] = useState<boolean>(false);
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: '100%' }}  // Start off-screen to the right
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : '100%' }}  // Slide in from the right when in view
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="w-full">
                <div className='p-4 flex flex-row items-center w-full justify-between shadow-md dark:shadow-sm dark:shadow-cyan-600'>
                    <AppLogo/>
                    <div className='hidden md:flex flex-row gap-2 justify-between items-center'>
                        <ThemeToggler/>
                        <Link href='login'><Button>Login</Button></Link>
                    </div>
                    {/* for mobile screen */}
                    <div className='md:hidden'>
                        {!menu && <CgMenuGridO onClick={()=>setMenu((prev)=>!prev)} className='text-cyan-600 '/>}
                        {menu && <IoClose onClick={()=>setMenu((prev)=>!prev)} className='text-cyan-600' />}
                        {menu && 
                            <section className='absolute top-14 right-2 p-2 gap-2 bg-white dark:bg-slate-900 shadow-sm shadow-cyan-600
                                                flex flex-col justify-center items-center'>
                                <ThemeToggler/>
                                <Link href='login'><Button>Login</Button></Link>

                            </section>
                        }
                        

                    </div>
                </div>
        </motion.div>
    )
}

export default Navbar
