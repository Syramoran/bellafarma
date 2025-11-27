import React from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

export interface Promo {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type ModalType = 'privacy' | 'legal' | null;

// Extend Window interface for Meta Pixel
declare global {
  interface Window {
    fbq: (action: string, eventName: string, params?: Record<string, any>) => void;
    _fbq: any;
  }
}