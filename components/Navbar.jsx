'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'So funktioniert es', path: '/how-it-works' },
  { name: 'Belohnungssystem', path: '/rewards' },
  { name: 'Warteliste', path: '/waitlist' },
  { name: 'Bürokratie', path: '/bureaucracy' },
  { name: 'Support', path: '/support' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#333] text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="Helperbee Logo" width={36} height={36} />
        </Link>
        <ul className="flex space-x-4 text-sm sm:text-base">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link
                href={tab.path}
                className={`hover:underline ${pathname === tab.path ? 'font-bold underline' : ''}`}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/login">
          <div className="rounded-full bg-white text-[#333] px-3 py-1 text-sm font-medium hover:bg-gray-100">
            Login
          </div>
        </Link>
      </div>
    </nav>
  );
}
