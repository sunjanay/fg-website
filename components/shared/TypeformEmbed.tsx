'use client';

import { useEffect, useRef } from 'react';

interface TypeformEmbedProps {
  /**
   * The Typeform form ID (from Typeform dashboard)
   * Default is the main Foster Greatness contact form
   */
  formId?: string;

  /**
   * Minimum height of the embed
   */
  minHeight?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TypeformEmbed - Reusable Typeform embed component
 *
 * This component handles loading the Typeform script and embedding a form.
 * It ensures the script is loaded dynamically after mount to work properly
 * with Next.js client components.
 *
 * Usage:
 *   <TypeformEmbed />                           // Uses default contact form
 *   <TypeformEmbed formId="abc123" />           // Custom form ID
 *   <TypeformEmbed minHeight="500px" />         // Custom height
 *
 * The default form ID is the main Foster Greatness contact form.
 * To get a form ID, go to Typeform dashboard > Your form > Share > Embed
 */
export default function TypeformEmbed({
  formId = '01KAF384A3ZB71SN3JRSRCSWAD',
  minHeight = '450px',
  className = '',
}: TypeformEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load script once
    if (scriptLoadedRef.current) return;

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="//embed.typeform.com/next/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    scriptLoadedRef.current = true;
  }, []);

  return (
    <div
      ref={containerRef}
      data-tf-live={formId}
      className={`w-full ${className}`}
      style={{ minHeight }}
    />
  );
}
