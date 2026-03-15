'use client';

import ProductsFromDummyJson from '@/components/ProductsFromDummyJson'
// import { useUserForm } from '@/context/UserFormContext';
// import { useRouter } from 'next/navigation';
import React from 'react'

const DummyJsonProducts = () => {
  // const {userInfo} = useUserForm();
  // const router = useRouter();
  
  // if(!userInfo) router.push('/users/auth/register');

  return (
    <ProductsFromDummyJson />
  )
}

export default DummyJsonProducts;