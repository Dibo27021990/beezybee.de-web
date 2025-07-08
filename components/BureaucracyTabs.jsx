'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function BureaucracyTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('taxFree');

  const tabs = ['taxFree', 'businessLicense', 'taxOffice', 'taxAdvisor'];

  const images = {
    taxFree: '/images/icons/taxFree.png',
    businessLicense: '/images/icons/businessLicense.png',
    taxOffice: '/images/icons/taxOffice.png',
    taxAdvisor: '/images/icons/taxAdvisor.png',
  };

  // Safe fallback if translation is missing
  const tabLabels = tabs.reduce((acc, key) => {
    acc[key] = t(`bureaucracy.tabs.${key}`) || key;
    return acc;
  }, {});

  const tabContents = tabs.reduce((acc, key) => {
    acc[key] = t(`bureaucracy.contents.${key}`) || '';
    return acc;
  }, {});

  const imageSrc = images[activeTab] || '/images/icons/placeholder.png';

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        {t('bureaucracy.title') || 'Bürokratie'}
      </h2>

      <div className="flex justify-center mb-6">
        <Image
          src={imageSrc}
          alt={activeTab}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              activeTab === tab
                ? 'bg-yellow-400 text-black border-yellow-500'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center text-gray-800">
        {tabContents[activeTab]}
      </div>
    </section>
  );
}
