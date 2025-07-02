import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import '../styles/globals.css'; // anpassen, je nachdem wo deine styles liegen
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../public/locales/${locale}/common.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
