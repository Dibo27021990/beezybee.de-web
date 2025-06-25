'use client';
import { useTranslation } from 'react-i18next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import '@/lib/i18n';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <html lang={i18n.language} className={inter.className}>
      <head><title>Helperbee</title></head>
      <body className="bg-white text-textColor">
        <header className="bg-primary flex items-center justify-between px-4 py-2">
          <img src="/logo.png" alt="Helperbee Logo" className="h-8" />
          <button onClick={toggleLanguage} className="text-sm underline">
            {i18n.language === 'de' ? 'EN' : 'DE'}
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
