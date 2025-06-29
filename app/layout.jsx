import '@/styles/globals.css';
import StickyHeader from '@/components/StickyHeader';
import { dir } from 'i18next';
import { languages } from '@/lib/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: 'Helperbee',
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <I18nextProvider i18n={i18n}>
          <StickyHeader lng={lng} />
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
