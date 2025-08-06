import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllSchools } from "@/services/get-all-schools";
import RichTextRenderer from "@/lib/richTextRenderer";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function SchoolsCarousel() {
  const schools = await getAllSchools();

  const itemCount = schools ? schools.length : 3;

  return (
    <SectionWrapper
      title='Nossas Escolas'
      subtitle='Capacitação e conhecimento para todas as etapas da sua jornada espiritual.'
    >
      <HorizontalScrollContainer shouldCenter={itemCount < 4}>
        {!schools
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={index}
                className='w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg'
              >
                <CardHeader className='p-0'>
                  <Skeleton className='w-full h-48' />
                </CardHeader>
                <CardContent className='flex-grow p-6'>
                  <Skeleton className='w-16 h-16 rounded-md mb-4' />
                  <Skeleton className='h-6 w-3/4 mb-2' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-5/6' />
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Skeleton className='w-full h-10' />
                </CardFooter>
              </Card>
            ))
          : schools.map((item) => (
              <Card
                key={item.id}
                className='w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                {item.imageUrl && (
                  <CardHeader className='p-0 h-64'>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={400}
                      height={250}
                      className='h-full w-full object-contain'
                      data-ai-hint='education learning study'
                    />
                  </CardHeader>
                )}
                <CardContent className='flex-grow p-6'>
                  {item.logoUrl && (
                    <Image
                      src={item.logoUrl}
                      alt={`${item.name} Logo`}
                      width={60}
                      height={60}
                      className='rounded-md mb-4'
                      data-ai-hint='logo abstract'
                    />
                  )}
                  <CardTitle className='text-xl mb-2 text-foreground'>
                    {item.name}
                  </CardTitle>
                  <div className='text-sm text-muted-foreground line-clamp-2'>
                    <RichTextRenderer document={item.description} />
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button
                    asChild
                    variant='outline'
                    className='w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  >
                    <Link href={`/escolas/${item.slug}`}>
                      Saber Mais <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
