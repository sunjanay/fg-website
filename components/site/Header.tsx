'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative h-12 w-52 flex-shrink-0 group">
              <Image
                src="/images/foster-greatness-horizontal.svg"
                alt="Foster Greatness"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* About Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-5 py-2.5 text-gray-700 hover:text-navy font-semibold transition-all duration-200 hover:scale-105 relative group">
                  About
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-navy to-blue transition-transform duration-300 origin-left ${activeMenu === 'about' ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              </div>

              {/* Community Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('community')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-5 py-2.5 text-gray-700 hover:text-navy font-semibold transition-all duration-200 hover:scale-105 relative">
                  Community
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal to-blue transition-transform duration-300 origin-left ${activeMenu === 'community' ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              </div>

              {/* Campaigns Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('campaigns')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-5 py-2.5 text-gray-700 hover:text-navy font-semibold transition-all duration-200 hover:scale-105 relative">
                  Campaigns
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange to-yellow transition-transform duration-300 origin-left ${activeMenu === 'campaigns' ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              </div>

              <Link href="/partnerships" className="px-5 py-2.5 text-gray-700 hover:text-navy font-semibold transition-all duration-200 hover:scale-105">
                Partnerships
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="hidden md:flex items-center justify-center w-10 h-10 text-gray-700 hover:text-navy hover:bg-light-blue rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Donate Button */}
              <Link
                href="/donate"
                className="relative overflow-hidden bg-gradient-to-r from-orange to-yellow text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Donate
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-light-blue rounded-lg transition-all"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown - Full Width with Animation */}
        {activeMenu && (
          <div
            className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl animate-slideDown"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #1a2949 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="container mx-auto px-4 py-12 relative">
              {/* About Mega Menu */}
              {activeMenu === 'about' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Section */}
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-navy mb-8 animate-fadeIn">About Foster Greatness</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { icon: '📖', title: 'Our Story', desc: 'Discover how lived experience leadership drives our mission to create lifelong belonging', href: '/about', delay: '0ms' },
                        { icon: '📊', title: 'Impact Report', desc: 'See the measurable difference we are making in foster youth lives nationwide', href: '/impact-report', delay: '100ms' },
                        { icon: '👥', title: 'Our Team', desc: 'Meet the lived experience leaders building this movement', href: '/team', delay: '200ms' },
                        { icon: '🤝', title: 'Our Partners', desc: 'Organizations making lifelong community possible', href: '/partnerships', delay: '300ms' }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-light-blue/30 hover:from-light-blue hover:to-blue/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 animate-fadeIn"
                          style={{ animationDelay: item.delay }}
                        >
                          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                          <h4 className="text-xl font-bold text-navy group-hover:text-blue mb-2 transition-colors">{item.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Featured Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-navy via-blue to-teal rounded-2xl p-8 text-white shadow-2xl animate-fadeIn" style={{ animationDelay: '100ms' }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="text-6xl mb-6">❤️</div>
                      <h4 className="text-2xl font-bold mb-4">Age In, Never Age Out</h4>
                      <p className="text-sm mb-8 opacity-90 leading-relaxed">Support that evolves with you throughout your entire life—not just during transition periods.</p>
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-bold hover:bg-yellow hover:text-navy transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Learn Our Philosophy
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Community Mega Menu */}
              {activeMenu === 'community' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-navy mb-8 animate-fadeIn">Join Our Community</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { icon: '🌟', title: 'Join Community Circle', desc: 'Connect with 1,100+ current and former foster youth nationwide', href: 'https://community.fostergreatness.co', delay: '0ms' },
                        { icon: '💫', title: 'Thriver Stories', desc: 'Read inspiring stories of resilience and transformation', href: '/storytellers-collective', delay: '100ms' },
                        { icon: '🎤', title: 'Storytellers Collective', desc: 'Share your story and guide others in storytelling', href: '/storytellers-collective', delay: '200ms' },
                        { icon: '📅', title: 'Community Events', desc: 'Gatherings, celebrations, and connection opportunities', href: 'https://community.fostergreatness.co/c/general-events', delay: '300ms' }
                      ].map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-light-blue/30 hover:from-light-blue hover:to-teal/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 animate-fadeIn"
                          style={{ animationDelay: item.delay }}
                        >
                          <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{item.icon}</div>
                          <h4 className="text-xl font-bold text-navy group-hover:text-teal mb-2 transition-colors">{item.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-teal">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-gradient-to-br from-teal via-blue to-navy rounded-2xl p-8 text-white shadow-2xl animate-fadeIn" style={{ animationDelay: '100ms' }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="text-6xl mb-6">🏡</div>
                      <h4 className="text-2xl font-bold mb-4">Find Your Belonging</h4>
                      <p className="text-sm mb-8 opacity-90 leading-relaxed">A community where you are not just supported—you truly belong.</p>
                      <a
                        href="https://community.fostergreatness.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-bold hover:bg-yellow hover:text-navy transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Join Free Today
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Campaigns Mega Menu */}
              {activeMenu === 'campaigns' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-navy mb-8 animate-fadeIn">Current Campaigns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: '🎄',
                        title: 'Holiday Gift Drive 2025',
                        desc: 'Help provide gifts to foster youth this holiday season through our interactive giving tree',
                        href: '/holiday-gift-drive-2025',
                        gradient: 'from-navy via-blue to-teal',
                        delay: '0ms'
                      },
                      {
                        icon: '🏠',
                        title: 'Gingerbread House Contest',
                        desc: 'Support our community gingerbread building event and help create joyful memories',
                        href: '/gingerbread-contest',
                        gradient: 'from-orange via-yellow to-orange',
                        delay: '100ms'
                      },
                      {
                        icon: '🦃',
                        title: 'Meal Kit Sponsors',
                        desc: 'Partner with us to provide Thanksgiving meal kits to foster families',
                        href: '/meal-kit-sponsors',
                        gradient: 'from-teal via-blue to-navy',
                        delay: '200ms'
                      }
                    ].map((campaign, i) => (
                      <Link
                        key={i}
                        href={campaign.href}
                        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${campaign.gradient} p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeIn`}
                        style={{ animationDelay: campaign.delay }}
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{campaign.icon}</div>
                          <h4 className="text-2xl font-bold mb-3">{campaign.title}</h4>
                          <p className="text-sm mb-6 opacity-90 leading-relaxed">{campaign.desc}</p>
                          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-bold group-hover:bg-white group-hover:text-navy transition-all duration-300">
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t bg-light-blue/30 animate-slideDown">
            <div className="flex flex-col space-y-2 px-4">
              <Link href="/about" className="text-gray-700 hover:text-navy hover:bg-white transition-all px-4 py-3 rounded-lg font-semibold">About</Link>
              <a href="https://community.fostergreatness.co" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-navy hover:bg-white transition-all px-4 py-3 rounded-lg font-semibold">Community</a>
              <div className="px-4 py-3">
                <div className="font-bold text-navy mb-3">Campaigns</div>
                <div className="ml-4 space-y-2">
                  <Link href="/holiday-gift-drive-2025" className="block text-gray-600 hover:text-navy text-sm py-2">🎄 Holiday Gift Drive</Link>
                  <Link href="/gingerbread-contest" className="block text-gray-600 hover:text-navy text-sm py-2">🏠 Gingerbread Contest</Link>
                  <Link href="/meal-kit-sponsors" className="block text-gray-600 hover:text-navy text-sm py-2">🦃 Meal Kit Sponsors</Link>
                </div>
              </div>
              <Link href="/partnerships" className="text-gray-700 hover:text-navy hover:bg-white transition-all px-4 py-3 rounded-lg font-semibold">Partnerships</Link>
            </div>
          </nav>
        )}
      </header>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-start justify-center pt-32 animate-fadeIn" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-3xl mx-4 shadow-2xl transform animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 relative">
                <input
                  type="search"
                  placeholder="Search Foster Greatness..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                  autoFocus
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <button
                onClick={() => setShowSearch(false)}
                className="w-12 h-12 flex items-center justify-center text-gray-500 hover:text-navy hover:bg-light-blue rounded-xl transition-all"
                aria-label="Close search"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500">Try searching for programs, resources, or events</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
