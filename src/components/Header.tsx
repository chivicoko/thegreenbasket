"use client";

import Image from 'next/image';
import Navbar from './navbar/Navbar';
import useScrollVisibility from '@/hooks/useScrollVisibility';
import { Button } from './ui/button';

const Header = () => {
  const isVisible = useScrollVisibility();

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('productsContent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar firstDivClasses={`transition-all duration-300 ease-in-out bg-zinc-50 text-white ${isVisible ? "sticky top-0 left-0 right-0 z-50" : "bg-white py-2 px-[7px] md:py-4 md:px-6"}`} secondDivClasses={`transition-all duration-300 ease-in-out flex items-center justify-between gap-2 ${isVisible ? "p-4 px-[7px] sticky top-0 left-0 right-0 z-50 bg-primary md:py-4 md:px-16 shadow-md" : "md:p-4 rounded-md md:rounded-lg px-[7px] py-3 bg-primary"}`}/>

      <header className="bennetCurve text-white bg-zinc-50 xl:h-[70vh] mb-6 px-2 md:px-6">
        <div className="relative text-white bg-primary mb-14 py-6 md:py-auto px-1 md:px-4 h-full rounded-lg flex flex-col lg:flex-row items-center justify-between bg-[url('/images/bgHeader.jpeg')] bg-cove bg-cente">          
          <div className='bg-primary/95 absolute inset-0 rounded-lg'></div>

          <div className="relative z-10 lg:w-2/3 text self-start px-4 md:pl-14 lg:pl-20 text-gray-950">
            <h2 className='text-4xl text-white md:text-5xl font-semibold xl:font-bold mt-4 md:mt-20 mb-2 md:mb-4'>The store, at your doorstep today.</h2>
            <p className='w-full md:w-2/3 text-lg text-white md:text-2xl'>Get organic products&apos; and sustainably sourced groceries&apos; delivery at up to <em>4%</em> discount.</p>
            
            <Button 
              onClick={handleScroll} 
              className="flex items-center gap-3 bg-secondary hover:bg-secondary_hover mt-4 md:mt-16 mb-4 font-bold rounded-xl text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md"
            >
              Shop now
            </Button>
          </div>
          <div className="relative z-10 lg:w-1/3 flex justify-start mb-4 lg:mb-auto">
            <div className="relative w-72 h-72 md:w-96 md:h-96 -rotate-6 justify-self-start">
              <Image
                src='/images/groceryCart.png'
                alt="groceryCart preview image"
                fill
                className="object-cover img1"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
