'use client';
export const dynamic = 'force-dynamic';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() { /* ... */ }

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AppStoreButtons() {
  const { t } = useTranslation();

  return (
    <section className="py-10 text-center">
      <h2 className="text-xl font-bold mb-4">{t('hero.downloadApp')}</h2>
      <div className="flex justify-center gap-4">
        <Image
          src="/images/googleplay.png"
          alt="Google Play"
          width={160}
          height={50}
        />
        <Image
          src="/images/appstore.png"
          alt="App Store"
          width={160}
          height={50}
        />
      </div>
    </section>
  );
}
