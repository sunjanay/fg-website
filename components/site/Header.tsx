'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-teal text-white py-2 px-4 text-center text-sm">
        🎉 Join us for our Annual Community Gala - <Link href="https://www.fostergreatness.co/events" className="underline font-semibold">Register Now</Link>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-navy">
              Foster Greatness
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-navy transition">About</Link>
              <Link href="/community" className="text-gray-700 hover:text-navy transition">Community</Link>
              <Link href="/resources" className="text-gray-700 hover:text-navy transition">Resources</Link>
              <Link href="/get-involved" className="text-gray-700 hover:text-navy transition">Get Involved</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.fostergreatness.co/donate"
                className="bg-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-orange/90 transition"
              >
                Donate
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/about" className="text-gray-700 hover:text-navy transition">About</Link>
                <Link href="/community" className="text-gray-700 hover:text-navy transition">Community</Link>
                <Link href="/resources" className="text-gray-700 hover:text-navy transition">Resources</Link>
                <Link href="/get-involved" className="text-gray-700 hover:text-navy transition">Get Involved</Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
