'use client';
import FlyingBee from './FlyingBee';
import { usePathname } from 'next/navigation';

export default function FlyingBeeWrapper() {
  const pathname = usePathname();

  const shouldHide = [
    '/login',
    '/adminlogin',
    '/admin/dashboard',
    '/admin',
    '/404',
  ].includes(pathname);

  if (shouldHide) return null;

  return <FlyingBee />;
}
