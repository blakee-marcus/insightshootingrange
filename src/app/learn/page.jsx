'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function LearnPage() {
  return (
    <>
      <Head>
        <title>Firearms Training & Gun Safety Courses | Insight Shooting Range, Artesia CA</title>
        <meta
          name='description'
          content='Improve your shooting skills with marksmanship training at Insight Shooting Range in Artesia, CA. Beginner to advanced firearms instruction available by appointment.'
        />
        <meta
          name='keywords'
          content='firearms training Artesia, shooting range education, gun safety classes, marksmanship courses, Insight Shooting Range training'
        />
        <link rel='canonical' href='https://www.insightrangeinc.com/learn' />
      </Head>

      <main className='bg-background text-primary font-mono px-4 sm:px-6 py-12'>
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-5xl font-bold uppercase tracking-wide text-secondary'>
              Firearms Training & Education
            </h1>
            <p className='mt-4 text-lg text-gray-700'>
              Whether you're a beginner learning to shoot or an experienced marksman refining your
              skills, Insight Shooting Range in Artesia, CA offers expert-led firearm training in a
              safe, supportive setting.
            </p>
          </motion.section>

          {/* Training Info */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaBlue'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaBlue'>Marksmanship Training</h2>
            <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700'>
              <li>
                Private firearms instruction available by appointment — all experience levels
                welcome.
              </li>
              <li>
                Learn gun safety, shooting technique, and range etiquette from our trained staff.
              </li>
              <li>Speak with the front desk to schedule your personal training session today.</li>
            </ul>
          </motion.section>

          {/* Classroom Rental */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaOrange'>
            <h2 className='text-2xl font-semibold mb-4 text-ctaOrange'>Private Classroom Rental</h2>
            <p className='text-sm sm:text-base text-gray-700 mb-4'>
              Need space for your own firearm safety class or marksmanship workshop? Rent our
              on-site classroom for just <strong>$10/hour</strong>. It’s the perfect setting for
              pre-range education or community instruction.
            </p>
            <p className='text-sm text-gray-500 italic'>
              Contact Insight Shooting Range in Artesia to reserve classroom space in advance.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}
