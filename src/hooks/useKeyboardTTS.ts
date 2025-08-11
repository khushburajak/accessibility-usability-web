
import { useEffect, useCallback } from 'react';
import { useTextToSpeech } from './useTextToSpeech';
import { useLanguage } from '@/contexts/LanguageContext';

export const useKeyboardTTS = () => {
  const { speak, stop } = useTextToSpeech();
  const { t } = useLanguage();

  const announceElement = useCallback((element: HTMLElement) => {
    let announcement = '';
    
    // Get the text content and role
    const textContent = element.textContent?.trim() || '';
    const role = element.getAttribute('role') || element.tagName.toLowerCase();
    const ariaLabel = element.getAttribute('aria-label');
    const ariaDescribedBy = element.getAttribute('aria-describedby');
    
    // Build announcement based on element type
    switch (role) {
      case 'button':
        announcement = `${t('accessibility.button')} ${ariaLabel || textContent}`;
        break;
      case 'link':
        announcement = `${t('accessibility.link')} ${ariaLabel || textContent}`;
        break;
      case 'navigation':
        announcement = `${t('accessibility.navigation')} ${ariaLabel || textContent}`;
        break;
      case 'main':
        announcement = `${t('accessibility.mainContent')}`;
        break;
      case 'heading':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        const level = element.tagName.charAt(1) || '1';
        announcement = `${t('accessibility.heading')} ${t('accessibility.level')} ${level}, ${textContent}`;
        break;
      case 'select':
        announcement = `${t('accessibility.dropdown')} ${ariaLabel || textContent}`;
        break;
      default:
        if (textContent) {
          announcement = textContent;
        }
    }

    // Add description if available
    if (ariaDescribedBy) {
      const descElement = document.getElementById(ariaDescribedBy);
      if (descElement) {
        announcement += `. ${descElement.textContent}`;
      }
    }

    if (announcement) {
      // Stop any current speech before announcing new element
      stop();
      setTimeout(() => speak(announcement), 100);
    }
  }, [speak, stop, t]);

  const handleFocus = useCallback((event: FocusEvent) => {
    const element = event.target as HTMLElement;
    if (element && element.nodeType === Node.ELEMENT_NODE) {
      announceElement(element);
    }
  }, [announceElement]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Handle arrow key navigation for specific elements
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const element = event.target as HTMLElement;
      
      // For navigation menus, announce navigation help
      if (element.closest('nav')) {
        setTimeout(() => {
          const announcement = `${t('accessibility.useArrowKeys')} ${t('accessibility.pressEnterToActivate')}`;
          speak(announcement);
        }, 200);
      }
    }

    // Handle Enter and Space for activation
    if (event.key === 'Enter' || event.key === ' ') {
      const element = event.target as HTMLElement;
      if (element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
        const announcement = `${t('accessibility.activated')} ${element.textContent}`;
        setTimeout(() => speak(announcement), 100);
      }
    }

    // Handle Escape key
    if (event.key === 'Escape') {
      stop();
      const announcement = t('accessibility.escaped');
      setTimeout(() => speak(announcement), 100);
    }
  }, [speak, stop, t]);

  useEffect(() => {
    // Add global event listeners
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFocus, handleKeyDown]);

  return {
    announceElement,
    speak,
    stop
  };
};
