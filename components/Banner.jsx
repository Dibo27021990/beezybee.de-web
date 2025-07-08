'use client';
export const dynamic = 'force-dynamic';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full mt-4 mb-6">
      <picture>
        <source
          srcSet="/images/BannerMobile.png"
          media="(max-width: 768px)"
        />
        <Image
          src="/images/BannerDesktop.png"
          alt="Helperbee Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </picture>
    </div>
  );
}
