'use client';

import Image from "next/image";
import Link from "next/link";
import Prefoot from "./Prefoot";
import React from "react";
import { footerLinks } from "@/lib/data";
import { BriefcaseBusiness, ChevronRight, CircleQuestionMark, Gift, Github, Globe, Instagram, Linkedin, Mail, MessageCircleDashed, Send, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';


const myLinks = [
  { id: 1, url: 'https://www.victorokoye.vercel.app/', icon: <Globe className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 2, url: 'https://www.instagram.com/chivicoko', icon: <Instagram className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 3, url: 'https://twitter.com/codes_victor_', icon: <Twitter className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 4, url: 'https://github.com/chivicoko', icon: <Github className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 5, url: 'https://www.linkedin.com/in/codesvictor', icon: <Linkedin className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 6, url: 'https://wa.me/+2348028845693', icon: <MessageCircleDashed className="h-4 w-4 md:h-6 md:w-6" />, },
];

const Footer = () => {
  const pathName = usePathname();

  return (
    <>
      {pathName !== '/checkout' ? <Prefoot /> : null}

      <footer className="bg-[#fffbeb] flex flex-col text-gray-800 z-30 px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-between pt-16">
          <div className="w-full xl:w-1/4 self-start md:self-center">
            <div className="flex flex-col items-start justify-start gap-2">
              <Link href='/' className="flex items-center  space-x-2">
                <span className="relative w-8 h-8">
                  <Image 
                    src="/images/logo.png" 
                    alt="GreenBasket Store's Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                  />
                </span>
                <p className="text-primary text-xl md:text-2xl font-bold flex items-center gap-2">
                  GreenBasket
                </p>
              </Link>
              <p>We are dedicated to serving you better and making your life get easier and better day after day. </p>
            </div>
            <div className="mt-7 md:mt-10">
              <h3 className="text-xl font-semibold mb-3">Accepted Payments</h3>
              <div className="flex items-center gap-2">
                <span className="relative shadow-md w-12 h-8">
                  <Image 
                    src="/images/visa-logo-300x300.jpg" 
                    alt="Visa's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
                <span className="relative shadow-md w-12 h-8">
                  <Image 
                    src="/images/Mastercard_logo.webp" 
                    alt="Mastercard's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
                <span className="relative shadow-md w-12 h-8">
                  <Image 
                    src="/images/apple-pay-2.png" 
                    alt="Apple's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-3/4 flex flex-row items-start justify-center md:justify-between gap-6 md:gap-10 my-6 lg:my-auto flex-wrap">
            {
              footerLinks.map(footerLink => {
                return(
                  <div key={footerLink.id} className="flex-1 flex flex-col gap-2">
                    <div className="text-2xl whitespace-nowrap">{footerLink.title}</div>
                    <ul className="flex flex-col gap-1 justify-end mt-3">
                    {
                      footerLink.links.map(link => {
                        return(
                          <li key={link.id} className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg whitespace-nowrap">
                            <Link href={link.url} className="flex items-center"><ChevronRight/> {link.text}</Link>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="border-b  pt-8 md:pt-0 lg:pt-10 xl:pt-0 pb-14 md:pb-10 flex items-center justify-center md:justify-end gap-10 lg:gap-16 flex-wrap">
          <div className="listItem itemIcons self-end">
            <span className="flex gap-2 flex-wrap items-center mt-2">
              {
                myLinks.map(link => {
                  return(
                    <Link 
                      key={link.id} 
                      href={link.url}
                      target="_blank"
                    >
                      <Button className="cursor-pointer bg-secondary hover:bg-secondary_hover p-2 text-primary rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                        {link.icon}
                      </Button>
                    </Link>
                  )
                })
              }
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="self-center">Subscribe To Our Newsletter</p>
            <div className="bg-[#1b2943] pl-3 flex items-center border rounded-full border-secondary focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 outline-none focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
              <span className="relative flex items-center w-4 h-5 text-secondary flex-shrink-0">
                <Mail />
              </span>
              <input
                type="email"
                placeholder="eg. john@gmail.com"
                name="email"
                className="bg-transparent p-3 ml-2 rounded-full shadow-lg w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
              />
              <Button 
                onClick={() => {
                  toast.promise<{ name: string }>(
                    () =>
                      new Promise((resolve) =>
                          setTimeout(() => resolve({ name: "Newsletter" }), 1000)
                      ),
                    {
                      loading: "Processing...",
                      success: (data) => `You have now subscribed to our ${data.name}.`,
                      error: "Error",
                    }
                  )
                }}
                className="cursor-pointer bg-secondary hover:bg-secondary_hover text-primary font-semibold rounded-full px-4 py-3 ml-2 focus:ring-2 focus:ring-primary"
              >
                <Send className='' />
              </Button>
            </div>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between flex-wrap gap-3 md:gap-6">
          <div className="w-full md:w-auto flex items-center justify-center md:justify-start gap-4 md:gap-6">
            <Button 
              variant={'ghost'} 
              onClick={() => {
                toast.promise<{ name: string }>(
                  () =>
                    new Promise((resolve) =>
                        setTimeout(() => resolve({ name: "Seller" }), 1000)
                    ),
                  {
                    loading: "Processing...",
                    success: (data) => `You have now become a ${data.name}`,
                    error: "Error",
                  }
                )
              }}
              className="flex items-center gap-1 whitespace-nowrap cursor-pointer !px-0 hover:bg-transparent"
            >
              <BriefcaseBusiness className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />
              Become A Seller
            </Button>
            <Button 
              variant={'ghost'} 
              onClick={() => {
                toast.promise<{ name: string }>(
                  () =>
                    new Promise((resolve) =>
                        setTimeout(() => resolve({ name: "Gift Card" }), 1000)
                    ),
                  {
                    loading: "Sending you a gift card...",
                    success: (data) => `You've just got a ${data.name}`,
                    error: "Error",
                  }
                )
              }}
              className="flex items-center gap-1 whitespace-nowrap cursor-pointer !px-0 hover:bg-transparent"
            >
              <Gift className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />
              Gift Cards
            </Button>
            <Button 
              variant={'ghost'} 
              onClick={() => {
                toast.promise<{ name: string }>(
                  () =>
                    new Promise((resolve) =>
                        setTimeout(() => resolve({ name: "Help Center" }), 1000)
                    ),
                  {
                    loading: "Contacting help center...",
                    success: (data) => `Thanks for reaching out to the ${data.name}`,
                    error: "Error",
                  }
                )
              }}
              className="flex items-center gap-1 whitespace-nowrap cursor-pointer !px-0 hover:bg-transparent"
            >
              <CircleQuestionMark className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />
              Help Center
            </Button>
          </div>

          <div className="w-full md:w-auto flex items-center justify-center gap-3 md:gap-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'ghost'} className="flex items-center underline cursor-pointer !px-0 hover:bg-transparent">Terms of Use</Button>
              </SheetTrigger>
              <SheetContent className="space-y-0">
                <SheetHeader>
                  <SheetTitle className='uppercase'>Terms of Use</SheetTitle>
                  <SheetDescription>Last updated: {`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}</SheetDescription>
                </SheetHeader>
                <hr className="ml-2.5" />
                <div className="prose prose-sm max-w-none pl-4 pr-1 pb-5 overflow-y-scroll custom-scrollbar2">
                  <p>Welcome to <strong>TheGreenBasket</strong>, an online grocery store application. By accessing or using our website or mobile application, you agree to the following terms and conditions.</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <h3 className="font-semibold">Use of the Service</h3>
                      <p>You may use our platform to browse products, add items to your cart, and purchase groceries. You agree to use the service only for lawful purposes and in a way that does not harm the platform, other users, or the store.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Account Responsibility</h3>
                      <p>If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Product Information</h3>
                      <p>We strive to provide accurate descriptions, pricing, and availability for all products. However, we do not guarantee that all information will always be completely accurate, up to date, or error-free.</p>
                      <p>We reserve the right to:</p>
                      <ul className="list-disc pl-5">
                        <li>Correct errors in pricing or descriptions</li>
                        <li>Update product availability</li>
                        <li>Cancel orders if necessary</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Orders and Payments</h3>
                      <p>When you place an order, you agree to provide accurate billing and delivery information. Orders are subject to confirmation and product availability.</p>
                      <p>We reserve the right to cancel or refuse any order at our discretion.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Returns and Refunds</h3>
                      <p>Refunds or replacements may be provided for damaged, incorrect, or missing items according to our store’s return policy.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Prohibited Activities</h3>
                      <p>You agree not to:</p>
                      <ul className="list-disc pl-5">
                        <li>Use the platform for fraudulent purposes</li>
                        <li>Attempt to gain unauthorized access to the system</li>
                        <li>Interfere with the operation of the service</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Changes to the Terms</h3>
                      <p>We may update these Terms of Use from time to time. Continued use of the service after updates means you accept the revised terms.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Contact</h3>
                      <p>If you have any questions about these Terms of Use, please contact us at:</p>
                      <p>Email: info@thegreenbasket.com</p>
                    </li>
                  </ol>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'ghost'} className="flex items-center underline cursor-pointer !px-0 hover:bg-transparent">Privacy Policy</Button>
              </SheetTrigger>
              <SheetContent className="space-y-0">
                <SheetHeader>
                  <SheetTitle className='uppercase'>Privacy Policy</SheetTitle>
                  <SheetDescription>Last updated: {`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}</SheetDescription>
                </SheetHeader>
                <hr className="ml-2.5" />
                <div className="prose prose-sm max-w-none pl-4 pr-1 pb-5 overflow-y-scroll custom-scrollbar2">
                  <p>At <strong>TheGreenBasket</strong>, we respect your privacy and are committed to protecting your personal information.</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <h3 className="font-semibold">Information We Collect</h3>
                      <p>We may collect the following types of information:</p>
                      <div className="space-y-1">
                        <div>
                          <strong>Personal Information</strong>
                          <ul className="list-disc pl-5">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Delivery address</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Order Information</strong>
                          <ul className="list-disc pl-5">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Delivery address</li>
                          </ul>                    
                        </div>
                        <div>
                          <strong>Technical Information</strong>
                          <ul className="list-disc pl-5">
                            <li>Device Type</li>
                            <li>Browser information</li>
                            <li>IP Address</li>
                          </ul>                    
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="font-semibold">How We Use Your Information</h3>
                      <p>We use your information to:</p>
                      <ul className="list-disc pl-5">
                        <li>Process and deliver your orders</li>
                        <li>Provide customer support</li>
                        <li>Improve our platform and services</li>
                        <li>Send order confirmations and updates</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Sharing of Information</h3>
                      <p>We do not sell your personal information. Your information may be shared with:</p>
                      <ul className="list-disc pl-5">
                        <li>Payment processors to complete transactions</li>
                        <li>Delivery services to fulfill orders</li>
                        <li>Service providers that help operate our platform</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Data Security</h3>
                      <p>We take reasonable measures to protect your personal data from unauthorized access, misuse, or disclosure.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Cookies and Tracking</h3>
                      <p>Our platform may use cookies or similar technologies to improve user experience and analyze usage.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Your Rights</h3>
                      <p>You may request to:</p>
                      <ul className="list-disc pl-5">
                        <li>Access your personal information</li>
                        <li>Update incorrect information</li>
                        <li>Request deletion of your account or personal data</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Changes to This Policy</h3>
                      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Contact Us</h3>
                      <p>If you have questions about this Privacy Policy, please contact us:</p>
                      <p>Email: info@thegreenbasket.com</p>
                    </li>
                  </ol>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'ghost'} className="flex items-center underline cursor-pointer !px-0 hover:bg-transparent">Refund & Return Policy</Button>
              </SheetTrigger>
              <SheetContent className="space-y-0">
                <SheetHeader>
                  <SheetTitle className='uppercase'>Refund & Return Policy</SheetTitle>
                  <SheetDescription>Last updated: {`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}</SheetDescription>
                </SheetHeader>
                <hr className="ml-2.5" />
                <div className="prose prose-sm max-w-none pl-4 pr-1 pb-5 overflow-y-scroll custom-scrollbar2">
                  <p>At <strong>TheGreenBasket</strong>, we want you to be satisfied with every order. If something is wrong with your purchase, we are here to help.</p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <h3 className="font-semibold">Eligible Refunds and Returns</h3>
                      <p>You may request a refund or replacement if:</p>
                      <ul className="list-disc pl-5">
                        <li>You receive a damaged item</li>
                        <li>You receive the wrong product</li>
                        <li>An item is missing from your order</li>
                        <li>The product is spoiled or expired upon delivery</li>
                      </ul>
                      <p>To qualify, you must report the issue <strong>within 24 hours of receiving your order</strong>.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Non-Returnable Items</h3>
                      <p>Due to the nature of grocery products, some items cannot be returned once delivered. These include:</p>
                      <ul className="list-disc pl-5">
                        <li>Opened food products</li>
                        <li>Perishable items after the reporting period</li>
                        <li>Items that were stored improperly after delivery</li>
                        <li>Items marked final sale</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">How to Request a Refund or Replacement</h3>
                      <p>If you experience an issue with your order:</p>
                      <ol>
                        <li>Contact our support team within 24 hours of delivery.</li>
                        <li>
                          <p>Provide:</p>
                          <ul className="list-disc pl-5">
                            <li>Your <strong>order number</strong></li>
                            <li><strong>Photos of the product </strong>(if damaged or incorrect)</li>
                            <li>A <strong>description of the issue</strong></li>
                          </ul>
                        </li>
                      </ol>
                      <p>Our support team will review your request and respond as quickly as possible.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Refund Processing</h3>
                      <p>If your refund request is approved:</p>
                      <ul className="list-disc pl-5">
                        <li>Refunds will be issued to your original payment method.</li>
                        <li>Processing time may take 3-7 business days, depending on your payment provider.</li>
                      </ul>
                      <p>In some cases, we may offer a replacement item or store credit instead of a refund.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Order Cancellations</h3>
                      <p>Orders may be cancelled <strong>before they are processed or dispatched.</strong></p>
                      <p>Orders may be cancelled before they are processed or dispatched.</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Contact Us</h3>
                      <p>If you need help with a return or refund request, please contact us:</p>
                      <p>Email: info@thegreenbasket.com</p>
                      <p>Phone: +98-0001-007</p>
                    </li>
                  </ol>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="w-full md:w-auto flex items-center justify-center md:justify-end gap-2 flex-wrap">
            <span>All Rights Reserved.</span> <span>&copy; TheGreenBasket Stores | {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;