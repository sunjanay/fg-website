'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      {/* Announcement Banner with Dismiss */}
      {showBanner && (
        <div className="bg-teal text-white py-2 px-4 relative">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex-1 text-center text-sm">
              🎉 Join us for our Annual Community Gala - <Link href="https://www.fostergreatness.co/events" className="underline font-semibold">Register Now</Link>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 hover:opacity-70 transition"
              aria-label="Dismiss announcement"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative h-8 w-44">
              <Image
                src="https://placehold.co/180x40/1a2949/FFFFFF?text=Foster+Greatness"
                alt="Foster Greatness"
                fill
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation with Mega Menus */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="https://www.fostergreatness.co/about" className="text-gray-700 hover:text-navy transition">
                  About
                </Link>
                {activeMenu === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-6 border">
                    <h3 className="font-bold text-navy mb-3">About Us</h3>
                    <div className="space-y-2">
                      <Link href="https://www.fostergreatness.co/about" className="block hover:text-teal">
                        <div className="font-medium">Our Story</div>
                        <div className="text-sm text-gray-600">Learn about our mission and journey</div>
                      </Link>
                      <Link href="https://www.fostergreatness.co/impact-report" className="block hover:text-teal">
                        <div className="font-medium">Impact Report</div>
                        <div className="text-sm text-gray-600">See the difference we're making</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('community')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="https://www.fostergreatness.co/join-our-community" className="text-gray-700 hover:text-navy transition">
                  Community
                </Link>
                {activeMenu === 'community' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-6 border">
                    <h3 className="font-bold text-navy mb-3">Join Us</h3>
                    <div className="space-y-2">
                      <Link href="https://www.fostergreatness.co/join-our-community" className="block hover:text-teal">
                        <div className="font-medium">Join Community</div>
                        <div className="text-sm text-gray-600">Connect with other members</div>
                      </Link>
                      <Link href="https://www.fostergreatness.co/thriver-stories" className="block hover:text-teal">
                        <div className="font-medium">Thriver Stories</div>
                        <div className="text-sm text-gray-600">Inspiring success stories</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="https://www.fostergreatness.co/resources-provided" className="text-gray-700 hover:text-navy transition">Resources</Link>
              <Link href="https://www.fostergreatness.co/partnerships" className="text-gray-700 hover:text-navy transition">Get Involved</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="hidden md:block text-gray-700 hover:text-navy transition"
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Donate Button with Shimmer */}
              <Link
                href="https://www.fostergreatness.co/donate"
                className="relative overflow-hidden bg-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-orange/90 transition group"
              >
                <span className="relative z-10">Donate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700"
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
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="https://www.fostergreatness.co/about" className="text-gray-700 hover:text-navy transition">About</Link>
                <Link href="https://www.fostergreatness.co/join-our-community" className="text-gray-700 hover:text-navy transition">Community</Link>
                <Link href="https://www.fostergreatness.co/resources-provided" className="text-gray-700 hover:text-navy transition">Resources</Link>
                <Link href="https://www.fostergreatness.co/partnerships" className="text-gray-700 hover:text-navy transition">Get Involved</Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4">
              <input
                type="search"
                placeholder="Search..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close search"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
