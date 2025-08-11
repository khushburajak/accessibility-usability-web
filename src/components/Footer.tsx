
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Accessibility
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ministry Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.ministry')}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">
                {t('footer.address')}
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <a 
                href="tel:+977-1-4211111"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                aria-label="Call ministry phone number"
              >
                {t('footer.phone')}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <a 
                href="mailto:info@mof.gov.np"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                aria-label="Send email to ministry"
              >
                {t('footer.email')}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#budget" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {t('footer.nationalBudget')}
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#tax-calculator" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {t('footer.taxCalculator')}
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#procurement" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {t('footer.procurement')}
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#forms" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {t('footer.forms')}
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#reports" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {t('footer.reports')}
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.departments')}</h3>
            <nav aria-label="Government departments">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#revenue" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer.revenue')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#customs" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer.customs')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#audit" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer.audit')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#budget-office" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer.budgetOffice')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#financial-comptroller" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer.comptroller')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Accessibility & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect')}</h3>
            
            {/* Accessibility Statement */}
            <div className="mb-4">
              <a 
                href="#accessibility" 
                className="text-gray-300 hover:text-white transition-colors flex items-center mb-2"
                aria-label="View accessibility statement"
              >
                <Accessibility className="h-4 w-4 mr-2" aria-hidden="true" />
                {t('footer.accessibility')}
              </a>
              <p className="text-sm text-gray-400">
                {t('footer.accessibilityText')}
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-3">{t('footer.followUs')}</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/mofnepal"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/mofnepal"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/mofnepal"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>
                {t('footer.rights')}
              </p>
            </div>
            <nav aria-label="Footer legal links">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a 
                    href="#privacy" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.privacy')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#terms" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.terms')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#rti" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.rti')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#sitemap" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.sitemap')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
