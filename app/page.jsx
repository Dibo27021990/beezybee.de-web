"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StickyHeader from '@/components/StickyHeader';

export default function Page() {
  const { t } = useTranslation(); // ✅ FIXED!
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-white px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">{t('waitlist.title')}</h2>
        <p className="text-center mb-10 text-gray-700">{t('waitlist.subtitle')}</p>

        {submitted ? (
          <p className="text-center text-green-600">{t('waitlist.success')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder={t('waitlist.fieldEmail')}
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder={t('waitlist.fieldZip')}
              required
              className="w-full border px-4 py-2 rounded"
            />
            <select className="w-full border px-4 py-2 rounded">
              <option value="seeker">{t('waitlist.roleSeeker')}</option>
              <option value="helper">{t('waitlist.roleHelper')}</option>
            </select>
            <button
              type="submit"
              className="bg-[#333] text-white w-full py-2 rounded"
            >
              {t('waitlist.submit')}
            </button>
          </form>
        )}

        {/* Trust Section */}
        <section id="trust" className="py-8 bg-[#fff9d1] mt-16">
          <h2 className="text-xl font-bold text-center mb-8">{t('trust.title')}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold mb-2">🔒 {t('trust.item1.title')}</h3>
              <p>{t('trust.item1.text')}</p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold mb-2">🤝 {t('trust.item2.title')}</h3>
              <p>{t('trust.item2.text')}</p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold mb-2">🚀 {t('trust.item3.title')}</h3>
              <p>{t('trust.item3.text')}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-8 bg-gray-100">
          <h2 className="text-xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
              <p>{t('testimonials.item1.text')}</p>
              <strong>{t('testimonials.item1.author')}</strong>
            </div>
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
              <p>{t('testimonials.item2.text')}</p>
              <strong>{t('testimonials.item2.author')}</strong>
            </div>
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded shadow">
              <p>{t('testimonials.item3.text')}</p>
              <strong>{t('testimonials.item3.author')}</strong>
            </div>
          </div>
        </section>

        {/* App Screens Preview */}
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
      </main>
    </>
  );
}
