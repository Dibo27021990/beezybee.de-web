'use client';
export const dynamic = 'force-dynamic';

import '@/i18n'; // initialisiert i18next, erkannte Fehlermeldungen usw.

export default function I18nProviderWrapper({ children }) {
  return <>{children}</>;
}
