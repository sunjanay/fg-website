'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Heart, Briefcase, GraduationCap, Home, Building2, CheckCircle2, Mail } from 'lucide-react';
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

const currentPartners = [
  {
    name: 'EatWell Meal Kits',
    description: 'Provides healthy meal kits and community cooking sessions via Zoom, bringing people together through shared meals.',
    logo: 'https://placehold.co/300x150/00c8b7/FFFFFF?text=EatWell',
    impact: 'Monthly cooking events for 50+ community members'
  },
  {
    name: 'StaffMark Group',
    description: 'Equips foster youth with employment tools, resources, and skills for sustainable employment while expanding employer access to diverse talent.',
    logo: 'https://placehold.co/300x150/1a2949/FFFFFF?text=StaffMark',
    impact: '100+ job placements and ongoing career support'
  },
  {
    name: 'Foster Care Alumni of America',
    description: 'Monthly advocacy events with advocates and alumni focused on policy change and systemic improvement.',
    logo: 'https://placehold.co/300x150/0067a2/FFFFFF?text=FCAA',
    impact: 'National policy advocacy reaching 10,000+ alumni'
  },
  {
    name: 'One Simple Wish',
    description: 'Wish-granting platform connecting foster youth with donor-sponsored gifts and essential needs.',
    logo: 'https://placehold.co/300x150/fa8526/FFFFFF?text=One+Simple+Wish',
    impact: '$50K+ in wishes granted to community members'
  },
  {
    name: 'Lotus Grove Counseling',
    description: 'Mental health and parenting support services tailored to the unique needs of foster care alumni.',
    logo: 'https://placehold.co/300x150/00c8b7/FFFFFF?text=Lotus+Grove',
    impact: 'Specialized trauma-informed therapy services'
  },
  {
    name: 'Youth Voices Rising',
    description: 'Teaches storytelling and op-ed writing, empowering youth to shape community narratives through their voices.',
    logo: 'https://placehold.co/300x150/0067a2/FFFFFF?text=Youth+Voices',
    impact: '30+ published stories amplifying lived experiences'
  }
];

const partnershipBenefits = [
  {
    icon: Users,
    title: 'Direct Access to Community',
    description: 'Connect with 2,000+ foster youth and alumni nationwide through our established digital platform.'
  },
  {
    icon: Target,
    title: 'Mission-Aligned Impact',
    description: 'Collaborate with an organization led by people with lived experience in foster care.'
  },
  {
    icon: Heart,
    title: 'Authentic Feedback Loop',
    description: 'Receive genuine input from community members to shape programs that truly serve their needs.'
  },
  {
    icon: Building2,
    title: 'Broader Advocacy Network',
    description: 'Join a network of organizations committed to systemic change for foster youth nationwide.'
  },
  {
    icon: CheckCircle2,
    title: 'Data-Driven Outcomes',
    description: 'Track measurable impact with our transparent reporting and outcome measurement systems.'
  },
  {
    icon: Briefcase,
    title: 'Co-Creation Opportunities',
    description: 'Work alongside community members to design tailored programs and resources together.'
  }
];

const seekingPartners = [
  {
    icon: GraduationCap,
    category: 'Education',
    areas: ['Tutoring & Academic Support', 'College Preparation', 'Vocational Training', 'Scholarship Programs', 'Financial Literacy'],
    color: 'from-fg-navy to-fg-teal'
  },
  {
    icon: Heart,
    category: 'Healthcare',
    areas: ['Mental Health Services', 'Preventive Care', 'Health Insurance Navigation', 'Wellness Programs', 'Trauma-Informed Care'],
    color: 'from-fg-teal to-fg-navy'
  },
  {
    icon: Home,
    category: 'Housing',
    areas: ['Transitional Housing', 'Housing Navigation', 'Neighborhood Safety', 'Transportation Access', 'Home Stability Resources'],
    color: 'from-fg-orange to-fg-yellow'
  }
];

const howItWorks = [
  {
    step: '01',
    title: 'Initial Conversation',
    description: 'Schedule a meeting to discuss your organization\'s mission, resources, and how we might collaborate.'
  },
  {
    step: '02',
    title: 'Alignment Assessment',
    description: 'We evaluate mutual fit based on community needs, shared values, and sustainable partnership potential.'
  },
  {
    step: '03',
    title: 'Co-Design Programs',
    description: 'Work together with community input to design programs that authentically serve foster youth needs.'
  },
  {
    step: '04',
    title: 'Launch & Measure',
    description: 'Implement partnership initiatives with clear goals, regular check-ins, and transparent outcome tracking.'
  }
];

