'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Product2 } from '../../types';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const ProductCard = ({product}: {product: Product2,}) => {

  return (
    <>
    {product && 
    <div className="pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
        <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
            <Image
                src={product.thumbnail || "/images/imagePlaceholder.jpeg"}
                alt={`${product.title} preview`}
                fill
                className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </Link>

        
        <div className='px-4 w-full h-1/2 flex flex-col items-center justify-between'>
            <h2 className='text-center text-lg font-semibold text-primary hover:text-black'>
                <Link href={`/products/${product.id}`} className="">
                    {product.title}
                </Link>
            </h2>
            
            <div>
                <p className='text-center text-sm text-gray-500 font-semibold'>234 gm</p>
                <p className='text-center text-xl py-3 font-bold text-primary'>${product.price}</p>
            </div>

            <div className='bg-yellowish w-full py-0.5 flex items-center rounded-lg justify-around shadow-sm'>
                <Button 
                    onClick={() => {
                        toast.promise<{ name: string }>(
                            () =>
                                new Promise((resolve) =>
                                    setTimeout(() => resolve({ name: product?.title }), 1000)
                                ),
                            {
                                loading: "Loading...",
                                success: (data) => `${data.name} has been added to cart.`,
                                error: "Error",
                            }
                        )
                    }}
                    className={`flex items-center justify-center w-full cursor-pointer bg-transparent hover:bg-transparent shadow-none`}
                > 
                    <span className="py-2 px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                        <ShoppingCart className='text-foreground' />
                    </span>
                </Button>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default ProductCard;