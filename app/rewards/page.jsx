'use client';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-white px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t('rewards.title')}</h2>
        <p className="text-center text-gray-700 mb-6">{t('rewards.description')}</p>
        <p className="text-center text-orange-600 mt-4 italic">
          {t('rewards.soon')}
        </p>
      </main>
    </>
  );
}
