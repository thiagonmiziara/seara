import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Compass } from 'lucide-react';

const vision =
  'Nossa visão é edificar uma igreja que cresce com profundidade e propósito — uma comunidade bíblica, saudável, alinhada ao céu e relevante na terra. Sonhamos com pessoas que conhecem a Palavra, discernem os tempos e vivem sua fé com responsabilidade, coragem e santidade.';
const mission =
  'Nossa missão é formar discípulos íntegros, maduros e cheios do Espírito, capazes de revelar Cristo no caráter, na vida diária e no serviço. Não buscamos notoriedade; buscamos transformação.';

export default function SobrePage() {
  return (
    <main className='bg-background text-foreground'>
      <section className='mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28 lg:pt-10'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary'
        >
          <ArrowLeft className='h-4 w-4' /> Página inicial
        </Link>
        <div className='mt-8 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16'>
          <div className='max-w-2xl'>
            <h1 className='text-5xl font-black leading-[.96] tracking-[-.045em] sm:text-7xl'>
              Uma comunidade para viver Jesus por inteiro.
            </h1>
            <p className='mt-7 max-w-xl text-lg leading-8 text-muted-foreground'>
              Aqui você encontra espaço para crescer na Palavra, construir
              relações verdadeiras e servir com propósito.
            </p>
            <Link
              href='#historia'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-background transition-transform hover:scale-[1.03]'
            >
              Conheça nossa história <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='relative min-h-[340px] overflow-hidden rounded-3xl bg-secondary sm:min-h-[440px]'>
            <Image
              src='/assets/searasedeigreja.png'
              alt='Interior da Igreja Seara de Deus durante um culto'
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section className='bg-secondary px-5 py-20 sm:px-8 lg:px-12 lg:py-24'>
        <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24'>
          <article>
            <Compass className='h-7 w-7 text-primary' />
            <h2 className='mt-6 text-4xl font-black tracking-[-.04em] sm:text-5xl'>
              Nossa Visão
            </h2>
            <p className='mt-6 text-lg leading-8 text-muted-foreground'>
              {vision}
            </p>
          </article>
          <article>
            <BookOpen className='h-7 w-7 text-primary' />
            <h2 className='mt-6 text-4xl font-black tracking-[-.04em] sm:text-5xl'>
              Nossa Missão
            </h2>
            <p className='mt-6 text-lg leading-8 text-muted-foreground'>
              {mission}
            </p>
          </article>
        </div>
      </section>

      <section
        id='historia'
        className='px-5 py-20 sm:px-8 lg:px-12 lg:py-28'
      >
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20'>
          <article className='max-w-xl'>
            <span className='inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary'>
              Texto ilustrativo · história fictícia
            </span>
            <h2 className='mt-6 text-4xl font-black leading-[1.02] tracking-[-.04em] sm:text-6xl'>
              Conheça nossa história.
            </h2>
            <p className='mt-6 text-lg leading-8 text-muted-foreground'>
              Imagine uma comunidade que começou reunindo pessoas em torno de
              uma mesma esperança: conhecer Jesus e caminhar juntas. Com o
              tempo, cada encontro se tornou uma oportunidade de acolher,
              aprender a Palavra e servir ao próximo.
            </p>
            <p className='mt-5 leading-7 text-muted-foreground'>
              Este relato foi criado como exemplo visual e não representa fatos
              ou marcos confirmados da história da igreja.
            </p>
            <Link
              href='/contato'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-background transition-transform hover:scale-[1.03]'
            >
              Fale com a gente <ArrowRight className='h-4 w-4' />
            </Link>
          </article>

          <div className='grid grid-cols-2 items-start gap-4 sm:gap-6'>
            <figure>
              <div className='relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary'>
                <Image
                  src='/assets/apostolo-profeta.jpeg'
                  alt='Apóstolo e profeta em uma rua durante uma viagem'
                  fill
                  sizes='(max-width: 1024px) 45vw, 25vw'
                  className='object-cover'
                />
              </div>
              <figcaption className='mt-3 text-sm font-semibold text-muted-foreground'>
                Caminhando lado a lado
              </figcaption>
            </figure>
            <figure className='mt-14 sm:mt-20'>
              <div className='relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary'>
                <Image
                  src='/assets/profeta-apostolo.jpeg'
                  alt='Apóstolo e profeta em um jardim histórico'
                  fill
                  sizes='(max-width: 1024px) 45vw, 25vw'
                  className='object-cover'
                />
              </div>
              <figcaption className='mt-3 text-sm font-semibold text-muted-foreground'>
                Memórias de uma jornada
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
