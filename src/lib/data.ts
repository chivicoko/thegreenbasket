export const categories = [
    { id: 1, name: 'Fresh Produce', slug: 'fresh-produce', desc: 'Local market', img: "/images/spinach.jpeg" },
    { id: 2, name: 'Dairy', slug: 'dairy', desc: "Farm animals' produce", img: "/images/milk.jpeg" },
    { id: 3, name: 'Meat & Poultry', slug: 'meat-and-poultry', desc: 'Chicken/beef produce', img: "/images/chicken.png" },
    { id: 4, name: 'Seafood', slug: 'seafood', desc: "Sea animals' produce", img: "/images/fish.jpeg" },
    { id: 5, name: 'Grains & Cereals', slug: 'grains-and-cereals', desc: "Farm seeds and nuts", img: "/images/corn.png" },
    { id: 6, name: 'Bakery', slug: 'bakery', desc: "Baked foods/snacks", img: "/images/cake.jpeg" },
    { id: 7, name: 'Canned & Jarred Goods', slug: 'canned-and-jarred-goods', desc: "Processed foods/drinks", img: "/images/cocaCola.jpeg" },
    { id: 8, name: 'Frozen Foods', slug: 'frozen-foods', desc: 'Cold preserved foods', img: "/images/yoghurt.jpeg" },
    { id: 9, name: 'Snacks & Confectionery', slug: 'snacks-and-confectionery', desc: 'baked/fried foods', img: "/images/chocolateBar.jpg" },
    { id: 10, name: 'Beverages', slug: 'beverages', desc: 'Soft/hard drinks', img: "/images/coffee.jpeg" },
    { id: 11, name: 'Pantry Staples', slug: 'pantry-staples', desc: 'Cooking fluids/powders', img: "/images/ketchup.jpeg" },
    { id: 12, name: 'Baking Supplies', slug: 'baking-supplies', desc: 'Baking fluids/powders', img: "/images/yeast.png" },
    { id: 13, name: 'Non-Food Items', slug: 'non-food-items', desc: 'House cleaning supplies', img: "/images/wiper.png" },
];

export const discountCard2 = [
    { id: 1, color1: 'text-orange-950', color2: 'text-orange-800', bgColor1: '#fee2e2', bgColor2: 'bg-orange-950', text1: 'Save', text2extra: '$', text2: '29', text3: 'Enjoy discount for all types of groceries and frozen items', img: "/images/spinach.jpeg" },
    { id: 2, color1: 'text-blue-950', color2: 'text-blue-900', bgColor1: '#dbeafe', bgColor2: 'bg-blue-950', text1: 'Discount', text2extra: '%', text2: '30', text3: "Enjoy discount for all types of groceries and frozen items", img: "/images/milk.jpeg" },
    { id: 3, color1: 'text-orange-950', color2: 'text-orange-800', bgColor1: '#f3e8ff', bgColor2: 'bg-orange-950', text1: 'Up to', text2extra: '%', text2: '50', text3: 'Enjoy discount for all types of groceries and frozen items', img: "/images/chicken.png" },
    { id: 4, color1: 'text-blue-950', color2: 'text-blue-900', bgColor1: '#ecfccb', bgColor2: 'bg-blue-950', text1: 'Free', text2extra: '', text2: 'SHIP', text3: "Enjoy discount for all types of groceries and frozen items", img: "/images/fish.jpeg" },
];

export const extraImages = [
    { id: 1, img: "/images/spinach.jpeg" },
    { id: 2, img: "/images/milk.jpeg" },
    { id: 3, img: "/images/chicken.png" },
    { id: 4, img: "/images/fish.jpeg" },
]

export const sindleProduct = {
  id: 1,
  name: 'Fresh Spinach',
  desc: 'Local market',
  category: "fruit",
  img: "/images/spinach.jpeg",
  price: 22.12,
  weight: 100
}

