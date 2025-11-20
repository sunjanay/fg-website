# Foster Greatness - Unified Website

## Project Overview

This is the unified Foster Greatness website that consolidates multiple campaign pages and widgets into a single Next.js 16 application.

## Architecture

### Full Site Pages (with navigation)
Located in `app/(site)/`:
- `/gift-drive` - Holiday Gift Drive with Supabase + Stripe
- `/gingerbread` - Gingerbread House Contest
- `/meal-kit` - Meal Kit Sponsors
- `/storytellers` - Storytellers Collective
- `/updates` - Community Updates

### Embeddable Widgets (no navigation)
Located in `app/widgets/`:
- `/widgets/circle-events` - Community calendar (API routes converted from Express)
- `/widgets/newsletter` - Newsletter signup widget

## Brand Guidelines

### Colors
- Navy: #1a2949 (primary)
- Blue: #0067a2
- Teal: #00c8b7
- Orange: #fa8526
- Yellow: #faca2c
- Light Blue: #ddf3ff

### Typography
- Primary font: Montserrat
- Use font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Voice & Tone
- Authentic and empowering
- Dignity-centered language
- No charity/deficit framing
- Focus on strengths and community

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: Radix UI, Headless UI
- **Database**: Supabase (gift-drive)
- **Payments**: Stripe (gift-drive)
- **Animation**: Framer Motion

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Important Notes

- **Quotes are sacred**: Never modify quotes - they're attributed to real people
- **Widget context**: Widgets are embedded, so no page headers/navigation needed
- **Full pages**: Include header, navigation, and full page context
- **Brand compliance**: Always use Foster Greatness brand colors and voice
