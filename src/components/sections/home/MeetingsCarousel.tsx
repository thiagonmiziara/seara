import type { CarouselItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { HorizontalScrollContainer } from '@/components/shared/HorizontalScrollContainer';

const mockMeetings: CarouselItem[] = [
  { id: '1', slug: 'entre-eles', name: 'Entre ELES', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Encontros para homens.' },
  { id: '2', slug: 'elas', name: 'ELAS', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Encontros para mulheres.' },
  { id: '3', slug: 'estudo-lares', name: 'Estudo nos Lares', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Comunhão e estudo da Palavra em casas.' },
  { id: '4', slug: 'betesda', name: 'Betesda', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Momentos de oração e intercessão.' },
];

export default function MeetingsCarousel() {
  return (
    <SectionWrapper title="Cultos e Encontros" subtitle="Participe dos nossos momentos de comunhão, adoração e crescimento espiritual.">
      <HorizontalScrollContainer>
        {mockMeetings.map((item) => (
           <Card key={item.id} className="w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {item.imageUrl && (
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                  data-ai-hint="prayer meeting group"
                />
              </CardHeader>
            )}
            <CardContent className="flex-grow p-6">
               {item.logoUrl && (
                <Image
                  src={item.logoUrl}
                  alt={`${item.name} Logo`}
                  width={60}
                  height={60}
                  className="rounded-md mb-4"
                  data-ai-hint="logo symbol"
                />
              )}
              <CardTitle className="text-xl mb-2 text-foreground">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={`/cultos/${item.slug}`}>
                  Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
