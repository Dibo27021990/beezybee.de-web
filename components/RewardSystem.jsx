'use client';
import { useTranslation } from 'react-i18next';
import { FaGift } from 'react-icons/fa';

export default function RewardSystem() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-xl font-bold mb-4">{t('rewards.title')}</h2>
      <FaGift className="text-3xl text-yellow-600 mb-4" />
      <p className="max-w-xl mx-auto text-gray-800">{t('rewards.description')}</p>
    </section>
  );
}
