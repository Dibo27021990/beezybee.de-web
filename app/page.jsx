'use client';

import StickyHeader from '@/components/StickyHeader';
import dynamic from 'next/dynamic';

// Nur funktionierende Komponenten laden
const Hero = dynamic(() => import('@/components/Hero'));
const Screenshots = dynamic(() => import('@/components/Screenshots'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));
// Optional: Wenn du die Warteliste nutzen willst
// const Waitlist = dynamic(() => import('@/components/WaitlistSection'));

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-white">
        <Hero />
        {/* <Waitlist /> */}
        {/* HowTo entfernt, da nicht vorhanden */}
        {/* TrustSection entfernt, da nicht vorhanden */}
        <Screenshots />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
