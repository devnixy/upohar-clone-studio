import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'ধন্যবাদ!', description: 'আপনার মেসেজ পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।' });
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title text-4xl md:text-5xl mb-4">যোগাযোগ করুন</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>যোগাযোগের তথ্য</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">ফোন</h3>
                    <p className="text-muted-foreground">+880 1700-000000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">+880 1700-000000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">ইমেইল</h3>
                    <p className="text-muted-foreground">info@gifthaven.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">ঠিকানা</h3>
                    <p className="text-muted-foreground">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/8801700000000" className="btn-order inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp-এ মেসেজ করুন
              </a>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: 'var(--card-shadow)' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>মেসেজ পাঠান</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">আপনার নাম</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      placeholder="নাম লিখুন"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">ফোন নম্বর</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">মেসেজ</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                      placeholder="আপনার মেসেজ লিখুন..."
                    />
                  </div>
                  <button type="submit" className="btn-order w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> মেসেজ পাঠান
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
