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

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">{t('bureaucracy.title')}</h2>

      <div className="flex justify-center mb-6">
        <Image
          src={images[activeTab]}
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
            {t(`bureaucracy.tabs.${tab}`)}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center text-gray-800">
        {t(`bureaucracy.contents.${activeTab}`)}
      </div>
    </section>
  );
}
