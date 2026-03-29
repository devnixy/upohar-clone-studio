import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/gifts/${product.id}`} className="block">
        <div className="product-card bg-card rounded-2xl overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {product.badge && <span className="badge-discount">{product.badge}</span>}
              {product.discount > 0 && (
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  -{product.discount}%
                </span>
              )}
            </div>
            <button
              onClick={(e) => { e.preventDefault(); }}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Heart className="w-4 h-4" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/20 to-transparent h-16 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {product.nameBn}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">{product.categoryBn}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-primary">৳{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xs text-muted-foreground line-through ml-2">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="btn-order text-xs !px-4 !py-2">অর্ডার করুন</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
