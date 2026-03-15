'use client';

import Loading from '@/app/loading';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { Product2 } from '../../types';
import { getProducts } from '@/api';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
// import FullPagination from './pagination/FullPagination';
// import Button from './button/Button';
// import { Product2 } from '@/utils/types';

const Products: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product2[]>([]);
  // const [cart, setCart] = useState<Product[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const router = useRouter();
  const pathName = usePathname();

  // Load cart from localStorage on mount
  // useEffect(() => {
  //   const productCart = localStorage.getItem('cart');
  //   if (productCart) {
  //     // setCart(JSON.parse(productCart));
  //   }
  // }, []);

  // Fetch products data
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const products = await getProducts();
        // console.log("products?.data: ", products?.data)
        // console.log("products?.meta: ", products?.meta)
        setProducts(products?.data);
        setTotalProducts(products?.data?.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Update rows per page
  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // Refresh the page
  const refreshPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.refresh();
  }

  if (loading) return <Loading />;

  return (
    products?.length > 0 ?
      <section className='py-3 md:py-5 px-2 md:px-6' id='content'>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {
            currentProducts.map((product, index) =>
              <React.Fragment key={index}>
                <ProductCard product={product} />
              </React.Fragment>
              // <ProductCard key={product._id} product={product} addToCart={addToCart} />
            )
          }
        </div>

        {/* {pathName === '/products' &&
          <FullPagination
            productsPerPage={productsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            totalProducts={totalProducts}
            totalPages={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
        } */}

      </section>
    : 
    <div className='w-full flex flex-col items-center gap-4'>
      <p>No Products available at this time</p>
      <Button 
        onClick={refreshPage} 
        className="flex items-center gap-3 bg-secondary hover:bg-secondary_hover font-bold rounded-xl text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md"
      >
        Refresh Page
      </Button>
    </div>
  );
}

export default Products;
