import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Default auf Deutsch
let defaultLng = 'de';
if (typeof window !== 'undefined') {
  const host = window.location.hostname;
  if (host.endsWith('.com')) defaultLng = 'en';
  if (host.endsWith('.de')) defaultLng = 'de';
}

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: defaultLng,           // <--- Das ist neu!
    fallbackLng: defaultLng,   // <--- Optional, aber sauber!
    supportedLngs: ['de', 'en'],
    ns: ['common'],
    defaultNS: 'common',
    debug: true, // Optional: Nur in dev
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
