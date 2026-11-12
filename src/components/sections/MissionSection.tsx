import type { LucideIcon } from 'lucide-react';

export interface MissionValue { icon: LucideIcon; title: string; description: string; }
interface MissionSectionProps { subtitle?: string; title: React.ReactNode; description: React.ReactNode; values: MissionValue[]; }

export function MissionSection({ title, description, values }: MissionSectionProps) {
  return (
    <section className='bg-secondary px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-20'>
      <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20'>
        <div>
          <h2 className='text-balance text-4xl font-black leading-[.98] tracking-[-.04em] sm:text-6xl'>
            {title}
          </h2>
          <p className='mt-6 max-w-xl text-lg leading-8 text-muted-foreground'>
            {description}
          </p>
        </div>
        <div className='divide-y divide-border border-y border-border'>
          {values.map((value) => (
            <article key={value.title} className='grid grid-cols-[32px_1fr] gap-4 py-5 sm:grid-cols-[40px_1fr]'>
              <value.icon className='mt-1 h-5 w-5 text-primary' aria-hidden='true' />
              <div>
                <h3 className='text-xl font-bold'>{value.title}</h3>
                <p className='mt-2 leading-7 text-muted-foreground'>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
