'use client';

import dynamic from 'next/dynamic';

const AdminLoginPage = dynamic(() => import('@/components/AdminLoginPage'), {
  ssr: false,
  loading: () => <div>Loading login...</div>,
});

export default function AdminLogin() {
  return <AdminLoginPage />;
}

