'use client';
import { useTranslation } from 'react-i18next';
import WaitlistForm from './WaitlistForm';

export default function WaitlistSection() {
  const { t } = useTranslation();

  return (
    <section id="waitlist" className="py-16 px-4 bg-white text-center">
      <h2 className="text-xl font-bold mb-2">{t('waitlist.title')}</h2>
      <p className="mb-8 text-gray-800">{t('waitlist.subtitle')}</p>
      <WaitlistForm />
    </section>
  );
}
