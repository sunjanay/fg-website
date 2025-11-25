# Missing Pages Design Document

**Date:** 2025-11-25
**Status:** Approved for implementation

## Overview

Create missing pages referenced in site navigation, plus implement redirects and cleanup broken links.

## Pages to Create

### 1. `/donate` - Donation Hub

**Purpose:** Central donation page featuring active campaigns + general giving option.

**Sections:**

1. **Hero Section**
   - Headline: "Support Foster Greatness"
   - Subheadline: "Your generosity creates lifelong community and belonging for current and former foster youth"
   - Badge: "100% of donations go directly to programs"

2. **Active Campaigns Grid** (3-column)
   - Holiday Gift Drive 2025 card → `/holiday-gift-drive-2025`
   - Gingerbread House Contest card → `/gingerbread`
   - Meal Kit Sponsors card → `/meal-kit-sponsors`
   - Each card: image, title, brief description, CTA button

3. **General Donation Section**
   - "Support Our Mission" heading
   - Description about unrestricted giving
   - Stripe donation button (general fund)
   - Note: "Questions? Contact jordanb@doinggoodworks.com"

4. **Impact Preview**
   - 2-3 key stats from impact report
   - Brief testimonial or quote
   - Link to full impact report

**Design Pattern:** Navy gradient hero, white campaign cards, teal accents

---

### 2. `/events` - Community Events

**Purpose:** Full events listing from Circle API.

**Sections:**

1. **Hero Section**
   - Headline: "Community Events"
   - Subheadline: "Connect with fellow foster youth at workshops, panels, and social gatherings"

2. **Events Grid** (expanded version of homepage EventsSection)
   - Show 9 upcoming events (3x3 grid)
   - Reuse CircleEvent interface and fetch from same API
   - Filter: `space?.slug === 'general-events'`
   - Sort by date ascending

3. **CTA Section**
   - "See all events on our community platform"
   - Link to Circle community events

**Technical:** Extract EventsSection logic into reusable component or duplicate with expanded count.

---

### 3. `/thriver-stories` - Community Stories

**Purpose:** Showcase Thriver Stories YouTube playlist.

**Sections:**

1. **Hero Section**
   - Headline: "Thriver Stories"
   - Subheadline: "Real stories of resilience, strength, and transformation from our community"
   - Description: "Host Isabel Stasa interviews Foster Greatness community members, sharing their journeys and insights"

2. **YouTube Playlist Grid**
   - Use existing `YouTubePlaylist` component
   - Playlist ID: Same as storytellers-collective page
   - Show 12 videos (4x3 grid)

3. **CTA Section**
   - "Want to share your story?"
   - Link to `/storytellers-collective` (the program page)

**Design Pattern:** Clean white background, video grid, teal accents

---

### 4. `/impact` - Impact Report

**Purpose:** Showcase 2024 impact with key stats and downloadable PDF.

**Sections:**

1. **Hero Section**
   - Headline: "2024 Impact Report"
   - Subheadline: "A testament to the collective efforts of our team, supporters, and community members"
   - CTA: Download PDF button

2. **Mission & Vision Cards** (2-column)
   - Mission: "To co-create a space with people impacted by the foster system where empowerment, healing, and community are front and center."
   - Vision: "A world where every person who has lived through the foster system feels seen, supported, and unstoppable."

3. **Impact Stats Grid** (key numbers)
   - 310 attendees at panels/workshops
   - 8 panels hosted
   - 8 workshops delivered
   - 77 wishes granted (One Simple Wish)
   - 100+ community members
   - 73 participants in SDOH events

4. **Program Highlights** (cards or sections)
   - Panels & Workshops
   - SDOH & Community Events
   - FYTC (Foster Youth Tax Credit)
   - One Simple Wish Partnership
   - Resource Support

5. **Community Growth**
   - Mention of growth trajectory
   - App download CTAs

6. **Download CTA**
   - "Download the full 2024 Impact Report (PDF)"
   - Link to PDF file

**Design Pattern:** Stats with animated counters, navy/teal gradient sections, impact cards

---

## Redirects to Implement

| Path | Destination | Type |
|------|-------------|------|
| `/join` | `https://community.fostergreatness.co` | External redirect |
| `/stories` | `/thriver-stories` | Internal redirect |

## Navigation Cleanup

### Footer Changes
- Remove: `/volunteer`, `/corporate`
- Update `/impact` → keep (page being created)
- Update `/faqs` → remove (no page)
- Update `/contact` → remove or link to homepage contact section
- Update `/join` → external link to Circle
- Update `/stories` → `/thriver-stories`
- Update `/events` → `/events` (page being created)
- Update `/newsletter` → external link to Beehiiv or remove
- Update `/donate` → `/donate` (page being created)

### Header Changes
- Remove `/team` from About mega menu
- Keep `/impact-report` → update to `/impact`
- `/donate` button → `/donate` (page being created)

---

## File Structure

```
app/(site)/
├── donate/
│   └── page.tsx
├── events/
│   └── page.tsx
├── thriver-stories/
│   └── page.tsx
├── impact/
│   └── page.tsx
├── join/
│   └── page.tsx (redirect)
└── stories/
    └── page.tsx (redirect)
```

---

## Implementation Order

1. Create `/donate` page (highest priority)
2. Create `/events` page (highest priority)
3. Create `/thriver-stories` page
4. Create `/impact` page
5. Create redirect pages (`/join`, `/stories`)
6. Update Footer links
7. Update Header links
8. Test all navigation
