
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-custom-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ApproachSection />
        <HowItWorksSection />
        <AboutSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
