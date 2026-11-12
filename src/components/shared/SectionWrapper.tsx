import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ id, className, children, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('min-h-[60svh] bg-secondary py-14 text-foreground sm:py-16 lg:py-20', className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {title && (
          <h1 className="mb-4 max-w-5xl text-balance text-4xl font-black leading-[1.02] tracking-[-.04em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mb-9 max-w-2xl text-lg leading-8 text-muted-foreground sm:mb-11">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
