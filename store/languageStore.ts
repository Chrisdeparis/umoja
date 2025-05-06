import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translations from '@/translations';
import { supportedLanguages } from '@/constants/languages';

interface LanguageState {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

// Helper function to get nested properties safely
const getNestedProperty = (obj: any, path: string): any => {
  if (!obj) return undefined;
  
  const keys = path.split('.');
  return keys.reduce((acc, key) => {
    return acc && typeof acc === 'object' ? acc[key] : undefined;
  }, obj);
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: 'en', // Default language
      
      changeLanguage: (language) => {
        if (supportedLanguages.some(lang => lang.code === language)) {
          set({ currentLanguage: language });
        } else {
          console.warn(`Language ${language} is not supported. Falling back to English.`);
          set({ currentLanguage: 'en' });
        }
      },
      
      t: (key, params = {}) => {
        try {
          const { currentLanguage } = get();
          
          // Safely get the translation object for the current language
          const translationObj = translations[currentLanguage as keyof typeof translations];
          
          if (!translationObj) {
            console.warn(`Translation object for language ${currentLanguage} not found. Using English.`);
            return getTranslation('en', key, params);
          }
          
          // Get the translation using the nested path
          let translation = getNestedProperty(translationObj, key);
          
          // If translation not found, try to get it from English as fallback
          if (translation === undefined && currentLanguage !== 'en') {
            translation = getNestedProperty(translations.en, key);
          }
          
          // If still not found, return the key itself
          if (translation === undefined) {
            console.warn(`Translation key not found: ${key}`);
            return key;
          }
          
          // Replace parameters in the translation string
          if (typeof translation === 'string' && params) {
            return Object.entries(params).reduce((str, [param, value]) => {
              return str.replace(new RegExp(`{${param}}`, 'g'), String(value));
            }, translation);
          }
          
          return String(translation);
        } catch (error) {
          console.error('Translation error:', error);
          return key; // Return the key as fallback
        }
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// Helper function to get translation with error handling
function getTranslation(language: string, key: string, params: Record<string, string | number> = {}) {
  try {
    const translationObj = translations[language as keyof typeof translations];
    if (!translationObj) return key;
    
    let translation = getNestedProperty(translationObj, key);
    if (translation === undefined) return key;
    
    // Replace parameters
    if (typeof translation === 'string' && params) {
      return Object.entries(params).reduce((str, [param, value]) => {
        return str.replace(new RegExp(`{${param}}`, 'g'), String(value));
      }, translation);
    }
    
    return String(translation);
  } catch (error) {
    console.error('Translation error in helper:', error);
    return key;
  }
}