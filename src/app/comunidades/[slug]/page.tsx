import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock3, MapPin, Navigation, Users } from 'lucide-react';
import { notFound } from 'next/navigation';
import { communities } from '@/data/communities';

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);
  if (!community) notFound();
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(community.address)}`;

  return (
    <main className='bg-background text-foreground lg:h-[calc(100svh-10rem)] lg:overflow-hidden'>
      <div className='mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:grid lg:h-full lg:grid-rows-[auto_minmax(0,1fr)_150px] lg:gap-y-5 lg:px-12 lg:py-7'>
        <Link href='/comunidades' className='inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary'>
          <ArrowLeft className='h-4 w-4' /> Comunidades
        </Link>

        <section className='mt-9 grid gap-7 lg:mt-0 lg:grid-cols-[230px_1fr] lg:items-center'>
          <div className='relative aspect-[4/5] max-h-[360px] overflow-hidden rounded-2xl bg-secondary lg:h-full lg:max-h-[300px]'>
            <Image src={community.imageUrl} alt={community.name} fill priority sizes='(max-width: 1024px) 100vw, 230px' className='object-contain p-4' />
          </div>
          <div>
            <p className='text-xs font-bold tracking-[.14em] text-primary'>COMUNIDADE SEARA</p>
            <h1 className='mt-3 text-4xl font-black tracking-[-.055em] sm:text-5xl'>{community.name}</h1>
            <p className='mt-4 max-w-xl text-base leading-7 text-muted-foreground'>Uma casa para você viver fé, comunhão e propósito perto da sua vida.</p>
            <div className='mt-7 grid gap-5 sm:grid-cols-3 lg:mt-6'>
              <div><MapPin className='h-5 w-5 text-primary' /><h2 className='mt-2 font-bold'>Endereço</h2><p className='mt-1 text-sm leading-5 text-muted-foreground'>{community.address}</p></div>
              <div><Clock3 className='h-5 w-5 text-primary' /><h2 className='mt-2 font-bold'>Cultos</h2><p className='mt-1 text-sm leading-5 text-muted-foreground'>{community.meetingTimes}</p></div>
              <div><Users className='h-5 w-5 text-primary' /><h2 className='mt-2 font-bold'>Liderança</h2><p className='mt-1 text-sm leading-5 text-muted-foreground'>{community.leader}</p></div>
            </div>
            <a href={directionsUrl} target='_blank' rel='noreferrer' className='mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-background transition-transform hover:scale-[1.03]'><Navigation className='h-4 w-4' /> Como chegar</a>
          </div>
        </section>

        <section className='mt-12 overflow-hidden rounded-2xl border border-border lg:mt-0'>
          <iframe title={`Mapa ${community.name}`} src={community.mapUrl} width='100%' height='260' className='block border-0 grayscale lg:h-[150px]' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </section>
      </div>
    </main>
  );
}
