import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { CalendarDays, UserCircle } from "lucide-react";
import RichTextRenderer from "@/lib/richTextRenderer";
import { formatDate } from "@/lib/utils";
import { getAllNews } from "@/services/get-all-news";
import { getNewsItemBySlug } from "@/services/get-news-item-by-slug";

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  const news = await getAllNews();
  return news?.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const newsItem = await getNewsItemBySlug(slug);

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
                {formatDate(newsItem.date)}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className='prose prose-lg dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line py-6'>
          <RichTextRenderer document={newsItem.summary} />
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
