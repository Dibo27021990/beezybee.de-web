'use client';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-16 px-4 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-8">{t('howItWorks.title')}</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p>{t('howItWorks.step1')}</p>
        </div>
        <div>
          <p>{t('howItWorks.step2')}</p>
        </div>
        <div>
          <p>{t('howItWorks.step3')}</p>
        </div>
      </div>
    </section>
  );
}
