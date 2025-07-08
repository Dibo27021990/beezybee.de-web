'use client';

import dynamic from 'next/dynamic';
import StickyHeader from '@/components/StickyHeader';

const Hero = dynamic(() => import('@/components/Hero'));
const WaitlistSection = dynamic(() => import('@/components/WaitlistSection'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const TrustBadges = dynamic(() => import('@/components/Common/TrustBadges'));
const Screenshots = dynamic(() => import('@/components/Screenshots'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-white">
        <Hero />
        <WaitlistSection />
        <HowItWorks />
        <TrustBadges />
        <Screenshots />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
