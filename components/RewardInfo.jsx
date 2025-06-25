'use client';
import { useTranslation } from 'react-i18next';

export default function RewardInfo() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">{t('rewards.title')}</h2>
      <p className="max-w-xl mx-auto mb-4">{t('rewards.description')}</p>
      <p className="text-gray-500 text-sm mt-6">
        📱 Diese Funktion steht in der App demnächst zur Verfügung.
      </p>
    </section>
  );
}

