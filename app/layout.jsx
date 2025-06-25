import './globals.css';
import Navbar from '@/components/Navbar';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export const metadata = {
  title: 'Helperbee',
  description: 'Die App, die wirklich hilft.',
};

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
