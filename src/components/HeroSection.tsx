
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Calculator } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="bg-gradient-to-r from-primary to-blue-700 text-white py-16"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('hero.subtitle')}
          </p>
          
          {/* Quick action buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            role="group"
            aria-label="Quick actions"
          >
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center space-x-2 text-primary hover:text-primary focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-describedby="budget-desc"
              tabIndex={0}
            >
              <FileText className="h-5 w-5" />
              <span>{t('hero.viewBudget')}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-describedby="tax-desc"
              tabIndex={0}
            >
              <Calculator className="h-5 w-5" />
              <span>{t('hero.taxCalculator')}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Hidden descriptions for screen readers */}
          <div className="sr-only">
            <p id="budget-desc">Access the current national budget documents and financial reports</p>
            <p id="tax-desc">Calculate your tax obligations using our online calculator</p>
          </div>

          {/* Key statistics */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            role="region"
            aria-labelledby="stats-heading"
          >
            <h3 id="stats-heading" className="sr-only">Key Financial Statistics</h3>
            
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 focus:outline-none focus:ring-4 focus:ring-white/50" 
              tabIndex={0}
              role="article"
              aria-label="National Budget statistic"
            >
              <div className="text-3xl font-bold mb-2">NPR 1,751B</div>
              <div className="text-lg opacity-90">{t('hero.nationalBudget')}</div>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 focus:outline-none focus:ring-4 focus:ring-white/50" 
              tabIndex={0}
              role="article"
              aria-label="Growth target statistic"
            >
              <div className="text-3xl font-bold mb-2">12.5%</div>
              <div className="text-lg opacity-90">{t('hero.growthTarget')}</div>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 focus:outline-none focus:ring-4 focus:ring-white/50" 
              tabIndex={0}
              role="article"
              aria-label="Digital adoption statistic"
            >
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">{t('hero.digitalAdoption')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
