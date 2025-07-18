import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Podcast, Headphones, Rss, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getLatestNews, getLatestSermon } from "@/services/contentfulHttp";

export default async function SearaHighlights() {
  const latestSermon = await getLatestSermon();
  const latestNews = await getLatestNews();

  return (
    <SectionWrapper
      title='Destaques da Seara'
      subtitle='Ouça as pregações mais recentes e confira os avisos e novidades.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-full'>
          <div className='md:flex md:h-full'>
            {latestSermon?.imageUrl && (
              <div className='md:w-1/3 md:shrink-0 md:h-full'>
                <Image
                  src={latestSermon.imageUrl}
                  alt={latestSermon.title ?? "Imagem da pregação"}
                  width={600}
                  height={400}
                  className='object-cover w-full md:h-full'
                  data-ai-hint='podcast microphone audio'
                />
              </div>
            )}
            <div className='p-6 md:p-8 flex flex-col justify-center md:w-2/3 md:h-full'>
              <div className='mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary'>
                <Podcast className='mr-2 h-5 w-5' />
                Podcast Seara
              </div>
              <CardTitle className='text-2xl font-bold mb-2 text-foreground'>
                {latestSermon?.title}
              </CardTitle>
              <CardDescription className='text-muted-foreground mb-4 line-clamp-3'>
                Pregador: {latestSermon?.preacher}
              </CardDescription>
              <div className='mt-auto'>
                <Button
                  asChild
                  variant='default'
                  className='bg-accent hover:bg-accent/90 text-accent-foreground w-full'
                >
                  <Link href={latestSermon?.podcastUrl ?? ""} target='_blank'>
                    Ouvir Agora <Headphones className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-full'>
          <div className='md:flex md:h-full'>
            {latestNews?.imageUrl && (
              <div className='md:w-1/3 md:shrink-0 md:h-full'>
                <Image
                  src={latestNews.imageUrl}
                  alt={latestNews.title}
                  width={600}
                  height={400}
                  className='object-cover w-full md:h-full'
                  data-ai-hint='news announcement event'
                />
              </div>
            )}
            <div className='p-6 md:p-8 flex flex-col justify-center md:w-2/3 md:h-full'>
              <div className='mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary'>
                <Rss className='mr-2 h-5 w-5' />
                Recado em Destaque
              </div>
              <CardTitle className='text-2xl font-bold mb-2 text-foreground'>
                {latestNews?.title}
              </CardTitle>
              <CardDescription className='text-muted-foreground mb-4 line-clamp-3'>
                <RichTextRenderer document={latestNews?.summary} />
              </CardDescription>
              <div className='mt-auto flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0'>
                <Button
                  asChild
                  variant='default'
                  className='bg-primary hover:bg-primary/90 text-primary-foreground'
                >
                  <Link href={`/noticias/${latestNews?.slug}`}>
                    Ler Recado Completo <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  className='border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                >
                  <Link href='/noticias'>Ver Todos os Recados</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
