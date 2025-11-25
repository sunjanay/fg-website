# Missing Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create missing site pages (/donate, /events, /thriver-stories, /impact), implement redirects, and cleanup broken navigation links.

**Architecture:** Static Next.js pages using existing design patterns (motion animations, brand colors, reusable components). Events page fetches from Circle API. Thriver Stories embeds YouTube playlist.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, Framer Motion, Lucide icons

---

## Task 1: Create `/donate` Page

**Files:**
- Create: `app/(site)/donate/page.tsx`

**Step 1: Create the donate page**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Gift, Sparkles, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Donate | Foster Greatness',
  description: 'Support Foster Greatness and help create lifelong community and belonging for current and former foster youth.',
};

const campaigns = [
  {
    title: 'Holiday Gift Drive 2025',
    description: 'Choose a gift from our interactive Christmas tree and bring holiday joy to a community member.',
    image: '/images/holiday-gift-tree.png',
    href: '/holiday-gift-drive-2025',
    icon: Gift,
    color: 'from-fg-teal to-fg-navy',
  },
  {
    title: 'Gingerbread House Contest',
    description: 'Fund gingerbread kits and gift cards for our virtual community building event.',
    image: '/images/gingerbread-1.jpg',
    href: '/gingerbread',
    icon: Sparkles,
    color: 'from-fg-orange to-fg-yellow',
  },
  {
    title: 'Meal Kit Sponsors',
    description: 'Provide Thanksgiving meal kits to foster families and community members.',
    image: '/images/community-feature.png',
    href: '/meal-kit-sponsors',
    icon: Users,
    color: 'from-fg-navy to-fg-teal',
  },
];

const impactStats = [
  { number: '310', label: 'Event Attendees' },
  { number: '77', label: 'Wishes Granted' },
  { number: '100+', label: 'Community Members' },
];

