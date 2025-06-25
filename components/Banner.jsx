'use client';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full flex justify-center mt-4 mb-6">
      <Image
        src="/images/banner.jpg"
        alt="Helperbee Banner"
        width={200}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
