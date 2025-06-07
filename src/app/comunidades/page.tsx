import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import type { CarouselItem } from '@/types';
import { ArrowRight } from 'lucide-react';

// Mock data for all communities - in a real app, this would come from Strapi
const allCommunities: CarouselItem[] = [
  { id: '1', slug: 'norte', name: 'Comunidade Norte', imageUrl: 'https://placehold.co/400x300.png?text=Norte', description: 'Detalhes sobre a comunidade Norte, nossos encontros, líderes e como participar.' },
  { id: '2', slug: 'sul', name: 'Comunidade Sul', imageUrl: 'https://placehold.co/400x300.png?text=Sul', description: 'Conheça a vibrante comunidade Sul. Participe das atividades e cultos semanais.' },
  { id: '3', slug: 'leste', name: 'Comunidade Leste', imageUrl: 'https://placehold.co/400x300.png?text=Leste', description: 'Nossa presença na Zona Leste, com grupos de estudo e eventos especiais.' },
  { id: '4', slug: 'oeste', name: 'Comunidade Oeste', imageUrl: 'https://placehold.co/400x300.png?text=Oeste', description: 'Junte-se à comunidade Oeste para comunhão e crescimento espiritual.' },
];

export default function CommunitiesPage() {
  return (
    <SectionWrapper title="Nossas Comunidades de Alcance" subtitle="Encontre um lugar para pertencer e crescer na fé.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCommunities.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={400}
                height={200}
                className="object-cover w-full h-48"
                data-ai-hint="community people happy"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2 text-foreground">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={`/comunidades/${item.slug}`}>
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
