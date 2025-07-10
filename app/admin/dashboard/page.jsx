'use client';
export const dynamic = 'force-dynamic';

import nextDynamic from 'next/dynamic';
import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

const AdminDashboardPage = nextDynamic(() => import('@/components/AdminDashboardPage'), {
  ssr: false,
  loading: () => <div>Loading dashboard...</div>,
});

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <>
      <StickyHeader />
      <AdminDashboardPage />
    </>
  );
}
