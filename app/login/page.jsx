'use client';
export const dynamic = 'force-dynamic';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form className="bg-white p-6 rounded shadow max-w-xs w-full">
          <h2 className="text-xl font-bold mb-4 text-center">{t('login.title')}</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('login.email')}</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">{t('login.password')}</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="bg-[#333] text-white w-full py-2 rounded">
            {t('login.loginButton')}
          </button>
        </form>
      </main>
    </>
  );
}
