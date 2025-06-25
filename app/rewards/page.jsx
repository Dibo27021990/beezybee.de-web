'use client';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-white px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">{t('rewards.title')}</h2>
        <p className="text-center mb-8 text-gray-700">{t('rewards.description')}</p>
        <p className="text-center text-yellow-600 text-lg font-semibold">
          {t('rewards.comingSoon')}
        </p>
      </main>
    </>
  );
}
