import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function JobReviewFlow({ onSubmit }) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert(t('Bitte gib eine Bewertung ab.'));
      return;
    }
    onSubmit({ rating, comment });
    setSubmitted(true);
  };

  if (submitted) {
    return <div>{t('Danke für deine Bewertung!')}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{t('Bewertung abgeben')}</h2>
      <div className="mb-4">
        <label className="block mb-2">{t('Bewertung')}:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border rounded p-2"
          required
        >
          <option value={0}>{t('Bitte wählen')}</option>
          <option value={1}>{t('1 Stern')}</option>
          <option value={2}>{t('2 Sterne')}</option>
          <option value={3}>{t('3 Sterne')}</option>
          <option value={4}>{t('4 Sterne')}</option>
          <option value={5}>{t('5 Sterne')}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">{t('Kommentar')}:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded p-2"
          rows={4}
          placeholder={t('Deine Meinung...')}
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded"
      >
        {t('Bewertung absenden')}
      </button>
    </form>
  );
}

