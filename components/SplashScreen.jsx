import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-300">
      <Image
        src="/images/splash.png"
        alt="Helperbee Splash"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
