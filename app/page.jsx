import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForWhom from '@/components/ForWhom';
import WhyDifferent from '@/components/WhyDifferent';
import RewardSystem from '@/components/RewardSystem';
import WaitlistSection from '@/components/WaitlistSection';
import SupportSection from '@/components/SupportSection';
import BureaucracyTabs from '@/components/BureaucracyTabs';
import StickyHeader from '@/components/StickyHeader';

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <HowItWorks />
        <ForWhom />
        <WhyDifferent />
        <RewardSystem />
        <WaitlistSection />
        <BureaucracyTabs />
        <SupportSection />
      </main>
    </>
  );
}
