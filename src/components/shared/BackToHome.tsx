'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BackToHome() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If a HeroSection back button exists on the page, hide this component to avoid duplication
    try {
      const heroBtn = document.querySelector('.hero-back-button');
      if (heroBtn) {
        setVisible(false);
        return;
      }

      // If multiple BackToHome instances exist, only keep the first one
      const els = document.querySelectorAll('.back-to-home');
      if (els.length > 1) {
        const first = els[0];
        if (containerRef.current && first !== containerRef.current) {
          setVisible(false);
        }
      }
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className='back-to-home absolute top-[calc(env(safe-area-inset-top)+4.5rem)] left-4 z-30'
    >
      <Link
        href='/'
        aria-label='Página Inicial'
        className='group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium bg-background/20 backdrop-blur-md rounded-full border border-white/10 p-1 md:px-3 md:py-2'
      >
        {/* Mobile: slightly smaller icon-only circular button */}
        <span className='flex items-center justify-center h-7 w-7 rounded-full bg-background/20 md:hidden'>
          <ArrowLeft className='h-3 w-3' />
        </span>

        {/* Desktop: icon + text */}
        <span className='hidden md:inline-flex items-center gap-2'>
          <ArrowLeft className='h-4 w-4 transform group-hover:-translate-x-1 transition-transform' />
          Página Inicial
        </span>
      </Link>
    </div>
  );
}
