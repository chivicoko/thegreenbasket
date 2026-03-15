'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
// import { useUserForm } from '@/context/UserFormContext';
import MobileNav from './MobileNav';
import { NavbarProps } from '../../../types';
import { ChevronDown, Heart, LogOutIcon, Minus, Plus, Search, ShoppingBag, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';
import { Badge } from '../ui/badge';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from 'sonner';
import { products } from '@/lib/data';

const Navbar: React.FC<NavbarProps> = ({ firstDivClasses, secondDivClasses }) => {
  const router = useRouter();

  // const {userInfo, } = useUserForm();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // const {totalCount} = useCart();
  // const {totalWishlistCount} = useWishlist();

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  return (    
    <nav className={`z-30 ${firstDivClasses}`}>
      <div className={secondDivClasses}>
        
        <MobileNav isOpen={isMobileNavOpen} onHandleClose={toggleMobileNav} />

        <Link href="/" className="flex items-center space-x-2">
          <span className="relative w-8 h-8">
            <Image
              src="/images/logo.png"
              alt="GreenBasket Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </span>
          <span className='hidden md:block text-white text-xl md:text-2xl font-bold'>GreenBasket</span>
        </Link>

        <div className="bg-[#11192899] w-fit md:w-[40%] md:pl-3 flex items-center rounded-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 outline-none focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
          <input
            type="text"
            placeholder="Search..."
            name="searchText"
            className="bg-transparent p-2 md:p-3 ml-2 w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
          />
          <Button className="bg-secondary hover:bg-secondary_hover cursor-pointer text-primary font-semibold rounded-full px-2 md:px-4 py-1 md:py-3 md:ml-2 focus:ring-2 focus:ring-[#bbea70d3]">
            <Search className='h-4 w-4 md:h-6 md:w-6' />
          </Button>
          {/* <Button icon1={<Search className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-secondary hover:bg-secondary_hover text-primary font-semibold rounded-full px-2 md:px-4 py-1 md:py-3 md:ml-2 focus:ring-2 focus:ring-[#bbea70d3]" /> */}
        </div>

        <div className="flex gap-4 items-center justify-end">
          {/* {totalWishlistCount > 0 && 
            <div className="absolute -top-[10px] -right-[8px] md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full">
              <p className='w-full h-full flex items-center justify-center text-center text-black text-xs'>{totalWishlistCount}</p>
            </div>
          } */}
          <Sheet>
            <SheetTrigger asChild>
              <div className="relative">
                <Button 
                  className="bg-secondary hover:bg-secondary_hover cursor-pointer flex items-center justify-center p-1 md:p-2 text-primary rounded-full text-sm"
                >
                  <ShoppingBag className='h-4 w-4 md:h-6 md:w-6' />
                </Button>
                <Badge className='absolute -top-2.5 -right-2 md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full text-black text-xs'>
                  99
                </Badge>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='uppercase'>Shopping Wishlist</SheetTitle>
              </SheetHeader>

              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <hr />
                <div className="flex flex-col gap-2">
                  {products.slice(0,3).map(product => 
                    <React.Fragment key={product.id}>
                      <div className="w-full flex justify-between gap-2">
                        <div className="flex gap-2">
                          <span className="relative size-20 border rounded-md">
                            <Image
                              src={product.thumbnail ?? '/images/imagePlaceholder.jpeg'}
                              alt="GreenBasket Store's Logo"
                              fill
                              className='rounded-md object-cover'
                              sizes="100%"
                            />
                          </span>
                          <div className='space-y-3'>
                            <p className='uppercase text-sm'>{product.title}</p>
                            <p className='font-semibold text-sm'>₦{product.price}</p>
                          </div>
                        </div>

                        <div className='flex flex-col items-end justify-start gap-4'>
                          <XIcon className="size-4 cursor-pointer" />
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  )}

                </div>
              </div>

              <SheetFooter>
                <hr className='py-2' />
                <Button 
                  type="submit" 
                  className='bg-secondary hover:bg-secondary_hover mt-2 font-bold text-l text-primary py-[11px] px-[27px] shadow-md cursor-pointer uppercase'
                  onClick={() => {
                    toast.promise<{ name: string }>(
                      () =>
                        new Promise((resolve) =>
                            setTimeout(() => resolve({ name: "All items" }), 1000)
                        ),
                      {
                        loading: "Adding all items to cart...",
                        success: (data) => `${data.name} added to cart.`,
                        error: "Error",
                      }
                    )
                  }}
                >
                  Add all to cart
                </Button>
                <Button 
                  variant="outline" 
                  className='cursor-pointer uppercase'
                  onClick={() => {
                    toast.promise<{ name: string }>(
                      () =>
                        new Promise((resolve) =>
                            setTimeout(() => resolve({ name: "Wishlist" }), 1000)
                        ),
                      {
                        loading: "Clearing wishlist...",
                        success: (data) => `${data.name} has been cleared.`,
                        error: "Error",
                      }
                    )
                  }}
                >
                  Clear Wishlist
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* {totalCount > 0 && 
            <div className="absolute -top-[10px] -right-[8px] md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full">
              <p className='w-full h-full flex items-center justify-center text-center text-black text-xs'>{totalCount}</p>
            </div>
          } */}
          <Sheet>
            <SheetTrigger asChild>
              <div className="relative">
                <Button 
                  className="bg-secondary hover:bg-secondary_hover cursor-pointer flex items-center justify-center p-1 md:p-2 text-primary rounded-full text-sm"
                >
                  <ShoppingBag className='h-4 w-4 md:h-6 md:w-6' />
                </Button>
                <Badge className='absolute -top-2.5 -right-2 md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full text-black text-xs'>
                  99
                </Badge>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='uppercase'>Shopping Cart</SheetTitle>
              </SheetHeader>

              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <hr />
                <div className="flex flex-col gap-2">
                  {products.slice(0,3).map(product => 
                    <React.Fragment key={product.id}>
                      <div className="w-full flex justify-between gap-2">
                        <div className="flex gap-2">
                          <span className="relative size-20 border rounded-md">
                            <Image
                              src={product.thumbnail ?? '/images/imagePlaceholder.jpeg'}
                              alt="GreenBasket Store's Logo"
                              fill
                              className='rounded-md object-cover'
                              sizes="100%"
                            />
                          </span>
                          <div className='space-y-3'>
                            <p className='uppercase text-sm'>{product.title}</p>
                            <p className='font-semibold text-sm'>₦{product.price}</p>
                          </div>
                        </div>

                        <div className='flex flex-col items-end justify-start gap-4'>
                          <XIcon className="size-4 cursor-pointer" />
                          <div className='border py-1 px-2 flex items-center gap-4'>
                            <Minus className='size-4 cursor-pointer' />
                            <span className='text-sm font-medium'>4</span>
                            <Plus className='size-4 cursor-pointer' />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  )}

                </div>
              </div>

              <SheetFooter>
                <hr className='py-2' />
                <div className=" pt-1 pb-2 flex items-center justify-between">
                  <p className='font-semibold'>Subtotal</p>
                  <p className='font-bold'>₦210,000.00</p>
                </div>
                <Button 
                  type="submit" 
                  className='bg-secondary hover:bg-secondary_hover mt-2 font-bold text-l text-primary py-[11px] px-[27px] shadow-md cursor-pointer uppercase'
                  onClick={() => router.push('/checkout')}
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className='cursor-pointer uppercase'
                  onClick={() => {
                    toast.promise<{ name: string }>(
                      () =>
                        new Promise((resolve) =>
                            setTimeout(() => resolve({ name: "Cart" }), 1000)
                        ),
                      {
                        loading: "Clearing cart...",
                        success: (data) => `${data.name} has been cleared.`,
                        error: "Error",
                      }
                    )
                  }}
                >
                  Clear Cart
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <div className='relative hidden md:block border-l pl-3'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='hover:bg-transparent cursor-pointer'>
                  <Avatar>
                    <AvatarImage src='https://randomuser.me/api/portraits/women/44.jpg' alt="User Profile Image" />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge className='bg-green-500 border-0.5 border-white dark:bg-blue-600' />
                  </Avatar>
                  <span className="text-white text-base font-semibold capitalize">Hi, User</span>
                  <span className={`cursor-pointer text-white transition-all duration-300 ease-in-out`}>
                    <ChevronDown />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem 
                    onClick={() => router.push('/products')} 
                    className='cursor-pointer'
                  >
                    Product
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className='flex items-center justify-between cursor-pointer'>
                    Log out
                    <LogOutIcon />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="inline-flex items-center p-1 text-sm text-secondary hover:text-primary rounded-lg md:hidden hover:bg-secondary focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold transition-all duration-0 ease-in-out" 
            aria-controls="navbar-default" aria-expanded="false" onClick={toggleMobileNav}
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
