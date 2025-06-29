// lib/i18n.js
import NextI18NextInstance from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';

const NextI18Next = new NextI18NextInstance(nextI18NextConfig);

export default NextI18Next;
export const { appWithTranslation, useTranslation } = NextI18Next;
