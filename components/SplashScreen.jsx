'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function SplashScreen() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-400">
      <div className="text-center">
        <Image src="/images/splash.png" alt="Splash Logo" width={200} height={200} className="mx-auto" />
        <p className="text-xl mt-4 font-bold text-gray-800">{t('splash.slogan')}</p>
      </div>
    </div>
  );
}
