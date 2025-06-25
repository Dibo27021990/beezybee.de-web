'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BureaucracyTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('taxFree');

  const tabs = [
    { key: 'taxFree', label: t('bureaucracy.tabs.taxFree') },
    { key: 'businessLicense', label: t('bureaucracy.tabs.businessLicense') },
    { key: 'businessTax', label: t('bureaucracy.tabs.businessTax') },
    { key: 'taxAdvisor', label: t('bureaucracy.tabs.taxAdvisor') }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.key
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-gray-700">
        <p>{t(`bureaucracy.content.${activeTab}`)}</p>
      </div>
    </div>
  );
}
