'use client';

import StickyHeader from '@/components/StickyHeader';
import dynamic from 'next/dynamic';

// Alle Komponenten lazy laden
const Hero = dynamic(() => import('@/components/Hero'));
const Waitlist = dynamic(() => import('@/components/Waitlist'));
const HowTo = dynamic(() => import('@/components/HowTo'));
const TrustSection = dynamic(() => import('@/components/TrustSection'));
const Screenshots = dynamic(() => import('@/components/Screenshots'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-white">
        <Hero />
        <Waitlist />
        <HowTo />
        <TrustSection />
        <Screenshots />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
