import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations for each language
import ar from '../public/locales/ar/arb.json';
import en from '../public/locales/en/en.json'; // English translations
import fr from '../public/locales/fr/fr.json'; // French translations

// Check if the language is saved in localStorage
const savedLanguage = localStorage.getItem('language') || 'en'; // Default to 'en' if no saved language

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en }, // English translations
      fr: { translation: fr }, // French translations
      ar: { translation: ar }, // Arabic translations
    },
    lng: savedLanguage, // Set the initial language based on localStorage or default
    fallbackLng: "en", // Fallback language if the selected language is unavailable
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

// Listen for language change and save to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng); // Save the selected language to localStorage
});

export default i18n;
