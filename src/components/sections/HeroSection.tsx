import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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

export function HeroSection({ backgroundLetters = ['S', 'D'], badgeText = 'MINISTÉRIO SEARA DE DEUS', title, description, showBackButton = true, backButtonLink = '/#ministerios', backButtonText = 'Todos os ministérios' }: HeroSectionProps) {
  return (
    <section className='relative isolate overflow-hidden bg-[#121212] text-white'>
      <div className='absolute right-[-.08em] top-[-.3em] select-none text-[18rem] font-black leading-none tracking-[-.12em] text-white/[.035] sm:text-[30rem]'>{backgroundLetters.join('')}</div>
      <div className='relative mx-auto flex min-h-[580px] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:min-h-[680px] lg:px-12'>
        {showBackButton && <Link href={backButtonLink} className='absolute top-9 inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-[#1ed760]'><ArrowLeft className='h-4 w-4' /> {backButtonText}</Link>}
        <div className='max-w-4xl'>
          <p className='text-sm font-bold tracking-[.14em] text-[#1ed760]'>{badgeText}</p>
          <h1 className='mt-6 text-balance text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-8xl'>{title}</h1>
          <p className='mt-7 max-w-2xl text-xl leading-8 text-white/70'>{description}</p>
          <a href='#participar' className='mt-10 inline-flex items-center gap-2 rounded-full bg-[#1ed760] px-6 py-3.5 font-bold text-[#121212] transition-transform hover:scale-[1.03]'>Quero participar <ArrowRight className='h-4 w-4' /></a>
        </div>
      </div>
    </section>
  );
}
