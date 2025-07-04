'use client';
import WaitlistForm from './WaitlistForm';
import { useTranslation } from 'react-i18next';

export default function WaitlistSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white text-center" id="waitlist">
      <h2 className="text-2xl font-bold mb-2">{t('waitlist.title')}</h2>
      <p className="text-gray-700 mb-6">{t('waitlist.subtitle')}</p>
      <WaitlistForm />
    </section>
  );
}
