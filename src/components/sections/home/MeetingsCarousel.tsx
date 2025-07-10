import type { CarouselItem } from "@/types";
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
import { Users, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";
import { getMeetings } from "@/lib/contentfulHttp";

export default async function MeetingsCarousel() {
  const meetings: CarouselItem[] | null = await getMeetings();

  return (
    <SectionWrapper
      title='Cultos e Encontros'
      subtitle='Participe dos nossos momentos de comunhão, adoração e crescimento espiritual.'
    >
      <HorizontalScrollContainer>
        {meetings?.map((item) => (
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
                  data-ai-hint='prayer meeting group'
                />
              </CardHeader>
            )}
            <CardContent className='flex-grow p-6'>
              <CardTitle className='text-xl mb-2 text-foreground'>
                {item.name}
              </CardTitle>
              <p className='text-sm text-muted-foreground line-clamp-2'>
                {item.description}
              </p>
            </CardContent>
            <CardFooter className='p-6 pt-0'>
              <Button
                asChild
                variant='outline'
                className='w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              >
                <Link href={`/cultos/${item.slug}`}>
                  Detalhes <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
