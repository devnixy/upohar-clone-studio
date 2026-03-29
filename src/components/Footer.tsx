import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎁</span>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                GiftHaven
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              বাংলাদেশের সেরা অনলাইন গিফট শপ। আপনার প্রিয়জনদের জন্য সেরা উপহার পাঠান যেকোনো জায়গায়।
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/60 hover:text-primary text-sm transition-colors">হোম</Link></li>
              <li><Link to="/gifts" className="text-background/60 hover:text-primary text-sm transition-colors">সকল গিফট</Link></li>
              <li><Link to="/about" className="text-background/60 hover:text-primary text-sm transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">ক্যাটাগরি</h4>
            <ul className="space-y-2">
              <li><Link to="/gifts?category=combo" className="text-background/60 hover:text-primary text-sm transition-colors">কম্বো প্যাকেজ</Link></li>
              <li><Link to="/gifts?category=cosmetics" className="text-background/60 hover:text-primary text-sm transition-colors">কসমেটিক্স</Link></li>
              <li><Link to="/gifts?category=saree" className="text-background/60 hover:text-primary text-sm transition-colors">শাড়ি কালেকশন</Link></li>
              <li><Link to="/gifts?category=watch" className="text-background/60 hover:text-primary text-sm transition-colors">ঘড়ি</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +880 1700-000000
              </li>
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@gifthaven.com
              </li>
              <li className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center text-background/40 text-sm">
          © 2026 GiftHaven. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