export default function PartnershipsPage() {
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
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <p className="text-sm font-semibold text-fg-teal uppercase tracking-wider mb-4">
              Partnership Opportunities
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg-navy mb-6 leading-[1.1] tracking-tight">
              Partnerships for<br />Empowerment
            </h1>
            <p className="text-xl text-fg-navy/70 mb-8 leading-relaxed max-w-3xl">
              Join our network of dedicated organizations working together to provide essential resources, opportunities, and support for foster youth transitioning to independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:partnerships@fostergreatness.co"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fg-navy text-white font-semibold rounded-full hover:bg-fg-teal transition-colors shadow-lg shadow-fg-navy/20"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Start Partnership Discussion
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-fg-navy font-semibold hover:text-fg-teal transition-colors"
              >
                Learn About Foster Greatness
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* Current Partners */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              Our Current Partners
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              We're grateful to work alongside these incredible organizations in supporting foster youth nationwide.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, i) => {
              const hasDetailPage = partner.name === 'StaffMark Group' || partner.name === 'One Simple Wish';
              const detailUrl = partner.name === 'StaffMark Group' ? '/partnerships/staffmark' : '/partnerships/one-simple-wish';

              const PartnerCard = (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-fg-navy/5 hover:shadow-md hover:border-fg-teal/30 transition-all group h-full flex flex-col"
                >
                  <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-fg-navy mb-2 group-hover:text-fg-teal transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-fg-navy/70 leading-relaxed mb-3 flex-1">
                      {partner.description}
                    </p>
                    <p className="text-xs text-fg-navy/50 font-semibold mb-3">
                      {partner.impact}
                    </p>
                    {hasDetailPage && (
                      <span className="inline-flex items-center gap-1 text-fg-teal font-semibold text-sm group-hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );

              return hasDetailPage ? (
                <Link key={partner.name} href={detailUrl}>
                  {PartnerCard}
                </Link>
              ) : (
                PartnerCard
              );
            })}
          </div>
        </motion.section>

        {/* Partnership Benefits */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              Why Partner With Us
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              Partnering with Foster Greatness means connecting with an authentic, lived experience-led community committed to meaningful impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-fg-navy/5 hover:shadow-md hover:border-fg-teal/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-fg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-fg-teal" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-fg-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-fg-navy/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Seeking Partners */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-3">
              Partnership Opportunities
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              We're actively seeking partners in these critical areas to expand support for our community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {seekingPartners.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-fg-navy/5 hover:shadow-md hover:border-fg-teal/30 transition-all group"
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-fg-navy/5 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-fg-navy" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-fg-navy mb-4 group-hover:text-fg-teal transition-colors">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.areas.map((area) => (
                        <li key={area} className="flex items-start gap-2 text-sm text-fg-navy/70">
                          <CheckCircle2 className="w-4 h-4 text-fg-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
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
              How Partnership Works
            </h2>
            <p className="text-fg-navy/60 max-w-2xl mx-auto">
              Our partnership process is designed to be collaborative, transparent, and focused on sustainable impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-fg-navy/5 h-full">
                  <div className="text-5xl font-black text-fg-teal/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-fg-navy mb-3">{step.title}</h3>
                  <p className="text-sm text-fg-navy/70 leading-relaxed">{step.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-fg-teal/30" aria-hidden="true" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Story */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-fg-navy to-fg-teal rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">💡</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Partnership Impact Example
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                "Through our partnership with StaffMark Group, we've connected over 100 community members with sustainable employment opportunities. Their commitment to providing personalized support—from resume help to interview coaching—has transformed how our members navigate the job market."
              </p>
              <p className="text-sm text-white/70 font-semibold">
                Isabel Stasa, Head of Community Engagement
              </p>
            </div>
          </motion.div>
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
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-fg-navy/5 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-fg-navy mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-fg-navy/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's explore how your organization can partner with Foster Greatness to create meaningful change for foster youth nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@fostergreatness.co"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fg-navy text-white font-semibold rounded-full hover:bg-fg-teal transition-colors shadow-lg shadow-fg-navy/20"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact Partnership Team
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-fg-navy font-semibold hover:text-fg-teal transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
