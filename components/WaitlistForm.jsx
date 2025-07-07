import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

export default function WaitlistForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [role, setRole] = useState('seeker'); // 'seeker' or 'helper'
  const [submitted, setSubmitted] = useState(false);

  const submitWaitlist = async (e) => {
    e.preventDefault();
    if (!email || !postalCode) return;
    try {
      await addDoc(collection(db, 'waitlist'), {
        email: email,
        postalCode: postalCode,
        role: role,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error saving waitlist entry:', err);
    }
  };

  if (submitted) {
    return <p className="text-green-600 font-medium mt-4">{t('waitlist.success')}</p>;
  }

  return (
    <form onSubmit={submitWaitlist} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('waitlist.fieldEmail')}</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('waitlist.fieldZip')}</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
          maxLength={10}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">{t('waitlist.fieldRole')}</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="seeker">{t('waitlist.roleSeeker')}</option>
          <option value="helper">{t('waitlist.roleHelper')}</option>
        </select>
      </div>
      <button type="submit" className="bg-[#333] text-white px-4 py-2 rounded">
        {t('waitlist.submit')}
      </button>
    </form>
  );
}
