import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations for each language
import ar from './locales/ar/arb.json';
import en from './locales/en/en.json'; // English translations
import fr from './locales/fr/fr.json'; // French translations

// Supported languages
const supportedLanguages = ['en', 'fr', 'ar'];

// Get saved language from localStorage, or default to 'en' if not found or not supported
const savedLanguage = localStorage.getItem('language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en }, // English translations
      fr: { translation: fr }, // French translations
      ar: { translation: ar }, // Arabic translations
    },
    lng: initialLanguage, // Set the initial language based on localStorage or default
    fallbackLng: 'en', // Fallback language if the selected language is unavailable
    interpolation: {
      escapeValue: false, // Not needed for React, as React escapes values by default
    },
    react: {
      useSuspense: false, // Avoid suspending the app while loading translations
    },
  });

// Listen for language change and update localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng); // Save the selected language to localStorage
});

export default i18n;
