import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CommunitiesExplorer from '@/components/communities/CommunitiesExplorer';

export default function CommunitiesPage() {
  return (
    <main className='min-h-screen bg-[#121212] px-5 pb-16 pt-10 text-white sm:px-8 lg:px-12 lg:pb-20 lg:pt-12'>
      <div className='mx-auto max-w-7xl'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-[#1ed760]'><ArrowLeft className='h-4 w-4' /> Página inicial</Link>
        <div className='mt-8 max-w-3xl'><h1 className='text-5xl font-black tracking-[-.055em] sm:text-7xl'>Encontre sua <span className='text-[#1ed760]'>comunidade.</span></h1><p className='mt-5 text-lg leading-8 text-white/70'>Escolha a região mais próxima e encontre um lugar para caminhar em fé, amizade e propósito.</p></div>
        <div className='mt-10'><CommunitiesExplorer /></div>
      </div>
    </main>
  );
}
