'use client';
import { useTranslation } from 'react-i18next';

export default function ForWhom() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl font-bold mb-8">{t('forWhom.title')}</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-4xl mx-auto">
        <div className="bg-gray-100 p-6 rounded shadow w-full sm:w-1/2">
          <h3 className="text-xl font-semibold mb-2">{t('forWhom.seekers.label')}</h3>
          <p className="text-gray-600">{t('forWhom.seekers.examples')}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow w-full sm:w-1/2">
          <h3 className="text-xl font-semibold mb-2">{t('forWhom.helpers.label')}</h3>
          <p className="text-gray-600">{t('forWhom.helpers.examples')}</p>
        </div>
      </div>
    </section>
  );
}
