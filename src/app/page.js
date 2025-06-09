'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Insight Shooting Range | Indoor Gun Range in Artesia, CA</title>
        <meta
          name='description'
          content='Insight Shooting Range in Artesia, CA offers 20 indoor shooting lanes, expert-led firearm training, rentals, and safety-focused range officers. Open to the public.'
        />
        <meta
          name='keywords'
          content='indoor gun range, shooting range near me, Insight Range, Artesia CA shooting range, firearm rentals, tactical training, California gun range'
        />
        <meta property='og:title' content='Insight Shooting Range | Artesia, California' />
        <meta
          property='og:description'
          content='20 indoor lanes, rentals, training & a safe environment. Insight is Southern California&apos;s go-to indoor gun range.'
        />
        <meta property='og:image' content='/og-image.jpg' />
        <meta property='og:url' content='https://www.insightrangeinc.com/' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Insight Shooting Range | Artesia, CA' />
        <meta
          name='twitter:description'
          content='Professional indoor shooting range with rentals, training, and 20 lanes. Visit Insight Range today.'
        />
        <meta name='twitter:image' content='/og-image.jpg' />
        <link rel='canonical' href='https://www.insightrangeinc.com/' />
      </Head>

      <motion.div
        className='bg-primary text-white font-mono'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {/* Hero Section */}
        <motion.section
          className='bg-secondary text-white px-4 sm:px-6 py-16 sm:py-20 text-center sm:text-left border-b border-gray-800'
          variants={sectionVariants}
          custom={0}
          initial='hidden'
          animate='visible'>
          <div className='max-w-4xl mx-auto'>
            <motion.h1
              className='text-5xl font-extrabold uppercase tracking-wider mb-6'
              variants={sectionVariants}
              custom={1}>
              Southern California&apos;s Largest Indoor Shooting Range
            </motion.h1>
            <motion.p
              className='text-lg text-gray-300 leading-relaxed mb-8 max-w-xl'
              variants={sectionVariants}
              custom={2}>
              Whether you&apos;re a first-time shooter or a lifelong enthusiast, Insight offers a
              welcoming, professional environment built around safety, skill-building, and respect.
              Our goal is simple: to help you feel confident, capable, and in control.
            </motion.p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#features'
                className='inline-flex items-center gap-2 bg-accent hover:bg-ctaBlue text-white px-6 py-3 rounded uppercase font-semibold tracking-wide'>
                View Capabilities <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#hours'
                className='inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded uppercase font-semibold tracking-wide'>
                Plan Visit <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          id='features'
          className='bg-background px-6 py-16 text-primary'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={1}>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold mb-6'>What You&apos;ll Find at Insight</h2>
            <ul className='grid gap-4 list-disc list-inside'>
              <li>20 indoor shooting stations (handicap accessible)</li>
              <li>Climate-controlled 25-yard range</li>
              <li>Electronic target retrieval system</li>
              <li>Pistol, rifle, and shotgun-friendly</li>
              <li>Firearm safety & marksmanship classes</li>
              <li>Rental weapons available on-site</li>
              <li>Private and group training sessions</li>
            </ul>
          </div>
        </motion.section>

        {/* Why Choose Insight */}
        <motion.section
          id='why'
          className='bg-surface px-6 py-16 text-primary'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={2}>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl font-bold mb-6'>Why Choose Insight Shooting Range?</h2>
            <ul className='grid gap-4'>
              <li>
                <strong>Certified & friendly range officers</strong> — here to support, not
                intimidate.
              </li>
              <li>
                <strong>No membership required</strong> — walk-ins welcome.
              </li>
              <li>
                <strong>Perfect for beginners</strong> — safety-focused and beginner-friendly
                environment.
              </li>
              <li>
                <strong>Expert training available</strong> — marksmanship, handling, and tactical
                sessions.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className='bg-background px-6 py-16 text-primary'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={3}>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl font-bold mb-6'>Customer Reviews</h2>
            <blockquote className='italic mb-4'>
              “Very knowledgeable staff members and has become the only indoor range I want to give
              my business to locally.”
            </blockquote>
            <blockquote className='italic mb-4'>
              “Nice shooting range, clean facility, friendly staff… I would definitely refer this
              place.”
            </blockquote>
            <p className='italic text-sm text-gray-500'>— Verified Reviews via Yelp & MapQuest</p>
          </div>
        </motion.section>

        {/* Hours & Location */}
        <motion.section
          id='hours'
          className='bg-surface px-6 py-16 text-primary'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={4}>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold mb-4'>Range Hours & Location</h2>
            <ul className='space-y-1'>
              <li>Mon–Fri: 11:00 AM – 7:00 PM</li>
              <li>Saturday: 10:00 AM – 8:00 PM</li>
              <li>Sunday: 11:00 AM – 8:00 PM</li>
            </ul>
            <div id='contact' className='mt-8'>
              <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
              <p>
                17020 Alburtis Avenue
                <br />
                Artesia, CA 90701
                <br />
                (Cross streets: Pioneer & Artesia)
              </p>
              <p className='mt-4 font-semibold'>
                Call us at{' '}
                <a href='tel:+15628675823' className='text-accent underline'>
                  562-867-5823
                </a>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className='bg-primary text-gray-400 px-6 py-8 text-center text-sm'>
          <nav className='flex flex-wrap justify-center gap-6 mb-4'>
            <a href='#features' className='hover:underline underline-offset-4'>
              Features
            </a>
            <a href='#why' className='hover:underline underline-offset-4'>
              Why Insight?
            </a>
            <a href='#hours' className='hover:underline underline-offset-4'>
              Hours & Visit Info
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Insight Shooting Range. All rights reserved.</p>
        </footer>
      </motion.div>
    </>
  );
}
