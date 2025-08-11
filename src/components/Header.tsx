
import React, { useState } from 'react';
import { Menu, X, Search, Globe, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useKeyboardTTS } from '@/hooks/useKeyboardTTS';
import { useColorAccessibility } from '@/hooks/useColorAccessibility';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const { language, setLanguage, t } = useLanguage();
  const { speak, stop, isPlaying, isLoading } = useTextToSpeech();
  const { colorMode, setColorMode } = useColorAccessibility();
  
  // Initialize keyboard TTS
  useKeyboardTTS();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    const root = document.documentElement;
    switch (size) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'medium':
        root.style.fontSize = '16px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  const handleListen = () => {
    if (isPlaying) {
      stop();
    } else {
      const pageText = document.body.innerText;
      speak(pageText.substring(0, 500)); // Limit to first 500 characters
    }
  };

  return (
    <header className="bg-white shadow-md border-b-4 border-primary" role="banner">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-describedby="skip-desc"
      >
        Skip to main content
      </a>
      <div id="skip-desc" className="sr-only">
        Press Enter to skip to the main content area
      </div>
      
      {/* Accessibility toolbar */}
      <div className="bg-gray-100 py-2" role="toolbar" aria-label="Accessibility options">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="font-size-select" className="text-sm font-medium">
              {t('header.fontSize')}
            </label>
            <select
              id="font-size-select"
              value={fontSize}
              onChange={(e) => changeFontSize(e.target.value)}
              className="text-sm border rounded px-2 py-1"
              aria-label="Change font size"
              aria-describedby="font-size-desc"
            >
              <option value="small">{t('header.small')}</option>
              <option value="medium">{t('header.medium')}</option>
              <option value="large">{t('header.large')}</option>
            </select>
            <div id="font-size-desc" className="sr-only">
              Select font size for better readability
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="color-mode-select" className="text-sm font-medium">
              {t('header.colorMode')}
            </label>
            <select
              id="color-mode-select"
              value={colorMode}
              onChange={(e) => setColorMode(e.target.value as any)}
              className="text-sm border rounded px-2 py-1"
              aria-label="Change color mode for visual accessibility"
              aria-describedby="color-mode-desc"
            >
              <option value="normal">{t('header.normal')}</option>
              <option value="high-contrast">{t('header.highContrast')}</option>
              <option value="deuteranopia">{t('header.deuteranopia')}</option>
              <option value="protanopia">{t('header.protanopia')}</option>
              <option value="tritanopia">{t('header.tritanopia')}</option>
            </select>
            <div id="color-mode-desc" className="sr-only">
              Select color mode to accommodate different types of color vision
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-1"
            aria-label={isPlaying ? "Stop text to speech" : "Start text to speech"}
            aria-describedby="tts-desc"
            onClick={handleListen}
            disabled={isLoading}
          >
            {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            <span>{t('header.listen')}</span>
          </Button>
          <div id="tts-desc" className="sr-only">
            {isPlaying ? "Stop reading page content aloud" : "Read page content aloud"}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-1"
            aria-label={`Switch to ${language === 'en' ? 'Nepali' : 'English'}`}
            aria-describedby="lang-desc"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
            <span>{language === 'en' ? t('header.nepali') : t('header.english')}</span>
          </Button>
          <div id="lang-desc" className="sr-only">
            Change website language between English and Nepali
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center space-x-4">
            <div 
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
              role="img"
              aria-label="Ministry of Finance logo"
            >
              <span className="text-white font-bold text-xl" aria-hidden="true">NP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('header.ministry')}
              </h1>
              <p className="text-sm text-gray-600">{t('header.government')}</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8" 
            role="navigation" 
            aria-label="Main navigation"
          >
            <a
              href="#home"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              aria-current="page"
              tabIndex={0}
            >
              {t('header.home')}
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              tabIndex={0}
            >
              {t('header.about')}
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              tabIndex={0}
            >
              {t('header.services')}
            </a>
            <a
              href="#budget"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              tabIndex={0}
            >
              {t('header.budget')}
            </a>
            <a
              href="#policies"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              tabIndex={0}
            >
              {t('header.policies')}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
              tabIndex={0}
            >
              {t('header.contact')}
            </a>
          </nav>

          {/* Search and mobile menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search website"
              aria-describedby="search-desc"
            >
              <Search className="h-4 w-4" />
              <span>{t('header.search')}</span>
            </Button>
            <div id="search-desc" className="sr-only">
              Open search dialog to find content on the website
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-4 pt-4 border-t"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.home')}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.about')}
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.services')}
              </a>
              <a
                href="#budget"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.budget')}
              </a>
              <a
                href="#policies"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.policies')}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {t('header.contact')}
              </a>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 mt-4 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search website"
              >
                <Search className="h-4 w-4" />
                <span>{t('header.search')}</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
