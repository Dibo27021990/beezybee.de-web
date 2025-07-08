import FlyingBee from './FlyingBee';
import { usePathname } from 'next/navigation';

export default function FlyingBeeWrapper() {
  const pathname = usePathname();

  // Optional: Nur auf bestimmten Seiten anzeigen
  const showOnPaths = ['/', '/rewards', '/support'];
  const shouldShow = showOnPaths.includes(pathname);

  if (!shouldShow) return null;

  return <FlyingBee />;
}
