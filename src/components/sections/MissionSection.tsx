import type { LucideIcon } from 'lucide-react';

export interface MissionValue { icon: LucideIcon; title: string; description: string; }
interface MissionSectionProps { subtitle?: string; title: React.ReactNode; description: React.ReactNode; values: MissionValue[]; }

export function MissionSection({ title, description, values }: MissionSectionProps) {
  return <section className='bg-[#f6f6f2] px-5 py-16 text-[#121212] sm:px-8 lg:px-12 lg:py-20'><div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20'><div><h2 className='text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl'>{title}</h2><p className='mt-6 max-w-xl text-lg leading-8 text-black/65'>{description}</p></div><div className='divide-y divide-black/15 border-y border-black/15'>{values.map((value) => <article key={value.title} className='grid grid-cols-[42px_1fr] gap-4 py-5'><value.icon className='mt-1 h-5 w-5 text-[#168d42]' /><div><h3 className='text-xl font-bold'>{value.title}</h3><p className='mt-2 leading-7 text-black/65'>{value.description}</p></div></article>)}</div></div></section>;
}
