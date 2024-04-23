import { Chivo, Outfit } from 'next/font/google';

const chivo = Chivo({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo'
});

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary'
});

const FONTS = [chivo.variable, outfit.variable];

export default FONTS;
