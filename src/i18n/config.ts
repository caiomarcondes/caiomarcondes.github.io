import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslations from './locales/pt.json';
import enTranslations from './locales/en.json';

// Detectar idioma do navegador
const getLanguage = () => {
  // Verificar se estamos no navegador (não no servidor)
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) return savedLanguage;

  const browserLanguage = navigator.language.split('-')[0];
  return ['pt', 'en'].includes(browserLanguage) ? browserLanguage : 'pt';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslations },
      en: { translation: enTranslations },
    },
    lng: getLanguage(),
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
