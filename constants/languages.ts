export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    flag: '🇹🇿'
  },
  {
    code: 'ln',
    name: 'Lingala',
    nativeName: 'Lingála',
    flag: '🇨🇩'
  },
  {
    code: 'yo',
    name: 'Yoruba',
    nativeName: 'Yorùbá',
    flag: '🇳🇬'
  },
  {
    code: 'ht',
    name: 'Haitian Creole',
    nativeName: 'Kreyòl Ayisyen',
    flag: '🇭🇹'
  }
];

export const defaultLanguage = 'fr';