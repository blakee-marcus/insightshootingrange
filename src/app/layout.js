import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Insight Shooting Range | Indoor Gun Range in Artesia, CA',
  description:
    'Insight Shooting Range offers public shooting lanes, firearm rentals, and gun safety training in Artesia, California. Come shoot with us today!',
  keywords:
    'shooting range, firearm rental, Artesia gun range, indoor shooting range CA, gun safety classes, Insight Range, pistol rental, rifle shooting',
  authors: [{ name: 'Insight Shooting Range', url: 'https://www.insightrangeinc.com' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.insightrangeinc.com'),
  openGraph: {
    title: 'Insight Shooting Range | Firearm Rentals & Range Access in Artesia, CA',
    description:
      'Visit Insight Shooting Range for indoor lanes, pistol and rifle rentals, and marksmanship training. Located in Artesia, CA.',
    url: 'https://www.insightrangeinc.com',
    siteName: 'Insight Shooting Range',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Shooting Range',
    description:
      'Public indoor gun range in Artesia, CA. Firearm rentals, training sessions, and private party transfers available.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
