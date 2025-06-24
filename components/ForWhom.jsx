'use client';
import { useTranslation } from 'react-i18next';
import { FaUserFriends, FaTools } from 'react-icons/fa';

export default function ForWhom() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-xl font-bold text-center mb-8">{t('forWhom.title')}</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
        {/* Column: Seekers */}
        <div className="p-4 bg-white rounded-md shadow">
          <FaUserFriends className="text-2xl text-yellow-600 mb-2" />
          <h3 className="font-semibold text-lg mb-2">{t('forWhom.seekers.label')}</h3>
          <p className="text-gray-700">{t('forWhom.seekers.examples')}</p>
        </div>
        {/* Column: Helpers */}
        <div className="p-4 bg-white rounded-md shadow">
          <FaTools className="text-2xl text-yellow-600 mb-2" />
          <h3 className="font-semibold text-lg mb-2">{t('forWhom.helpers.label')}</h3>
          <p className="text-gray-700">{t('forWhom.helpers.examples')}</p>
        </div>
      </div>
    </section>
  );
}
