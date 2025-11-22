import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';
import AboutSection from '@/components/home/AboutSection';
import CounterSection from '@/components/home/CounterSection';
import ServicesSection from '@/components/home/ServicesSection';
import TeamSection from '@/components/home/TeamSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CTASection />
      <AboutSection />
      <CounterSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
};

export default Home;
