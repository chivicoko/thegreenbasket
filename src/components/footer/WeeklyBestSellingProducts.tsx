'use client';

import { Heart, Minus, MoveRight, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { categories, products } from '@/lib/data';
import { toast } from 'sonner';
import { useEcommerceStore } from '../../../product-store';

const WeeklyBestSellingProducts: React.FC = () => {
  const {
    addToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    getProductQuantity,
    toggleWishlistBtn,
    isProductInWishlist,
    isProductInCart,
  } = useEcommerceStore();
  
  const router = useRouter();
    
  return (
    <div className='w-full pt-10 md:pt-12 pb-20 px-4 lg:px-8 xl:px-20'>
      <div className="flex items-center justify-between mb-8">
        <h3 className='text-lg md:text-xl lg:text-3xl font-bold text-primary'>Weekly best selling items</h3>
        <Button 
          variant={'ghost'}
          onClick={() => router.push('/products')} 
          className='text-dark_orange font-bold text-[0.95rem] gap-2 group cursor-pointer hover:bg-transparent' 
        >
          See more
          <MoveRight className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1 size-5' />
        </Button>
      </div>

      <div className="flex items-center flex-wrap gap-4 mb-8">
        {
          categories.slice(0, 8).map((category, index) => {
            return(
              <Button 
                key={category.id} 
                className={`${index === 0 ? 'bg-primary text-white' : 'bg-white hover:bg-primary text-primary hover:text-white'} cursor-pointer py-2 px-4 font-semibold text-sm rounded-full shadow-md`}
              >
                {category.name}
              </Button>
            )
          })
        }
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {
          products.slice(0,5).map(product => 
            <div key={product.id} className="relative pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
              
              <Button
                onClick={() => {
                  if (!isProductInCart(product.id)) {
                    toggleWishlistBtn(product);

                    toast.success(`${product.title} added to wishlist`);
                  } else {
                    toast.error("This product is already in cart.");
                  }
                }}
                className="absolute top-2 right-2 z-40 cursor-pointer flex items-center justify-center rounded-full text-sm"
              >
                <Heart
                  className={`size-5 ${
                    isProductInWishlist(product.id) ? "text-red-600 fill-red-600" : ""
                  }`}
                />
              </Button>
              <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                <Image
                  src={product.thumbnail}
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
                  <p className='text-center text-sm text-gray-500 font-semibold'>{product.weight}gm</p>
                  <p className='text-center text-xl py-3 font-bold text-primary'>${product.price}</p>
                </div>

                <div className="bg-yellowish w-full py-1 flex items-center rounded-lg justify-around shadow-sm">
                  {!isProductInCart(product.id) ? (
                    <Button
                      onClick={() => {
                        if (isProductInWishlist(product.id)) {
                          toggleWishlistBtn(product);
                        }

                        addToCart(product);
                        toast.success(`${product.title} added to cart`);
                      }}
                      className="flex items-center justify-center w-full cursor-pointer bg-transparent hover:bg-transparent shadow-none"
                    >
                    <span className="py-2 px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                      <ShoppingCart className="text-foreground" />
                    </span>
                    </Button>
                  ) : (
                    <div className="flex items-center justify-around gap-3 w-full h-full py-1.5">
                      <Minus 
                        onClick={() => decreaseProductQuantity(product.id)}
                        className='cursor-pointer text-primary'
                      />

                      <p className="font-medium">
                        {getProductQuantity(product.id)}
                      </p>

                      <Plus 
                        onClick={() => increaseProductQuantity(product.id)}
                        className='cursor-pointer text-primary'
                      />
                    </div>
                  )}

                </div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default WeeklyBestSellingProducts;