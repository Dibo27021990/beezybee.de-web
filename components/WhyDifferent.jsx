'use client';

import { useTranslations } from 'next-intl';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhyDifferent() {
  const { t } = useTranslation();

  // Rückgabe absichern: Falls kein Array, verwende leeres Array
  const rawPoints = t('whyDifferent.points', { returnObjects: true });
  const points = Array.isArray(rawPoints) ? rawPoints : [];

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-xl font-bold text-center mb-8">{t('whyDifferent.title')}</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start">
            <FaCheckCircle className="text-green-600 mr-2 mt-1" />
            <span className="text-gray-800">{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
