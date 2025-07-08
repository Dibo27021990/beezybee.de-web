export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';
import StickyHeader from '@/components/StickyHeader';

// Lazy loaded Komponenten
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Waitlist = dynamic(() => import('@/components/Waitlist'), { ssr: false });
const HowTo = dynamic(() => import('@/components/HowTo'), { ssr: false });
const TrustSection = dynamic(() => import('@/components/TrustSection'), { ssr: false });
const Screenshots = dynamic(() => import('@/components/Screenshots'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <Hero />
      <Waitlist />
      <HowTo />
      <TrustSection />
      <Screenshots />
      <Testimonials />
      <Footer />
    </>
  );
}
