'use client';

import dynamic from 'next/dynamic';

const AdminDashboardPage = dynamic(() => import('@/components/AdminDashboardPage'), {
  ssr: false,
  loading: () => <div>Loading dashboard...</div>,
});

export default function DashboardPage() {
  return <AdminDashboardPage />;
}
