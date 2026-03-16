"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import { Product2 } from '../../../types';
import { getDummyJsonProducts } from '@/api';
import ViewButton from '../ViewButton';
import ProductGridView from '../ProductGridView';
import ProductListView from '../ProductListView';
import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const ProductsJustForYou: React.FC = () => {
  const [products, setProducts] = useState<Product2[]>([]);
  const [gridView, setGridView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const pathName = usePathname();
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await getDummyJsonProducts();
        const groceryProducts = res.products.filter(
          (product: Product2) => product.category === "groceries"
        );
        setProducts(groceryProducts.slice(10, 15));
        // console.log("groceryProducts: ", groceryProducts);
      } catch (error) {
        toast.error(`Error fetching products: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className='bg-[#fffbeb] w-full pt-10 md:pt-16 pb-20 px-4 lg:px-8 xl:px-20'>
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h3 className='text-xl lg:text-3xl mx-auto md:mx-0 font-bold text-primary'>{pathName === '/' ? 'Just for you' : 'Most selling products'}</h3>
        <div className="w-full md:w-auto flex items-center justify-between gap-6 flex-wrap">
          <ViewButton gridView={gridView} setGridView={setGridView} />
          {pathName !== '/products' ? 
          <Button 
            variant={'ghost'}
            onClick={() => router.push('/products')} 
            className='text-dark_orange font-bold text-[0.95rem] gap-2 group cursor-pointer hover:bg-transparent' 
          >
            See more
            <MoveRight className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1 size-5' />
          </Button>
          : null
          }
        </div>
      </div>
      
      {gridView ?
        <ProductGridView products={products} isDummyJsonData={true} /> 
        :
        <ProductListView products={products} isDummyJsonData={true} /> 
      }
    </div>
  )
}

export default ProductsJustForYou;