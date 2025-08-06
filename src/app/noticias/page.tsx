import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getAllNews } from "@/services/get-all-news";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function SearaNewsPage() {
  const allNews = await getAllNews();

  if (!allNews) {
    return null;
  }

  return (
    <SectionWrapper
      title='Seara News - Todos os Recados'
      subtitle='Mantenha-se atualizado com as últimas notícias e comunicados da nossa igreja.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allNews.map((item) => (
          <Card
            key={item.id}
            className='flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            {item.imageUrl && (
              <CardHeader className='p-0'>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={200}
                  className='object-cover w-full h-48'
                />
              </CardHeader>
            )}
            <CardContent className='flex-grow p-6'>
              <CardTitle className='text-xl font-semibold mb-2 text-foreground line-clamp-2'>
                {item.title}
              </CardTitle>
              {item.date && (
                <div className='flex items-center text-xs text-muted-foreground mb-2'>
                  <CalendarDays className='h-3.5 w-3.5 mr-1.5' />
                  {new Date(item.date).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
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
