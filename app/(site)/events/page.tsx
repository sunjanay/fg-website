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
