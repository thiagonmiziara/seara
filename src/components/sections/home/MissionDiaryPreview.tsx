import type { MissionItem } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, HeartHandshake, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const mockMissionItems: MissionItem[] = [
  {
    id: '1',
    slug: 'guine-bissau',
    title: 'Guiné-Bissau',
    description: 'Acompanhe nosso trabalho missionário e os projetos em Guiné-Bissau.',
    imageUrl: 'https://placehold.co/400x300.png',
    qrCodeUrl: 'https://placehold.co/150x150.png?text=Doe+Aqui'
  },
  {
    id: '2',
    slug: 'viagens-missionarias',
    title: 'Viagens Missionárias',
    description: 'Participe e apoie nossas próximas viagens para levar o Evangelho.',
    imageUrl: 'https://placehold.co/400x300.png',
    qrCodeUrl: 'https://placehold.co/150x150.png?text=Contribua'
  },
];

export default function MissionDiaryPreview() {
  return (
    <SectionWrapper title="Diário de Missão" subtitle="Conheça e apoie nossos projetos missionários ao redor do mundo.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockMissionItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0 relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={350}
                className="object-cover w-full h-56"
                data-ai-hint="mission children world"
              />
              {item.qrCodeUrl && (
                <div className="absolute bottom-4 right-4 bg-card p-2 rounded-md shadow-md">
                  <Image
                    src={item.qrCodeUrl}
                    alt="QR Code para Doação"
                    width={80}
                    height={80}
                    data-ai-hint="qr code"
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary">
                <Globe className="mr-2 h-5 w-5" />
                Missões
              </div>
              <CardTitle className="text-2xl font-bold mb-2 text-foreground">{item.title}</CardTitle>
              <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button asChild variant="default" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/missao/${item.slug}`}>
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {item.qrCodeUrl && (
                   <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                     <HeartHandshake className="mr-2 h-4 w-4" /> Fazer uma Doação
                   </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
