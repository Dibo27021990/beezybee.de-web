import '../styles/globals.css';
import { Inter } from 'next/font/google';
import I18nProviderWrapper from '@/components/I18nProviderWrapper';
import FlyingBeeWrapper from '@/components/FlyingBeeWrapper'; // falls vorhanden

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Helperbee',
  description: 'Deine helfende Plattform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <I18nProviderWrapper>
          {children}
          <FlyingBeeWrapper />
        </I18nProviderWrapper>
      </body>
    </html>
  );
}
