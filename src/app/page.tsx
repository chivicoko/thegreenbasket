import Categories from '@/components/Categories';
import Footer from '@/components/footer/Footer';
import Header from '@/components/Header';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div className="font-(family-name:--font-geist-sans)">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}
