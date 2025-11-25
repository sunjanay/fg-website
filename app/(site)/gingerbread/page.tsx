"use client";

import { useState, useEffect, useRef, memo, useMemo } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Heart, Gift, Users, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import StripeBuyButton from "@/components/StripeBuyButton";

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================
const AnimatedCounter = memo(({ value, duration = 2 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
    restSpeed: 0.5
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Clamp the value to prevent overshoot
        const clampedValue = Math.min(Math.max(0, latest), value);
        const displayValue = Math.floor(clampedValue);

        // Only update if the value changed to reduce DOM operations
        if (ref.current.textContent !== `$${displayValue}`) {
          ref.current.textContent = `$${displayValue}`;
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, value]);

  return <span ref={ref}>$0</span>;
});

AnimatedCounter.displayName = "AnimatedCounter";

export default function GingerbreadPage() {
  const valuePropositionItems = useMemo(() => [
    {
      icon: Gift,
      title: "Complete Gingerbread Kit",
      description: "Pre-assembled gingerbread house with icing, candies, and decorations delivered to each member's door.",
      color: "from-fg-navy to-fg-blue",
      delay: 0.1
    },
    {
      icon: Sparkles,
      title: "Bonus Gift Card",
      description: "Gift card for members to purchase extra decorations and supplies to make their creation uniquely theirs.",
      color: "from-fg-navy to-fg-blue",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Live Virtual Event",
      description: "Community members connect at 3PM PST for a guided building session, with prizes for the most creative designs.",
      color: "from-fg-accent-teal to-fg-blue",
      delay: 0.3
    }
  ], []);

  const galleryImages = useMemo(() => [
    { src: "/images/gingerbread-2.jpg", alt: "Creative gingerbread house design from 2024 event" },
    { src: "/images/gingerbread-contest-3.jpeg", alt: "Festive gingerbread creation from community member" },
    { src: "/images/gingerbread-contest-4.jpg", alt: "Unique gingerbread house decorated by foster youth" },
    { src: "/images/gingerbread-contest-5.jpeg", alt: "Colorful gingerbread house from 2024 contest" },
    { src: "/images/gingerbread-contest-6.jpeg", alt: "Beautifully decorated gingerbread creation" },
    { src: "/images/gingerbread-contest-10.jpeg", alt: "Creative gingerbread house design" },
    { src: "/images/gingerbread-contest-11.jpeg", alt: "Community member's festive creation" },
    { src: "/images/event-screenshot-3.png", alt: "Virtual event screenshot showing community members connecting" },
    { src: "/images/event-screenshot-4.png", alt: "Community members building together during virtual event" },
  ], []);

  const communityImpacts = useMemo(() => [
    "Foster meaningful connections during the holiday season",
    "Combat isolation through community belonging",
    "Create joyful memories and holiday traditions",
    "Build confidence through creative expression"
  ], []);

  const transparencyCosts = useMemo(() => [
    {
      amount: 40,
      title: "Per Kit Cost",
      description: "Pre-assembled house, icing, candies, decorations & shipping",
      icon: Gift,
      delay: 0.1,
      color: "from-fg-navy to-fg-blue"
    },
    {
      amount: 20,
      title: "Gift Card",
      description: "Additional supplies so members can personalize their creations",
      icon: Sparkles,
      delay: 0.2,
      color: "from-fg-accent-teal to-fg-blue"
    }
  ], []);

  return (
    <main className="min-h-screen bg-white">
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="lazyOnload"
      />

      {/* Sticky Donate Button */}
      <motion.button
        onClick={() => {
          const isMobile = window.innerWidth < 768;
          const widget = document.getElementById(isMobile ? 'donate-widget-mobile' : 'donate-widget');
          if (widget) {
            widget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="fixed bottom-6 right-6 bg-fg-navy text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl z-50 font-bold text-base md:text-lg transition-all hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Donate $60/Member
      </motion.button>

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-28 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fg-light-blue/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Event Date Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-fg-light-blue px-4 py-2 rounded-full mb-6"
                >
                  <Heart className="w-4 h-4 text-fg-blue" aria-hidden="true" />
                  <span className="text-sm font-semibold text-fg-navy">December 19th, 2025 &bull; 3PM PST</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-fg-navy text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  We need your help to create belonging for our foster youth community members this holiday season
                </motion.h1>

                {/* Supporting Description */}
                <motion.p
                  className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  By making a donation, you help foster youth have a sense of the holiday spirit. For the second consecutive year, Foster Greatness is hosting a virtual Gingerbread House Contest to connect our community because not all families are together under one roof. Together, we can create belonging.
                </motion.p>

                {/* Primary CTA Button */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 50,
                    damping: 15
                  }}
                >
                  <motion.button
                    onClick={() => {
                      const isMobile = window.innerWidth < 768;
                      const widget = document.getElementById(isMobile ? 'donate-widget-mobile' : 'donate-widget');
                      if (widget) {
                        widget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    aria-label="Donate to fund member gingerbread kits and virtual event"
                    className="inline-flex items-center gap-2 bg-fg-navy text-white px-12 py-5 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Gift className="w-6 h-6" aria-hidden="true" />
                    Donate $60 to Fund 1 Member
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Featured Image */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gingerbread-1.jpg"
                  alt="Decorated gingerbread house with colorful candies and icing"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fg-navy/20 to-transparent" />

                {/* Decorative accent circles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-fg-orange rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Gift className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-fg-navy rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Donate Section */}
      <section className="md:hidden py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <div id="donate-widget-mobile" className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-fg-navy">
              Make Your Donation
            </h2>
            <p className="text-base text-gray-600">
              $60 funds one complete holiday experience.
            </p>
          </div>
          <StripeBuyButton
            buyButtonId="buy_btn_1SQC6QF61ARMru0WlQcx7Fyb"
            publishableKey="pk_live_51Mz3wTF61ARMru0WN9TAU1BYRJ6f6FUlM1jFnHqnyPBOx0ZmdhGqB4cG8ehRv5KNgtgElhjXRtkEhtW9U7rIbA3f00CUAZUEo6"
          />
          <p className="text-center text-sm text-gray-500 mt-4">
            Questions? Contact jordanb@doinggoodworks.com
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              What Your Contribution Provides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution creates meaningful connection and holiday joy for community members navigating life with foster care experience.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-sm`}>
                  <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-fg-navy">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Early Donation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => {
                const isMobile = window.innerWidth < 768;
                const widget = document.getElementById(isMobile ? 'donate-widget-mobile' : 'donate-widget');
                if (widget) {
                  widget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 bg-fg-navy text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ready to Donate? Fund Members Now
            </motion.button>
            <p className="text-sm text-gray-600 mt-4">Or continue reading to see last year&apos;s impact</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery & Testimonial Section */}
      <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Last Year&apos;s Gingerbread House Contest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the creativity and connection your contribution creates for our community members.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden aspect-square ${
                  index >= 4 ? 'hidden md:block' : ''
                }`}
              >
                <div className="relative overflow-hidden h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative bg-gradient-to-br from-fg-light-blue/30 to-white rounded-3xl p-10 md:p-12 shadow-xl max-w-5xl mx-auto border-2 border-fg-blue/20 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -right-8 -top-8 text-8xl opacity-10 rotate-12 pointer-events-none">
              <Gift className="w-32 h-32 text-fg-blue" />
            </div>
            <div className="absolute top-8 left-8 text-6xl text-fg-blue/20 font-serif leading-none">&quot;</div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Profile Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fg-navy to-fg-blue flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    TR
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-fg-light-blue px-3 py-1 rounded-full mb-4">
                    <Heart className="w-4 h-4 text-fg-blue" aria-hidden="true" />
                    <span className="text-xs font-semibold text-fg-navy">From last year&apos;s event</span>
                  </div>

                  <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 italic">
                    &quot;My son and I had a blast at last year&apos;s Gingerbread house making event! It was so great to connect with others, sharing stories and laughs and being creative together!&quot;
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-fg-navy">
                      Taylor Rockhold
                    </p>
                    <span className="text-sm text-gray-500">&bull; Community Member</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Transparency Section - Desktop only */}
      <section className="hidden md:block py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Your Impact & Where It Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how your contribution creates meaningful community impact
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 mb-12 max-w-5xl mx-auto h-80"
          >
            <Image
              src="/images/gingerbread-1.jpg"
              alt="Example gingerbread house kit - decorated house with colorful candies and icing"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fg-navy/90 via-fg-navy/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center gap-2 bg-fg-navy px-4 py-2 rounded-full shadow-lg">
                  <Gift className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="font-bold text-white">What&apos;s Included</span>
                </div>
              </div>
              <p className="text-white text-lg font-medium">
                Each kit includes a pre-assembled house, icing, candies, decorations & shipping
              </p>
            </div>
          </motion.div>

          {/* Cost Breakdown Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {transparencyCosts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                className="hidden md:block relative bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-sm`}>
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                <div className="text-5xl md:text-6xl font-bold mb-3 text-fg-navy">
                  <AnimatedCounter value={item.amount} />
                </div>

                <p className="text-fg-blue font-bold text-xl mb-3">
                  {item.title}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Total Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="col-span-full md:col-span-1 relative bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-fg-navy to-fg-blue mb-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-white" aria-hidden="true" />
              </div>

              <div className="text-5xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-fg-navy to-fg-blue">
                <AnimatedCounter value={60} duration={2.5} />
              </div>

              <p className="text-fg-blue font-bold text-xl mb-3">
                Total Per Member
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Complete holiday experience including kit, gift card, and virtual event
              </p>

              {/* Mobile-only breakdown summary */}
              <p className="md:hidden text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                $40 kit + $20 gift card = $60 total
              </p>
            </motion.div>
          </div>

          {/* Community Impact Card */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative bg-gradient-to-br from-fg-navy/5 to-fg-navy/5 rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden border-2 border-fg-blue/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-fg-accent-teal/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-fg-navy/10 to-fg-navy/10 rounded-2xl mb-6">
                  <Heart className="w-8 h-8 text-fg-blue" aria-hidden="true" />
                </div>

                <h3 className="text-3xl font-bold mb-6 text-fg-navy">Community Impact</h3>

                <ul className="space-y-4">
                  {communityImpacts.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-fg-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section - Desktop only */}
      <section id="sponsor" className="hidden md:block py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div id="donate-widget" className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-fg-navy">
              Make Your Donation
            </h2>
            <p className="text-lg text-gray-600">
              $60 funds one complete holiday experience.
            </p>
          </div>

          <div className="w-full">
            <StripeBuyButton
              buyButtonId="buy_btn_1SQC6QF61ARMru0WlQcx7Fyb"
              publishableKey="pk_live_51Mz3wTF61ARMru0WN9TAU1BYRJ6f6FUlM1jFnHqnyPBOx0ZmdhGqB4cG8ehRv5KNgtgElhjXRtkEhtW9U7rIbA3f00CUAZUEo6"
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Questions? Contact jordanb@doinggoodworks.com
          </p>
        </div>
      </section>
    </main>
  );
}
