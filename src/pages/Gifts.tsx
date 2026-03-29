import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Gifts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'discount') result = [...result].sort((a, b) => b.discount - a.discount);
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title mb-2">সকল গিফট আইটেম</h1>
        <p className="text-muted-foreground mb-8">আপনার পছন্দের গিফট খুঁজে নিন</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSearchParams({})}
            className={`badge-category ${activeCategory === 'all' ? '!bg-primary !text-primary-foreground' : ''}`}
          >
            সকল
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.id })}
              className={`badge-category ${activeCategory === cat.id ? '!bg-primary !text-primary-foreground' : ''}`}
            >
              {cat.icon} {cat.nameBn}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">{filtered.length}টি আইটেম পাওয়া গেছে</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-card text-foreground"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-low">দাম: কম → বেশি</option>
            <option value="price-high">দাম: বেশি → কম</option>
            <option value="discount">সর্বোচ্চ ডিসকাউন্ট</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">😔</span>
            <h3 className="text-xl font-semibold text-foreground mb-2">কোনো পণ্য পাওয়া যায়নি</h3>
            <p className="text-muted-foreground">অন্য ক্যাটাগরি দেখুন</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gifts;
