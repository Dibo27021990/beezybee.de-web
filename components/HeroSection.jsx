'use client';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-primary text-center py-16 px-4">
      {/* Logo and Claim */}
      <div className="max-w-xl mx-auto">
        <img src="/logo.png" alt="Helperbee Logo" className="mx-auto mb-4 h-16" />
        <h1 className="text-2xl font-bold mb-2">{t('hero.claim')}</h1>
        <p className="text-lg text-gray-800 mb-6">
          {/* Tagline is provided in claim above */}
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a href="#" className="bg-[#333] text-white px-6 py-3 rounded-md">{t('hero.downloadApp')}</a>
          <a href="#waitlist" className="bg-[#333] text-white px-6 py-3 rounded-md">{t('hero.joinWaitlist')}</a>
        </div>
        {/* Bullet points */}
        <ul className="list-disc list-inside text-gray-900 text-base font-medium space-y-2">
          <li>{t('hero.bullet1')}</li>
          <li>{t('hero.bullet2')}</li>
          <li>{t('hero.bullet3')}</li>
        </ul>
      </div>
    </section>
  );
}
