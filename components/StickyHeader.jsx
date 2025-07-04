'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

export default function Page() {
  return <h1>Testseite Helperbee</h1>;

  const tabs = [
    { href: '/', label: t('nav.home') },
    { href: '/howitworks', label: t('nav.howItWorks') },
    { href: '/rewards', label: t('nav.rewards') },
    { href: '/waitlist', label: t('nav.waitlist') },
    { href: '/support', label: t('nav.support') },
    { href: '/bureaucracy', label: t('nav.bureaucracy') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#333] text-white flex items-center justify-between px-6 py-3 shadow">
      <Image src="/images/logo.png" alt="Helperbee Logo" width={40} height={40} />
      <nav className="flex space-x-4">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href} className="hover:underline">
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
