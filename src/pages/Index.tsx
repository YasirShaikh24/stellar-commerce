import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import BestSellers from '@/components/home/BestSellers';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <BestSellers />
      <Newsletter />
    </Layout>
  );
};

export default Index;
