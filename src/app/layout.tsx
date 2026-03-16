import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Toaster } from 'sonner';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const jost = Jost({ 
  variable: '--font-jost',
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
});

export const metadata: Metadata = {
  title: {
    default: "TheGreenBasket Stores | Online Store for Groceries of all sorts",
    template: "%s | TheGreenBasket Stores"
  },
  description: "TheGreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
  keywords: "Next.js, TypeScript, TailwindCSS, E-commerce, Groceries, store, Product Listing, Product Management, CRUD, Admin",
  openGraph: {
    type: 'website',
    url: 'https://greenbasket-cyan.vercel.app',
    title: "TheGreenBasket Stores",
    description: "TheGreenBasket is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
    // images: [
    //   {
    //     url: 'https://yourwebsite.com/path/to/image.jpg',
    //     // url: '/images/logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Open Graph Image',
    //   },
    // ], 
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "TheGreenBasket Store",
  //   description: "TheGreenBasket is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
  //   image: 'https://yourwebsite.com/path/to/twitter-image.jpg',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`} suppressHydrationWarning>
        {children}

        <ScrollToTopButton />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
