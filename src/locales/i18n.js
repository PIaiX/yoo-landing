
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const resources = {

  // "EN": {
  //   translation: en
  // },

  // "ES": {
  //   translation: es
  // },

  // "FR": {
  //   translation: fr
  // },

  // "RU": {
  //   translation: ru
  // },

};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
