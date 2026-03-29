import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const GiftDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="text-5xl mb-4 block">😔</span>
          <h2 className="text-2xl font-bold mb-4">পণ্যটি পাওয়া যায়নি</h2>
          <Link to="/gifts" className="btn-order inline-block">সকল গিফট দেখুন</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/gifts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> সকল গিফটে ফিরে যান
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl overflow-hidden bg-secondary/30"
          >
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full aspect-square object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex gap-2 mb-3">
              {product.badge && <span className="badge-discount">{product.badge}</span>}
              {product.discount > 0 && (
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  -{product.discount}% ছাড়
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {product.nameBn}
            </h1>
            <p className="text-sm text-muted-foreground mb-4">{product.name}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">৳{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">৳{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">{product.descriptionBn}</p>

            <div className="flex gap-3 mb-8">
              <a href="https://wa.me/8801700000000" className="btn-order flex-1 text-center text-lg">
                📱 অর্ডার করুন
              </a>
              <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck className="w-5 h-5 text-primary" /> ২৫০০+ টাকায় ফ্রি ডেলিভারি
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" /> ১০০% অরিজিনাল প্রোডাক্ট গ্যারান্টি
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RotateCcw className="w-5 h-5 text-primary" /> ৭ দিনের রিটার্ন পলিসি
              </div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="section-title mb-8">একই ক্যাটাগরির আরও গিফট</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GiftDetail;
