import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '@/public/locales/en/common.json';
import translationDE from '@/public/locales/de/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: translationEN },
      de: { common: translationDE },
    },
    lng: 'de',
    fallbackLng: 'de',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
export const languages = ['de', 'en'];
