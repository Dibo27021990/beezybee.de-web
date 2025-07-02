'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 text-center relative">
      <Image
        src="/images/banner.jpg"
        alt="Helperbee Banner"
        width={120}
        height={120}
        className="mx-auto mb-4 rounded-full"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('hero.claim')}</h1>
      <p className="text-lg text-gray-600 mb-6">{t('hero.slogan')}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-black text-white px-4 py-2 rounded">
          {t('hero.downloadApp')}
        </a>
        <a href="#availability" className="bg-yellow-400 text-black px-4 py-2 rounded">
          {t('hero.joinWaitlist')}
        </a>
      </div>
    </section>
  );
}
