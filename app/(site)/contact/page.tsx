import type { Metadata } from 'next';
import { Mail, MessageCircle, Users, Heart } from 'lucide-react';
import ContactSection from '@/components/site/ContactSection';
import { siteConfig } from '@/data';

export const metadata: Metadata = {
  title: 'Contact Us | Foster Greatness',
  description: 'Get in touch with Foster Greatness. We\'re here to help foster youth, partners, and supporters connect with our community.',
};

const contactReasons = [
  {
    icon: Users,
    title: 'Foster Youth & Alumni',
    description: 'Looking for support, resources, or want to join our community? We\'re here for you.',
    color: 'from-fg-navy to-fg-blue',
  },
  {
    icon: Heart,
    title: 'Donors & Supporters',
    description: 'Questions about donations, campaigns, or ways to support our mission.',
    color: 'from-fg-blue to-fg-navy',
  },
  {
    icon: MessageCircle,
    title: 'Partners & Organizations',
    description: 'Interested in partnering with us or collaborating on programs.',
    color: 'from-fg-navy to-fg-blue',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fg-navy via-fg-navy to-fg-blue py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-fg-blue/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fg-orange/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white/90">We'd love to hear from you</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Contact Us
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're a foster youth looking for support, an organization wanting to partner, or someone who wants to make a difference—reach out.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.color} mb-4`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-fg-navy mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with Form */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ContactSection
            title="Send Us a Message"
            subtitle="Get in touch"
            description="Fill out the form and we'll get back to you as soon as possible. You can also reach us directly by email."
            email={siteConfig.donation.contactEmail}
            showCommunityButton={true}
          />
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-fg-navy mb-6">Other Ways to Connect</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`mailto:${siteConfig.donation.contactEmail}`}
              className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-fg-blue transition-colors"
            >
              <Mail className="w-8 h-8 text-fg-blue mx-auto mb-3" />
              <h3 className="font-bold text-fg-navy mb-1">Email Us</h3>
              <p className="text-fg-blue group-hover:underline">{siteConfig.donation.contactEmail}</p>
            </a>

            <a
              href={siteConfig.links.community}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-fg-blue transition-colors"
            >
              <Users className="w-8 h-8 text-fg-blue mx-auto mb-3" />
              <h3 className="font-bold text-fg-navy mb-1">Join Our Community</h3>
              <p className="text-gray-600">Connect with 1,100+ members</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
