import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';

export type Product = {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  categoryBn: string;
  image: string;
  description: string;
  descriptionBn: string;
  badge?: string;
  inStock: boolean;
};

export const categories = [
  { id: 'combo', name: 'Combo Package', nameBn: 'কম্বো প্যাকেজ', icon: '🎁' },
  { id: 'cosmetics', name: 'Cosmetics', nameBn: 'কসমেটিক্স', icon: '💄' },
  { id: 'saree', name: 'Saree Collection', nameBn: 'শাড়ি কালেকশন', icon: '👗' },
  { id: 'watch', name: 'Watches', nameBn: 'ঘড়ি', icon: '⌚' },
  { id: 'giftbox', name: 'Gift Box', nameBn: 'গিফট বক্স', icon: '📦' },
  { id: 'flowers', name: 'Flowers & Teddy', nameBn: 'ফুল ও টেডি', icon: '🌹' },
  { id: 'mens', name: "Men's Collection", nameBn: 'পুরুষদের কালেকশন', icon: '👔' },
  { id: 'chocolate', name: 'Chocolates', nameBn: 'চকলেট', icon: '🍫' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cosmetics Gift Box',
    nameBn: 'প্রিমিয়াম কসমেটিক্স গিফট বক্স',
    price: 3300,
    originalPrice: 3750,
    discount: 12,
    category: 'combo',
    categoryBn: 'কম্বো প্যাকেজ',
    image: product1,
    description: 'A beautifully curated cosmetics gift box with premium skincare and beauty products, perfect for any occasion.',
    descriptionBn: 'প্রিমিয়াম স্কিনকেয়ার ও বিউটি প্রোডাক্ট সহ সুন্দরভাবে সাজানো কসমেটিক্স গিফট বক্স।',
    badge: 'COMBO',
    inStock: true,
  },
  {
    id: '2',
    name: 'Luxury Chocolate Collection',
    nameBn: 'লাক্সারি চকলেট কালেকশন',
    price: 2500,
    originalPrice: 2800,
    discount: 11,
    category: 'chocolate',
    categoryBn: 'চকলেট',
    image: product2,
    description: 'Handpicked premium chocolates and truffles in an elegant gift box, perfect for chocolate lovers.',
    descriptionBn: 'চকলেট প্রেমীদের জন্য নির্বাচিত প্রিমিয়াম চকলেট ও ট্রাফল।',
    badge: 'POPULAR',
    inStock: true,
  },
  {
    id: '3',
    name: 'Rose Gold Watch Set',
    nameBn: 'রোজ গোল্ড ঘড়ি সেট',
    price: 4500,
    originalPrice: 5200,
    discount: 13,
    category: 'watch',
    categoryBn: 'ঘড়ি',
    image: product3,
    description: 'Elegant rose gold watch with matching bracelet, presented in a luxury gift box.',
    descriptionBn: 'লাক্সারি গিফট বক্সে রোজ গোল্ড ঘড়ি ও ম্যাচিং ব্রেসলেট।',
    badge: 'NEW',
    inStock: true,
  },
  {
    id: '4',
    name: 'Traditional Katan Saree',
    nameBn: 'ট্র্যাডিশনাল কাতান শাড়ি',
    price: 5500,
    originalPrice: 6500,
    discount: 15,
    category: 'saree',
    categoryBn: 'শাড়ি কালেকশন',
    image: product4,
    description: 'Premium quality traditional katan saree with intricate gold work, perfect for special occasions.',
    descriptionBn: 'বিশেষ উপলক্ষের জন্য ইনট্রিকেট গোল্ড ওয়ার্ক সহ প্রিমিয়াম কাতান শাড়ি।',
    badge: 'PREMIUM',
    inStock: true,
  },
  {
    id: '5',
    name: 'Beauty Basket Gift Set',
    nameBn: 'বিউটি বাস্কেট গিফট সেট',
    price: 3800,
    originalPrice: 4300,
    discount: 12,
    category: 'cosmetics',
    categoryBn: 'কসমেটিক্স',
    image: product5,
    description: 'Complete beauty care gift basket with skincare essentials, lipstick, and perfume.',
    descriptionBn: 'স্কিনকেয়ার, লিপস্টিক ও পারফিউম সহ কমপ্লিট বিউটি কেয়ার গিফট বাস্কেট।',
    badge: 'COMBO',
    inStock: true,
  },
  {
    id: '6',
    name: 'Rose Bouquet with Teddy',
    nameBn: 'রোজ বুকে উইথ টেডি',
    price: 1800,
    originalPrice: 2100,
    discount: 14,
    category: 'flowers',
    categoryBn: 'ফুল ও টেডি',
    image: product6,
    description: 'Fresh pink roses arranged beautifully with a cute teddy bear, perfect for expressing love.',
    descriptionBn: 'ভালোবাসা প্রকাশের জন্য সুন্দর গোলাপি গোলাপ ও কিউট টেডি বিয়ার।',
    inStock: true,
  },
  {
    id: '7',
    name: "Men's Premium Gift Set",
    nameBn: "পুরুষদের প্রিমিয়াম গিফট সেট",
    price: 4200,
    originalPrice: 4800,
    discount: 12,
    category: 'mens',
    categoryBn: 'পুরুষদের কালেকশন',
    image: product7,
    description: 'Premium leather wallet, belt, and watch set in a luxury gift box for the distinguished gentleman.',
    descriptionBn: 'প্রিমিয়াম লেদার ওয়ালেট, বেল্ট ও ঘড়ি সেট লাক্সারি গিফট বক্সে।',
    badge: 'PREMIUM',
    inStock: true,
  },
  {
    id: '8',
    name: 'Surprise Gift Box Deluxe',
    nameBn: 'সারপ্রাইজ গিফট বক্স ডিলাক্স',
    price: 2800,
    originalPrice: 3200,
    discount: 12,
    category: 'giftbox',
    categoryBn: 'গিফট বক্স',
    image: product1,
    description: 'A deluxe surprise gift box curated with love, containing premium items for your special someone.',
    descriptionBn: 'ভালোবাসা দিয়ে সাজানো ডিলাক্স সারপ্রাইজ গিফট বক্স।',
    badge: 'COMBO',
    inStock: true,
  },
];
