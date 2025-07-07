
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FlyingBee() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <Image
        src="/images/flyingbee.png"
        alt="Flying Bee"
        width={64}
        height={64}
      />
    </motion.div>
  );
}
