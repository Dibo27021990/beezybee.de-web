'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BureaucracyTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('taxfree');

  const tabContent = {
    taxfree: t('bureaucracy.taxfree'),
    license: t('bureaucracy.license'),
    trade: t('bureaucracy.trade'),
    advisor: t('bureaucracy.advisor')
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-6">{t('bureaucracy.title')}</h2>
      <div className="flex justify-center gap-2 mb-4">
        <button onClick={() => setActiveTab('taxfree')} className={`px-3 py-1 rounded ${activeTab === 'taxfree' ? 'bg-[#333] text-white' : 'bg-gray-200'}`}>
          {t('bureaucracy.tabs.taxfree')}
        </button>
        <button onClick={() => setActiveTab('license')} className={`px-3 py-1 rounded ${activeTab === 'license' ? 'bg-[#333] text-white' : 'bg-gray-200'}`}>
          {t('bureaucracy.tabs.license')}
        </button>
        <button onClick={() => setActiveTab('trade')} className={`px-3 py-1 rounded ${activeTab === 'trade' ? 'bg-[#333] text-white' : 'bg-gray-200'}`}>
          {t('bureaucracy.tabs.trade')}
        </button>
        <button onClick={() => setActiveTab('advisor')} className={`px-3 py-1 rounded ${activeTab === 'advisor' ? 'bg-[#333] text-white' : 'bg-gray-200'}`}>
          {t('bureaucracy.tabs.advisor')}
        </button>
      </div>
      <div className="bg-white border p-4 rounded shadow">
        <p>{tabContent[activeTab]}</p>
      </div>
    </section>
  );
}
