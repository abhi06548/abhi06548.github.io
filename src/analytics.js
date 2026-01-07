import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (measurementId && measurementId !== 'YOUR_GA_MEASUREMENT_ID') {
    ReactGA.initialize(measurementId);
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events (optional - for future use)
export const trackEvent = (category, action, label = null) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

