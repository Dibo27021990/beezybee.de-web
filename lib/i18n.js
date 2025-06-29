// lib/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const languages = ['de', 'en'];

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    lng: 'de',
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { languages };
