'use client';

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
import { meetings } from '@/data/meetings';
import RichTextRenderer from '@/lib/richTextRenderer';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Home } from 'lucide-react';

export default function MeetingsCarousel() {
  return (
    <SectionWrapper
      title='Estudo nos lares'
      subtitle='Participe dos nossos momentos de comunhão, adoração e crescimento espiritual.'
    >
      <Carousel
        opts={{ align: 'start' }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent className='-ml-4'>
          {meetings?.map((item) => (
            <CarouselItem
              key={item.id}
              className='pl-4 basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3'
            >
              <Card className='group flex h-[440px] flex-col overflow-hidden border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md'>
                <div className='relative flex h-52 shrink-0 items-center justify-center bg-secondary p-3'>
                  <Image
                    src={item.imageUrl}
                    alt={`Cartaz de ${item.name}`}
                    width={300}
                    height={420}
                    sizes='(max-width: 640px) 65vw, (max-width: 1024px) 40vw, 28vw'
                    className='h-full w-auto object-contain'
                  />
                </div>

                <CardContent className='flex flex-grow flex-col justify-end p-5'>
                  <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
                    <Home className='h-3 w-3 text-primary' />
                    <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
                      Comunhão
                    </span>
                  </div>

                  <CardTitle className='text-xl font-black mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
                    {item.name}
                  </CardTitle>

                  <div className='mb-4 line-clamp-2 text-sm leading-6 text-muted-foreground'>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
    </SectionWrapper>
  );
}
