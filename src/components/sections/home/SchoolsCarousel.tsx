import type { CarouselItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { HorizontalScrollContainer } from '@/components/shared/HorizontalScrollContainer';

const mockSchools: CarouselItem[] = [
  { id: '1', slug: 'escola-lideres', name: 'Escola de Líderes', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Formando líderes para o Reino de Deus.' },
  { id: '2', slug: 'escola-fundacao', name: 'Escola Fundação', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Construindo alicerces sólidos na fé.' },
  { id: '3', slug: 'seara-box', name: 'Seara Box', logoUrl: 'https://placehold.co/100x100.png', imageUrl: 'https://placehold.co/400x250.png', description: 'Conteúdo e ferramentas para seu crescimento.' },
];

export default function SchoolsCarousel() {
  return (
    <SectionWrapper title="Nossas Escolas" subtitle="Capacitação e conhecimento para todas as etapas da sua jornada espiritual.">
      <HorizontalScrollContainer>
        {mockSchools.map((item) => (
          <Card key={item.id} className="w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {item.imageUrl && (
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                  data-ai-hint="education learning study"
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
                  data-ai-hint="logo abstract"
                />
              )}
              <CardTitle className="text-xl mb-2 text-foreground">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={`/escolas/${item.slug}`}>
                  Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
