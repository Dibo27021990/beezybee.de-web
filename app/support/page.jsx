'use client';

import StickyHeader from '@/components/StickyHeader';
import SupportForm from '@/components/SupportForm';
import { useTranslation } from 'react-i18next';

export default function SupportPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-white px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">{t('support.title')}</h2>
        <p className="text-center mb-10 text-gray-700">{t('support.subtitle')}</p>
        <SupportForm />
      </main>
    </>
  );
}
