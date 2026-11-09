import { Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ActivityItem { icon: LucideIcon; title: string; description: string; schedule: string; highlight?: boolean; }
interface ActivitiesSectionProps { title?: string; subtitle?: string; description?: string; activities: ActivityItem[]; }

export function ActivitiesSection({ title = 'Atividades & Encontros', description = 'Diversos momentos para crescer na fé, fazer amizades e viver experiências transformadoras.', activities }: ActivitiesSectionProps) {
  const heading = title.includes('<span') ? <span dangerouslySetInnerHTML={{ __html: title }} /> : title;
  return <section className='bg-[#1b1b1b] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28'><div className='mx-auto max-w-7xl'><div className='max-w-3xl'><h2 className='text-4xl font-black tracking-[-.045em] sm:text-6xl'>{heading}</h2><p className='mt-5 text-lg leading-8 text-white/65'>{description}</p></div><div className='mt-12 divide-y divide-white/15 border-y border-white/15'>{activities.map((activity) => <article key={activity.title} className='group grid gap-3 py-6 sm:grid-cols-[48px_minmax(180px,.7fr)_1.2fr_auto] sm:items-center sm:gap-6'><activity.icon className='h-6 w-6 text-[#1ed760]' /><h3 className='text-2xl font-bold tracking-[-.025em]'>{activity.title}</h3><p className='leading-7 text-white/65'>{activity.description}</p><div className='flex items-center gap-2 text-sm font-semibold text-[#1ed760]'><Calendar className='h-4 w-4' />{activity.schedule}</div></article>)}</div></div></section>;
}
