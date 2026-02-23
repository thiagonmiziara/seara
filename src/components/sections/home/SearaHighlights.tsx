import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Podcast, Headphones, Rss, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import RichTextRenderer from '@/lib/richTextRenderer';
import { getLatestNews } from '@/services/get-latest-news';

export default async function SearaHighlights() {
  const latestNews = await getLatestNews();

  return (
    <SectionWrapper
      title='Destaques da Seara'
      subtitle='Ouça as pregações mais recentes e confira os avisos e novidades.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Podcast Card */}
        <Card className='group relative overflow-hidden bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl md:h-full rounded-2xl'>
          <div className='md:flex md:h-full'>
            <div className='relative md:w-1/3 md:shrink-0 md:h-full overflow-hidden'>
              <Image
                src={'/assets/podcastap.jpeg'}
                alt={'Podcast Seara'}
                width={600}
                height={400}
                className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                data-ai-hint='podcast microphone audio'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden' />
            </div>

            <div className='relative p-8 flex flex-col justify-center md:w-2/3 md:h-full z-10'>
              <div className='mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
                <Podcast className='h-3 w-3 text-primary' />
                <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
                  Podcast
                </span>
              </div>

              <CardTitle className='text-3xl font-black mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
                Ap. Erich Gebhardt
              </CardTitle>
              <CardDescription className='text-muted-foreground mb-6 text-lg'>
                Ouça as mensagens que Deus tem para você através das pregações
                mais recentes.
              </CardDescription>

              <div className='mt-auto'>
                <Button
                  asChild
                  className='bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-12 rounded-xl group/btn font-bold w-full md:w-fit'
                >
                  <Link
                    href={
                      'https://open.spotify.com/show/6QPChnlwCA8XSkf90TSIz8'
                    }
                    target='_blank'
                  >
                    Ouvir Agora{' '}
                    <Headphones className='ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Latest News Card */}
        <Card className='group relative overflow-hidden bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl md:h-full rounded-2xl'>
          <div className='md:flex md:h-full'>
            <div className='relative p-8 flex flex-col justify-center md:w-full md:h-full z-10'>
              <div className='mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
                <Rss className='h-3 w-3 text-primary' />
                <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
                  Recado em Destaque
                </span>
              </div>

              <CardTitle className='text-3xl font-black mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
                {latestNews?.title}
              </CardTitle>
              <CardDescription className='text-muted-foreground mb-6 line-clamp-3 text-lg'>
                <RichTextRenderer document={latestNews?.summary} />
              </CardDescription>

              <div className='mt-auto flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  className='bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-12 rounded-xl group/btn font-bold flex-1'
                >
                  <Link href={`/noticias/${latestNews?.slug}`}>
                    Ler Recado{' '}
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  className='border-primary/20 hover:border-primary text-foreground hover:bg-card transition-all duration-500 h-12 rounded-xl font-bold flex-1'
                >
                  <Link href='/noticias'>Ver Todos</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
