import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import ForWhom from '../components/ForWhom';
import WhyDifferent from '../components/WhyDifferent';
import RewardSystem from '../components/RewardSystem';
import WaitlistSection from '../components/WaitlistSection';
import SupportSection from '../components/SupportSection';
import SplashScreen from '../components/SplashScreen';

export default function HomePage() {
  return (
    <main>
      <SplashScreen />
      <HeroSection />
      <HowItWorks />
      <ForWhom />
      <WhyDifferent />
      <RewardSystem />
      <WaitlistSection />
      <SupportSection />
      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 px-4 text-center text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex justify-center gap-4">
            <a href="/terms" className="hover:underline">AGB</a>
            <a href="/impressum" className="hover:underline">Impressum</a>
            <a href="/privacy" className="hover:underline">Datenschutz</a>
            <a href="#waitlist" className="hover:underline">Kontakt</a>
          </div>
          <p className="mt-4">© 2025 Helperbee</p>
        </div>
      </footer>
    </main>
  );
}
