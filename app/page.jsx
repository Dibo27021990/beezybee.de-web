'use client';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForWhom from '@/components/ForWhom';
import WhyDifferent from '@/components/WhyDifferent';
import Rewards from '@/components/Rewards';
import WaitlistForm from '@/components/WaitlistForm';
import BureaucracyTabs from '@/components/BureaucracyTabs';

export default function HomePage() {
  return (
    <main>
      <div className="w-full">
        <picture>
          <source srcSet="/images/BannerHandy.png" media="(max-width: 768px)" />
          <img
            src="/images/BannerDesktop.png"
            alt="Helperbee Banner"
            className="w-full h-auto max-h-[300px] object-cover"
          />
        </picture>
      </div>

      <Hero />
      <HowItWorks />
      <ForWhom />
      <WhyDifferent />
      <Rewards />
      <BureaucracyTabs />
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Warteliste</h2>
        <WaitlistForm />
      </section>
    </main>
  );
}
