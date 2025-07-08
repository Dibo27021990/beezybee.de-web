// components/FlyingBeeWrapper.jsx
import dynamic from 'next/dynamic';

const FlyingBee = dynamic(() => import('./FlyingBee'), {
  ssr: false,
});

export default FlyingBee;

