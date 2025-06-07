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
    <section id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
