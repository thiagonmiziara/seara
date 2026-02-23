'use client';

import React, { useEffect, useState } from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// use plain <img> to preserve aspect ratio and avoid cropping
import { CalendarDays } from 'lucide-react';
import RichTextRenderer from '@/lib/richTextRenderer';
import { formatDate } from '@/lib/utils';

type NewsItem = {
  id: string;
  title: string;
  summary: any;
  imageUrl: string;
  date?: string;
  slug: string;
};

export default function NewsDetailClient({ slug }: { slug: string }) {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    fetch(`/api/contentful?type=newsItem&slug=${encodeURIComponent(slug)}`, {
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch news item');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setNewsItem(data || null);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(err.message || 'Error fetching news item');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) return <SectionWrapper title='Carregando...'> </SectionWrapper>;
  if (error) return <SectionWrapper title='Erro'>{error}</SectionWrapper>;
  if (!newsItem)
    return <SectionWrapper title='Erro'>Recado não encontrado.</SectionWrapper>;
  return (
    <SectionWrapper title={newsItem.title}>
      <div className='bg-background flex justify-center items-center px-2'>
        <div className='flex flex-col lg:flex-row gap-8 w-full max-w-5xl items-start'>
          {/* Imagem ao lado */}
          {newsItem.imageUrl && (
            <div className='flex justify-center items-center bg-black/0'>
              <img
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className='rounded-lg shadow-lg transition-all duration-300 w-full max-w-[400px] object-contain bg-background'
                style={{ maxHeight: 720 }}
              />
            </div>
          )}

          {/* Conteúdo do recado */}
          <div className='flex-1'>
            <Card className='overflow-hidden shadow-xl'>
              <CardHeader className='pt-6'>
                <CardTitle className='text-3xl md:text-4xl text-primary'>
                  {newsItem.title}
                </CardTitle>
                <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2'>
                  {newsItem.date && (
                    <div className='flex items-center'>
                      <CalendarDays className='h-4 w-4 mr-1.5' />
                      {formatDate(newsItem.date)}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className='prose prose-lg dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line py-6'>
                <RichTextRenderer document={newsItem.summary} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
