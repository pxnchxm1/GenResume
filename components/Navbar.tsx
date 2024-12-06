"use client"
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Button } from './ui/button';


const ThemeToggler = dynamic(() => import('@/components/ThemeToggler'))
const AppLogo = dynamic(() => import('@/components/AppLogo'))


const Navbar = () => {
    
    const [menu,setMenu] = useState<boolean>(false);
    return (
       
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
        
    )
}

export default Navbar
