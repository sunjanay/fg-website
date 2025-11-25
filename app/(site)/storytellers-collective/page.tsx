"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { IconHome, IconMessage, IconUser, IconHeart, IconMicrophone, IconGift, IconHandRock, IconGlobe, IconUsers, IconRocket } from "@tabler/icons-react";
import Marquee, { ReviewCard } from "@/components/ui/marquee";
import { testimonials } from "@/content/testimonials";
import Image from "next/image";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import SubscriptionForm from "@/components/SubscriptionForm";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Impact",
    link: "#impact",
    icon: <IconHeart className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Connect",
    link: "#connect",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];


export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});
  const heroWords = "Transform Your Journey Into Legacy";
  const subtitleWords = "A first-of-its-kind leadership experience empowering foster youth to harness their stories as powerful tools for systemic change";

  useEffect(() => {
    // Detect if in iframe or on mobile
    const isInIframe = window.self !== window.top;
    const isMobile = window.innerWidth < 768;
    setShouldAnimate(!isInIframe && !isMobile);
  }, []);

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubscriptionSuccess = () => {
    // Trigger PDF download
    const link = document.createElement('a');
    link.href = '/assets/files/Legacy Project.pdf';
    link.download = 'Foster Greatness - Legacy Project Guide.pdf';
    link.click();
  };

  const handleSubscriptionError = (errorMessage: string) => {
    // Handle error silently or show inline
    console.error('Subscription error:', errorMessage);
  };

  return (
    <div className="relative bg-[#fafbfc]">
      {/* Subtle texture matching homepage */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2949' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 py-24" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto text-center">
          {shouldAnimate ? (
            <>
              <BlurFade delay={0.1}>
                <p className="text-sm md:text-base uppercase tracking-wider mb-4" style={{color: '#0067a2', fontWeight: '600', letterSpacing: '0.1em'}}>
                  Take Control of Your Narrative
                </p>
              </BlurFade>

              <BlurFade delay={0.25}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6" style={{color: '#1a2949', fontWeight: '700'}}>
                  Storyteller Collective
                </h1>
              </BlurFade>

              <BlurFade delay={0.5}>
                <TextGenerateEffect
                  className="text-xl md:text-2xl lg:text-3xl mb-6 font-light"
                  words={heroWords}
                />
              </BlurFade>

              <BlurFade delay={0.75}>
                <p className="text-base md:text-lg max-w-3xl mx-auto mb-8" style={{color: '#1a2949', opacity: 0.7, lineHeight: '1.6', fontWeight: '400'}}>
                  {subtitleWords}
                </p>
              </BlurFade>

              <BlurFade delay={1}>
                <button
                  onClick={() => {
                    const guideForm = document.getElementById('storytelling-guide-form');
                    guideForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{backgroundColor: '#fa8526'}}
                >
                  Get Your Storytelling Guide!
                </button>
              </BlurFade>
            </>
          ) : (
            <>
              <p className="text-sm md:text-base uppercase tracking-wider mb-4" style={{color: '#0067a2', fontWeight: '600', letterSpacing: '0.1em'}}>
                Take Control of Your Narrative
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6" style={{color: '#1a2949', fontWeight: '700'}}>
                Storyteller Collective
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-light">
                {heroWords}
              </h2>

              <p className="text-base md:text-lg max-w-3xl mx-auto mb-8" style={{color: '#1a2949', opacity: 0.7, lineHeight: '1.6', fontWeight: '400'}}>
                {subtitleWords}
              </p>

              <button
                onClick={() => {
                  const guideForm = document.getElementById('storytelling-guide-form');
                  guideForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{backgroundColor: '#fa8526'}}
              >
                Get Your Storytelling Guide!
              </button>
            </>
          )}

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={shouldAnimate ? { duration: 0.8 } : {}}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
                Your Story Is Your Power
              </h2>

              <p style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                The Foster Greatness Storyteller Collective isn't just another advocacy program—it's a revolutionary platform where personal narratives drive systemic transformation.
              </p>

              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm font-semibold" style={{color: '#1a2949'}}>Media Training</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="text-sm font-semibold" style={{color: '#1a2949'}}>Community</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📢</div>
                  <p className="text-sm font-semibold" style={{color: '#1a2949'}}>Advocacy</p>
                </div>
              </div>

              <div className="pl-6 py-4" style={{borderLeft: '3px solid #fa8526'}}>
                <p className="mb-2" style={{color: '#0067a2', fontWeight: '700'}}>
                  Built by foster youth, for foster youth.
                </p>
                <p className="text-sm" style={{color: '#1a2949'}}>
                  Every aspect designed by those who've walked this path.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.2 } : {}}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
                Beyond Traditional Advocacy
              </h2>
              <p style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400', marginBottom: '1.5rem'}}>
                Storytellers become:
              </p>
              <div className="space-y-3">
                {[
                  "Professional Content Creators working directly with our marketing team",
                  "Podcast Hosts & Guests amplifying their voices across platforms",
                  "Digital Leaders shaping the narrative around foster care",
                  "Community Builders creating connections that last a lifetime",
                  "Change Agents driving systemic transformation through authentic storytelling"
                ].map((item, idx) => {
                  const colors = ['#fa8526', '#00c8b7', '#faca2c'];
                  const bulletColor = colors[idx % colors.length];
                  return (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="mt-1 text-lg" style={{color: bulletColor}}>✦</span>
                      <p style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                        <strong style={{color: '#0067a2'}}>{item.split(' ')[0]} {item.split(' ')[1]}</strong>
                        {item.substring(item.indexOf(' ', item.indexOf(' ') + 1))}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-16 px-4" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/content/sc-orientation.jpg"
                  alt="Storyteller Collective Orientation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-lg" style={{backgroundColor: '#ddf3ff', border: '1px solid #0067a2'}}>
                <blockquote className="text-lg mb-4" style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400', fontStyle: 'italic'}}>
                  "Being part of the Storyteller Collective gave me the starting point I needed to launch my brand and the motivation to begin new projects. What started as just ideas have now taken shape, and Foster Greatness continues to provide the support I need to turn my goals into reality."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/assets/images/storytellers/antoinette-gutierrez.jpg"
                      alt="Antoinette Gutierrez"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{color: '#0067a2'}}>Antoinette Gutierrez</p>
                    <p className="text-sm" style={{color: '#1a2949', opacity: 0.8}}>Storyteller Alumni</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="experience" className="py-20 px-4" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
              The Storyteller Experience
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#1a2949', lineHeight: '1.6'}}>
              A comprehensive program designed to amplify your voice and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎙️",
                title: "Professional Media Training",
                description: "Receive comprehensive training in podcast recording, public speaking, storytelling workshops, and content creation from industry professionals who understand your unique perspective."
              },
              {
                icon: "🎁",
                title: "Premium Storyteller Kit",
                description: "Get equipped with professional tools including a custom wireless microphone, exclusive branded merchandise, journaling materials, and resources to amplify your voice effectively."
              },
              {
                icon: "🤝",
                title: "Collaborative Content Creation",
                description: "Work directly with our marketing team to co-create content that appears across Foster Greatness platforms, including our website, podcast, and national press materials."
              },
              {
                icon: "🌍",
                title: "National Platform",
                description: "Share your story during National Foster Care Month and beyond, reaching audiences nationwide and becoming a voice for systemic change in foster care."
              },
              {
                icon: "👥",
                title: "Lifelong Community",
                description: "Join a cohort of fellow Storytellers who become your chosen family, offering support, collaboration, and connection that extends far beyond the program."
              },
              {
                icon: "🚀",
                title: "Legacy Building",
                description: "Create lasting impact through your story. Alumni receive ongoing opportunities for speaking engagements, content creation, and leadership development."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-white p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg" style={{border: '1px solid #ddf3ff'}}>
                  <div className="mb-6 text-4xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storyteller Guide Section */}
      <section data-section="storytelling-guide" className="py-20 px-4" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{color: '#1a2949', fontWeight: '700'}}>
              Your Storytelling Journey Starts Here
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/content/fc-storyteller-book.png"
                  alt="Foster Care Storytelling Companion Guide"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl" style={{color: '#1a2949', fontWeight: '700'}}>
                The Foster Care Storytelling Companion: Your Guide to Being Heard
              </h3>

              <p style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                Foster Greatness created this comprehensive storytelling guide specifically for current and former foster youth who are ready to reclaim their narratives. Written entirely by people with lived experience in foster care, this 60+ page resource transforms storytelling from an act of vulnerability into a tool for empowerment.
              </p>

              <div>
                <p className="mb-3" style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                  This resource is designed for foster youth and alumni who want to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Share their experiences while maintaining boundaries and dignity",
                    "Transform personal stories into systemic advocacy",
                    "Connect with community without re-traumatizing themselves",
                    "Build platforms and movements rooted in lived experience",
                    "Mentor others while protecting their own healing journey"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span style={{color: '#00c8b7'}}>✦</span>
                      <span style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Form Section - Full Width Below */}
          <motion.div
            id="storytelling-guide-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#ddf3ff] to-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl mb-2 text-center" style={{color: '#1a2949', fontWeight: '700'}}>
                Get Your Free Storytelling Guide
              </h4>
              <p className="text-center mb-6" style={{color: '#1a2949', opacity: 0.8}}>
                Enter your email to download the guide instantly
              </p>
              <div className="max-w-md mx-auto">
                <SubscriptionForm
                  onSuccess={handleSubscriptionSuccess}
                  onError={handleSubscriptionError}
                  buttonText="Download Your Storytelling Guide"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Cohort Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
              Meet the Past 2025 Cohort
            </h2>
            <p className="text-base" style={{color: '#1a2949', opacity: 0.8}}>
              Click on each card to read their testimonial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isabel Stasa, MPA",
                image: "/assets/images/storytellers/Isabel Stasa - 2025.jpg",
                bio: "Spent all her teenage years (7+ years) in foster care. Committed to empowering foster youth across generations and emboldening them to heal out loud.",
                testimonial: "When I was in foster care, I learned two things very quickly: People will tell your story for you and without your consent. And even more importantly—you have ownership of your story."
              },
              {
                name: "Rimy Morris",
                image: "/assets/images/storytellers/Rimy Morris.jpg",
                bio: "Navigated foster care for over a decade with her 10 siblings. Started a business to prevent other families from experiencing what hers did. Shares her story to help others understand that healing is possible.",
                testimonial: "No two stories are the same, and as you may have heard: our stories never get old. If you're questioning the value of yours, remember this, someone out there will relate, connect, feel seen, or even shift their perspective because of what you've lived through."
              },
              {
                name: "Chyenne Roan-Santini",
                image: "/assets/images/storytellers/chyenne-santini.jpg",
                bio: "Model who uses her platform to reach others through storytelling. Has grown comfortable with the camera but always wanted to do more with her story, knowing she can create more when she opens up.",
                testimonial: "Not only did being a Storyteller align with nearly everything that I have been leaning into creatively this year and prior, but it also allowed me to gain a community of love and support that I could not have anticipated...I am beyond grateful for the incredible gifts that Foster Greatness has unlocked."
              },
              {
                name: "Taylor Rockhold",
                image: "/assets/images/storytellers/Taylor Rockhold - Storyteller Collective.jpg",
                bio: "Hardworking mother aspiring to earn her J.D. and become a lawyer. Life motto: 'Your current situation is not your final destination.'",
                testimonial: "I didn't let the absence define me. I picked up the thread and needle. And with every act of love, I hand-stitched the family my younger self prayed for."
              },
              {
                name: "Abril Leonyvelez",
                image: "/assets/images/storytellers/abril-leonyvelez.jpg",
                bio: "Joined the Storyteller Collective to learn how to share experiences in a healthy way. Believes in their potential to help others through storytelling.",
                testimonial: "Foster Greatness has created a way for me to expand my comfort zone and allow me to be able to speak more about the best and not so best parts of the experiences that I had gone through. It has shown me that there are others like myself who want to speak out more about the system itself."
              },
              {
                name: "Jennifer Tai, MSW ASW PPSC",
                image: "/assets/images/storytellers/jennifer-tai.jpg",
                bio: "Clinical social worker and mental health therapist. Uses her story to remind foster youth and alumni they're not alone. Favorite quote: 'After the storm is when the flowers bloom.'",
                testimonial: "Foster Greatness has been an amazing support to me. Being part of the Storyteller Collective had a significant impact on my healing journey and also allowed an opportunity for me to use my lived experiences to help others. The bonds I formed...have been life changing."
              },
              {
                name: "Antoinette Gutierrez",
                image: "/assets/images/storytellers/antoinette-gutierrez.jpg",
                bio: "First in her family to graduate from a four-year university. Single mother of three using her experiences to shift narratives around foster youth.",
                testimonial: "Foster Greatness has brought community right into the palm of my hands, connecting me with friends who truly understand my upbringing in foster care. Being part of the Storyteller Collective gave me the starting point I needed to launch my brand and the motivation to begin new projects."
              },
              {
                name: "Majd Abdallah",
                image: "/assets/images/storytellers/Majd Abdallah - Storyteller Collective.jpg",
                bio: "Founder of Foster Friendz, on a mission to raise awareness about foster care through recruiting foster parents. Joined to lean into his purpose more intentionally.",
                testimonial: "You don't have to share your story to be an advocate. You can create a meaningful impact just by showing up. Trust is built through consistency, honesty, and presence—not trauma."
              },
              {
                name: "Emmerald Evans",
                image: "/assets/images/storytellers/emmerald-evans.jpg",
                bio: "Child welfare advocate with lived experience. Co-founded statewide Youth Advisory Board, shaped housing/education policy at John Burton Advocates for Youth, expert speaker on foster youth success.",
                testimonial: "As a former foster youth, it's rare to find spaces where your story isn't just listened to but it's respected and uplifted. Being part of Foster Greatness...has reignited my storytelling advocacy and has felt empowering. They didn't just ask me to share my story — they gave me the tools to shape it."
              }
            ].map((storyteller, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-[500px] cursor-pointer"
                style={{perspective: '1000px'}}
                onClick={() => toggleCardFlip(idx)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 md:group-hover:[transform:rotateY(180deg)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards[idx] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-md" style={{backfaceVisibility: 'hidden'}}>
                    <div className="relative h-64 w-full">
                      <Image
                        src={storyteller.image}
                        alt={storyteller.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg mb-2" style={{color: '#1a2949', fontWeight: '700'}}>
                        {storyteller.name}
                      </h3>
                      <p className="text-sm" style={{color: '#1a2949', lineHeight: '1.6'}}>
                        {storyteller.bio}
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 rounded-lg shadow-md p-6 flex flex-col justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: '#ddf3ff'}}>
                    <div className="mb-4 text-4xl text-center" style={{color: '#0067a2'}}>💬</div>
                    <p className="text-sm italic mb-4" style={{color: '#1a2949', lineHeight: '1.6'}}>
                      "{storyteller.testimonial}"
                    </p>
                    <p className="text-sm font-semibold text-right" style={{color: '#1a2949'}}>
                      — {storyteller.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories Video Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
              Building Community Through Stories
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#1a2949', lineHeight: '1.6', fontWeight: '400'}}>
              Watch authentic stories from our Storyteller Collective alumni
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <YouTubePlaylist playlistId="PLP4LxE_2m7ju-Bcbx2ia50UVFgP1AkcN6" maxResults={6} />

            <div className="text-center mt-8">
              <button
                onClick={() => window.open('https://www.youtube.com/playlist?list=PLP4LxE_2m7ju-Bcbx2ia50UVFgP1AkcN6', '_blank')}
                className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
                style={{backgroundColor: '#0067a2', fontWeight: '700'}}
              >
                View Full Cohort Playlist
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="connect" className="py-20 px-4" style={{backgroundColor: '#ffffff', borderTop: '1px solid #ddf3ff'}}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{color: '#1a2949', fontWeight: '700'}}>
              Ready to Transform Your Story Into Impact?
            </h2>
            <p className="text-lg mb-12 leading-relaxed" style={{color: '#1a2949'}}>
              Join a movement where your lived experience becomes expertise, your voice drives change, and your journey inspires transformation.
            </p>

            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg mb-4" style={{color: '#1a2949', fontWeight: '700'}}>
                  Stay Updated on Future Cohorts
                </h4>
                <SubscriptionForm
                  onSuccess={() => {}}
                  onError={handleSubscriptionError}
                  buttonText="Submit"
                />
              </div>

              <div className="mt-6">
                <button
                  className="px-8 py-3 text-base transition-colors rounded-full"
                  style={{border: '1px solid #0067a2', color: '#0067a2', backgroundColor: 'transparent', fontWeight: '400'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0067a2';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0067a2';
                  }}
                >
                  Learn About Foster Greatness
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
