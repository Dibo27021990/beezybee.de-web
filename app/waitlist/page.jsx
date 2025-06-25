'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function WaitlistPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">{t('waitlist.title')}</h2>
      <p className="text-center mb-10 text-gray-700">
        Helperbee ist bei dir noch nicht verfügbar? Trag dich hier ein & sei beim Start dabei!
      </p>
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
    </div>
  );
}
