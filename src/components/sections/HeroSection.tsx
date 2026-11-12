import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  backgroundLetters?: [string, string];
  imageUrl?: string;
  imageAlt?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  showScrollIndicator?: boolean;
  scrollIndicatorText?: string;
  showBackButton?: boolean;
  backButtonLink?: string;
  backButtonText?: string;
}

export function HeroSection({
  imageUrl,
  imageAlt = '',
  title,
  description,
  showBackButton = true,
  backButtonLink = '/#ministerios',
  backButtonText = 'Todos os ministérios',
}: HeroSectionProps) {
  return (
    <section className='ministry-hero relative overflow-hidden bg-primary text-primary-foreground'>
      <div className='mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24'>
        {showBackButton && (
          <Link
            href={backButtonLink}
            className='inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-foreground/90 transition-colors hover:text-accent'
          >
            <ArrowLeft className='h-4 w-4' aria-hidden='true' />
            {backButtonText}
          </Link>
        )}

        <div className={`mt-10 items-center gap-10 lg:mt-12 ${imageUrl ? 'grid lg:grid-cols-[1fr_.85fr] lg:gap-16' : 'mx-auto flex min-h-[360px] max-w-5xl flex-col justify-center text-center sm:min-h-[400px]'}`}>
          <div className={imageUrl ? 'max-w-3xl' : 'max-w-5xl'}>
            <h1 className='text-balance text-5xl font-black leading-[.94] tracking-[-.045em] sm:text-7xl lg:text-8xl'>
              {title}
            </h1>
            <div className={`mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90 sm:mt-7 sm:text-xl sm:leading-9 ${imageUrl ? '' : 'mx-auto'}`}>
              {description}
            </div>
            <a
              href='#participar'
              className='mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
            >
              Quero participar
              <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </a>
          </div>

          {imageUrl && (
            <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-foreground/10 lg:aspect-[5/4]'>
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                sizes='(max-width: 1024px) 100vw, 42vw'
                className='object-cover'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
