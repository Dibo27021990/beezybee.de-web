import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'de',                     // oder 'en', je nach Default
    fallbackLng: 'de',             // Fallback immer hart setzen
    supportedLngs: ['de', 'en'],
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
