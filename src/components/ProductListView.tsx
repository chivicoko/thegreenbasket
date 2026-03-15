'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Product2 } from '../../types';
import { tableHead } from '@/lib/data';
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useEcommerceStore } from '../../product-store';

interface ProductViewProps {
  products: Product2[],
}

const ProductListView = ({products}: ProductViewProps) => {
  const {
    addToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    getProductQuantity,
    toggleWishlistBtn,
    isProductInWishlist,
    isProductInCart,
  } = useEcommerceStore();
  
  const pathName = usePathname();

  const formatPrice = (price: string | number): { integerPart: number; decimalPart: number } => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  
    if (isNaN(numericPrice)) {
      return { integerPart: 0, decimalPart: 0 };
    }
  
    const [integerPart, decimalPart] = numericPrice.toFixed(2).split('.');
  
    return { 
      integerPart: parseInt(integerPart, 10), 
      decimalPart: parseInt(decimalPart, 10) 
    };
  };
  
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="min-w-full custom-scrollbar">
        <thead className="bg-transparent rounded-xl">
          <tr className="border bg-neutral-300 rounded-[4px]">
            {tableHead.map(item => (
            <th key={item.id} className={`${item.title === 'Cart' || item.title === 'Wishlist' ? 'text-center' : 'text-left'} pl-6 py-3 text-primary uppercase text-xs font-bold tracking-wider`}>{ item.title }</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg- divide-y-[.8rem] divide-y-transparent">
          {products.map((product, idx) =>  {
            const price = formatPrice(product.price);

            return (
              <tr
                key={product.id}
                className="rounded-[4px] my-2"
              >
                <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">{ idx + 1 }</td>
                <td className="pl-6 py-2 w-2">
                  <Link href={pathName === '/dummyjson-products' ? `/dummyjson-products/${product.id}` : `/products/${product.id}`} className="relative block size-12 cursor-pointer">
                    <Image
                      src={product.thumbnail || '/images/imagePlaceholder.jpeg'}
                      alt={`${product.title} preview`}
                      fill
                      className="object-contain rounded-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>
                </td>
                <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">
                  <Link href={pathName === '/dummyjson-products' ? `/dummyjson-products/${product.id}` : `/products/${product.id}`} className="text-primary font-semibold">{ product.title }</Link>
                </td>
                <td className="relative py-2 text-[15px] whitespace-nowrap w-2">
                  <div className="flex items-center gap-2 flex-nowrap">
                    <span className='text-[18px]'> 
                      ₦{price.integerPart}.<sup>{price.decimalPart}</sup> 
                    </span>
                    <span className='flex items-center'>(<Minus />{ product.discountPercentage }%)</span>
                  </div>
                </td>
                <td className="relative text-[15px] whitespace-nowrap w-2"> 
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <Button
                        onClick={() => {
                          if (!isProductInCart(product.id)) {
                            toggleWishlistBtn(product);
                            toast.success(`${product.title} added to wishlist`);
                          } else {
                            toast.error("Product already in cart");
                          }
                        }}
                        variant="ghost"
                        className="cursor-pointer flex items-center justify-center rounded-full text-sm"
                      >
                        <Heart
                          className={`size-5 ${
                            isProductInWishlist(product.id) ? "text-red-600 fill-red-600" : ""
                          }`}
                        />
                      </Button>
                    </div>
  
                    <div className="bg-yellowish w-1/2 py-1 flex items-center rounded-lg justify-around shadow-sm">
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
                </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductListView;