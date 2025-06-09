'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ShootPage() {
  return (
    <>
      <Head>
        <title>Indoor Shooting Range in Artesia, CA | Insight Firearm Rentals & Range Prices</title>
        <meta
          name='description'
          content='Come shoot at Insight Shooting Range — a public indoor range in Artesia, CA. View firearm rental policies, pricing, and important range rules before your visit.'
        />
        <meta
          name='keywords'
          content='shooting range Artesia CA, firearm rental, gun range pricing, indoor shooting lanes, rifle policy, Insight Shooting Range'
        />
        <link rel='canonical' href='https://www.insightrangeinc.com/shoot' />
      </Head>

      <main className='bg-background text-primary font-mono px-4 sm:px-6 py-12'>
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-wide uppercase text-secondary'>
              Public Indoor Shooting Range – Artesia, CA
            </h1>
            <p className='mt-4 text-lg text-gray-600'>
              Whether you're bringing your own firearm or renting one of ours, Insight Shooting
              Range is ready to get you on the line. Please take a moment to review our rental
              policies and pricing before your visit.
            </p>
          </motion.section>

          {/* Notes */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaOrange'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaOrange'>Range Rules & Notes</h2>
            <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700'>
              <li>
                <strong>Range rules must be reviewed</strong> before using any shooting lane.
              </li>
              <li>Shotguns are permitted every day.</li>
              <li>
                <strong>Flat-fee firearm rentals</strong> include access to all available pistols
                and rifles.
              </li>
              <li>
                Ammo for rental guns must be purchased on-site — <em>no outside ammo allowed</em>.
              </li>
              <li>Shotgun shells must be purchased at Insight.</li>
              <li>No steel-cased, steel core, aluminum case, or exposed lead ammunition.</li>
              <li>
                <strong>All rentals require two people</strong> — no solo shooting permitted.
              </li>
            </ul>
          </motion.section>

          {/* Pricing */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaBlue'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaBlue'>Range Pricing</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm sm:text-base text-gray-700'>
              <p>
                Shooting Lane: <strong>$22.00</strong>
              </p>
              <p>
                2nd Shooter (Same Lane): <strong>$18.00</strong>
              </p>
              <p>
                Seniors (65+): <strong>$20.00</strong>
              </p>
              <p>
                Pistol & Shotgun Rental: <strong>$15.00</strong>
              </p>
              <p>
                AR/AK Rifle Rental: <strong>$20.00</strong>
              </p>
              <p>
                Targets: <strong>$0.50 – $1.50</strong>
              </p>
              <p>
                Gun Cleaning (Most Pistols): <strong>$20.00</strong>
              </p>
              <p>
                Gun Cleaning (Most Rifles): <strong>$30.00</strong>
              </p>
              <p>
                Law Enforcement Rate: <strong>$20.00</strong>
              </p>
            </div>
          </motion.section>

          {/* Rifle Policy */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-olive'>
            <h2 className='text-2xl font-semibold mb-4 text-olive'>Rifle Use Policy</h2>
            <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700'>
              <li>
                <strong>.223/5.56 rifles</strong> are allowed every day of the week.
              </li>
              <li>
                <strong>Only range-supplied rifle ammo is permitted.</strong>
              </li>
              <li>Targets must be placed at a minimum of 10 yards.</li>
              <li>All rifles must be checked and approved by Insight staff.</li>
              <li>
                Pistols up to <strong>.500 S&W</strong> are also allowed.
              </li>
            </ul>
          </motion.section>
        </div>
      </main>
    </>
  );
}
