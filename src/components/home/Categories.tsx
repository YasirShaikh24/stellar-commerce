import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages: Record<string, string> = {
  Audio: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
  Wearables: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
  Accessories: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&q=80',
  Gaming: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80',
};

const Categories = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Explore our carefully curated collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group relative overflow-hidden rounded-2xl aspect-square glass-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={categoryImages[category.name]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} Products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
