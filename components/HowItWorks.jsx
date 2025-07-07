import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="howItWorks" className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-8">{t('howItWorks.title')}</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-semibold mb-2">1</div>
          <p>{t('howItWorks.step1')}</p>
        </div>
        <div>
          <div className="text-xl font-semibold mb-2">2</div>
          <p>{t('howItWorks.step2')}</p>
        </div>
        <div>
          <div className="text-xl font-semibold mb-2">3</div>
          <p>{t('howItWorks.step3')}</p>
        </div>
      </div>
    </section>
  );
}
