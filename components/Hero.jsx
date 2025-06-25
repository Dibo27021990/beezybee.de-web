'use client';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-16 px-4 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('hero.claim')}</h1>
      <p className="text-lg mb-8">Helperbee – Die App, die wirklich hilft.</p>
      <div className="flex justify-center gap-6">
        <button className="bg-[#333] text-white px-6 py-3 rounded">
          {t('hero.downloadApp')}
        </button>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded">
          {t('hero.joinWaitlist')}
        </button>
      </div>
    </section>
  );
}
