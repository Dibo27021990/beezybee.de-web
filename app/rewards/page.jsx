'use client';
import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen px-4 py-16 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">{t('rewards.title')}</h1>
      <p className="text-center text-gray-700 mb-4">
        {t('rewards.description')}
      </p>
      <p className="text-center text-gray-500 italic mt-6">
        Diese Funktion steht in der App momentan noch nicht zur Verfügung.
      </p>
    </main>
  );
}
