/**
 * Data Index
 *
 * Re-exports all configuration for easy importing.
 *
 * Usage:
 *   import { campaigns, getActiveCampaigns, siteConfig } from '@/data';
 */

// Campaign data and helpers
export {
  campaigns,
  getActiveCampaigns,
  getNavCampaigns,
  getHomepageCampaigns,
  getDonateCampaigns,
  getFeaturedCampaign,
  getCampaignBySlug,
  getCampaignById,
} from './campaigns';

export type {
  Campaign,
  CampaignStatus,
  CampaignType,
} from './campaigns';

// Site configuration
export {
  siteConfig,
  stripeConfig,
} from './site';

export type {
  SiteConfig,
} from './site';

// Homepage configuration
export {
  homepageConfig,
  getEnabledSections,
  isSectionEnabled,
} from './homepage';

export type {
  HomepageConfig,
  HomepageSection,
} from './homepage';
