'use client';

import { categories } from '@/lib/data';
import { Expand, Shrink } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Categories: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);

  const router = useRouter();

  return (
    <section id='productsContent' className="flex gap-3 md:gap-6 items-center justify-start pb-7 md:pt-10 md:pb-10 px-2 md:px-6 flex-wrap">
      {
        categories.slice(0, viewAll ? categories.length : 5).map(category => 
          <div 
            key={category.id} 
            onClick={() => router.push(`/dummyjson-products?category=${category.slug}`)}
            className="flex justify-start flex-1 gap-4 border cursor-pointer bg-white p-4 rounded-xl transform transition-transform duration-300 hover:-rotate-3 shadow-md hover:shadow-lg"
          >
            <span className='self-start'>
              <h2 className='text-lg font-semibold text-primary'>{category.name}</h2>
              <p className='text-gray-500 font-semibold'>{category.desc}</p>
            </span>
            <span className="relative w-14 h-14 self-end mt-8 rotate-12">
              <Image
                src={category.img}
                alt={`${category.name} preview`}
                fill
                className='object-cover'
                sizes="100%"
              />
            </span>
          </div>
        )
      }

      <Button
        onClick={() => setViewAll(prev => !prev)}
        className='flex flex-col items-center h-full w-fit justify-center gap-4 cursor-pointer bg-secondary hover:bg-secondary_hover p-4 rounded-xl min-w-[90px] group focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none'
      >
        <span className="text-sm md:text-lg text-primary bg-white rounded-full p-2 flex items-center"> 
          <span className={`transition-all duration-500 ease-in-out transform ${!viewAll ? 'group-hover:scale-125' : 'group-hover:scale-75'}`}>
            {!viewAll ? <Expand className='size-4' /> : <Shrink className='size-6' />}
          </span>
        </span>
        <p className='text-sm text-primary font-semibold'>{!viewAll ? 'See more' : 'See less'}</p>
      </Button>

    </section>
  )
}

export default Categories;