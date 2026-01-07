import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">New Collection 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover the Future of
              <span className="gradient-text block">Premium Tech</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Experience innovation at its finest. Our curated collection of premium tech accessories combines cutting-edge technology with elegant design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-outline inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '500+', label: 'Products' },
                { value: '4.9', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
                alt="Premium Headphones"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass-card p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-sm font-medium">Wireless Pro</p>
                <p className="text-lg font-bold text-primary">$349.99</p>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-sm text-muted-foreground">⭐ 4.9 Rating</p>
                <p className="text-sm font-medium">2,847 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
