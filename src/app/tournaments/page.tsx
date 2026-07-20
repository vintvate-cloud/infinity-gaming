'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor   = dynamic(() => import('@/components/CustomCursor'),   { ssr: false });
const SmoothScroll   = dynamic(() => import('@/components/SmoothScroll'),   { ssr: false });
const Navbar         = dynamic(() => import('@/components/Navbar'),         { ssr: false });
const Tournaments    = dynamic(() => import('@/components/Tournaments'),    { ssr: false });
const Footer         = dynamic(() => import('@/components/Footer'),         { ssr: false });
const ContactModal   = dynamic(() => import('@/components/ContactModal'),   { ssr: false });

export default function TournamentsPage() {
  return (
    <main style={{ background: 'var(--black)' }}>
      <CustomCursor />
      <ContactModal />
      <SmoothScroll>
        <Navbar />
        <div style={{ paddingTop: '15vh', minHeight: '80vh' }}>
          <Tournaments />
        </div>
        <Footer />
      </SmoothScroll>
    </main>
  );
}
