import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'হোম', labelEn: 'Home' },
    { to: '/gifts', label: 'সকল গিফট', labelEn: 'All Gifts' },
    { to: '/about', label: 'আমাদের সম্পর্কে', labelEn: 'About' },
    { to: '/contact', label: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              GiftHaven
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm ${location.pathname === link.to ? '!text-primary font-semibold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Search className="w-5 h-5 text-foreground/70" />
            </button>
            <button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-foreground/70" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              <User className="w-4 h-4" />
              লগইন
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded-lg nav-link ${location.pathname === link.to ? '!text-primary bg-secondary font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full text-sm font-medium mt-2">
                <User className="w-4 h-4" />
                লগইন
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
