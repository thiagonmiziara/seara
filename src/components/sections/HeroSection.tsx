import { ChevronDown, ArrowLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  backgroundLetters?: [string, string];
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  showScrollIndicator?: boolean;
  scrollIndicatorText?: string;
  showBackButton?: boolean;
  backButtonLink?: string;
  backButtonText?: string;
}

export function HeroSection({
  backgroundLetters = ['J', 'V'],
  badgeText = 'Igreja Seara de Deus',
  title,
  description,
  showScrollIndicator = true,
  scrollIndicatorText = 'Descubra',
  showBackButton = false,
  backButtonLink = '/',
  backButtonText = 'Voltar',
}: HeroSectionProps) {
  return (
    <section className='relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden'>
      {/* Back Button */}
      {showBackButton && (
        <div className='absolute top-[calc(env(safe-area-inset-top)+4.5rem)] left-4 z-30'>
          <Link
            href={backButtonLink}
            aria-label={backButtonText}
            className='hero-back-button group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium bg-background/20 backdrop-blur-md rounded-full border border-white/10 p-1 md:px-3 md:py-2'
          >
            {/* Mobile: slightly smaller icon-only circular button */}
            <span className='flex items-center justify-center h-7 w-7 rounded-full bg-background/20 md:hidden'>
              <ArrowLeft className='h-3 w-3' />
            </span>

            {/* Desktop: icon + text */}
            <span className='hidden md:inline-flex items-center gap-2'>
              <ArrowLeft className='h-4 w-4 transform group-hover:-translate-x-1 transition-transform' />
              {backButtonText}
            </span>
          </Link>
        </div>
      )}
      {/* Background Pattern (hidden on small screens to avoid layout break) */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='hidden sm:block absolute top-20 left-10 text-[8rem] sm:text-[12rem] md:text-[20rem] font-black text-primary leading-none select-none'>
          {backgroundLetters[0]}
        </div>
        <div className='hidden sm:block absolute bottom-20 right-10 text-[8rem] sm:text-[12rem] md:text-[20rem] font-black text-primary leading-none select-none'>
          {backgroundLetters[1]}
        </div>
      </div>

      {/* Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]' />

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-sm'>
          <span className='h-2 w-2 animate-pulse rounded-full bg-primary' />
          <span className='text-sm font-medium text-primary'>{badgeText}</span>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-6 text-foreground leading-tight break-words'>
          {title}
        </h1>

        <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed'>
          {description}
        </p>
      </div>

      {/* Scroll Indicator - apenas desktop */}
      {showScrollIndicator && (
        <div className='hidden md:flex absolute bottom-8 w-full justify-center animate-bounce'>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-xs font-medium uppercase tracking-widest text-white/50'>
              {scrollIndicatorText}
            </span>
            <ChevronDown className='h-6 w-6 text-white/50' />
          </div>
        </div>
      )}
    </section>
  );
}
