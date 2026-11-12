import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CommunitiesExplorer from '@/components/communities/CommunitiesExplorer';

export default function CommunitiesPage() {
  return (
    <main className='min-h-screen bg-background px-5 pb-16 pt-10 text-foreground sm:px-8 lg:px-12 lg:pb-20 lg:pt-12'>
      <div className='mx-auto max-w-7xl'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary'><ArrowLeft className='h-4 w-4' /> Página inicial</Link>
        <div className='mt-8 max-w-3xl'><h1 className='text-5xl font-black tracking-[-.045em] sm:text-7xl'>Encontre sua <span className='text-primary'>comunidade.</span></h1><p className='mt-5 text-lg leading-8 text-muted-foreground'>Escolha a região mais próxima e encontre um lugar para caminhar em fé, amizade e propósito.</p></div>
        <div className='mt-10'><CommunitiesExplorer /></div>
      </div>
    </main>
  );
}
