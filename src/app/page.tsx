import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Heart,
  MapPin,
  Play,
} from 'lucide-react';
import { communities } from '@/data/communities';
import { ministriesData } from '@/data/ministries';

const gatherings = [
  { day: 'QUARTA', time: '15:00', name: 'Casa de Cura Betesda' },
  { day: 'QUINTA', time: '19:30', name: 'Culto da Palavra' },
  { day: 'DOMINGO', time: '10:00', name: 'Culto da Família' },
];

export default function HomePage() {
  return (
    <>
      <section className='home-hero relative isolate flex min-h-[calc(100svh-65px)] overflow-hidden bg-brand-deep text-background'>
        <div className='home-hero-media absolute inset-0 z-0 overflow-hidden bg-brand-deep'>
          <Image
            src='/assets/searasedeigreja.png'
            alt='Comunidade da Seara de Deus reunida em um culto'
            fill
            priority
            sizes='100vw'
            className='home-hero-image object-cover object-center'
          />
          <video
            className='home-hero-video'
            autoPlay
            muted
            loop
            playsInline
            preload='metadata'
            poster='/assets/searasedeigreja.png'
            aria-hidden='true'
            tabIndex={-1}
          >
            <source src='/assets/searavideo.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='relative z-10 mx-auto flex min-h-[calc(100svh-65px)] w-full max-w-7xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20'>
          <div className='home-hero-copy max-w-2xl lg:w-[58%] lg:max-w-none'>
            <h1 className='text-balance text-4xl font-black leading-[.98] tracking-[-.035em] text-background sm:text-5xl lg:text-[3.25rem] xl:text-6xl'>
              <span className='block'>Igreja Seara de Deus</span>
              <span className='block text-brand-lime'>em Uberlândia</span>
            </h1>
            <p className='mt-5 max-w-xl text-lg leading-8 text-background/85 sm:text-xl'>
              A Seara de Deus é um lugar para conhecer Jesus, construir vínculos
              verdadeiros e viver uma fé que alcança a cidade.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                href='/comunidades'
                className='inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-lime px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background'
              >
                Encontre sua comunidade
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href='#cultos'
                className='inline-flex min-h-12 items-center gap-2 rounded-full border border-background/50 px-6 py-3 font-semibold text-background transition-colors hover:border-background hover:bg-background/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background'
              >
                Ver horários
                <CalendarDays className='h-4 w-4' />
              </Link>
            </div>
            <Link
              href='#sobre'
              aria-label='Rolar para conhecer a Seara'
              className='home-scroll-indicator mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-background/80 transition-colors hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background lg:absolute lg:bottom-8 lg:left-12 lg:mt-0'
            >
              Conheça a Seara
              <ArrowDown className='home-scroll-arrow h-4 w-4' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>

      <section
        id='sobre'
        className='bg-background px-5 py-14 sm:px-8 lg:px-12 lg:py-[4.5rem]'
      >
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16'>
          <div className='flex items-start gap-4'>
            <div className='mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground'>
              <Heart className='h-5 w-5 fill-current' />
            </div>
            <p className='text-2xl font-semibold leading-tight tracking-[-.025em] text-foreground sm:text-3xl'>
              Uma família que aprende, serve e celebra a presença de Deus.
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-black tracking-[-.035em] text-foreground sm:text-4xl'>
              Não é só assistir. É pertencer.
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Em cada culto, comunidade e ministério, existe espaço para você
              ser acolhido, crescer na Palavra e colocar seus dons em movimento.
            </p>
            <Link
              href='/sobre'
              className='mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-primary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            >
              Conheça a Seara
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-[#e7f0df] px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-[4.5rem]'>
        <div className='mx-auto grid max-w-7xl gap-7 border-y border-border py-6 lg:grid-cols-2 lg:gap-12 lg:py-8'>
          <article className='lg:pr-10'>
            <h2 className='text-3xl font-black tracking-[-.035em] sm:text-4xl'>
              Nossa Visão
            </h2>
            <p className='mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Edificar uma igreja que cresce com profundidade e propósito — uma
              comunidade bíblica, saudável, alinhada ao céu e relevante na terra.
            </p>
          </article>
          <article className='border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0'>
            <h2 className='text-3xl font-black tracking-[-.035em] sm:text-4xl'>
              Nossa Missão
            </h2>
            <p className='mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Formar discípulos íntegros, maduros e cheios do Espírito, capazes
              de revelar Cristo no caráter, na vida diária e no serviço.
            </p>
            <Link
              href='/sobre'
              className='mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-primary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            >
              Leia visão, missão e nossa história
              <ArrowRight className='h-4 w-4' />
            </Link>
          </article>
        </div>
      </section>

      <section
        id='cultos'
        className='bg-background px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-[4.5rem]'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
            <div>
              <h2 className='text-3xl font-black tracking-[-.035em] sm:text-4xl'>
                Cultos que nos reúnem.
              </h2>
              <p className='mt-3 max-w-xl text-lg text-muted-foreground'>
                Separe um momento da sua semana para estar em comunidade.
              </p>
            </div>
            <Link
              href='/contato'
              className='inline-flex min-h-11 items-center gap-2 font-bold text-foreground hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            >
              Como chegar
              <MapPin className='h-4 w-4 text-brand-sky' />
            </Link>
          </div>
          <div className='grid border-y border-border md:grid-cols-3'>
            {gatherings.map((gathering) => (
              <article
                key={gathering.name}
                className='border-b border-border py-5 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r'
              >
                <p className='text-sm font-bold tracking-[.14em] text-primary'>
                  {gathering.day}
                </p>
                <p className='mt-3 text-4xl font-black tracking-[-.035em]'>
                  {gathering.time}
                </p>
                <h3 className='mt-2 text-lg font-bold'>{gathering.name}</h3>
                <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                  Sede · Av. Mato Grosso, 694 · Uberlândia
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id='comunidades'
        className='bg-[#e7f0df] px-5 py-14 sm:px-8 lg:px-12 lg:py-[4.5rem]'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
            <div>
              <h2 className='text-3xl font-black tracking-[-.035em] text-foreground sm:text-4xl'>
                Uma Seara perto de você.
              </h2>
              <p className='mt-3 max-w-xl text-lg text-muted-foreground'>
                Nossas comunidades são casas abertas para viver fé e amizade no
                dia a dia.
              </p>
            </div>
            <Link
              href='/comunidades'
              className='inline-flex min-h-11 items-center gap-2 font-bold text-primary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            >
              Ver todas as comunidades
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
            {communities.map((community) => (
              <Link
                key={community.id}
                href={`/comunidades/${community.slug}`}
                aria-label={`Conhecer ${community.name.replace('SEARA ', 'Seara ')}. Cultos: ${community.meetingTimes}`}
                className='group relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-background transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
              >
                <Image
                  src={community.imageUrl}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 18vw'
                  className='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id='ministerios'
        className='bg-background px-5 py-14 text-foreground sm:px-8 lg:px-12 lg:py-[4.5rem]'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-6 max-w-3xl'>
            <h2 className='text-3xl font-black tracking-[-.035em] sm:text-5xl'>
              Há um lugar para a sua história.
            </h2>
            <p className='mt-3 text-base leading-7 text-muted-foreground sm:text-lg'>
              Encontre pessoas na mesma fase da vida e uma oportunidade real de
              servir.
            </p>
          </div>
          <div className='divide-y divide-border border-y border-border'>
            {ministriesData.map((ministry) => (
              <Link
                key={ministry.slug}
                href={`/${ministry.slug}`}
                className='group grid gap-2 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid-cols-[minmax(150px,.55fr)_1.45fr_auto] sm:items-center sm:gap-5'
              >
                <span className='text-xl font-black tracking-[-.025em]'>
                  {ministry.name}
                </span>
                <p className='text-sm leading-6 text-muted-foreground'>
                  {ministry.description}
                </p>
                <ArrowRight className='h-5 w-5 text-primary transition-transform group-hover:translate-x-1' />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-brand-deep px-5 py-14 text-background sm:px-8 lg:px-12 lg:py-[4.5rem]'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-black tracking-[-.035em] sm:text-4xl'>
              Gente cuidando de gente.
            </h2>
            <p className='mt-3 max-w-xl text-base leading-7 text-background/85 sm:text-lg'>
              Nossa liderança caminha perto, ensina a Palavra e acredita que
              vidas transformadas transformam cidades.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/sobre'
              className='inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-lime px-6 py-3 font-bold text-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background'
            >
              Conheça a nossa história
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='https://open.spotify.com/show/6QPChnlwCA8XSkf90TSIz8'
              target='_blank'
              rel='noreferrer'
              className='inline-flex min-h-12 items-center gap-2 rounded-full border border-background/50 px-6 py-3 font-bold text-background transition-colors hover:border-background hover:bg-background/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background'
            >
              <Play className='h-4 w-4 fill-current' />
              Ouça as mensagens
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
