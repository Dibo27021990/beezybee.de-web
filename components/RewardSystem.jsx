import { useTranslation } from 'react-i18next';
import { FaGift } from 'react-icons/fa';

export default function RewardSystem() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white text-center" id="rewards">
      <div className="flex justify-center mb-4">
        <FaGift className="text-yellow-500 text-4xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{t('rewards.title')}</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">{t('rewards.description')}</p>
      <p className="text-sm text-gray-500 italic">📱 {t('rewards.note')}</p>
    </section>
  );
}
