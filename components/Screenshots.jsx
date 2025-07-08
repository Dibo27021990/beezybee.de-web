'use client';
export const dynamic = 'force-dynamic';
import { useTranslation } from 'react-i18next';

export default function Screenshots() {
  const { t } = useTranslation();

  return (
    <section id="screenshots" className="py-8 bg-white">
      <h2 className="text-xl font-bold text-center mb-8">{t('screenshots.title')}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <img
          src="/images/appscreen1.png"
          alt={t('screenshots.alt1')}
          className="w-[250px] rounded-xl"
        />
        <img
          src="/images/appscreen2.png"
          alt={t('screenshots.alt2')}
          className="w-[250px] rounded-xl"
        />
        <img
          src="/images/appscreen3.png"
          alt={t('screenshots.alt3')}
          className="w-[250px] rounded-xl"
        />
      </div>
    </section>
  );
}
