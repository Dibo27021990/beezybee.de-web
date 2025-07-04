// i18n/index.js (i18next-Setup für DE/EN, Commons-Dateien importiert)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDe from '../public/locales/de/common.json';
import commonEn from '../public/locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: commonDe },
      en: { translation: commonEn }
    },
    lng: 'de',
    fallbackLng: 'de',
    interpolation: { escapeValue: false },
  });

export default i18n;
