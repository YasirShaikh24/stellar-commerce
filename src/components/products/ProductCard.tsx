import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="glass-card-hover overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <button
              onClick={handleAddToCart}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform scale-90 group-hover:scale-100 duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <span className="p-3 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-all transform scale-90 group-hover:scale-100 duration-300">
              <Eye className="w-5 h-5" />
            </span>
          </div>

          {/* Out of Stock Badge */}
          {!product.inStock && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-destructive/90 text-destructive-foreground text-xs font-medium rounded-full">
              Out of Stock
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-2 text-2xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
