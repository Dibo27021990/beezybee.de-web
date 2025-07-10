'use client';
export const dynamic = 'force-dynamic';

import StickyHeader from '@/components/StickyHeader';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const SupportForm = dynamic(() => import('@/components/SupportForm'), {
  ssr: false,
});

export default function SupportPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen px-4 py-16 bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">{t('support.title')}</h1>
        <p className="text-center text-gray-700 mb-6">{t('support.subtitle')}</p>
        <SupportForm />
      </main>
    </>
  );
}
