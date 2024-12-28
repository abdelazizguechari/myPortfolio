/*


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from './locales/ar/arb.json';
import en from './locales/en/en.json';
import fr from './locales/fr/fr.json';

const supportedLanguages = ['en', 'fr', 'ar'];
const savedLanguage = localStorage.getItem('language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

i18n.on('languageChanged', (lng) => {
  if (lng !== localStorage.getItem('language')) {
    localStorage.setItem('language', lng);
  }
});

export default i18n;



*/
