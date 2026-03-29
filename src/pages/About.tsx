import { motion } from 'framer-motion';
import { Heart, Users, Award, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  { icon: Heart, title: 'ভালোবাসা দিয়ে তৈরি', desc: 'প্রতিটি গিফট আমরা ভালোবাসা দিয়ে সাজাই যাতে আপনার প্রিয়জন সত্যিকারের আনন্দ পায়।' },
  { icon: Users, title: 'গ্রাহক সন্তুষ্টি', desc: '৫০০০+ সন্তুষ্ট গ্রাহক আমাদের সেবার মান প্রমাণ করে।' },
  { icon: Award, title: 'প্রিমিয়াম কোয়ালিটি', desc: 'আমরা শুধুমাত্র সেরা মানের পণ্যই বাছাই করি।' },
  { icon: Globe, title: 'সারাদেশে ডেলিভারি', desc: 'বাংলাদেশের যেকোনো প্রান্তে দ্রুত ডেলিভারি।' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title text-4xl md:text-5xl mb-4">আমাদের সম্পর্কে</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              GiftHaven বাংলাদেশের অন্যতম বিশ্বস্ত অনলাইন গিফট শপ। আমরা বিশ্বাস করি প্রতিটি উপহারের পেছনে একটি গল্প আছে, আর আমরা সেই গল্পকে আরও সুন্দর করে তুলি।
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="stat-card"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-8">আমাদের গল্প</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              GiftHaven-এর যাত্রা শুরু হয়েছিল একটি সহজ ধারণা থেকে — বাংলাদেশের মানুষদের জন্য উপহার পাঠানো আরও সহজ ও সুন্দর করা। আমরা বিশ্বাস করি প্রতিটি উপহারই একটি আবেগের প্রকাশ।
            </p>
            <p>
              আমাদের দলের প্রতিটি সদস্য প্রতিদিন নিরলসভাবে কাজ করে যাচ্ছেন যাতে আপনি আপনার প্রিয়জনদের জন্য সেরা উপহার পাঠাতে পারেন। কম্বো প্যাকেজ থেকে শুরু করে প্রিমিয়াম শাড়ি, ঘড়ি, কসমেটিক্স — সবকিছুই আমরা যত্ন সহকারে বাছাই করি।
            </p>
            <p>
              আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি ঘরে খুশির বার্তা পৌঁছে দেওয়া। আপনার বিশ্বাস আমাদের চলার পথের সবচেয়ে বড় শক্তি।
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
