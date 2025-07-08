'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
const Map = () => <div style={{ height: 300, background: '#ccc' }}>Map (temporär deaktiviert)</div>;


export default function AdminDashboardPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [waitlistEntries, setWaitlistEntries] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) router.push('/adminlogin');
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      const waitlistSnapshot = await getDocs(collection(db, 'waitlist'));
      const ticketsSnapshot = await getDocs(collection(db, 'tickets'));
      setWaitlistEntries(waitlistSnapshot.docs.map(doc => doc.data()));
      setTickets(ticketsSnapshot.docs.map(doc => doc.data()));
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">{t('admin.dashboardTitle')}</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t('admin.newTickets')}</h2>
        {tickets.length === 0 ? (
          <p>No new tickets.</p>
        ) : (
          <ul className="list-disc list-inside">
            {tickets.map((ticket, idx) => (
              <li key={idx}>
                <strong>{ticket.category}:</strong> {ticket.message} <em>({ticket.email})</em>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t('admin.waitlistHeatmap')}</h2>
        <MapPlaceholder entries={waitlistEntries} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">{t('admin.waitlistTable')}</h2>
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">{t('waitlist.fieldZip')}</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {waitlistEntries.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{entry.email}</td>
                <td className="p-2">{entry.postalCode}</td>
                <td className="p-2">
                  {entry.role === 'helper' ? t('waitlist.roleHelper') : t('waitlist.roleSeeker')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
