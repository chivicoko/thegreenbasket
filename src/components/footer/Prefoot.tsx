'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import DiscountCard from './DiscountCard';
import ProductsJustForYou from './ProductsJustForYou';
import WeeklyBestSellingProducts from './WeeklyBestSellingProducts';
import ProductsFromDummyJson from '../ProductsFromDummyJson';

const Prefoot = () => {
  const pathName = usePathname();

  return (
    <div className={`${pathName !== '/' ? 'border-b' : ''} ${pathName === '/products/forms' ? 'mt-0' : 'mt-16'} pb-6 bg-[#fffbeb]`}>
      <div className='mt-16 w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-wrap py-16 px-4 lg:px-8 xl:px-20 2xl:px-32'>
        <DiscountCard />
      </div>

      {pathName === '/' ? 
        <ProductsJustForYou />
      : null
      }

      <WeeklyBestSellingProducts />

      <div className="px-4 py-12 lg:px-8 xl:px-20">
        <div
          className="flex-1 relative w-full bg-contain bg-center rounded-3xl shadow-md"
          style={{ backgroundImage: `url('/images/bgHeader3.jpeg')` }}
        >
          <div className={`bg-orange-950 absolute inset-0 bg-opacity-90 rounded-3xl`}></div>
          
          <div className="relative z-10 text-white py-4 sm:py-8 md:py-10 px-4 sm:px-10 lg:px-16 flex justify-between">
            <div className='flex flex-col justify-between gap-2 w-2/3'>
                {/* <p className={`bg-orange-500 py-1 rounded-md w-fit px-3 text-sm`}><DeliveryDiningOutlined/> Membership Card</p> */}
                <h2 className="text-slate-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Stay Home and Get All Your Essentials from Our Market!</h2>
                <p className="text-slate-300 mt-12">Download the app from app store or google play</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="relative w-32 h-10 self-end rounded-lg">
                    <Image
                    src="/images/googlePlay.png"
                    alt="Google Play Store download icon"
                    fill
                    className='object-contain rounded-lg'
                    sizes="100%"
                    />
                  </button>
                  <button className="relative w-32 h-10 self-end rounded-lg">
                    <Image 
                    src="/images/appleStore.png"
                    alt="Apple Store download icon"
                    fill
                    className='object-contain rounded-lg'
                    sizes="100%"
                    />
                  </button>
                </div>
            </div>

            <span className="relative w-20 h-20  md:w-32 md:h-32 lg:w-44 lg:h-44 self-end">
                <Image 
                src="/images/gift-box.png"
                alt="User carrying wheeled cart full of purchased products"
                fill
                className='object-cover'
                sizes="100%"
                />
            </span>
          </div>
        </div>
      </div>
      
      {pathName !== '/dummyjson-products' ? 
        <ProductsFromDummyJson />
      : null
      }

      {pathName === '/' ?
        <div className='w-full h-[70vh]'>
          <div
              className="bennetCurve2 relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center"
              style={{ backgroundImage: `url('/images/bg-3.jpg')` }}
            >
              <div className="bennetCurve2 absolute inset-0 bg-[#bbea70] bg-opacity-80"></div>
              
              <div className="relative z-10 text-primary p-4 pt-24 w-full md:w-[55vw] lg:w-[60vw] xl:w-[40vw] mx-auto text-center space-y-6 md:space-y-12">
              {/* <div className="relative z-10 text-primary p-4 pt-24 px-16 sm:px-32 md:px-36 lg:px-72 xl:px-96 text-center flex flex-col justify-center items-center gap-6"> */}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">We always provide you with the best in town</h1>
                <p className='text-lg md:text-xl lg:text-2xl font-semibold'>Since 2007, we have been delivering excellence in product development, support & updates for frictionless shopping experience.</p>
              </div>
            </div>
        </div>
      : null
      }
    </div>
  );
};

export default Prefoot;
