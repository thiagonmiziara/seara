import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Compass, History } from 'lucide-react';

const vision = 'Nossa visão é edificar uma igreja que cresce com profundidade e propósito — uma comunidade bíblica, saudável, alinhada ao céu e relevante na terra. Sonhamos com pessoas que conhecem a Palavra, discernem os tempos e vivem sua fé com responsabilidade, coragem e santidade.';
const mission = 'Nossa missão é formar discípulos íntegros, maduros e cheios do Espírito, capazes de revelar Cristo no caráter, na vida diária e no serviço. Não buscamos notoriedade; buscamos transformação.';

export default function SobrePage() {
  return (
    <main className='bg-[#121212] text-white'>
      <section className='mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-[#1ed760]'><ArrowLeft className='h-4 w-4' /> Página inicial</Link>
        <div className='mt-14 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center'>
          <div className='relative min-h-72 overflow-hidden rounded-2xl bg-[#242424]'><Image src='/assets/logoseara.png' alt='Seara de Deus' fill priority sizes='(max-width: 1024px) 100vw, 40vw' className='object-contain p-14' /></div>
          <div><p className='text-sm font-bold tracking-[.14em] text-[#1ed760]'>IGREJA SEARA DE DEUS</p><h1 className='mt-4 text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-7xl'>Uma comunidade para viver Jesus por inteiro.</h1><p className='mt-7 max-w-2xl text-lg leading-8 text-white/70'>Aqui você encontra espaço para crescer na Palavra, construir relações verdadeiras e servir com propósito.</p></div>
        </div>
      </section>

      <section className='bg-[#f6f6f2] px-5 py-20 text-[#121212] sm:px-8 lg:px-12 lg:py-28'><div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24'>
        <article><Compass className='h-7 w-7 text-[#168d42]' /><h2 className='mt-6 text-4xl font-black tracking-[-.045em] sm:text-5xl'>Nossa Visão</h2><p className='mt-6 text-lg leading-8 text-black/70'>{vision}</p></article>
        <article><BookOpen className='h-7 w-7 text-[#168d42]' /><h2 className='mt-6 text-4xl font-black tracking-[-.045em] sm:text-5xl'>Nossa Missão</h2><p className='mt-6 text-lg leading-8 text-black/70'>{mission}</p></article>
      </div></section>

      <section id='historia' className='px-5 py-20 sm:px-8 lg:px-12 lg:py-28'><div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start'><div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#1ed760] text-[#121212]'><History className='h-7 w-7' /></div><div><h2 className='text-4xl font-black tracking-[-.045em] sm:text-6xl'>Conheça nossa história.</h2><p className='mt-6 max-w-2xl text-lg leading-8 text-white/70'>Em breve, este espaço vai contar como a Seara de Deus nasceu, as pessoas que fizeram parte dos primeiros passos e os marcos que trouxeram a igreja até aqui.</p><p className='mt-5 max-w-2xl text-white/50'>Compartilhe o texto e as fotos que devem fazer parte dessa história para publicarmos este capítulo com fidelidade.</p><Link href='/contato' className='mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#121212] transition-transform hover:scale-[1.03]'>Fale com a gente <ArrowRight className='h-4 w-4' /></Link></div></div></section>
    </main>
  );
}
