'use client';

import Image from 'next/image';

export default function TrustBadges() {
  return (
    <div className="flex gap-4 justify-center items-center my-4">
      <Image src="/images/trust1.svg" alt="Trust 1" width={80} height={80} />
      <Image src="/images/trust2.svg" alt="Trust 2" width={80} height={80} />
      <Image src="/images/trust3.svg" alt="Trust 3" width={80} height={80} />
    </div>
  );
}
