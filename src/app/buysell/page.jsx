'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function BuySellPage() {
  return (
    <>
      <Head>
        <title>Buy or Sell Firearms in Artesia, CA | Insight Shooting Range</title>
        <meta
          name='description'
          content='Buy or sell handguns, rifles, and shotguns at Insight Shooting Range in Artesia, CA. Licensed firearm dealer, private party transfers, and try-before-you-buy shooting available.'
        />
        <meta
          name='keywords'
          content='firearm sales Artesia, buy gun California, handgun transfers, rifle sales, shotgun sales, FFL dealer, Insight Shooting Range'
        />
        <link rel='canonical' href='https://www.insightrangeinc.com/buysell' />
      </Head>

      <main className='bg-background text-primary font-mono px-4 sm:px-6 py-12'>
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-wide uppercase text-secondary'>
              Buy or Sell Firearms at Insight Shooting Range
            </h1>
            <p className='mt-4 text-lg text-gray-600'>
              Insight Shooting Range is a federally licensed firearms dealer in Artesia, CA. Whether
              you're buying your first handgun, selling a rifle, or transferring ownership through a
              private party, our experienced staff is here to assist with professionalism and care.
            </p>
          </motion.section>

          {/* Sales Details */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaBlue'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaBlue'>Firearm Sales Services</h2>
            <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700'>
              <li>Test-fire your firearm at our indoor range during the state waiting period.</li>
              <li>
                Special orders available by appointment — inquire for specific models or calibers.
              </li>
              <li>Facilitation of private party firearm transfers (PPT).</li>
              <li>Compliance with all California and federal firearm regulations.</li>
            </ul>
          </motion.section>

          {/* Pricing Info */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaOrange'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaOrange'>Dealer Transfer Fees</h2>
            <dl className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm sm:text-base text-gray-700'>
              <div>
                <dt className='font-medium'>Handgun DROS Fee</dt>
                <dd>$50.00</dd>
              </div>
              <div>
                <dt className='font-medium'>Shotgun / Rifle DROS Fee</dt>
                <dd>$50.00</dd>
              </div>
            </dl>
            <p className='mt-4 text-sm text-gray-500 italic'>
              *You must be 21 years of age to buy or rent a handgun or handgun ammunition in
              California.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}
