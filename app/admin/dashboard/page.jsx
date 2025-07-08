'use client';
export const dynamic = 'force-dynamic';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() { /* ... */ }


import dynamic from 'next/dynamic';

const AdminDashboardPage = dynamic(() => import('@/components/AdminDashboardPage'), {
  ssr: false,
  loading: () => <div>Loading dashboard...</div>,
});

export default function DashboardPage() {
  return <AdminDashboardPage />;
}
