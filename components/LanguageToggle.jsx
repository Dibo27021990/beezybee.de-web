import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-toggle">
      <button
        onClick={() => changeLanguage('de')}
        className={i18n.language === 'de' ? 'font-bold underline' : ''}
      >
        DE
      </button>
      <span> | </span>
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'font-bold underline' : ''}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
