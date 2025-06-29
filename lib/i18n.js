// lib/i18n.js

import { NextI18Next } from 'next-i18next';
import path from 'path';

const NextI18 = new NextI18Next({
  defaultLocale: 'de',
  locales: ['de', 'en'],
  localePath: path.resolve('./public/locales'),
});

export default NextI18;
export const { appWithTranslation, useTranslation } = NextI18;
