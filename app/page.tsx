"use client";
import dynamic from "next/dynamic";


// Dynamically import components with client-side rendering
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Home = dynamic(() => import('@/components/Home'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const Page = () => {
  

  return (
    <div className="flex flex-col min-h-screen w-full justify-between items-center dark:bg-slate-950">
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
};

export default Page;
