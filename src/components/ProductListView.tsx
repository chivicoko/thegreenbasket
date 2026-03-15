'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Product2 } from '../../types';
import { tableHead } from '@/lib/data';
import { Heart, Minus, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ProductViewProps {
  products: Product2[],
}

const ProductListView = ({products}: ProductViewProps) => {
  // const {addToCart, isProductInCart, increaseProductQuantity, decreaseProductQuantity, getProductQuantity} = useCart();
  // const {toggleWishlistBtn, isProductInWishlist} = useWishlist();
  
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
    <div className="w-full overflow-x-scroll custom-scrollbar">
      <table className="min-w-full custom-scrollbar">
        <thead className="bg-transparent rounded-xl">
          <tr className="border bg-neutral-300 rounded-[4px]">
            {tableHead.map(item => (
            <th key={item.id} className={`${item.title === 'Cart' || item.title === 'Wishlist' ? 'text-center' : 'text-left'} pl-6 py-3 text-primary uppercase text-xs font-bold tracking-wider`}>{ item.title }</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg- divide-y-[.8rem] divide-y-transparent">
          {products.map((product, idx) => (
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
                    ${formatPrice(product.price).integerPart}.<sup>{formatPrice(product.price).decimalPart}</sup> 
                  </span>
                  <span className='flex items-center'>(<Minus />{ product.discountPercentage }%)</span>
                </div>
              </td>
              <td className="relative text-[15px] whitespace-nowrap w-2"> 
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Button 
                      // onClick={() => {
                      //   if (!isProductInCart(product.id)) {
                      //     toggleWishlistBtn(product);
                      //   } else {
                      //     alert("This product is already in cart.");
                      //   }
                      // }} 
                      onClick={() => toast(`${product.title} added successfully.`)}
                      variant={'ghost'}
                      className="cursor-pointer flex items-center justify-center rounded-full text-sm" 
                    >
                      {/* {isProductInWishlist(product.id) ? <Favorite className="text-red-700" /> : <FavoriteBorder />} */}
                      <Heart className='size-5' />
                    </Button>
                  </div>

                  <div className='flex-1 bg-yellowish w-full py-0.5 flex items-center rounded-lg justify-around shadow-sm'>
                      <Button 
                        // onClick={() => addToCart(product)}
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
                        // className={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center'} w-full`}
                      > 
                        <span className="py-2 px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                          <ShoppingCart className='text-foreground' />
                        </span>
                      </Button>
                      {/* <div className={`${isProductInCart(product.id) ? 'flex items-center justify-around gap-3' : 'hidden'} w-full`} >
                        <Button 
                          onClick={() => decreaseProductQuantity(product.id)} 
                          className="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full"
                        >
                          <Minus />
                        </Button>
                        <p>{getProductQuantity(product.id)}</p>
                        <Button 
                          onClick={() => increaseProductQuantity(product.id)} 
                          className="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full"
                        >
                          <Plus />
                      </Button>
                    </div> */}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductListView;