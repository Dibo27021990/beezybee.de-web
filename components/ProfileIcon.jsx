'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileIcon() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link href="/login">
        <Image
          src="/images/profile-icon.png"
          alt="Profil"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </Link>
    </div>
  );
}