export default function DonatePage() {
  return (
    <main className="relative min-h-screen bg-[#fafbfc]">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fg-navy via-fg-navy to-fg-teal py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-fg-teal/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fg-orange/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-fg-teal" />
            <span className="text-sm font-semibold text-white/90">100% goes directly to programs</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Support Foster Greatness
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your generosity creates lifelong community and belonging for current and former foster youth nationwide.
          </p>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fg-navy mb-4">
              Active Campaigns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a campaign to support, or make a general donation below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <Link
                key={campaign.title}
                href={campaign.href}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${campaign.color} opacity-20`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${campaign.color}`}>
                      <campaign.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-fg-navy group-hover:text-fg-teal transition-colors">
                      {campaign.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  <span className="inline-flex items-center gap-2 text-fg-teal font-semibold group-hover:gap-3 transition-all">
                    Support This Campaign
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General Donation */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-fg-teal/10 to-fg-navy/10 mb-6">
                <Heart className="w-10 h-10 text-fg-teal" />
              </div>
              <h2 className="text-3xl font-bold text-fg-navy mb-4">
                Support Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Make a general donation to support all Foster Greatness programs and help us create belonging for foster youth everywhere.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <a
                href="https://donate.stripe.com/8wM3fO2Xn5Ht1tm3cc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-fg-teal to-fg-navy text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </a>
            </div>

            <p className="text-center text-sm text-gray-500">
              Questions? Contact us at{' '}
              <a href="mailto:jordanb@doinggoodworks.com" className="text-fg-teal hover:underline">
                jordanb@doinggoodworks.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-fg-navy mb-8">Your Impact</h2>

          <div className="grid grid-cols-3 gap-8 mb-8">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-fg-teal mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-fg-navy font-semibold hover:text-fg-teal transition-colors"
          >
            View Full Impact Report
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Verify page renders**

Run: Open http://localhost:3001/donate
Expected: Page renders with hero, campaigns grid, and donation section

**Step 3: Commit**

```bash
git add app/(site)/donate/page.tsx
git commit -m "feat: add donate page with campaigns and general donation"
```

---

## Task 2: Create `/events` Page

**Files:**
- Create: `app/(site)/events/page.tsx`

**Step 1: Create the events page**

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

interface CircleEvent {
  id: string;
  name: string;
  starts_at: string;
  url: string;
  location_type: string;
  host?: string;
  member_name?: string;
  cover_image_url?: string;
  space?: {
    slug: string;
  };
}

export default function EventsPage() {
  const [events, setEvents] = useState<CircleEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('https://circle-events-widget-23sx.vercel.app/api/events');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        const allEvents = data.records || data || [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const filteredEvents = allEvents
          .filter((event: CircleEvent) => {
            const isGeneralEvents = event.space?.slug === 'general-events';
            const eventDate = new Date(event.starts_at);
            eventDate.setHours(0, 0, 0, 0);
            return isGeneralEvents && eventDate >= today;
          })
          .sort((a: CircleEvent, b: CircleEvent) =>
            new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime()
          )
          .slice(0, 12);

        setEvents(filteredEvents);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#fafbfc]">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-fg-light-blue to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Calendar className="w-4 h-4 text-fg-teal" />
              <span className="text-sm font-semibold text-fg-navy">Community Events</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg-navy mb-6">
              Upcoming Events
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow foster youth at workshops, panels, and social gatherings. All events are free for community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-72 bg-white rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : events.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {events.map((event, index) => {
                const eventDate = new Date(event.starts_at);
                const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
                const day = eventDate.getDate();
                const time = eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
                const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });

                return (
                  <motion.a
                    key={event.id}
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {event.cover_image_url && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={event.cover_image_url}
                          alt={event.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-fg-navy flex flex-col items-center justify-center text-white">
                          <span className="text-xs font-bold opacity-80">{month}</span>
                          <span className="text-xl font-bold">{day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-fg-navy group-hover:text-fg-teal transition-colors line-clamp-2 mb-2">
                            {event.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{weekday}, {time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location_type === 'virtual' ? 'Virtual Event' : 'In Person'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No upcoming events at this time.</p>
              <p className="text-gray-400 mt-2">Check back soon for new events!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-fg-navy mb-4">
            Want to see all community events?
          </h2>
          <p className="text-gray-600 mb-6">
            Join our community platform to access the full events calendar and RSVP.
          </p>
          <a
            href="https://community.fostergreatness.co/c/general-events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fg-teal text-white px-8 py-4 rounded-full font-bold hover:bg-fg-navy transition-colors"
          >
            View All Events
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Verify page renders**

Run: Open http://localhost:3001/events
Expected: Page renders with hero and events grid from Circle API

**Step 3: Commit**

```bash
git add app/(site)/events/page.tsx
git commit -m "feat: add events page with Circle API integration"
```

---

## Task 3: Create `/thriver-stories` Page

**Files:**
- Create: `app/(site)/thriver-stories/page.tsx`

**Step 1: Create the thriver-stories page**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Play, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import YouTubePlaylist from '@/components/YouTubePlaylist';

export default function ThriverStoriesPage() {
  return (
    <main className="relative min-h-screen bg-[#fafbfc]">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-fg-light-blue to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Play className="w-4 h-4 text-fg-teal" />
              <span className="text-sm font-semibold text-fg-navy">Video Series</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg-navy mb-6">
              Thriver Stories
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Real stories of resilience, strength, and transformation from our community.
            </p>

            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Host Isabel Stasa interviews Foster Greatness community members, sharing their journeys and insights. New episodes weekly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Playlist */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <YouTubePlaylist playlistId="PLP4LxE_2m7ju-Bcbx2ia50UVFgP1AkcN6" maxResults={12} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-fg-navy via-fg-navy to-fg-teal rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-white/10 mb-6">
                <Heart className="w-8 h-8 text-fg-teal" />
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Want to Share Your Story?
              </h2>

              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join the Storytellers Collective and learn how to harness your story as a powerful tool for change.
              </p>

              <Link
                href="/storytellers-collective"
                className="inline-flex items-center gap-2 bg-white text-fg-navy px-8 py-4 rounded-full font-bold hover:bg-fg-teal hover:text-white transition-colors"
              >
                Join Storytellers Collective
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Verify page renders**

Run: Open http://localhost:3001/thriver-stories
Expected: Page renders with hero and YouTube playlist grid

**Step 3: Commit**

```bash
git add app/(site)/thriver-stories/page.tsx
git commit -m "feat: add thriver-stories page with YouTube playlist"
```

---

## Task 4: Create `/impact` Page

**Files:**
- Create: `app/(site)/impact/page.tsx`

**Step 1: Create the impact page**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Users, Heart, Gift, Calendar, ArrowRight, Download, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: '2024 Impact Report | Foster Greatness',
  description: 'See the measurable difference Foster Greatness is making in foster youth lives nationwide.',
};

const impactStats = [
  { number: '310', label: 'Event Attendees', icon: Users },
  { number: '8', label: 'Panels Hosted', icon: Calendar },
  { number: '8', label: 'Workshops Delivered', icon: TrendingUp },
  { number: '77', label: 'Wishes Granted', icon: Gift },
  { number: '100+', label: 'Community Members', icon: Heart },
  { number: '73', label: 'SDOH Event Participants', icon: Users },
];

const programHighlights = [
  {
    title: 'Panels & Workshops',
    description: 'We hosted 8 impactful panels and 8 engaging workshops, reaching 310 attendees. Panelists with lived experience courageously shared their journeys, providing inspiration and actionable insights.',
    icon: Calendar,
  },
  {
    title: 'SDOH & Community Events',
    description: 'We organized 2 Social Determinants of Health-focused community events in partnership with Eat Well and One Simple Wish, engaging 73 participants in discussions and activities designed to improve well-being.',
    icon: Heart,
  },
  {
    title: 'One Simple Wish Partnership',
    description: '77 wishes granted to community members through our partnership with One Simple Wish, providing everything from Nintendo Switches to essential household items.',
    icon: Gift,
  },
  {
    title: 'Foster Youth Tax Credit',
    description: 'Helped foster youth access the California Foster Youth Tax Credit, with 77 receiving one-on-one support and 35 receiving FYTC returns.',
    icon: TrendingUp,
  },
];

export default function ImpactPage() {
  return (
    <main className="relative min-h-screen bg-[#fafbfc]">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fg-navy via-fg-navy to-fg-teal py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-fg-teal/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fg-orange/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-fg-teal" />
            <span className="text-sm font-semibold text-white/90">2024 Annual Report</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            2024 Impact Report
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            A testament to the collective efforts of our team, supporters, and community members who have come together to make a meaningful difference.
          </p>

          <a
            href="/assets/files/2024-impact-report.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-fg-navy px-8 py-4 rounded-full font-bold hover:bg-fg-teal hover:text-white transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Full Report (PDF)
          </a>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-fg-teal/10">
                  <Target className="w-6 h-6 text-fg-teal" />
                </div>
                <h2 className="text-2xl font-bold text-fg-navy">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To co-create a space with people impacted by the foster system where empowerment, healing, and community are front and center.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-fg-navy/10">
                  <Eye className="w-6 h-6 text-fg-navy" />
                </div>
                <h2 className="text-2xl font-bold text-fg-navy">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A world where every person who has lived through the foster system feels seen, supported, and unstoppable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-fg-navy text-center mb-12">
            By The Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-fg-teal/10 mb-4">
                  <stat.icon className="w-6 h-6 text-fg-teal" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-fg-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-fg-navy text-center mb-12">
            Program Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programHighlights.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-fg-teal to-fg-navy">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fg-navy">{program.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-fg-navy mb-4">
            Help Us Grow Our Impact
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Your support helps us continue creating lifelong community and belonging for foster youth nationwide.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fg-orange to-fg-yellow text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Support Our Mission
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Verify page renders**

Run: Open http://localhost:3001/impact
Expected: Page renders with hero, stats, and program highlights

**Step 3: Commit**

```bash
git add app/(site)/impact/page.tsx
git commit -m "feat: add impact report page with 2024 stats"
```

---

## Task 5: Create Redirect Pages

**Files:**
- Create: `app/(site)/join/page.tsx`
- Create: `app/(site)/stories/page.tsx`

**Step 1: Create /join redirect**

```tsx
import { redirect } from 'next/navigation';

export default function JoinPage() {
  redirect('https://community.fostergreatness.co');
}
```

**Step 2: Create /stories redirect**

```tsx
import { redirect } from 'next/navigation';

export default function StoriesPage() {
  redirect('/thriver-stories');
}
```

**Step 3: Commit**

```bash
git add app/(site)/join/page.tsx app/(site)/stories/page.tsx
git commit -m "feat: add redirect pages for /join and /stories"
```

---

## Task 6: Update Footer Links

**Files:**
- Modify: `components/site/Footer.tsx`

**Step 1: Update Footer with correct links**

Replace entire Footer.tsx content:

```tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">Our Story</Link></li>
              <li><Link href="/impact" className="text-gray-300 hover:text-white transition">Impact Report</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-white transition">Partners</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://community.fostergreatness.co" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Join Community</a></li>
              <li><Link href="/thriver-stories" className="text-gray-300 hover:text-white transition">Thriver Stories</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition">Events</Link></li>
              <li><Link href="/storytellers-collective" className="text-gray-300 hover:text-white transition">Storytellers Collective</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-gray-300 hover:text-white transition">Donate</Link></li>
              <li><Link href="/holiday-gift-drive-2025" className="text-gray-300 hover:text-white transition">Holiday Gift Drive</Link></li>
              <li><Link href="/gingerbread" className="text-gray-300 hover:text-white transition">Gingerbread Contest</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-white transition">Partnerships</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-300 mb-4">
              Creating lifelong community and belonging for current and former foster youth nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/fostergreatness" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com/fostergreatness" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Foster Greatness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify footer renders**

Run: Check footer on http://localhost:3001
Expected: All links work, no broken links

**Step 3: Commit**

```bash
git add components/site/Footer.tsx
git commit -m "fix: update footer with correct links, remove broken ones"
```

---

## Task 7: Update Header Links

**Files:**
- Modify: `components/site/Header.tsx`

**Step 1: Update Header mega menu - remove /team and /impact-report, fix /donate**

In the About mega menu array (around line 192-197), change to:

```tsx
{[
  { icon: '📖', title: 'Our Story', desc: 'Discover how lived experience leadership drives our mission to create lifelong belonging', href: '/about', delay: '0ms' },
  { icon: '📊', title: 'Impact Report', desc: 'See the measurable difference we are making in foster youth lives nationwide', href: '/impact', delay: '100ms' },
  { icon: '🤝', title: 'Our Partners', desc: 'Organizations making lifelong community possible', href: '/partnerships', delay: '200ms' }
].map((item, i) => (
```

Also update the donate button href (around line 139):

```tsx
<Link
  href="/donate"
```

(This is already correct, just verify)

**Step 2: Verify header works**

Run: Check header navigation on http://localhost:3001
Expected: All mega menu links work

**Step 3: Commit**

```bash
git add components/site/Header.tsx
git commit -m "fix: update header links, remove /team, fix /impact-report to /impact"
```

---

## Task 8: Fix Header Menu Hover Issue

**Files:**
- Modify: `components/site/Header.tsx`

**Step 1: Add debounced menu close logic**

At the top of the component, add state and handlers:

```tsx
import { useState, useEffect, useRef, useCallback } from 'react';

// Inside the component, after existing useState declarations:
const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

const clearCloseTimeout = useCallback(() => {
  if (closeTimeoutRef.current) {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }
}, []);

const handleMenuEnter = useCallback((menu: string) => {
  clearCloseTimeout();
  setActiveMenu(menu);
}, [clearCloseTimeout]);

const handleMenuLeave = useCallback(() => {
  clearCloseTimeout();
  closeTimeoutRef.current = setTimeout(() => {
    setActiveMenu(null);
  }, 150);
}, [clearCloseTimeout]);

useEffect(() => {
  return () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };
}, []);
```

**Step 2: Update menu event handlers**

Replace `onMouseEnter={() => setActiveMenu('about')}` with `onMouseEnter={() => handleMenuEnter('about')}`
Replace `onMouseLeave={() => setActiveMenu(null)}` with `onMouseLeave={handleMenuLeave}`

Do this for all three menu items (About, Community, Campaigns) and the mega menu dropdown.

**Step 3: Commit**

```bash
git add components/site/Header.tsx
git commit -m "fix: add debounced menu close to prevent hover glitches"
```

---

## Task 9: Build and Deploy

**Step 1: Run build to verify everything works**

```bash
npm run build
```

Expected: Build succeeds with no errors

**Step 2: Test locally**

```bash
npm run dev
```

Visit each new page:
- http://localhost:3001/donate
- http://localhost:3001/events
- http://localhost:3001/thriver-stories
- http://localhost:3001/impact
- http://localhost:3001/join (should redirect)
- http://localhost:3001/stories (should redirect)

**Step 3: Deploy to Vercel**

```bash
git push origin main
vercel --prod
```

**Step 4: Final commit if any fixes needed**

```bash
git add .
git commit -m "chore: final adjustments after testing"
git push origin main
```
