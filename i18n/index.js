// i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Statisches Default – wird bei Bedarf im Browser überschrieben
const DEFAULT_LANGUAGE = 'de';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
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

// Optional: Sprache im Client dynamisch ändern nach Domain
if (typeof window !== 'undefined') {
  const host = window.location.hostname;
  if (host.endsWith('.com')) i18n.changeLanguage('en');
  if (host.endsWith('.de')) i18n.changeLanguage('de');
}

export default i18n;
