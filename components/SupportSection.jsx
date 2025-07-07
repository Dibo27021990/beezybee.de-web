import { useTranslation } from 'react-i18next';
import SupportForm from './SupportForm';

export default function SupportSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-xl font-bold mb-2">{t('support.title')}</h2>
      <p className="mb-8 text-gray-800">{t('support.subtitle')}</p>
      <SupportForm />
    </section>
  );
}
