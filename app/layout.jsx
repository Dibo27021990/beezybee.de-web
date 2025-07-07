// app/layout.jsx
import '@/i18n'; // oder './i18n' je nach Pfad
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Helperbee',
  description: 'Deine helfende Plattform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
