import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductBreakdown } from './components/ProductBreakdown';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Hero />
      <Benefits />
      <ProductBreakdown />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;