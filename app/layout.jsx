// app/layout.jsx
'use client';

import '@/styles/globals.css';
import { appWithTranslation } from '@/lib/i18n';
import StickyHeader from '@/components/StickyHeader';

function MyApp({ children }) {
  return (
    <>
      <StickyHeader />
      {children}
    </>
  );
}

export default appWithTranslation(MyApp);
