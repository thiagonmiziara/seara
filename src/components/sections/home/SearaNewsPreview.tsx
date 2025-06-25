import type { NewsItem } from "@/types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rss, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { getLatestNews } from "@/lib/contentfulHttp";
import RichTextRenderer from "@/lib/richTextRenderer";

export default async function SearaNewsPreview() {
  const latestNews: NewsItem | null = await getLatestNews();

  if (!latestNews) {
    return null;
  }

  return (
    <SectionWrapper
      title='Seara News'
      subtitle='Fique por dentro dos últimos recados e novidades da nossa igreja.'
    >
      <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='md:flex'>
          {latestNews.imageUrl && (
            <div className='md:w-1/3 md:shrink-0'>
              <img
                src={latestNews.imageUrl}
                alt={latestNews.title}
                width={500}
                height={300}
                className='h-56 w-full object-cover md:h-full'
                data-ai-hint='news announcement event'
              />
            </div>
          )}
          <div className='p-6 md:p-8 flex flex-col justify-center md:w-2/3'>
            <div className='mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary'>
              <Rss className='mr-2 h-5 w-5' />
              Recado em Destaque
            </div>
            <CardTitle className='text-2xl font-bold mb-2 text-foreground'>
              {latestNews.title}
            </CardTitle>
            <CardDescription className='text-muted-foreground mb-4 line-clamp-3'>
              <RichTextRenderer document={latestNews.summary} />
            </CardDescription>
            <div className='mt-auto flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0'>
              <Button
                asChild
                variant='default'
                className='bg-primary hover:bg-primary/90 text-primary-foreground'
              >
                <Link href={`/noticias/${latestNews.slug}`}>
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
    </SectionWrapper>
  );
}