// export const products = [
//     { id: 1, title: 'Fresh Spinach', description: 'Local market', thumbnail: "/images/spinach.jpeg", price: '22.12', weight: '100' },
//     { id: 2, title: 'Brown Coffee', description: 'Soft/hard drinks', thumbnail: "/images/coffee.jpeg", price: '23.23', weight: '300' },
//     { id: 3, title: 'Seasoned Chicken', description: 'Chicken/beef produce', thumbnail: "/images/chicken.png", price: '32.05', weight: '250' },
//     { id: 4, title: 'Mackerel Fish', description: "Sea animals' produce", thumbnail: "/images/fish.jpeg", price: '23.23', weight: '150' },
//     { id: 5, title: 'Yellow Corn', description: "Farm seeds and nuts", thumbnail: "/images/corn.png", price: '12.34', weight: '500' },
//     { id: 6, title: 'Chocolate Cake', description: "Baked foods/snacks", thumbnail: "/images/cake.jpeg", price: '43.60', weight: '450' },
//     { id: 7, title: 'Coca Cola Drink', description: "Processed foods/drinks", thumbnail: "/images/cocaCola.jpeg", price: '23.44', weight: '300' },
//     { id: 8, title: 'Yoghurt', description: 'Cold preserved foods', thumbnail: "/images/yoghurt.jpeg", price: '45.90', weight: '320' },
//     { id: 9, title: 'Chocolate Bar', description: 'baked/fried foods', thumbnail: "/images/chocolateBar.jpg", price: '32.05', weight: '220' },
//     { id: 10, title: 'Leavening Yeast', description: 'Baking fluids/powders', thumbnail: "/images/yeast.png", price: '43.60', weight: '410' },
//     { id: 11, title: 'Red Ketchup', description: 'Cooking fluids/powders', thumbnail: "/images/ketchup.jpeg", price: '12.34', weight: '400' },
//     { id: 12, title: 'Luctre Milk', description: "Farm animals' produce", thumbnail: "/images/milk.jpeg", price: '45.90', weight: '400' },
//     { id: 13, title: 'Butt Wiper', description: 'House cleaning supplies', thumbnail: "/images/wiper.png", price: '23.44', weight: '510' },
// ]

