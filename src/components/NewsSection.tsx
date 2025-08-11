
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsSection = () => {
  const { t } = useLanguage();

  const news = [
    {
      title: t('news.budgetPresented'),
      summary: t('news.budgetSummary'),
      date: '2024-05-28',
      readTime: `5 ${t('news.minRead')}`,
      urgent: true,
      category: 'Budget'
    },
    {
      title: t('news.digitalTax'),
      summary: t('news.digitalTaxSummary'),
      date: '2024-05-25',
      readTime: `3 ${t('news.minRead')}`,
      urgent: false,
      category: 'Technology'
    },
    {
      title: t('news.growthRevised'),
      summary: t('news.growthSummary'),
      date: '2024-05-20',
      readTime: `4 ${t('news.minRead')}`,
      urgent: false,
      category: 'Economy'
    },
    {
      title: t('news.literacyProgram'),
      summary: t('news.literacySummary'),
      date: '2024-05-18',
      readTime: `6 ${t('news.minRead')}`,
      urgent: false,
      category: 'Education'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section 
      id="news" 
      className="py-16 bg-white"
      aria-labelledby="news-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="news-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          role="list"
          aria-label="Latest news articles"
        >
          {news.map((article, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              role="listitem"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      article.urgent 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                    aria-label={article.urgent ? 'Urgent news' : 'Regular news'}
                  >
                    {article.category}
                  </span>
                  {article.urgent && (
                    <span 
                      className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
                      aria-label="Breaking news"
                    >
                      BREAKING
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                  <a 
                    href={`#news-${index}`}
                    className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    {article.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {article.summary}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center space-x-2"
                  aria-describedby={`article-${index}-desc`}
                >
                  <span>{t('news.readMore')}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <p id={`article-${index}-desc`} className="sr-only">
                  Read the full article about {article.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('news.newsletterTitle')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('news.newsletterSubtitle')}
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3" noValidate>
              <label htmlFor="email-newsletter" className="sr-only">
                Email address for newsletter subscription
              </label>
              <input
                id="email-newsletter"
                type="email"
                placeholder={t('news.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                aria-required="true"
                aria-describedby="email-help"
              />
              <Button 
                type="submit"
                variant="secondary" 
                className="px-6 py-3 text-primary font-medium"
                aria-describedby="subscribe-desc"
              >
                {t('news.subscribe')}
              </Button>
            </form>
            <p id="email-help" className="text-sm mt-2 opacity-75">
              {t('news.newsletterHelp')}
            </p>
            <p id="subscribe-desc" className="sr-only">
              Click to subscribe to the newsletter with the email address you provided
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
