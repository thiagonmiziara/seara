'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Clock3, Navigation, Users } from 'lucide-react';
import { communities } from '@/data/communities';

export default function CommunitiesExplorer() {
  const [selectedSlug, setSelectedSlug] = useState(communities[0].slug);
  const selected = communities.find((community) => community.slug === selectedSlug) ?? communities[0];
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.address)}`;

  return (
    <div>
      <div className='no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0'>
        {communities.map((community) => {
          const active = community.slug === selected.slug;
          return <button key={community.slug} type='button' onClick={() => setSelectedSlug(community.slug)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${active ? 'border-primary bg-primary text-background' : 'border-border text-muted-foreground hover:border-primary hover:text-foreground'}`}>{community.name.replace('SEARA ', '')}</button>;
        })}
      </div>

      <article className='mt-7 grid overflow-hidden rounded-2xl border border-border bg-secondary lg:min-h-[420px] lg:grid-cols-[268px_1fr]'>
        <div className='relative min-h-[360px] overflow-hidden bg-muted sm:min-h-[420px] lg:min-h-0'>
          <Image src={selected.imageUrl} alt={selected.name} fill sizes='(max-width: 1024px) 100vw, 268px' className='object-cover object-center' />
        </div>
        <div className='flex flex-col p-7 sm:p-9'>
          <div>
            <h2 className='text-3xl font-black tracking-[-.04em] text-foreground sm:text-4xl'>{selected.name}</h2>
            <p className='mt-2 max-w-2xl leading-6 text-muted-foreground'>{selected.address}</p>
          </div>
          <div className='mt-7 divide-y divide-border border-y border-border'>
            <div className='flex gap-4 py-4'><Clock3 className='mt-1 h-5 w-5 shrink-0 text-primary' /><div><p className='font-bold'>Cultos</p><p className='mt-1 text-sm leading-6 text-muted-foreground'>{selected.meetingTimes}</p></div></div>
            <div className='flex gap-4 py-4'><Users className='mt-1 h-5 w-5 shrink-0 text-primary' /><div><p className='font-bold'>Liderança</p><p className='mt-1 text-sm leading-6 text-muted-foreground'>{selected.leader}</p></div></div>
          </div>
          <div className='mt-auto flex flex-wrap gap-3 pt-8'>
            <a href={directionsUrl} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-background transition-transform hover:scale-[1.03]'><Navigation className='h-4 w-4' /> Traçar rota</a>
            <Link href={`/comunidades/${selected.slug}`} className='inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-bold text-foreground hover:border-primary'>Ver detalhes <ArrowRight className='h-4 w-4' /></Link>
          </div>
        </div>
      </article>

      <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
        {communities.filter((community) => community.slug !== selected.slug).map((community) => <button key={community.slug} type='button' onClick={() => setSelectedSlug(community.slug)} className='group flex items-center justify-between rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-primary hover:bg-muted'><span><span className='block text-lg font-black text-foreground'>{community.name.replace('SEARA ', '')}</span><span className='mt-1 block text-sm text-muted-foreground'>{community.meetingTimes}</span></span><ArrowRight className='h-5 w-5 text-primary transition-transform group-hover:translate-x-1' /></button>)}
      </div>
    </div>
  );
}
