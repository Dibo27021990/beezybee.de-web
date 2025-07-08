'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function WaitlistSection() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="availability" className="bg-gray-100 py-16 px-4">
      <h2 className="text-xl font-bold text-center mb-4">{t('waitlist.title')}</h2>
      <p className="text-center mb-8">{t('waitlist.subtitle')}</p>

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
    </section>
  );
}
