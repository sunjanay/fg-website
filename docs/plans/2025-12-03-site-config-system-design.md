# Site Configuration System Design

**Date:** 2025-12-03
**Status:** Approved
**Goal:** Create a centralized configuration system so Claude can maintain the site through data files rather than hunting through scattered code.

## Problem

Campaign data is duplicated across:
- `components/site/Header.tsx` (navigation)
- `app/(site)/donate/page.tsx` (campaign cards)
- `data/updates.json` (partial)
- Individual campaign page files

When a campaign ends or changes, multiple files need manual updates. This is error-prone and inefficient for Claude-maintained workflows.

## Solution: Modular Config Files

```
data/
  campaigns.ts      # All campaign definitions + helpers
  homepage.ts       # Homepage section configuration
  navigation.ts     # Nav structure (derived from campaigns)
  site.ts           # Global settings, Stripe keys, feature flags
  index.ts          # Re-exports everything
```

## File Specifications

### data/campaigns.ts

```typescript
export type CampaignStatus = 'active' | 'upcoming' | 'past';
export type CampaignType = 'donation' | 'event' | 'ongoing';

export interface Campaign {
  id: string;
  slug: string;
  status: CampaignStatus;
  type: CampaignType;

  title: string;
  shortTitle: string;
  description: string;
  tagline?: string;

  image: string;
  icon: string;

  startDate?: string;
  endDate?: string;
  eventDate?: string;

  stripeLink?: string;
  stripeBuyButtonId?: string;
  stripePublishableKey?: string;
  donationAmount?: number;
  donationLabel?: string;

  showInNav: boolean;
  showOnHomepage: boolean;
  showOnDonatePage: boolean;
  featured: boolean;

  hasCustomPage: boolean;
}

// Helper functions
export function getActiveCampaigns(): Campaign[]
export function getNavCampaigns(): Campaign[]
export function getHomepageCampaigns(): Campaign[]
export function getDonateCampaigns(): Campaign[]
export function getFeaturedCampaign(): Campaign | undefined
export function getCampaignBySlug(slug: string): Campaign | undefined
```

### data/homepage.ts

```typescript
export interface HomepageSection {
  id: string;
  enabled: boolean;
  order: number;
}

export interface HomepageConfig {
  sections: HomepageSection[];
  featuredCampaign: {
    enabled: boolean;
    campaignId?: string; // Override auto-selection
  };
  campaignsSection: {
    enabled: boolean;
    maxItems: number;
    title: string;
    subtitle: string;
  };
}
```

### data/site.ts

```typescript
export interface SiteConfig {
  name: string;
  tagline: string;

  donation: {
    generalStripeLink: string;
    processingFeeRate: number;
    contactEmail: string;
  };

  social: {
    community: string;
    // Add as needed
  };

  features: {
    showSearch: boolean;
    // Feature flags
  };
}
```

## Component Updates

### Header.tsx
- Import `getNavCampaigns()` from data/campaigns
- Map over returned campaigns instead of hardcoded array
- Campaigns dropdown auto-updates when campaign status changes

### donate/page.tsx
- Import `getDonateCampaigns()` from data/campaigns
- Import donation settings from data/site
- Remove hardcoded campaign array

### Homepage (page.tsx)
- Import homepage config for section ordering
- Import `getHomepageCampaigns()` for campaign section
- Import `getFeaturedCampaign()` for hero area

## Reusable Components

### DonateSection
A reusable donation component with embedded Stripe:
- Takes campaign data or uses general donation config
- Handles both StripeBuyButton and payment links
- Consistent styling across all pages

### CampaignCard
Consistent campaign display for nav dropdowns, homepage, donate page.

## CLAUDE.md Updates

Add comprehensive section on:
- How to add/edit/end campaigns (edit data/campaigns.ts)
- How to change homepage (edit data/homepage.ts)
- Campaign page patterns (template vs custom)
- Common operations with examples

## Migration Plan

1. Create data files with current campaign data
2. Create reusable components (DonateSection, CampaignCard)
3. Update Header.tsx to use campaign data
4. Update donate/page.tsx to use campaign data
5. Update CLAUDE.md with operational docs
6. Clean up duplicate pages (gingerbread-contest, meal-kit duplicates)
