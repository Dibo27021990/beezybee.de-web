'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Home', href: '/' },
  { label: 'So funktioniert es', href: '/how-it-works' },
  { label: 'Belohnungssystem', href: '/rewards' },
  { label: 'Warteliste', href: '/waitlist' },
  { label: 'Support', href: '/support' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#333] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Helperbee Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-sm font-medium hover:underline ${
                pathname === tab.href ? 'underline' : ''
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
