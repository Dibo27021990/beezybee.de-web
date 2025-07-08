// app/bureaucracy/page.jsx
'use client';

import dynamic from 'next/dynamic';

const BureaucracyPage = dynamic(() => import('@/components/BureaucracyPage'), {
  ssr: false,
  loading: () => <div>Lade Bürokratiebereich...</div>,
});

export default function Page() {
  return <BureaucracyPage />;
}
