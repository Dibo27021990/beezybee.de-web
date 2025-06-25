'use client';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">{t('rewards.title')}</h1>
        <p className="text-gray-700 mb-6">{t('rewards.description')}</p>
        <p className="italic text-sm text-gray-500">{t('rewards.note')}</p>
      </main>
    </>
  );
}
