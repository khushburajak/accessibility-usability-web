
import { useState, useEffect } from 'react';

type ColorMode = 'normal' | 'high-contrast' | 'deuteranopia' | 'protanopia' | 'tritanopia';

export const useColorAccessibility = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('normal');

  const applyColorMode = (mode: ColorMode) => {
    const root = document.documentElement;
    
    // Remove all existing color mode classes
    root.classList.remove(
      'color-normal',
      'color-high-contrast', 
      'color-deuteranopia',
      'color-protanopia',
      'color-tritanopia'
    );

    // Apply the new color mode
    root.classList.add(`color-${mode}`);
    setColorMode(mode);
  };

  useEffect(() => {
    // Initialize with normal mode
    applyColorMode('normal');
  }, []);

  return {
    colorMode,
    setColorMode: applyColorMode
  };
};