export const products = [
  {
    id: '1',
    title: 'Beef Steak',
    description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    price: '12.99',
    discountPercentage: '17.99',
    rating: '2.88',
    stock: '96',
    thumbnail: "/images/spinach.jpeg",
    images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
    weight: '9',
    dimensions: {
      width: '23.35',
      height: '13.48',
      depth: '26.4',
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    tags: ['meat', 'goat meat', 'protein'],
    sku: 'BWWA2MSO',
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: '21',
    reviews: [
      {
        date: 'May 23, 2024',
        rating: '4',
        comment: 'Very pleased!',
        reviewerName: 'Ethan Martinez',
        reviewerEmail: 'ethan.martinez@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '2',
        comment: 'Disappointing product!',
        reviewerName: 'Owen Fisher',
        reviewerEmail: 'owen.fisher@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '3',
        comment: 'Very happy with my purchase!',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      }
    ],
    meta: {
      createdAt: '2024-05-23T08:56:21.620Z',
      updatedAt: '2024-05-23T08:56:21.620Z',
      barcode: '"8335515097879"',
      qrCode: '/images/qrCode.png',
    },
  },
  {
    id: '2',
    title: 'Chicken Steak',
    description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    price: '12.99',
    discountPercentage: '17.99',
    rating: '2.88',
    stock: '96',
    thumbnail: "/images/fish.jpeg",
    images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
    weight: '9',
    dimensions: {
      width: '23.35',
      height: '13.48',
      depth: '26.4',
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    tags: ['meat', 'goat meat', 'protein'],
    sku: 'BWWA2MSO',
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: '21',
    reviews: [
      {
        date: 'May 23, 2024',
        rating: '4',
        comment: 'Very pleased!',
        reviewerName: 'Ethan Martinez',
        reviewerEmail: 'ethan.martinez@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '2',
        comment: 'Disappointing product!',
        reviewerName: 'Owen Fisher',
        reviewerEmail: 'owen.fisher@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '3',
        comment: 'Very happy with my purchase!',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      }
    ],
    meta: {
      createdAt: '2024-05-23T08:56:21.620Z',
      updatedAt: '2024-05-23T08:56:21.620Z',
      barcode: '"8335515097879"',
      qrCode: '/images/qrCode.png',
    },
  },
  {
    id: '3',
    title: 'Chocolate Cake',
    description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    price: '12.99',
    discountPercentage: '17.99',
    rating: '2.88',
    stock: '96',
    thumbnail: "/images/cake.jpeg",
    images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
    weight: '9',
    dimensions: {
      width: '23.35',
      height: '13.48',
      depth: '26.4',
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    tags: ['meat', 'goat meat', 'protein'],
    sku: 'BWWA2MSO',
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: '21',
    reviews: [
      {
        date: 'May 23, 2024',
        rating: '4',
        comment: 'Very pleased!',
        reviewerName: 'Ethan Martinez',
        reviewerEmail: 'ethan.martinez@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '2',
        comment: 'Disappointing product!',
        reviewerName: 'Owen Fisher',
        reviewerEmail: 'owen.fisher@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '3',
        comment: 'Very happy with my purchase!',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      }
    ],
    meta: {
      createdAt: '2024-05-23T08:56:21.620Z',
      updatedAt: '2024-05-23T08:56:21.620Z',
      barcode: '"8335515097879"',
      qrCode: '/images/qrCode.png',
    },
  },
  {
    id: '4',
    title: 'Coffee Express',
    description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    price: '12.99',
    discountPercentage: '17.99',
    rating: '2.88',
    stock: '96',
    thumbnail: "/images/coffee.jpeg",
    images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
    weight: '9',
    dimensions: {
      width: '23.35',
      height: '13.48',
      depth: '26.4',
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    tags: ['meat', 'goat meat', 'protein'],
    sku: 'BWWA2MSO',
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: '21',
    reviews: [
      {
        date: 'May 23, 2024',
        rating: '4',
        comment: 'Very pleased!',
        reviewerName: 'Ethan Martinez',
        reviewerEmail: 'ethan.martinez@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '2',
        comment: 'Disappointing product!',
        reviewerName: 'Owen Fisher',
        reviewerEmail: 'owen.fisher@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '3',
        comment: 'Very happy with my purchase!',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      }
    ],
    meta: {
      createdAt: '2024-05-23T08:56:21.620Z',
      updatedAt: '2024-05-23T08:56:21.620Z',
      barcode: '"8335515097879"',
      qrCode: '/images/qrCode.png',
    },
  },
  {
    id: '5',
    title: '2-in-1 Milk',
    description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    price: '12.99',
    discountPercentage: '17.99',
    rating: '2.88',
    stock: '96',
    thumbnail: "/images/milk.jpeg",
    images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/milk.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
    weight: '9',
    dimensions: {
      width: '23.35',
      height: '13.48',
      depth: '26.4',
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships overnight',
    availabilityStatus: 'In Stock',
    tags: ['meat', 'goat meat', 'protein'],
    sku: 'BWWA2MSO',
    returnPolicy: '90 days return policy',
    minimumOrderQuantity: '21',
    reviews: [
      {
        date: 'May 23, 2024',
        rating: '4',
        comment: 'Very pleased!',
        reviewerName: 'Ethan Martinez',
        reviewerEmail: 'ethan.martinez@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '2',
        comment: 'Disappointing product!',
        reviewerName: 'Owen Fisher',
        reviewerEmail: 'owen.fisher@x.dummyjson.com',
      },
      {
        date: 'May 23, 2024',
        rating: '3',
        comment: 'Very happy with my purchase!',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      }
    ],
    meta: {
      createdAt: '2024-05-23T08:56:21.620Z',
      updatedAt: '2024-05-23T08:56:21.620Z',
      barcode: '"8335515097879"',
      qrCode: '/images/qrCode.png',
    },
  },
]


export const categoryList = [
    'Audio and Sound Devices', 'Computers and Accessories', 'Cameras and Photography Equipment', 
    'Smart Home and Automation', 'Wearable Technology', 'Mobile Devices and Accessories', 
    'Home Appliances', 'TVs and Home Entertainment', 'Gaming', 
    'Motor Gadgets and Electronics', 'Health and Personal Care Electronics', 
    'Networking and Connectivity', 'Office Electronics'
];
  

export const footerLinks = [
    {
      id: 1,
      title: 'Departments',
      links: [
        { id: 1, url: "", text: 'Fashion', },
        { id: 2, url: "", text: 'Education Product', },
        { id: 3, url: "", text: 'Frozen Food', },
        { id: 4, url: "", text: 'Beverages', },
        { id: 5, url: "", text: 'Organic Groceries', },
        { id: 6, url: "", text: 'Office Supplies', },
        { id: 7, url: "", text: 'Beauty Products', },
      ]
    },
    {
      id: 2,
      title: 'About us',
      links: [
        { id: 1, url: "", text: 'About Shopcart', },
        { id: 2, url: "", text: 'Careers', },
        { id: 3, url: "", text: 'News & Blog', },
        { id: 4, url: "", text: 'Help', },
        { id: 5, url: "", text: 'Press Center', },
      ]
    },
    {
      id: 3,
      title: 'Services',
      links: [
        { id: 1, url: "", text: 'Gift Card', },
        { id: 2, url: "", text: 'Mobile App', },
        { id: 3, url: "", text: 'Shipping & Delivery', },
        { id: 4, url: "", text: 'Order Pickup', },
      ]
    },
    {
      id: 4,
      title: 'Help',
      links: [
        { id: 1, url: "", text: 'Shopcart Help', },
        { id: 2, url: "", text: 'Returns', },
        { id: 3, url: "", text: 'Track Orders', },
        { id: 4, url: "", text: 'Contact us', },
      ]
    },
  ];

  
export const UsageHistory = [
  { non_projects: 1, projects: 3, monthYear: 'Jan 2024' },
  { non_projects: 8, projects: 16, monthYear: 'Jun 2023' },
  { non_projects: 3, projects: 9, monthYear: 'May 2022' },
  { non_projects: 13, projects: 20, monthYear: 'May 2021' },
  { non_projects: 12, projects: 19, monthYear: 'May 2020' },
  { non_projects: 3, projects: 9, monthYear: 'May 2019' },
  { non_projects: 6, projects: 12, monthYear: 'May 2018' },
];

export const tableHead = [
  {id: 1, title: '#'},
  {id: 2, title: 'product'},
  {id: 3, title: 'Title'},
  {id: 4, title: 'Price'},
  {id: 5, title: 'Actions'},
]

export const PRODUCT = {
  id: '1',
  title: 'Beef Steak',
  description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
  category: 'groceries',
  price: '12.99',
  discountPercentage: '17.99',
  rating: '2.88',
  stock: '96',
  thumbnail: "/images/spinach.jpeg",
  images: ['/images/spinach.jpeg', '/images/fish.jpeg', '/images/cake.jpeg', '/images/coffee.jpeg'],
  weight: '9',
  dimensions: {
    width: '23.35',
    height: '13.48',
    depth: '26.4',
  },
  warrantyInformation: '2 year warranty',
  shippingInformation: 'Ships overnight',
  availabilityStatus: 'In Stock',
  tags: ['meat', 'goat meat', 'protein'],
  sku: 'BWWA2MSO',
  returnPolicy: '90 days return policy',
  minimumOrderQuantity: '21',
  reviews: [
    {
      date: 'May 23, 2024',
      rating: '4',
      comment: 'Very pleased!',
      reviewerName: 'Ethan Martinez',
      reviewerEmail: 'ethan.martinez@x.dummyjson.com',
    },
    {
      date: 'May 23, 2024',
      rating: '2',
      comment: 'Disappointing product!',
      reviewerName: 'Owen Fisher',
      reviewerEmail: 'owen.fisher@x.dummyjson.com',
    },
    {
      date: 'May 23, 2024',
      rating: '3',
      comment: 'Very happy with my purchase!',
      reviewerName: 'Scarlett Wright',
      reviewerEmail: 'scarlett.wright@x.dummyjson.com',
    }
  ],
  meta: {
    createdAt: '2024-05-23T08:56:21.620Z',
    updatedAt: '2024-05-23T08:56:21.620Z',
    barcode: '"8335515097879"',
    qrCode: '/images/qrCode.png',
  },
}


export const INITIAL_PRODUCT_DATA = {
  id: '',
  title: '',
  description: '',
  category: '',
  price: '',
  discountPercentage: '',
  rating: '',
  stock: '',
  thumbnail: "",
  images: [''],
  weight: '',
  dimensions: {
    width: '23.35',
    height: '13.48',
    depth: '26.4',
  },
  warrantyInformation: '2 year warranty',
  shippingInformation: 'Ships overnight',
  availabilityStatus: 'In Stock',
  tags: ['meat', 'goat meat', 'protein'],
  sku: 'BWWA2MSO',
  returnPolicy: '90 days return policy',
  minimumOrderQuantity: '',
  reviews: [
    {
      date: 'May 23, 2024',
      rating: '4',
      comment: 'Very pleased!',
      reviewerName: 'Ethan Martinez',
      reviewerEmail: 'ethan.martinez@x.dummyjson.com',
    },
    {
      date: 'May 23, 2024',
      rating: '2',
      comment: 'Disappointing product!',
      reviewerName: 'Owen Fisher',
      reviewerEmail: 'owen.fisher@x.dummyjson.com',
    },
    {
      date: 'May 23, 2024',
      rating: '3',
      comment: 'Very happy with my purchase!',
      reviewerName: 'Scarlett Wright',
      reviewerEmail: 'scarlett.wright@x.dummyjson.com',
    }
  ],
  meta: {
    createdAt: '2024-05-23T08:56:21.620Z',
    updatedAt: '2024-05-23T08:56:21.620Z',
    barcode: '"8335515097879"',
    qrCode: '/images/qrCode.png',
  },
}


export const INITIAL_USER_DATA = {
  email: '',
  fullName: '',
  userName: '',
  phoneNumber: '',
  storeName: '',
  storeTagName: '',
  storePhoneNumber: '',
  storeEmail: '',
  storeCategory: '',
}

