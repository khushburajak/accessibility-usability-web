
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full">
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <ServicesSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
