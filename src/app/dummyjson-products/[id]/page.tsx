"use client";

import CountDownTimer from '@/components/CountDownTimer';
import DiscountBadge from '@/components/DiscountBadge';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { INITIAL_PRODUCT_DATA } from '@/lib/data';
import { Product2 } from '../../../../types';
import { getDummyJsonProductById } from '@/api';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus, ShoppingCart, Star, StarHalf } from 'lucide-react';
import { toast } from 'sonner';
import DiscountCardTwo from '@/components/footer/DiscountCardTwo';
import { useEcommerceStore } from '../../../../product-store';

const SingleProduct = () => {  
  const [product, setProduct] = useState<Product2>(INITIAL_PRODUCT_DATA);
  const [currentImage, setCurrentImage] = useState<string>('/images/imagePlaceholder.jpeg');
  const {
    addToCart,
    toggleWishlistBtn,
    isProductInWishlist,
    isProductInCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    getProductQuantity
  } = useEcommerceStore();

  const { id } = useParams();
//   console.log("id: ", id);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        try {
          const product = await getDummyJsonProductById(id);
          console.log('Product: ', product);
          setProduct(product);
          setCurrentImage(product.images[0] ?? product.thumbnail);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      getData();
    }
  }, [id]);

  // Check if product is null (data hasn't been fetched yet)
  // if (!product) {
    // return <Loading />;
    // return <p>Loading...</p>;
  // }

  // useEffect(() => {
  //   setProduct(PRODUCT);
  // }, []);

  const handleProductImagesViews = (id: number | string, image: string) => {
    if (id) {
      setCurrentImage(image);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
  
  const price = formatPrice(product.price);

  return (
    <section className='px-4 md:px-[85px] lg:px-[60px] xl:px-[85px] md:pt-1'>
      <div>
        <div className='mt-2 p-4 sm:p-10 md:p-16 flex flex-col xl:flex-row items-center justify-start gap-16 md:gap-28 bg-white rounded-xl md:rounded-3xl'>
          <div className='flex flex-col items-center justify-between gap-4'>
            <div className='relative rounded-lg mt-6 md:mt-auto p-3 md:p-6 bg-zinc-50 h-64 w-64 md:h-96 md:w-96 flex items-center justify-center'>
              <DiscountBadge discountPercentage={product.discountPercentage} />
              {
                product.thumbnail && 
                <div className="relative w-44 h-44 md:w-64 md:h-64">
                  <Image
                    src={currentImage}
                    // src={product.thumbnail}
                    // src={product.thumbnail ?? currentImage}
                    alt="product image"
                    fill
                    className="object-cover rounded-lg md:hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              }
            </div>

            <div className="flex items-center gap-4">
              {product.images &&
                product.images.map((img, index) => {
                  const isActive = currentImage === img;

                  return (
                    <div
                      key={index}
                      onClick={() => handleProductImagesViews(product.id, img)}
                      className={`
                        rounded-lg p-1 md:p-4 flex items-center justify-center cursor-pointer
                        transition-all duration-200
                        ${isActive
                          ? "bg-primary/10 ring-2 ring-primary scale-105"
                          : "bg-zinc-50 hover:ring-2 hover:ring-primary/40"}
                      `}
                    >
                      <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image
                          src={img ?? "/images/imagePlaceholder.jpeg"}
                          alt="product extra preview"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className='flex flex-col gap-6 self-start'>
            <div className="flex flex-col lg:flex-row xl:flex-col gap-6 lg:gap-3 xl:gap-6">
              <div className="w-full self-start flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <CountDownTimer />

                  <p className='text-sm text-gray-400 my-2 font-semibold'>Bevmo Grocery</p>
                  <h1 className='text-primary text-2xl md:text-3xl font-semibold'>{product.title}</h1>
                  
                  <div className="flex items-center gap-3 pt-2 pb-3 flex-wrap">
                    <span className='text-yellow-500 flex items-center'>
                      <Star className='fill-amber-500 size-5' />
                      <Star className='fill-amber-500 size-5' />
                      <Star className='fill-amber-500 size-5' />
                      <StarHalf className='fill-amber-500 size-5' />
                      <Star className='stroke-amber-500 size-5' />
                    </span>
                    <span className='flex items-center gap-1 self-end flex-wrap'>
                      <span className='text-primary text-sm'>{product.rating} Rating</span>
                      <span className='text-xs text-gray-500'>({product.reviews?.length} reviews)</span>
                    </span>
                  </div>

                  <p className='text-3xl font-semibold text-primary'>₦{price.integerPart}.<sup>{price.decimalPart}</sup></p>
                </div>
                
                <div className="self-center space-y-1">
                  <div className="relative size-40">
                    <Image
                      src={product.meta.qrCode ?? null}
                      alt="QR Code"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-center">{product.meta.barcode}</p>
                </div>
              </div>

              <div className="flex flex-col gap-8 border-y md:border-y lg:border-y-0 xl:border-y border-l-0 lg:border-l xl:border-l-0 pl-0 lg:pl-3 xl:pl-0 py-6 text-xs md:text-sm">
                <div className="flex items-center gap-4 md:gap-7 flex-wrap">
                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      toast.promise(
                        new Promise<{ name: string }>((resolve) => {
                          addToCart(product);

                          resolve({ name: product.title });
                        }),
                        {
                          loading: "Adding to cart...",
                          success: (data) => `${data.name} has been added to cart.`,
                          error: "Error adding to cart",
                        }
                      );
                    }}
                    className={`${
                      isProductInCart(product.id) ? "hidden" : "flex"
                    } items-center justify-center gap-2 cursor-pointer bg-[#cee1af90] text-primary font-bold rounded-full py-[11px] px-[27px] shadow-md`}
                  >
                    <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                    Add to cart
                  </Button>
                  <div
                    className={`${
                      isProductInCart(product.id)
                        ? "flex items-center justify-around gap-3"
                        : "hidden"
                    } bg-yellowish py-0.5 px-3 rounded-full shadow-md`}
                  >
                    <Minus 
                      onClick={() => decreaseProductQuantity(product.id)}
                      className='cursor-pointer text-primary'
                    />

                    <p className="text-xl w-10 text-center">
                      {getProductQuantity(product.id)}
                    </p>

                    <Plus 
                      onClick={() => increaseProductQuantity(product.id)}
                      className='cursor-pointer text-primary'
                    />
                  </div>

                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      const alreadyInWishlist = isProductInWishlist(product.id);

                      toast.promise(
                        new Promise<{ name: string }>((resolve) => {
                          toggleWishlistBtn(product);

                          resolve({ name: product.title });
                        }),
                        {
                          loading: "Updating wishlist...",
                          success: () =>
                            alreadyInWishlist
                              ? "Removed from wishlist."
                              : "Added to wishlist.",
                          error: "Error updating wishlist",
                        }
                      );
                    }}
                    className="gap-2 font-bold cursor-pointer underline uppercase md:pr-7 rounded-full"
                  >
                    <Heart
                      className={`${
                        isProductInWishlist(product.id)
                          ? "fill-red-600 text-red-600"
                          : "text-red-700"
                      }`}
                    />
                    {isProductInWishlist(product.id)
                      ? "Remove Favorite"
                      : "Add to favorite"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className='text-primary text-sm font-semibold'>SKU: {product.sku}</p>
              <p className='text-primary text-sm font-semibold'>Category: <Link href='/products' className='capitalize underline'>{product.category}</Link></p>
              <div className="flex items-center gap-4 my-2 text-xs md:text-sm font-semibold">
                <span className='self-start'>Tags: </span>
                <ul className='flex items-center gap-3 flex-wrap'>
                  {
                    product.tags && product.tags.map((tag, index) => {
                      return(
                        <li key={index} className='capitalize'>{tag},</li>
                      )
                    })
                  }
                </ul>
              </div>
              <p className='text-sm'>{product.description}</p>
            </div>
          </div>

        </div>

        <div className='mt-2 p-4 sm:p-10 md:p-16 bg-white rounded-xl md:rounded-3xl'>
          <div className="flex items-center gap-y-2 gap-x-6 flex-wrap">
            <p className='font-semibold'>
              <span className='text-primary text-base'>Warranty Information: </span> <span className='text-sm'>{product.warrantyInformation}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Shipping Information: </span> <span className='text-sm'>{product.shippingInformation}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Availability Status: </span> <span className='text-sm'>{product.availabilityStatus}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Return Policy: </span> <span className='text-sm'>{product.returnPolicy}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Minimum Order Quantity: </span> <span className='text-sm'>{product.minimumOrderQuantity}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Width: </span> <span className='text-sm'>{product.dimensions.width}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Height: </span> <span className='text-sm'>{product.dimensions.height}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Depth: </span> <span className='text-sm'>{product.dimensions.depth}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Created At: </span> <span className='text-sm'>{formatDate(product.meta.createdAt)}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Updated At: </span> <span className='text-sm'>{formatDate(product.meta.updatedAt)}</span>
            </p>
          </div>

          <aside className="productReview pt-6 md:pt-10 w-full">
            <h2 className="text-center text-xl md:text-2xl mb-4 font-bold">Reviews</h2>
            
            <ul className="flex items-center justify-center gap-3 flex-wrap">
              {product.reviews.map((review, index) => (
                <li key={index} className="border-2 border-primary rounded-lg pt-2 px-2 w-full md:w-1/3 max-w-sm">
                  <div className="flex flex-col items-center justify-between border-b border-primary">
                    <p className="text-xl md:text-2xl">{review.reviewerName}</p>
                    <p className="text-sm">({review.reviewerEmail})</p>
                  </div>
                  <p className="text-base my-4">{review.comment}</p>
                  <div className="flex items-center justify-between border-t border-primary">
                    <p className="text-base">Rating: {review.rating}</p>
                    <p className="text-base">{formatDate(review.date)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>

      </div>

      <DiscountCardTwo />

      {/* <WeeklyBestSellingProducts/> */}
    </section>
  );
}

export default SingleProduct;