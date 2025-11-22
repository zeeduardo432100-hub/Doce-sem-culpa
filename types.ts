import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}