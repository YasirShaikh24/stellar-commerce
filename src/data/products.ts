import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Quantum Pro Headphones',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80',
    ],
    category: 'Audio',
    description: 'Premium wireless headphones with active noise cancellation, 40-hour battery life, and spatial audio support. Experience music like never before with our proprietary sound technology.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Ultra Slim Smartwatch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
    ],
    category: 'Wearables',
    description: 'Next-generation smartwatch with always-on AMOLED display, health monitoring, and seamless integration with all your devices. Track your fitness goals with precision.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Nebula Wireless Speaker',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
    ],
    category: 'Audio',
    description: 'Portable Bluetooth speaker with 360° sound projection, IPX7 waterproof rating, and 24-hour playtime. Perfect for any adventure.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Carbon Fiber Laptop Stand',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80',
    ],
    category: 'Accessories',
    description: 'Ergonomic laptop stand crafted from aerospace-grade carbon fiber. Elevate your workspace with style and precision engineering.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Phantom Gaming Mouse',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80',
    ],
    category: 'Gaming',
    description: 'Ultra-responsive gaming mouse with 25,600 DPI optical sensor, customizable RGB lighting, and ergonomic design for marathon gaming sessions.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Mechanical Pro Keyboard',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80',
    ],
    category: 'Accessories',
    description: 'Premium mechanical keyboard with hot-swappable switches, per-key RGB backlighting, and aircraft-grade aluminum frame.',
    inStock: true,
  },
  {
    id: '7',
    name: 'AeroFlow Earbuds',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80',
    ],
    category: 'Audio',
    description: 'True wireless earbuds with hybrid ANC, transparency mode, and premium sound quality. Designed for audiophiles on the go.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Infinity Webcam 4K',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&q=80',
    ],
    category: 'Accessories',
    description: '4K Ultra HD webcam with auto-focus, HDR, and studio-quality microphone array. Look your best in every video call.',
    inStock: false,
  },
];

export const categories = [
  { name: 'Audio', icon: '🎧', count: 3 },
  { name: 'Wearables', icon: '⌚', count: 1 },
  { name: 'Accessories', icon: '⌨️', count: 3 },
  { name: 'Gaming', icon: '🎮', count: 1 },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getBestSellers = (): Product[] => {
  return products.slice(2, 6);
};
