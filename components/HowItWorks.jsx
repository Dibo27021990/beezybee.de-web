'use client';
export const dynamic = 'force-dynamic';

import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white px-4">
      <h2 className="text-xl font-bold text-center mb-4">{t('howto.title')}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-64 p-4 border rounded shadow text-center">
          <div className="text-4xl mb-2">1️⃣</div>
          <p>{t('howto.step1')}</p>
        </div>
        <div className="w-full sm:w-64 p-4 border rounded shadow text-center">
          <div className="text-4xl mb-2">2️⃣</div>
          <p>{t('howto.step2')}</p>
        </div>
        <div className="w-full sm:w-64 p-4 border rounded shadow text-center">
          <div className="text-4xl mb-2">3️⃣</div>
          <p>{t('howto.step3')}</p>
        </div>
      </div>
    </section>
  );
}
