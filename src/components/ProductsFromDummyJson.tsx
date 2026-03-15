"use client";

// import { East } from '@mui/icons-material';
// import ButtonLink from './button/ButtonLink';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { Product2 } from '@/utils/types';
// import { getDummyJsonProducts } from '@/lib/api';
// import FullPagination from './pagination/FullPagination';
import Loading from '@/app/loading';
import ProductListView from './ProductListView';
import ProductGridView from './ProductGridView';
import { Product2 } from '../../types';
import { getDummyJsonProducts } from '@/api';
import ViewButton from './ViewButton';
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';
import { toast } from 'sonner';
import FullPagination from './FullPagination';
// import ViewButton from './button/ViewButton';

const ProductsFromDummyJson: React.FC = () => {
  const [currentProducts, setCurrentProducts] = useState<Product2[]>([]);
  const pathName = usePathname();
  const router = useRouter();

  const [gridView, setGridView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product2[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    if (pathName !== '/dummyjson-products') {
      setCurrentProducts(products.slice(0, 5));
    }
  },[pathName, products]);
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await getDummyJsonProducts();
        const groceryProducts = res.products.filter(
          (product: Product2) => product.category === "groceries"
        );
        setProducts(groceryProducts);
        // console.log("groceryProducts: ", groceryProducts);
        setTotalProducts(groceryProducts.length);
      } catch (error) {
        toast.error(`Error fetching products: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsForPagination = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const calculatedProducts = pathName !== '/dummyjson-products' ? currentProducts : currentProductsForPagination;

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(totalProducts < 10 ? totalProducts : Number(event.target.value));
    // setProductsPerPage(products.length < Number(event.target.value) ? products.length : Number(event.target.value));
    setCurrentPage(1);
  };
    
  if (loading) return <Loading />;
    
  return (
    <div className={`${pathName !== '/dummyjson-products' ? 'bg-[#fffbeb]' : ''} w-full pt-12 pb-20 px-4 lg:px-8 xl:px-20`}>
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h3 className='text-xl lg:text-3xl mx-auto md:mx-0 font-bold text-primary'>{pathName === '/' ? 'From DummyJson API' : 'Products from DummyJson API'}</h3>
        <div className="w-full md:w-auto flex items-center justify-between gap-6 flex-wrap">
          <ViewButton gridView={gridView} setGridView={setGridView} />
          {pathName !== '/dummyjson-products' ? 
          <Button 
            variant={'ghost'}
            onClick={() => router.push('/dummyjson-products')} 
            className='text-dark_orange font-bold text-[0.95rem] gap-2 group cursor-pointer hover:bg-transparent' 
          >
            See more
            <MoveRight className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1 size-5' />
          </Button>
          // <ButtonLink url='/dummyjson-products' btnText='See more' classes='text-dark_orange font-semibold gap-2 group' icon2={<East className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1' />}  />
          : null
          }
        </div>
      </div>

      {/* <div className='flex items-center justify-center'>
        <Image
          src={fetchedProductsImage}
          alt={`${'--'} preview`}
          // fill
          width={300}
          height={400}
          className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div> */}

      {gridView ?
        <ProductGridView products={calculatedProducts} /> 
        :
        <ProductListView products={calculatedProducts} /> 
      }

      {pathName === '/dummyjson-products' &&
        <FullPagination
          productsPerPage={productsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
          totalProducts={totalProducts}
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      }
    </div>
  )
}

export default ProductsFromDummyJson;