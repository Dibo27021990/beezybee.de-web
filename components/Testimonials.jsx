'use client';
export const dynamic = 'force-dynamic';

import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
          <p>{t('testimonials.item1.text')}</p>
          <strong>{t('testimonials.item1.author')}</strong>
        </div>
        <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
          <p>{t('testimonials.item2.text')}</p>
          <strong>{t('testimonials.item2.author')}</strong>
        </div>
        <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
          <p>{t('testimonials.item3.text')}</p>
          <strong>{t('testimonials.item3.author')}</strong>
        </div>
      </div>
    </section>
  );
}
