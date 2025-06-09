'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='sticky top-0 z-50 bg-primary border-b border-secondary font-mono'>
      <nav
        className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'
        aria-label='Main Navigation'>
        {/* Logo */}
        <Link href='/' aria-label='Visit Insight Shooting Range homepage'>
          <Image
            src='/insight-shooting-logo.svg'
            alt='Insight Shooting Range Logo'
            width={50}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold text-white'>
          <Link
            href='/shoot'
            title='Learn about range usage'
            className='hover:text-ctaOrange transition-colors'>
            Shoot
          </Link>
          <Link
            href='/buysell'
            title='Buy or sell firearms'
            className='hover:text-ctaOrange transition-colors'>
            Buy/Sell
          </Link>
          <Link
            href='/learn'
            title='Explore training and education options'
            className='hover:text-ctaOrange transition-colors'>
            Learn
          </Link>
          <Link
            href='/contact'
            title='Contact Insight Shooting Range'
            className='hover:text-ctaOrange transition-colors'>
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className='md:hidden text-white'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key='mobile-nav'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='md:hidden bg-primary border-t border-secondary px-6 pb-6 text-white text-sm uppercase font-semibold tracking-widest overflow-hidden'>
            <motion.div
              className='flex flex-col gap-4 mt-4'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
              }}>
              {[
                { path: '/shoot', label: 'Shoot', title: 'Learn about range usage' },
                { path: '/buysell', label: 'Buy/Sell', title: 'Buy or sell firearms' },
                { path: '/learn', label: 'Learn', title: 'Explore training options' },
                { path: '/contact', label: 'Contact', title: 'Get in touch with Insight' },
              ].map(({ path, label, title }) => (
                <motion.div
                  key={path}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                  <Link
                    href={path}
                    title={title}
                    onClick={closeMenu}
                    className='hover:text-ctaOrange transition-colors'>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
