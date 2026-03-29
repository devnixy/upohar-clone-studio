import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, Clock, Gift } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const stats = [
  { value: '৫০০০+', label: 'সন্তুষ্ট গ্রাহক' },
  { value: '১০০০+', label: 'গিফ্ট আইটেম' },
  { value: '২৪/৭', label: 'কাস্টমার সাপোর্ট' },
];

const features = [
  { icon: Truck, title: 'ফ্রি ডেলিভারি', desc: '২৫০০+ টাকায় সম্পূর্ণ ফ্রি' },
  { icon: Shield, title: 'নিরাপদ পেমেন্ট', desc: '১০০% সুরক্ষিত লেনদেন' },
  { icon: Clock, title: 'দ্রুত ডেলিভারি', desc: '২৪-৪৮ ঘণ্টায় ডেলিভারি' },
  { icon: Gift, title: 'প্রিমিয়াম প্যাকেজিং', desc: 'বিশেষ গিফট র‍্যাপিং' },
];

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        🎉 স্পেশাল অফার — ২৫০০ টাকার বেশি অর্ডারে সম্পূর্ণ ফ্রি ডেলিভারি! 🚚
      </div>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                SPECIAL OFFER ✨ ২৫০০ টাকা
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                ফ্রি ডেলিভারি{' '}
                <span className="text-primary">চার্জ!</span> 🚚
              </h1>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-lg">
                ২৫০০ টাকার বেশি অর্ডার করলেই পাবেন বাংলাদেশের প্রত্যন্ত গ্রামাঞ্চল পর্যন্ত হোম ডেলিভারি সম্পূর্ণ ফ্রি! 🚚✨
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="https://wa.me/8801700000000" className="btn-order inline-flex items-center gap-2">
                  ✨ অর্ডার করুন <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/gifts" className="btn-outline-order inline-flex items-center gap-2">
                  সকল গিফট দেখুন
                </Link>
              </div>

              <div className="flex gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-foreground">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src={heroBanner}
                alt="GiftHaven - Beautiful gifts for your loved ones"
                width={1920}
                height={1080}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/gifts?category=${cat.id}`}
                className="badge-category whitespace-nowrap inline-flex items-center gap-2 shrink-0"
              >
                <span>{cat.icon}</span>
                {cat.nameBn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">জনপ্রিয় গিফট</h2>
            <Link to="/gifts" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
              সবগুলো দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">কেন আমাদের বেছে নেবেন?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -4 }}
                className="stat-card"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="hero-section rounded-3xl p-8 md:p-16 text-center">
            <h2 className="section-title mb-4">আপনার প্রিয়জনকে সারপ্রাইজ দিন! 🎁</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              WhatsApp-এ মেসেজ করুন অথবা সরাসরি অর্ডার করুন। আমরা আপনার গিফট সুন্দরভাবে প্যাক করে পৌঁছে দেব।
            </p>
            <a href="https://wa.me/8801700000000" className="btn-order inline-flex items-center gap-2 text-lg">
              📱 WhatsApp-এ অর্ডার করুন
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
