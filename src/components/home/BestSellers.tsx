import ProductCard from '@/components/products/ProductCard';
import { getBestSellers } from '@/data/products';

const BestSellers = () => {
  const products = getBestSellers();

  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Best <span className="gradient-text">Sellers</span>
          </h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Our most popular products loved by customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
