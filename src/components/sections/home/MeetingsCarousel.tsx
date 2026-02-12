import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { HorizontalScrollContainer } from '@/components/shared/HorizontalScrollContainer';
import { meetings } from '@/data/meetings';
import RichTextRenderer from '@/lib/richTextRenderer';

import { Home } from 'lucide-react';

export default async function MeetingsCarousel() {
  const itemCount = meetings?.length || 0;

  return (
    <SectionWrapper
      title='Estudo nos lares'
      subtitle='Participe dos nossos momentos de comunhão, adoração e crescimento espiritual.'
    >
      <HorizontalScrollContainer shouldCenter={itemCount < 4}>
        {meetings?.map((item) => (
          <Card
            key={item.id}
            className='group relative w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] h-[420px] flex flex-col overflow-hidden bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl'
          >
            {/* Decorative Background Letter */}
            <div className='absolute -right-4 -top-8 text-[12rem] font-black text-primary/5 select-none transition-all duration-700 group-hover:text-primary/10 group-hover:-translate-y-4'>
              {item.name.charAt(0)}
            </div>

            {/* Logo Section - use site logo instead of image */}
            <div className='relative h-32 flex items-center justify-center p-2 z-10'>
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  src='/assets/logoseara.png'
                  alt='Seara de Deus'
                  width={120}
                  height={120}
                  className='object-contain'
                />
              </div>
            </div>

            <CardContent className='relative flex-grow p-5 flex flex-col justify-end z-10'>
              <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
                <Home className='h-3 w-3 text-primary' />
                <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
                  Comunhão
                </span>
              </div>

              <CardTitle className='text-xl font-black mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
                {item.name}
              </CardTitle>

              <div className='text-xs text-muted-foreground leading-tight line-clamp-2 mb-4'>
                <RichTextRenderer document={item.description} />
              </div>

              <Button
                asChild
                className='w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-10 rounded-lg group/btn font-bold text-sm'
              >
                <Link href={`/estudo-nos-lares/${item.slug}`}>
                  Detalhes
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
