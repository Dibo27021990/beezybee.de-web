'use client';

import StickyHeader from '@/components/StickyHeader';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const BureaucracyTabs = dynamic(() => import('@/components/BureaucracyTabs'), { ssr: false });

export default function BureaucracyPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-white px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t('bureaucracy.title')}</h2>
        <p className="text-center text-gray-700 mb-10">{t('bureaucracy.subtitle')}</p>
        <BureaucracyTabs />
      </main>
    </>
  );
}
