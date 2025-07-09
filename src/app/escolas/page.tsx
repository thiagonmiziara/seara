import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { CarouselItem } from "@/types";
import { ArrowRight, GraduationCap } from "lucide-react";
import { getAllSchools } from "@/lib/contentfulHttp";

export default async function SchoolsPage() {
  const allSchools: CarouselItem[] | null = await getAllSchools();

  return (
    <SectionWrapper
      title='Nossas Escolas e Cursos'
      subtitle='Invista no seu conhecimento e crescimento espiritual.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allSchools.map((item) => (
          <Card
            key={item.id}
            className='flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            {item.imageUrl && (
              <CardHeader className='p-0'>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={250}
                  className='h-full w-full object-cover'
                  data-ai-hint='education learning classroom'
                />
              </CardHeader>
            )}
            <CardContent className='flex-grow p-6'>
              {item.logoUrl && (
                <Image
                  src={item.logoUrl}
                  alt={`${item.name} Logo`}
                  width={50}
                  height={50}
                  className='rounded-md mb-3'
                  data-ai-hint='logo symbol icon'
                />
              )}
              <CardTitle className='text-xl mb-2 text-foreground'>
                {item.name}
              </CardTitle>
              <p className='text-sm text-muted-foreground line-clamp-3'>
                {item.description}
              </p>
            </CardContent>
            <CardFooter className='p-6 pt-0'>
              <Button
                asChild
                variant='outline'
                className='w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              >
                <Link href={`/escolas/${item.slug}`}>
                  Ver Detalhes <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
