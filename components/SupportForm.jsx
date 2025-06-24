'use client';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

export default function SupportForm() {
  const { t } = useTranslation();
  const [category, setCategory] = useState('appIssue');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const urgentCategories = ['appIssue']; // keys that need immediate email

  const submitTicket = async (e) => {
    e.preventDefault();
    if (!email || !message) return;
    try {
      // Save ticket in Firestore
      await addDoc(collection(db, 'tickets'), {
        category,
        email,
        message,
        timestamp: serverTimestamp()
      });
      // If category is urgent, call API route to send email notification
      if (urgentCategories.includes(category)) {
        fetch('/api/sendTicketEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category, email, message })
        }).catch(err => console.error('Email API error:', err));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting support ticket:', err);
    }
  };

  if (submitted) {
    return <p className="text-green-600 font-medium mt-4">{t('support.success')}</p>;
  }

  return (
    <form onSubmit={submitTicket} className="max-w-md mx-auto text-left">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('support.fieldCategory')}</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="appIssue">{t('support.categories.appIssue')}</option>
          <option value="account">{t('support.categories.account')}</option>
          <option value="other">{t('support.categories.other')}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('support.fieldEmail')}</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('support.fieldMessage')}</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-[#333] text-white px-4 py-2 rounded">
        {t('support.submit')}
      </button>
    </form>
  );
}

