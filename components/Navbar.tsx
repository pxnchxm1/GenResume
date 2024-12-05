"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Button } from './ui/button';


const ThemeToggler = dynamic(() => import('@/components/ThemeToggler'))
const AppLogo = dynamic(() => import('@/components/AppLogo'))

const Navbar = () => {
    const [menu,setMenu] = useState<boolean>(false);
    return (
        <div className='px-4 py-2 flex flex-row items-center w-full justify-between'>
            <AppLogo/>
            <div className='hidden md:flex flex-row gap-2 justify-between items-center'>
                <ThemeToggler/>
                <Button> Login </Button>
            </div>
            {/* for mobile screen */}
            <div className='md:hidden'>
                {!menu && <CgMenuGridO onClick={()=>setMenu((prev)=>!prev)} className='text-cyan-600 '/>}
                {menu && <IoClose onClick={()=>setMenu((prev)=>!prev)} className='text-cyan-600' />}
                {menu && 
                    <section className='absolute top-14 right-4 p-2 gap-2 bg-white dark:bg-slate-900 shadow-sm shadow-cyan-600
                                        flex flex-col justify-center items-center'>
                        <ThemeToggler/>
                        <Button>Login</Button>

                    </section>
                }
                

            </div>
        </div>
    )
}

export default Navbar
