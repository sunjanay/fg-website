# Foster Greatness - Unified Website

## Project Overview

This is the unified Foster Greatness website, a Next.js 16 application maintained primarily through Claude. The site uses a **configuration-driven architecture** where content and campaigns are managed through data files, not scattered code.

## Quick Reference for Common Tasks

### Adding a New Campaign
1. Edit `data/campaigns.ts`
2. Add a new campaign object to the `campaigns` array
3. Set appropriate flags (`showInNav`, `showOnHomepage`, `showOnDonatePage`)
4. If the campaign needs a custom page, create it in `app/(site)/[slug]/page.tsx`

### Ending a Campaign
1. Edit `data/campaigns.ts`
2. Find the campaign and change `status: 'active'` to `status: 'past'`
3. That's it - the campaign automatically disappears from navigation, homepage, and donate page

### Changing What's on the Homepage
Edit `data/homepage.ts` to control:
- Section visibility and order
- Featured campaign
- Impact statistics
- Section titles and subtitles

### Changing Site-Wide Settings
Edit `data/site.ts` for:
- General Stripe donation link
- Contact email
- Feature flags
- External links (community, app stores)

---

## Architecture

### Configuration System (`data/`)

**THIS IS THE SINGLE SOURCE OF TRUTH FOR CONTENT**

```
data/
  campaigns.ts    # All campaign definitions
  homepage.ts     # Homepage configuration
  site.ts         # Global settings
  index.ts        # Re-exports everything
```

#### Campaign Data Structure

```typescript
{
  id: 'holiday-gift-drive-2025',    // Unique identifier
  slug: 'holiday-gift-drive-2025',  // URL path
  status: 'active',                  // 'active' | 'upcoming' | 'past'
  type: 'donation',                  // 'donation' | 'event' | 'ongoing'

  title: 'Holiday Gift Drive 2025',
  shortTitle: 'Holiday Gift Drive', // For nav menus
  description: 'Help provide gifts...',

  image: '/images/holiday-gift-tree.png',
  icon: '🎄',                        // Emoji for mobile nav

  // Donation settings
  stripeLink: 'https://...',
  stripeBuyButtonId: 'buy_btn_xxx', // For embedded buttons
  donationAmount: 60,
  donationLabel: 'Fund 1 Member',

  // Visibility flags - control where campaign appears
  showInNav: true,
  showOnHomepage: true,
  showOnDonatePage: true,
  featured: true,                    // Hero placement

  hasCustomPage: true,               // Does it have its own page?
}
```

#### Helper Functions

```typescript
import {
  getActiveCampaigns,      // All active campaigns
  getNavCampaigns,         // Campaigns for navigation
  getHomepageCampaigns,    // Campaigns for homepage
  getDonateCampaigns,      // Campaigns for donate page
  getFeaturedCampaign,     // The featured campaign
  getCampaignBySlug,       // Lookup by URL slug
} from '@/data';
```

### Page Structure

#### Full Site Pages (`app/(site)/`)
Pages with header, footer, navigation:
- `/` - Homepage
- `/donate` - Donation page (pulls from campaigns config)
- `/about` - About page
- `/impact` - Impact report
- `/partnerships` - Partnerships page
- `/holiday-gift-drive-2025` - Gift drive campaign
- `/gingerbread` - Gingerbread campaign
- `/thriver-stories` - Thriver stories
- `/storytellers-collective` - Storytellers
- `/events` - Community events

#### Embeddable Widgets (`app/widgets/`)
No navigation, for embedding:
- `/widgets/circle-events` - Community calendar
- `/widgets/newsletter` - Newsletter signup

### Reusable Components

#### DonateSection (`components/site/DonateSection.tsx`)
Reusable donation component with Stripe integration:

```tsx
// Campaign-specific donation
<DonateSection campaign={campaign} />

// General donation
<DonateSection />

// Compact mode (no section padding)
<DonateSection compact />
```

#### StripeBuyButton (`components/StripeBuyButton.tsx`)
Embeds Stripe Buy Button:

```tsx
<StripeBuyButton
  buyButtonId="buy_btn_xxx"
  publishableKey="pk_live_xxx"
/>
```

---

## Brand Guidelines

### Colors
```
Navy:       #1a2949 (primary)
Blue:       #0067a2
Teal:       #00c8b7 (accent only)
Orange:     #fa8526
Yellow:     #faca2c
Light Blue: #ddf3ff
```

Use Tailwind classes: `text-fg-navy`, `bg-fg-blue`, etc.

### Typography
- Primary font: Poppins (configured in Tailwind)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Voice & Tone
- Authentic and empowering
- Dignity-centered language
- **No charity/deficit framing**
- Focus on strengths and community
- "Thrivers" not "survivors"
- "Community members" not "beneficiaries"

---

## Critical Rules

### DO NOT
- Modify quotes - they're attributed to real people
- Use charity/pity language
- Hardcode campaign data in components (use `data/campaigns.ts`)
- Create duplicate campaign definitions

### ALWAYS
- Use the configuration system for campaign/content changes
- Import from `@/data` for campaign and site data
- Follow brand colors and voice guidelines
- Test changes don't break navigation or donate page

---

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: Radix UI, Headless UI
- **Database**: Supabase (gift-drive features)
- **Payments**: Stripe
- **Animation**: Framer Motion

## Development

```bash
npm install     # Install dependencies
npm run dev     # Development server
npm run build   # Production build
npm start       # Production server
```

---

## File Reference

### Configuration Files
- `data/campaigns.ts` - Campaign definitions and helpers
- `data/homepage.ts` - Homepage section config
- `data/site.ts` - Global settings, Stripe config
- `data/index.ts` - Re-exports

### Key Components
- `components/site/Header.tsx` - Main navigation (uses campaign data)
- `components/site/Footer.tsx` - Site footer
- `components/site/DonateSection.tsx` - Reusable donation section
- `components/StripeBuyButton.tsx` - Stripe embed

### Campaign Pages
- `app/(site)/holiday-gift-drive-2025/` - Gift drive (custom)
- `app/(site)/gingerbread/` - Gingerbread contest (custom)

### Design Documentation
- `docs/plans/2025-12-03-site-config-system-design.md` - Configuration system design
