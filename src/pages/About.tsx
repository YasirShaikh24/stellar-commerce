import { Award, Users, Zap, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest materials and partner with trusted manufacturers to ensure every product meets our exacting standards.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, bringing you cutting-edge technology that enhances your daily life.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We provide exceptional support and a seamless shopping experience.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: "We're tech enthusiasts ourselves, and that passion drives us to curate the best products for you.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              About <span className="gradient-text">NOVA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We're on a mission to bring premium technology to everyone. Founded in 2020, NOVA has grown from a small passion project to a trusted destination for tech enthusiasts worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NOVA was born from a simple frustration: finding premium tech accessories that combine exceptional quality with stunning design was unnecessarily difficult.
                </p>
                <p>
                  Our founders, a group of tech enthusiasts and design lovers, set out to change that. We spent months researching, testing, and curating products that meet our exacting standards.
                </p>
                <p>
                  Today, we serve thousands of customers across the globe, united by a shared appreciation for technology that's as beautiful as it is functional. Every product in our collection represents our commitment to excellence.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10K+', label: 'Happy Customers' },
                  { value: '500+', label: 'Products' },
                  { value: '50+', label: 'Countries' },
                  { value: '4.9', label: 'Avg Rating' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card-hover p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience <span className="gradient-text">Excellence?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join thousands of satisfied customers and discover why NOVA is the trusted choice for premium tech accessories.
              </p>
              <a href="/products" className="btn-primary inline-block">
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
