import Header from '@/components/Header';
import Image from 'next/image';
import Hero from '@/components/Hero';
import WhyDifferent from '@/components/WhyDifferent';
import ForWhom from '@/components/ForWhom';
import HowItWorks from '@/components/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center bg-yellow-100 py-4">
        <Image
          src="/images/banner.jpg"
          alt="Helperbee Banner"
          width={300}
          height={80}
        />
      </div>
      <main>
        <Hero />
        <ForWhom />
        <HowItWorks />
        <WhyDifferent />
      </main>
    </>
  );
}
