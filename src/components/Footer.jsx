'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className='bg-primary text-gray-400 px-6 py-8 text-center text-sm'
      aria-label='Footer Navigation'>
      <nav>
        <ul className='flex flex-wrap justify-center gap-6 mb-4'>
          <li>
            <Link
              href='/shoot'
              title='Learn about shooting at Insight'
              className='hover:underline underline-offset-4'>
              Shoot
            </Link>
          </li>
          <li>
            <Link
              href='/buysell'
              title='Buy or sell firearms and gear'
              className='hover:underline underline-offset-4'>
              Buy/Sell
            </Link>
          </li>
          <li>
            <Link
              href='/learn'
              title='Training and education programs'
              className='hover:underline underline-offset-4'>
              Learn
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              title='Contact Insight Shooting Range'
              className='hover:underline underline-offset-4'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p>© {new Date().getFullYear()} Insight Shooting Range. All rights reserved.</p>
    </footer>
  );
}
