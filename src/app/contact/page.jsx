'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Insight Shooting Range | Artesia, CA</title>
        <meta
          name='description'
          content='Get in touch with Insight Shooting Range in Artesia, California. Call, email, or visit us for firearm rentals, shooting range info, and marksmanship training.'
        />
        <meta
          name='keywords'
          content='Insight Shooting Range contact, Artesia gun range, shooting range phone number, firearm rentals Artesia, California gun range contact'
        />
        <link rel='canonical' href='https://www.insightrangeinc.com/contact' />
      </Head>

      <main className='bg-background text-primary font-mono px-4 sm:px-6 py-12'>
        <div className='max-w-3xl mx-auto space-y-12'>
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-5xl font-bold uppercase tracking-wide text-secondary'>
              Contact Insight Shooting Range
            </h1>
            <p className='mt-4 text-lg text-gray-700'>
              Have questions about our indoor shooting range, firearm rentals, or safety classes?
              Contact our Artesia, CA team by phone, email, or visit in person — we’re here to help.
            </p>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className='bg-surface p-6 rounded shadow-md border-l-4 border-ctaBlue space-y-6'>
            <div className='flex items-start gap-4'>
              <Phone className='text-ctaBlue mt-1' />
              <div>
                <h2 className='font-semibold text-xl mb-1'>Call Us</h2>
                <p>
                  <a href='tel:+15628604365' className='text-ctaBlue underline'>
                    (562) 860-4365
                  </a>
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Printer className='text-ctaBlue mt-1' />
              <div>
                <h2 className='font-semibold text-xl mb-1'>Fax</h2>
                <p>(562) 860-4355</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Mail className='text-ctaBlue mt-1' />
              <div>
                <h2 className='font-semibold text-xl mb-1'>Email</h2>
                <p>
                  <a href='mailto:insightrange@yahoo.com' className='text-ctaBlue underline'>
                    insightrange@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <MapPin className='text-ctaBlue mt-1' />
              <div>
                <h2 className='font-semibold text-xl mb-1'>Visit Us</h2>
                <address className='not-italic text-gray-700'>
                  17020 Alburtis Avenue
                  <br />
                  Artesia, CA 90701
                  <br />
                  <span className='text-sm text-gray-500'>Cross streets: Pioneer & Artesia</span>
                </address>
              </div>
            </div>
          </motion.section>

          {/* SEO-Optimized Map */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className='rounded overflow-hidden shadow-md'>
            <iframe
              title='Insight Shooting Range Location Map in Artesia, CA'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.6371127574337!2d-118.0829215847881!3d33.87431978065508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2ca741f20701%3A0x71e528f90db54d4d!2sInsight%20Shooting%20Range!5e0!3m2!1sen!2sus!4v1717888888888!5m2!1sen!2sus'
              width='100%'
              height='400'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full border-0'></iframe>
          </motion.section>
        </div>
      </main>
    </>
  );
}
