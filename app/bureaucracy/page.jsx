'use client';

import BureaucracyTabs from '@/components/BureaucracyTabs';
import StickyHeader from '@/components/StickyHeader';

export default function BureaucracyPage() {
  return (
    <>
      <StickyHeader />
      <main>
        <BureaucracyTabs />
      </main>
    </>
  );
}
