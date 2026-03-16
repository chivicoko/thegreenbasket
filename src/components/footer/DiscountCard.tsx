'use client';

import { Award, BaggageClaim } from 'lucide-react';
import Image from 'next/image'
import React from 'react'


const discountCards = [
    { id: 1, bgImg: `url('/images/bg-1.jpg')`, mainBgColor: 'bg-blue-950', badgeBgcolor: 'bg-blue-500', textColor: 'text-blue-300', icon: <BaggageClaim className='size-5' />, badgeText: 'Free Delivery', mainText: "Get up to 50% off delivery by 12:15pm, Fast and Free.", img: "/images/gift-box.png" },
    { id: 2, bgImg: `url('/images/bg-2.jpg')`, mainBgColor: 'bg-dark_orange', badgeBgcolor: 'bg-orange-500', textColor: 'text-orange-400', icon: <Award className='size-5' />, badgeText: 'Membership Card', mainText: "You can enjoy a 5% discount using your membership card.", img: "/images/alarm-clock.png" },
];

const DiscountCard = () => {
  return (
    discountCards.map(discountCard => {
        return (
            <div
                key={discountCard.id}
                className="flex-1 relative w-full h-56 md:h-60 xl:h-56 bg-cover bg-center rounded-3xl transform transition-all duration-300 hover:-rotate-3 shadow-md hover:shadow-2xl"
                style={{ backgroundImage: discountCard.bgImg }}
            >
                <div className={`${discountCard.mainBgColor} absolute inset-0 bg-opacity-90 rounded-3xl`}></div>
                
                <div className="relative z-10 text-white py-3 sm:py-4 md:py-8 px-3 sm:px-6 lg:px-10 flex justify-between">
                    <div className='flex flex-col gap-8 lg:gap-10 w-2/3'>
                        <p className={`${discountCard.badgeBgcolor} flex items-center gap-1 py-1 rounded-md w-fit px-3 text-sm`}>{discountCard.icon} {discountCard.badgeText}</p>
                        <p className={`${discountCard.textColor} text-lg sm:text-xl md:text-xl lg:text-2xl font-bold`}>{discountCard.mainText}</p>
                    </div>
                    <span className="relative w-20 h-20  md:w-32 md:h-32 lg:w-44 lg:h-44 self-end">
                        <Image 
                            src={discountCard.img || "/images/imagePlaceholder.jpeg"}
                            alt={`${discountCard.badgeText}'s icon`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="100%"
                        />
                    </span>
                </div>
            </div>
        )
    })
  )
}

export default DiscountCard