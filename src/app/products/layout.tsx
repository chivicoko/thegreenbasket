import { ReactNode } from 'react';
import Footer from "@/components/footer/Footer";
import HeaderTwo from '@/components/HeaderTwo';


export const metadata = {
  title: "Products",
  description: "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <div className="">
        <HeaderTwo />
      
        {children}

        <Footer />
      </div>
    </div>
  );
}
