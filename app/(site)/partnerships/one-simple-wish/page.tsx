'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Heart, Gift, Home, GraduationCap, Laptop, Car, CheckCircle2, Users, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const wishCategories = [
  {
    icon: Home,
    title: 'Housing & Home Essentials',
    description: 'Furniture, kitchenware, bedding, and items to create a safe, comfortable home.',
    examples: ['Bed frames & mattresses', 'Kitchen appliances', 'Home decor', 'Cleaning supplies']
  },
  {
    icon: GraduationCap,
    title: 'Education & Career',
    description: 'Tools and resources to support academic success and career development.',
    examples: ['Laptops & tablets', 'Textbooks', 'Professional clothing', 'Certification courses']
  },
  {
    icon: Gift,
    title: 'Personal & Wellness',
    description: 'Items that support wellbeing, self-care, and personal growth.',
    examples: ['Clothing & shoes', 'Hygiene products', 'Hobby supplies', 'Wellness items']
  },
  {
    icon: Car,
    title: 'Transportation & Access',
    description: 'Support for mobility and access to opportunities.',
    examples: ['Bus passes', 'Bike & repairs', 'Uber/Lyft credits', 'Car maintenance']
  }
];

const howItWorks = [
  {
    step: '01',
    title: 'Connect with Resource Specialist',
    description: 'Reach out to our Resource Specialists through the Foster Greatness community platform.'
  },
  {
    step: '02',
    title: 'Discuss Your Need',
    description: 'Share what you need and why it matters for your goals. Resource Specialists help determine eligibility.'
  },
  {
    step: '03',
    title: 'Submit Your Wish',
    description: 'With guidance, submit your wish request through One Simple Wish platform with your story.'
  },
  {
    step: '04',
    title: 'Community Fulfillment',
    description: 'Donors from across the country see your wish and can choose to grant it.'
  },
  {
    step: '05',
    title: 'Receive Support',
    description: 'Once granted, receive your wish item and know there\'s a community rooting for your success.'
  }
];

const impactStats = [
  { number: '$50K+', label: 'In Wishes Granted' },
  { number: '200+', label: 'Wishes Fulfilled' },
  { number: '100%', label: 'Community Members' },
  { number: '$250', label: 'Average Wish Value' }
];

const successStories = [
  {
    initial: 'T',
    name: 'Taylor\'s Story',
    wish: 'Laptop for College',
    quote: 'Getting a laptop through One Simple Wish changed everything. I went from borrowing library computers for 2-hour blocks to being able to work on my assignments whenever inspiration struck. My grades improved, and I graduated on time.',
    outcome: 'Graduated with honors, now employed in tech industry'
  },
  {
    initial: 'J',
    name: 'Jessica\'s Story',
    wish: 'Furniture for First Apartment',
    quote: 'Moving into my first apartment felt overwhelming until my One Simple Wish was granted. Having an actual bed and a table to eat at made my apartment feel like a real home. It gave me stability to focus on my family and my future.',
    outcome: 'Creating a stable home environment for her children'
  }
];

export default function OneSimpleWishCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 text-fg-navy/60 hover:text-fg-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span className="font-semibold">Back to Partnerships</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-block px-3 py-1 bg-fg-orange/10 text-fg-orange text-sm font-semibold rounded-full mb-4">
                Partnership Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg-navy mb-6 leading-[1.1] tracking-tight">
                One Simple Wish<br />Partnership
              </h1>
              <p className="text-xl text-fg-navy/70 mb-8 leading-relaxed">
                Connecting foster youth with a donor community that grants wishes for essential items—turning material needs into moments of hope and connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://community.fostergreatness.co/c/resource-specialist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fg-orange text-white font-semibold rounded-full hover:bg-fg-navy transition-colors shadow-lg shadow-fg-orange/20"
                >
                  <Heart className="w-4 h-4" aria-hidden="true" />
                  Submit a Wish Request
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-80 lg:h-96">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400/fa8526/FFFFFF?text=One+Simple+Wish"
                  alt="One Simple Wish partnership with Foster Greatness"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Impact Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <div className="bg-gradient-to-br from-fg-orange to-fg-yellow rounded-3xl p-8 md:p-12 text-white">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Partnership Impact</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Real wishes granted to Foster Greatness community members
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What We Believe */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-fg-navy/5 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">💝</div>
              <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-4">
                Why Wishes Matter
              </h2>
              <p className="text-lg text-fg-navy/70 leading-relaxed">
                Everyone deserves support, not charity. One Simple Wish connects foster youth with a broader community that sees their worth and potential. These aren't handouts—they're investments in futures, recognition that sometimes a laptop, a bed frame, or professional clothing can be the difference between struggling and thriving.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Wish Categories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              Types of Wishes We Support
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              From essential needs to tools for growth, wishes cover what matters most for independence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {wishCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-fg-navy/5 hover:shadow-md hover:border-fg-orange/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-fg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-fg-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-fg-navy mb-2">{category.title}</h3>
                      <p className="text-sm text-fg-navy/70 leading-relaxed mb-3">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="px-3 py-1 bg-fg-orange/5 text-fg-orange text-xs font-semibold rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              How to Submit a Wish
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              A simple process connecting you with donors who want to support your journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative mb-6 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-fg-orange to-fg-yellow text-white font-bold text-xl flex items-center justify-center">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-fg-navy/5">
                    <h3 className="text-xl font-bold text-fg-navy mb-2">{step.title}</h3>
                    <p className="text-fg-navy/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="ml-8 h-8 w-0.5 bg-fg-orange/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              Wishes That Changed Lives
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              Real stories from community members who received support through One Simple Wish
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <motion.div
                key={story.name}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-sm border border-fg-navy/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fg-orange to-fg-yellow flex items-center justify-center text-white text-2xl font-bold">
                    {story.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fg-navy">{story.name}</h3>
                    <p className="text-fg-orange font-semibold text-sm">{story.wish}</p>
                  </div>
                </div>
                <blockquote className="text-fg-navy/80 leading-relaxed italic mb-4">
                  "{story.quote}"
                </blockquote>
                <div className="flex items-center gap-2 text-sm text-fg-navy/50">
                  <CheckCircle2 className="w-4 h-4 text-fg-orange flex-shrink-0" aria-hidden="true" />
                  <span>{story.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-fg-orange/5 to-fg-yellow/5 rounded-3xl p-8 md:p-12 text-center border border-fg-orange/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-4">
              Need Something to Move Forward?
            </h2>
            <p className="text-lg text-fg-navy/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our Resource Specialists to discuss your needs and see if One Simple Wish can help. You deserve support—let us help you get it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://community.fostergreatness.co/c/resource-specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fg-orange text-white font-semibold rounded-full hover:bg-fg-navy transition-colors shadow-lg shadow-fg-orange/20"
              >
                <Heart className="w-4 h-4" aria-hidden="true" />
                Talk to Resource Specialist
              </a>
              <a
                href="https://www.onesimplewish.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-fg-navy font-semibold hover:text-fg-orange transition-colors"
              >
                Learn About One Simple Wish
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
