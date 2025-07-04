'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <Image
        src="/images/logo.png"
        alt="Helperbee Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-gray-700 text-center mb-6">{t('error.pageNotFound')}</p>
      <Link
        href="/"
        className="bg-[#333] text-white px-4 py-2 rounded hover:bg-[#444]"
      >
        {t('error.backToHome')}
      </Link>
    </div>
  );
}
