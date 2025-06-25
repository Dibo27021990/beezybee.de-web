'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BureaucracyTabs() {
  const { t } = useTranslation();
  const tabs = ['taxFree', 'businessLicense', 'taxOffice', 'taxAdvisor'];
  const [active, setActive] = useState('taxFree');

  return (
    <section className="py-16 px-4 bg-gray-100" id="bureaucracy">
      <h2 className="text-2xl font-bold text-center mb-8">{t('bureaucracy.title')}</h2>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              active === tab ? 'bg-[#333] text-white' : 'bg-white text-[#333] border'
            }`}
            onClick={() => setActive(tab)}
          >
            {t(`bureaucracy.tabs.${tab}`)}
          </button>
        ))}
      </div>
      <div className="max-w-3xl mx-auto text-gray-800 text-left bg-white p-6 rounded shadow">
        {t(`bureaucracy.contents.${active}`)}
      </div>
    </section>
  );
}
