import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white pt-20 pb-10 px-4 text-center">
      <Image
        src="/images/banner.jpg"
        alt="Helperbee Banner"
        width={300}
        height={300}
        className="mx-auto mb-4"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{t('hero.claim')}</h1>
      <p className="text-lg text-gray-700 mb-6">{t('hero.slogan')}</p>
    </section>
  );
}
