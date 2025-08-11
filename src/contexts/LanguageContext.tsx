
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.ministry': 'Ministry of Finance',
    'header.government': 'Government of Nepal',
    'header.home': 'Home',
    'header.about': 'About Us',
    'header.services': 'Services',
    'header.budget': 'Budget',
    'header.policies': 'Policies',
    'header.contact': 'Contact',
    'header.search': 'Search',
    'header.listen': 'Listen',
    'header.fontSize': 'Font Size:',
    'header.small': 'Small',
    'header.medium': 'Medium',
    'header.large': 'Large',
    'header.nepali': 'नेपाली',
    'header.english': 'English',
    'header.colorMode': 'Color Mode:',
    'header.normal': 'Normal',
    'header.highContrast': 'High Contrast',
    'header.deuteranopia': 'Deuteranopia',
    'header.protanopia': 'Protanopia',
    'header.tritanopia': 'Tritanopia',
    
    // Hero Section
    'hero.title': "Serving Nepal's Financial Future",
    'hero.subtitle': 'Committed to transparent governance, economic development, and accessible financial services for all citizens',
    'hero.viewBudget': 'View National Budget',
    'hero.taxCalculator': 'Tax Calculator',
    'hero.nationalBudget': 'National Budget 2024/25',
    'hero.growthTarget': 'Economic Growth Target',
    'hero.digitalAdoption': 'Digital Service Adoption',
    
    // Services Section
    'services.title': 'Digital Government Services',
    'services.subtitle': 'Access essential financial services online, designed for accessibility and ease of use for all citizens',
    'services.taxServices': 'Tax Services',
    'services.taxDescription': 'Calculate taxes, file returns, and access tax-related information online.',
    'services.budgetDocuments': 'Budget Documents',
    'services.budgetDescription': 'Access national budget, financial reports, and economic surveys.',
    'services.digitalPayments': 'Digital Payments',
    'services.paymentsDescription': 'Make government payments securely through our digital platform.',
    'services.procurement': 'Government Procurement',
    'services.procurementDescription': 'Participate in government tenders and procurement processes.',
    'services.indicators': 'Economic Indicators',
    'services.indicatorsDescription': 'View real-time economic data and financial market indicators.',
    'services.compliance': 'Financial Compliance',
    'services.complianceDescription': 'Ensure compliance with financial regulations and reporting requirements.',
    'services.accessService': 'Access Service',
    'services.emergencyTitle': 'Need Immediate Assistance?',
    'services.emergencyText': 'For urgent financial matters, contact our helpline at',
    'services.or': 'or email',
    
    // News Section
    'news.title': 'Latest News & Updates',
    'news.subtitle': 'Stay informed about government financial policies, budget updates, and economic developments',
    'news.budgetPresented': 'National Budget 2024/25 Presented to Parliament',
    'news.budgetSummary': 'Finance Minister presents NPR 1,751 billion budget focusing on economic recovery and infrastructure development.',
    'news.digitalTax': 'New Digital Tax Filing System Launched',
    'news.digitalTaxSummary': 'Citizens can now file tax returns online through the improved digital platform with enhanced accessibility features.',
    'news.growthRevised': 'Economic Growth Projection Revised to 12.5%',
    'news.growthSummary': 'Government revises economic growth target based on improved agricultural output and tourism recovery.',
    'news.literacyProgram': 'Financial Literacy Program Expansion',
    'news.literacySummary': 'Ministry announces expansion of financial literacy programs to rural areas with mobile education units.',
    'news.readMore': 'Read Full Article',
    'news.minRead': 'min read',
    'news.newsletterTitle': 'Stay Updated with Government Financial News',
    'news.newsletterSubtitle': 'Subscribe to our newsletter for important updates on budget, policies, and economic developments',
    'news.emailPlaceholder': 'Enter your email address',
    'news.subscribe': 'Subscribe',
    'news.newsletterHelp': "We'll send you important updates about government financial matters",
    
    // Footer
    'footer.ministry': 'Ministry of Finance',
    'footer.description': 'Committed to transparent governance and economic development for Nepal\'s prosperity.',
    'footer.quickLinks': 'Quick Links',
    'footer.nationalBudget': 'National Budget',
    'footer.taxCalculator': 'Tax Calculator',
    'footer.procurement': 'Government Procurement',
    'footer.forms': 'Download Forms',
    'footer.reports': 'Financial Reports',
    'footer.departments': 'Departments',
    'footer.revenue': 'Department of Revenue',
    'footer.customs': 'Department of Customs',
    'footer.audit': 'Office of Auditor General',
    'footer.budgetOffice': 'Budget & Program Office',
    'footer.comptroller': 'Financial Comptroller General',
    'footer.connect': 'Connect & Support',
    'footer.accessibility': 'Accessibility Statement',
    'footer.accessibilityText': 'This website meets WCAG 2.1 AA standards',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 Ministry of Finance, Government of Nepal. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rti': 'Right to Information',
    'footer.sitemap': 'Sitemap',
    'footer.address': 'Singh Durbar, Kathmandu, Nepal',
    'footer.phone': '+977-1-4211111',
    'footer.email': 'info@mof.gov.np',
    
    // Accessibility
    'accessibility.button': 'Button',
    'accessibility.link': 'Link',
    'accessibility.navigation': 'Navigation',
    'accessibility.mainContent': 'Main content',
    'accessibility.heading': 'Heading',
    'accessibility.level': 'level',
    'accessibility.dropdown': 'Dropdown menu',
    'accessibility.useArrowKeys': 'Use arrow keys to navigate.',
    'accessibility.pressEnterToActivate': 'Press Enter or Space to activate.',
    'accessibility.activated': 'Activated',
    'accessibility.escaped': 'Navigation cancelled',
  },
  ne: {
    // Header
    'header.ministry': 'अर्थ मन्त्रालय',
    'header.government': 'नेपाल सरकार',
    'header.home': 'गृहपृष्ठ',
    'header.about': 'हाम्रो बारेमा',
    'header.services': 'सेवाहरू',
    'header.budget': 'बजेट',
    'header.policies': 'नीतिहरू',
    'header.contact': 'सम्पर्क',
    'header.search': 'खोज्नुहोस्',
    'header.listen': 'सुन्नुहोस्',
    'header.fontSize': 'फन्ट साइज:',
    'header.small': 'सानो',
    'header.medium': 'मध्यम',
    'header.large': 'ठूलो',
    'header.nepali': 'नेपाली',
    'header.english': 'English',
    'header.colorMode': 'रंग मोड:',
    'header.normal': 'सामान्य',
    'header.highContrast': 'उच्च कन्ट्रास्ट',
    'header.deuteranopia': 'ड्यूटेरानोपिया',
    'header.protanopia': 'प्रोटानोपिया',
    'header.tritanopia': 'ट्रिटानोपिया',
    
    // Hero Section
    'hero.title': 'नेपालको वित्तीय भविष्यको सेवा',
    'hero.subtitle': 'पारदर्शी शासन, आर्थिक विकास, र सबै नागरिकका लागि पहुँचयोग्य वित्तीय सेवाहरूमा प्रतिबद्ध',
    'hero.viewBudget': 'राष्ट्रिय बजेट हेर्नुहोस्',
    'hero.taxCalculator': 'कर क्यालकुलेटर',
    'hero.nationalBudget': 'राष्ट्रिय बजेट २०८१/८२',
    'hero.growthTarget': 'आर्थिक वृद्धि लक्ष्य',
    'hero.digitalAdoption': 'डिजिटल सेवा अपनाउने',
    
    // Services Section
    'services.title': 'डिजिटल सरकारी सेवाहरू',
    'services.subtitle': 'सबै नागरिकका लागि पहुँचयोग्यता र प्रयोगमा सहजताका लागि डिजाइन गरिएका आवश्यक वित्तीय सेवाहरू अनलाइन पहुँच गर्नुहोस्',
    'services.taxServices': 'कर सेवाहरू',
    'services.taxDescription': 'कर गणना गर्नुहोस्, रिटर्न दाखिल गर्नुहोस्, र कर-सम्बन्धी जानकारी अनलाइन पहुँच गर्नुहोस्।',
    'services.budgetDocuments': 'बजेट कागजातहरू',
    'services.budgetDescription': 'राष्ट्रिय बजेट, वित्तीय प्रतिवेदन, र आर्थिक सर्वेक्षणहरू पहुँच गर्नुहोस्।',
    'services.digitalPayments': 'डिजिटल भुक्तानी',
    'services.paymentsDescription': 'हाम्रो डिजिटल प्लेटफर्म मार्फत सुरक्षित रूपमा सरकारी भुक्तानी गर्नुहोस्।',
    'services.procurement': 'सरकारी खरिद',
    'services.procurementDescription': 'सरकारी टेन्डर र खरिद प्रक्रियाहरूमा भाग लिनुहोस्।',
    'services.indicators': 'आर्थिक सूचकहरू',
    'services.indicatorsDescription': 'वास्तविक समयको आर्थिक डेटा र वित्तीय बजार सूचकहरू हेर्नुहोस्।',
    'services.compliance': 'वित्तीय अनुपालन',
    'services.complianceDescription': 'वित्तीय नियम र रिपोर्टिङ आवश्यकताहरूको अनुपालन सुनिश्चित गर्नुहोस्।',
    'services.accessService': 'सेवा पहुँच गर्नुहोस्',
    'services.emergencyTitle': 'तत्काल सहायता चाहिन्छ?',
    'services.emergencyText': 'जरुरी वित्तीय मामिलाहरूका लागि, हाम्रो हेल्पलाइनमा सम्पर्क गर्नुहोस्',
    'services.or': 'वा इमेल गर्नुहोस्',
    
    // News Section
    'news.title': 'ताजा समाचार र अपडेटहरू',
    'news.subtitle': 'सरकारी वित्तीय नीतिहरू, बजेट अपडेटहरू, र आर्थिक विकासहरूबारे जानकारी राख्नुहोस्',
    'news.budgetPresented': 'राष्ट्रिय बजेट २०८१/८२ संसदमा पेश',
    'news.budgetSummary': 'अर्थमन्त्रीले आर्थिक सुधार र पूर्वाधार विकासमा केन्द्रित रहेको १७ खर्ब ५१ अर्ब रुपैयाँको बजेट पेश गर्नुभयो।',
    'news.digitalTax': 'नयाँ डिजिटल कर फाइलिङ प्रणाली सुरु',
    'news.digitalTaxSummary': 'नागरिकहरूले अब सुधारिएको डिजिटल प्लेटफर्म मार्फत कर रिटर्न अनलाइन दाखिल गर्न सक्छन्।',
    'news.growthRevised': 'आर्थिक वृद्धि प्रक्षेपण १२.५% मा संशोधन',
    'news.growthSummary': 'सुधारिएको कृषि उत्पादन र पर्यटन सुधारका आधारमा सरकारले आर्थिक वृद्धि लक्ष्य संशोधन गरेको छ।',
    'news.literacyProgram': 'आर्थिक साक्षरता कार्यक्रम विस्तार',
    'news.literacySummary': 'मन्त्रालयले मोबाइल शिक्षा एकाइहरूसहित ग्रामीण क्षेत्रमा आर्थिक साक्षरता कार्यक्रम विस्तार गर्ने घोषणा गरेको छ।',
    'news.readMore': 'पूरा लेख पढ्नुहोस्',
    'news.minRead': 'मिनेट पढाइ',
    'news.newsletterTitle': 'सरकारी वित्तीय समाचारको साथ अद्यावधिक रहनुहोस्',
    'news.newsletterSubtitle': 'बजेट, नीति र आर्थिक विकासका महत्वपूर्ण अपडेटहरूका लागि हाम्रो न्यूजलेटर सब्स्क्राइब गर्नुहोस्',
    'news.emailPlaceholder': 'आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस्',
    'news.subscribe': 'सब्स्क्राइब गर्नुहोस्',
    'news.newsletterHelp': 'हामी तपाईंलाई सरकारी वित्तीय मामिलाका महत्वपूर्ण अपडेटहरू पठाउनेछौं',
    
    // Footer
    'footer.ministry': 'अर्थ मन्त्रालय',
    'footer.description': 'नेपालको समृद्धिका लागि पारदर्शी शासन र आर्थिक विकासमा प्रतिबद्ध।',
    'footer.quickLinks': 'द्रुत लिङ्कहरू',
    'footer.nationalBudget': 'राष्ट्रिय बजेट',
    'footer.taxCalculator': 'कर क्यालकुलेटर',
    'footer.procurement': 'सरकारी खरिद',
    'footer.forms': 'फारमहरू डाउनलोड गर्नुहोस्',
    'footer.reports': 'वित्तीय प्रतिवेदनहरू',
    'footer.departments': 'विभागहरू',
    'footer.revenue': 'राजस्व विभाग',
    'footer.customs': 'भन्सार विभाग',
    'footer.audit': 'महालेखा परीक्षकको कार्यालय',
    'footer.budgetOffice': 'बजेट तथा कार्यक्रम कार्यालय',
    'footer.comptroller': 'वित्तीय नियन्त्रक महालेखाकार',
    'footer.connect': 'जडान र सहयोग',
    'footer.accessibility': 'पहुँचयोग्यता कथन',
    'footer.accessibilityText': 'यो वेबसाइट WCAG 2.1 AA मापदण्डहरू पूरा गर्छ',
    'footer.followUs': 'हामीलाई फलो गर्नुहोस्',
    'footer.rights': '© २०२४ अर्थ मन्त्रालय, नेपाल सरकार। सबै अधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवाका सर्तहरू',
    'footer.rti': 'सूचनाको हक',
    'footer.sitemap': 'साइटम्याप',
    'footer.address': 'सिंहदरबार, काठमाडौं, नेपाल',
    'footer.phone': '+977-1-4211111',
    'footer.email': 'info@mof.gov.np',
    
    // Accessibility
    'accessibility.button': 'बटन',
    'accessibility.link': 'लिङ्क',
    'accessibility.navigation': 'नेभिगेसन',
    'accessibility.mainContent': 'मुख्य सामग्री',
    'accessibility.heading': 'शीर्षक',
    'accessibility.level': 'स्तर',
    'accessibility.dropdown': 'ड्रपडाउन मेनु',
    'accessibility.useArrowKeys': 'नेभिगेट गर्न एरो कीहरू प्रयोग गर्नुहोस्।',
    'accessibility.pressEnterToActivate': 'सक्रिय गर्न Enter वा Space थिच्नुहोस्।',
    'accessibility.activated': 'सक्रिय गरियो',
    'accessibility.escaped': 'नेभिगेसन रद्द गरियो',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
