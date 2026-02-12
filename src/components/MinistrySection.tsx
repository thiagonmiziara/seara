'use client';

import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

interface IMinistrySection {
  data: {
    slug: string;
    name: string;
    imageUrl: string;
    description: string;
  };
}

export default function MinistrySection({ data }: IMinistrySection) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
    >
      <div className='absolute -right-4 -top-8 text-[10rem] md:text-[12rem] font-black text-primary/5 select-none transition-all duration-700 group-hover:text-primary/10 group-hover:-translate-y-4'>
        {data.name.charAt(0)}
      </div>

      <div className='relative h-32 flex items-center justify-center p-2 z-10'>
        <div className='w-full h-full flex items-center justify-center'>
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={120}
            height={120}
            className='object-contain animate-floating'
            data-ai-hint={
              data.slug === 'jovem'
                ? 'youth group teenagers'
                : 'children kids playing'
            }
            priority
          />
        </div>
      </div>

      <div className='relative flex-grow p-5 flex flex-col justify-end z-10'>
        <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
          <Users className='h-3 w-3 text-primary' />
          <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
            Ministério
          </span>
        </div>
        <h2 className='text-xl font-black mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
          {data.name}
        </h2>
        <p className='text-xs text-muted-foreground leading-tight line-clamp-2 mb-4'>
          {data.description}
        </p>
        <Link href={`/${data.slug}`} className='mt-auto'>
          <Button
            size='lg'
            className='w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-10 rounded-lg font-bold text-sm'
          >
            Saiba Mais
          </Button>
        </Link>
      </div>
    </div>
  );
}
