import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;