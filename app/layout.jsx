import './styles/globals.css';
import StickyHeader from '@/components/StickyHeader';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// Keine festen Texte mehr hier!
export const metadata = {
  title: 'Helperbee',
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <StickyHeader lng={lng} />
        {children}
      </body>
    </html>
  );
}
