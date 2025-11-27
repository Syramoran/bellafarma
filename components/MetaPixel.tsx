import React, { useEffect } from 'react';
import { META_PIXEL_ID } from '../constants';

const MetaPixel: React.FC = () => {
  useEffect(() => {
    // This simulates the Meta Pixel snippet.
    // In a real production environment, this would be part of the <head> injection.
    
    if (typeof window !== 'undefined') {
      if (!window.fbq) {
        window.fbq = function () {
          // eslint-disable-next-line prefer-rest-params
          const n = arguments;
          // @ts-ignore
          if (!window._fbq) window._fbq = n;
          // @ts-ignore
          window._fbq.push ? window._fbq.push(n) : (window._fbq = [n]);
        };
      }
      
      // Initialize Pixel
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
      
      console.log(`[Meta Pixel] Initialized with ID: ${META_PIXEL_ID}`);
      console.log(`[Meta Pixel] Tracked PageView`);
    }
  }, []);

  return null;
};

export default MetaPixel;