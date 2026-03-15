export interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface DummyProduct {
  id: number;
  name: string;
  desc: string;
  img: string;
  price: number;
  weight: number;
}

export interface SingleItemProps {
  params: {
    id: string;
  };
}

export interface ProductFormOneProps {
  // id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}  

export interface ProductFormTwoProps {
  tags: string[];
  images: string[];
}
  
export interface ProductFormThreeProps {
  stock: string;
  price: string;
  discountPercentage: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
  weight: string;
}
  

export interface Product2 {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  quantity?: number;
  thumbnail: string;
  images: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  tags: string[];
  sku: string;
  weight: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
  reviews: {
    date: string;
    rating: string;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
}

export interface NavbarProps {
  firstDivClasses: string;
  secondDivClasses: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

// export interface ExtrasProduct {
//   id: string;
//   title: string;
//   description: string;
//   price: string;
//   category: string;
//   discountPercentage: string;
//   rating: number;
//   stock: number;
//   thumbnail: string;
//   images: string[];
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   tags: string[];
//   sku: string;
//   weight: number;
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   reviews: {
//     date: string;
//     rating: number;
//     comment: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
// }



// chart
export interface ChartData {
  monthYear: string;
  non_projects: number;
  projects: number;
}

// export type UserProductsDataProps = {
//   productTitle: string,
//   productDesc: string,
//   productPrice: string,
//   productOldPrice: string,
//   productCollections: string,
//   productInventoryStocks: string,
// }


// for the user form three individual steps
export type UserFormData = {
  email: string,
  fullName: string,
  userName: string,
  phoneNumber: string,
  storeName: string,
  storeTagName: string,
  storePhoneNumber: string,
  storeEmail: string,
  storeCategory: string,
}

export type UserEmailProps = {
  email: string
}

export type UserBasicDataProps = {
  fullName: string
  userName: string
  phoneNumber: string
  email: string
}

export type UserStoreDataProps = {
  storeName: string
  storeTagName: string
  storePhoneNumber: string
  storeEmail: string
  storeCategory: string
};
