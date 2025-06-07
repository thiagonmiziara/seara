import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import type { CarouselItem } from '@/types';
import { ArrowRight, Users2 } from 'lucide-react';

const allMeetings: CarouselItem[] = [
  { id: '1', slug: 'entre-eles', name: 'Entre ELES', logoUrl: 'https://placehold.co/100x100.png?text=ELES', imageUrl: 'https://placehold.co/400x250.png?text=Homens', description: 'Encontros de fortalecimento e comunhão para homens, baseados na Palavra de Deus.' },
  { id: '2', slug: 'elas', name: 'ELAS', logoUrl: 'https://placehold.co/100x100.png?text=ELAS', imageUrl: 'https://placehold.co/400x250.png?text=Mulheres', description: 'Momentos especiais de edificação, oração e amizade para mulheres de todas as idades.' },
  { id: '3', slug: 'estudo-lares', name: 'Estudo nos Lares', logoUrl: 'https://placehold.co/100x100.png?text=Lares', imageUrl: 'https://placehold.co/400x250.png?text=Estudo', description: 'Pequenos grupos que se reúnem em casas para estudar a Bíblia, orar e compartilhar a vida.' },
  { id: '4', slug: 'betesda', name: 'Betesda', logoUrl: 'https://placehold.co/100x100.png?text=Betesda', imageUrl: 'https://placehold.co/400x250.png?text=Oracao', description: 'Reuniões dedicadas à oração e intercessão, buscando a face de Deus e clamando por Sua intervenção.' },
];

export default function MeetingsPage() {
  return (
    <SectionWrapper title="Nossos Cultos e Encontros" subtitle="Descubra os diferentes momentos de comunhão e crescimento que oferecemos.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allMeetings.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {item.imageUrl && (
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                  data-ai-hint="group meeting people praying"
                />
              </CardHeader>
            )}
            <CardContent className="flex-grow p-6">
               {item.logoUrl && (
                <Image
                  src={item.logoUrl}
                  alt={`${item.name} Logo`}
                  width={50}
                  height={50}
                  className="rounded-md mb-3"
                  data-ai-hint="logo symbol brand"
                />
              )}
              <CardTitle className="text-xl mb-2 text-foreground">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={`/cultos/${item.slug}`}>
                  Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
