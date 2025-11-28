import { track } from '@vercel/analytics';

/**
 * Track App Store button clicks
 */
export const trackAppStoreClick = (location: 'header' | 'hero') => {
  track('app_store_click', {
    location,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track custom events
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};
