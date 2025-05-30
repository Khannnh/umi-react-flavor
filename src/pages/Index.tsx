
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import GadgetList from '@/components/GadgetList';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SearchSection />
      <GadgetList />
      <Footer />
    </div>
  );
};

export default Index;
