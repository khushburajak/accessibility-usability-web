
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileText, 
  CreditCard, 
  Building, 
  TrendingUp, 
  Shield,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calculator,
      title: t('services.taxServices'),
      description: t('services.taxDescription'),
      link: '#tax-services',
      urgent: false
    },
    {
      icon: FileText,
      title: t('services.budgetDocuments'),
      description: t('services.budgetDescription'),
      link: '#budget',
      urgent: false
    },
    {
      icon: CreditCard,
      title: t('services.digitalPayments'),
      description: t('services.paymentsDescription'),
      link: '#payments',
      urgent: true
    },
    {
      icon: Building,
      title: t('services.procurement'),
      description: t('services.procurementDescription'),
      link: '#procurement',
      urgent: false
    },
    {
      icon: TrendingUp,
      title: t('services.indicators'),
      description: t('services.indicatorsDescription'),
      link: '#indicators',
      urgent: false
    },
    {
      icon: Shield,
      title: t('services.compliance'),
      description: t('services.complianceDescription'),
      link: '#compliance',
      urgent: false
    }
  ];

  return (
    <section 
      id="services" 
      className="py-16 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Available government services"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                role="listitem"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent 
                          className="h-6 w-6 text-primary" 
                          aria-hidden="true"
                        />
                      </div>
                      {service.urgent && (
                        <span 
                          className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full"
                          aria-label="Urgent service"
                        >
                          New
                        </span>
                      )}
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    className="w-full flex items-center justify-center space-x-2"
                    aria-describedby={`service-${index}-desc`}
                  >
                    <span>{t('services.accessService')}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p id={`service-${index}-desc`} className="sr-only">
                    Navigate to {service.title} to {service.description.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency contact information */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-yellow-600 mr-3" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-medium text-yellow-800">
                {t('services.emergencyTitle')}
              </h3>
              <p className="text-yellow-700 mt-1">
                {t('services.emergencyText')}{' '}
                <a 
                  href="tel:+977-1-4211111" 
                  className="font-semibold underline hover:no-underline"
                  aria-label="Call helpline number +977-1-4211111"
                >
                  +977-1-4211111
                </a>
                {' '}{t('services.or')}{' '}
                <a 
                  href="mailto:help@mof.gov.np"
                  className="font-semibold underline hover:no-underline"
                  aria-label="Send email to help@mof.gov.np"
                >
                  help@mof.gov.np
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
