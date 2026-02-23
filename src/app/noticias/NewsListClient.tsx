'use client';

import React, { useEffect, useState } from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import RichTextRenderer from '@/lib/richTextRenderer';

type NewsItem = {
  id: string;
  title: string;
  summary: any;
  imageUrl: string;
  date?: string;
  slug: string;
};

export default function NewsListClient() {
  const [news, setNews] = useState<NewsItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/contentful?type=newsList', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch news');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        // sanitize slugs client-side as a safeguard
        const sanitizeSlug = (raw: any) => {
          if (!raw) return '';
          const s = raw.toString();
          return s
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/(^-+|-+$)/g, '');
        };

        const normalized = (data || []).map((it: any) => ({
          ...it,
          slug: sanitizeSlug(it.slug || it.title),
        }));

        setNews(normalized);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(err.message || 'Error fetching news');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return <SectionWrapper title='Seara News'>Carregando...</SectionWrapper>;
  if (error)
    return <SectionWrapper title='Seara News'>Erro: {error}</SectionWrapper>;
  if (!news || news.length === 0)
    return (
      <SectionWrapper title='Seara News'>
        Nenhuma notícia encontrada.
      </SectionWrapper>
    );

  return (
    <SectionWrapper
      title='Seara News - Todos os Recados'
      subtitle='Mantenha-se atualizado com as últimas notícias e comunicados da nossa igreja.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {news.map((item) => (
          <Card
            key={item.id}
            className='flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <CardContent className='flex-grow p-6'>
              <CardTitle className='text-xl font-semibold mb-2 text-foreground line-clamp-2'>
                {item.title}
              </CardTitle>
              {item.date && (
                <div className='flex items-center text-xs text-muted-foreground mb-2'>
                  <CalendarDays className='h-3.5 w-3.5 mr-1.5' />
                  {new Date(item.date).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              )}
              <CardDescription className='text-sm text-muted-foreground mb-4 line-clamp-3'>
                <RichTextRenderer document={item.summary} />
              </CardDescription>
            </CardContent>
            <CardFooter className='p-6 pt-0'>
              <Button
                asChild
                variant='outline'
                className='w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              >
                <Link href={`/noticias/${item.slug}`}>
                  Ler Recado Completo <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
