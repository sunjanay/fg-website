'use client';

import { motion } from 'framer-motion';
import { Package, BookOpen, Users, Heart, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import ContactSection from '@/components/site/ContactSection';

export default function MealKitSponsorsPage() {
  return (
    <main className="relative min-h-screen bg-[#fafbfc]">
      {/* Subtle texture matching homepage */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-fg-light-blue to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg-navy mb-6 leading-tight">
              Creating Belonging for 75 Foster Youth Families{' '}
              <span className="text-fg-blue">This Thanksgiving</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join us in transforming isolation into community through a live, virtual cooking
              experience that connects families nationwide.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-fg-navy text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              Partner With Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* What Each Family Receives */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-fg-navy mb-4">
              Building Community, One Meal at a Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your investment creates connection and belonging through three essential elements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Complete Meal Kit',
                description: 'Fresh, quality ingredients delivered to their door — enough for a full Thanksgiving meal plus additional days of nutritious eating',
                color: 'from-fg-navy to-fg-blue',
              },
              {
                icon: BookOpen,
                title: 'Foster Greatness Cookbook',
                description: 'A keepsake cookbook with accessible recipes and cooking fundamentals — building confidence and independence in the kitchen for years to come',
                color: 'from-fg-navy to-fg-blue',
              },
              {
                icon: Users,
                title: 'Live Virtual Event',
                description: 'Real-time connection with Foster Greatness community members nationwide — cooking together, sharing stories, and creating belonging',
                color: 'from-fg-orange to-fg-coral',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-sm`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-fg-navy">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-fg-navy mb-4">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The holidays magnify isolation for current and former foster youth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-fg-navy mb-4">The Reality</h3>
              <ul className="space-y-4">
                {[
                  'Many foster youth face the holidays alone, without family connections',
                  'Food insecurity is common, especially during expensive holiday seasons',
                  'Limited cooking skills create barriers to self-sufficiency',
                  'Social isolation impacts mental health and wellbeing',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-fg-coral flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-fg-blue/10 to-fg-navy/10 rounded-2xl p-8 border-2 border-fg-blue/20"
            >
              <h3 className="text-2xl font-bold text-fg-navy mb-4">Our Solution</h3>
              <ul className="space-y-4">
                {[
                  'Create real-time community connection during the holidays',
                  'Provide nutritious meals and reduce food insecurity',
                  'Build lifelong cooking skills and confidence',
                  'Foster belonging through shared experiences',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fg-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <ContactSection
            title="Become a Meal Kit Sponsor"
            subtitle="Partner With Us"
            description="Your partnership creates belonging for foster youth families during the holidays and beyond. Fill out the form to learn about sponsorship opportunities and how you can make a difference."
            email="jordanb@doinggoodworks.com"
            showCommunityButton={false}
          />
        </div>
      </section>
    </main>
  );
}
