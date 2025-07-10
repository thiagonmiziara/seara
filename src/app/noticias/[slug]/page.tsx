import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { NewsItem } from "@/types";
import { CalendarDays, UserCircle } from "lucide-react";
import { getNewsItemBySlug, getAllNews } from "@/lib/contentfulHttp"; // Import functions

export async function generateStaticParams() {
  const news = await getAllNews(); // Fetch all news to generate slugs
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const newsItem = await getNewsItemBySlug(params.slug); // Fetch news by slug

  if (!newsItem) {
    return (
      <SectionWrapper title='Erro'>
        <div className='text-center'>Recado não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={newsItem.title}>
      <Card className='overflow-hidden shadow-xl'>
        {newsItem.imageUrl && (
          <Image
            src={newsItem.imageUrl}
            alt={newsItem.title}
            width={1200}
            height={500}
            className='w-full h-64 md:h-96 object-cover'
            data-ai-hint='news article announcement'
            priority
          />
        )}
        <CardHeader className='pt-6'>
          <CardTitle className='text-3xl md:text-4xl text-primary'>
            {newsItem.title}
          </CardTitle>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2'>
            {newsItem.date && (
              <div className='flex items-center'>
                <CalendarDays className='h-4 w-4 mr-1.5' />
                {new Date(newsItem.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            )}
            {/* Assuming author is available in NewsItem type or fetched */}
            {/* {newsItem.author && (
              <div className='flex items-center'>
                <UserCircle className='h-4 w-4 mr-1.5' />
                Por: {newsItem.author}
              </div>
            )} */}
          </div>
        </CardHeader>
        <CardContent className='prose prose-lg dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line py-6'>
          {/* Using prose for nice article formatting. whitespace-pre-line to respect newlines. */}
          {newsItem.content} {/* Use newsItem.content */}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
