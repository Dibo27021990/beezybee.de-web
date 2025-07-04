// app/layout.jsx
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/index';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Helperbee',
  description: 'Deine helfende Plattform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
