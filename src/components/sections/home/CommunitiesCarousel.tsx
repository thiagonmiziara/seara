import type { CarouselItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { HorizontalScrollContainer } from '@/components/shared/HorizontalScrollContainer';

const mockCommunities: CarouselItem[] = [
  { id: '1', slug: 'norte', name: 'Comunidade Norte', imageUrl: 'https://placehold.co/400x300.png', description: 'Conheça nossa comunidade na Zona Norte.' },
  { id: '2', slug: 'sul', name: 'Comunidade Sul', imageUrl: 'https://placehold.co/400x300.png', description: 'Participe dos encontros na Zona Sul.' },
  { id: '3', slug: 'leste', name: 'Comunidade Leste', imageUrl: 'https://placehold.co/400x300.png', description: 'Nossas atividades na Zona Leste.' },
  { id: '4', slug: 'oeste', name: 'Comunidade Oeste', imageUrl: 'https://placehold.co/400x300.png', description: 'Envolva-se com a Zona Oeste.' },
];

export default function CommunitiesCarousel() {
  return (
    <SectionWrapper title="Comunidades de Alcance" subtitle="Encontre uma Seara de Deus perto de você e faça parte da nossa família.">
      <HorizontalScrollContainer>
        {mockCommunities.map((item) => (
          <Card key={item.id} className="w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={400}
                height={200}
                className="object-cover w-full h-48"
                data-ai-hint="community group people"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2 text-foreground">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={`/comunidades/${item.slug}`}>
                  Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
