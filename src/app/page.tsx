'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor   = dynamic(() => import('@/components/CustomCursor'),   { ssr: false });
const Loader         = dynamic(() => import('@/components/Loader'),         { ssr: false });
const SmoothScroll   = dynamic(() => import('@/components/SmoothScroll'),   { ssr: false });
const Navbar         = dynamic(() => import('@/components/Navbar'),         { ssr: false });
const Hero           = dynamic(() => import('@/components/Hero'),           { ssr: false });
const About          = dynamic(() => import('@/components/About'),          { ssr: false });
const GamesSection   = dynamic(() => import('@/components/GamesSection'),   { ssr: false });
const Pricing        = dynamic(() => import('@/components/Pricing'),        { ssr: false });
const Amenities      = dynamic(() => import('@/components/Amenities'),      { ssr: false });
const Location       = dynamic(() => import('@/components/Location'),       { ssr: false });
const Contact        = dynamic(() => import('@/components/Contact'),        { ssr: false });
const Footer         = dynamic(() => import('@/components/Footer'),         { ssr: false });
const ContactModal   = dynamic(() => import('@/components/ContactModal'),   { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main>
      <CustomCursor />
      <Loader onComplete={() => setLoaded(true)} />

      {/* Global popup modal — always mounted, CSS-toggled */}
      <ContactModal />

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <SmoothScroll>
          <Navbar />
          <Hero />
          <About />
          <GamesSection />
          <Pricing />
          <Amenities />
          <Location />
          <Contact />
          <Footer />
        </SmoothScroll>
      </div>
    </main>
  );
}
