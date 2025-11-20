"use client";

import React, { useState } from 'react';
import { IconMail, IconUser } from '@tabler/icons-react';

interface SubscriptionFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
  buttonText?: string;
}

export default function SubscriptionForm({ onSuccess, onError, buttonText = 'Get My Free Guide' }: SubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      onError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setSubmitted(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);

    } catch (error) {
      onError(error instanceof Error ? error.message : 'Something went wrong');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl mb-2" style={{color: '#1a2949', fontWeight: '700'}}>
            Thanks for downloading your copy of The Foster Care Storytelling Companion!
          </h3>
          <p className="mb-3" style={{color: '#2C3E50', lineHeight: '1.6'}}>
            Your download should start automatically
          </p>
          <a
            href="/assets/files/Legacy Project.pdf"
            download="Foster Greatness - Legacy Project Guide.pdf"
            className="text-sm underline hover:no-underline"
            style={{color: '#1E5F99'}}
          >
            If it hasn't downloaded, click here
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2" style={{color: '#2C3E50'}}>
          Name (Optional)
        </label>
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5F99] focus:border-transparent outline-none transition-all"
          />
          <IconUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{color: '#2C3E50'}}>
          Email Address *
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5F99] focus:border-transparent outline-none transition-all"
          />
          <IconMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        style={{backgroundColor: '#1E5F99'}}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </div>
        ) : (
          buttonText
        )}
      </button>

      <p className="text-xs text-center" style={{color: '#2C3E50', opacity: 0.7}}>
        By subscribing, you'll get updates on future cohorts and storytelling resources. Unsubscribe anytime.
      </p>
    </form>
  );
}