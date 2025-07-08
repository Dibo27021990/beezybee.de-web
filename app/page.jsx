'use client';

import dynamic from 'next/dynamic';
import StickyHeader from '@/components/StickyHeader';

const Hero = dynamic(() => import('@/components/Hero'));
const Waitlist = dynamic(() => import('@/components/WaitlistSection'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const TrustBadges = dynamic(() => import('@/components/TrustBadges')); // Falls du willst
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
        <HowItWorks />
        <TrustBadges />
        <Screenshots />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
