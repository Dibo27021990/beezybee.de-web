'use client';
import { useTranslation } from 'react-i18next';
import { FaClipboardList, FaHandshake, FaAward } from 'react-icons/fa';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: <FaClipboardList className="text-3xl text-yellow-600 mb-2" />, text: t('howItWorks.step1') },
    { icon: <FaHandshake className="text-3xl text-yellow-600 mb-2" />, text: t('howItWorks.step2') },
    { icon: <FaAward className="text-3xl text-yellow-600 mb-2" />, text: t('howItWorks.step3') }
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-xl font-bold mb-8">{t('howItWorks.title')}</h2>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-around items-start sm:items-center text-left gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1">
            <div>{step.icon}</div>
            <p className="text-gray-800 text-base">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
