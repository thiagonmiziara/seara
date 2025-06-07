import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Podcast, Headphones } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const mockLatestSermon = {
  title: "A Esperança em Tempos de Crise",
  preacher: "Pr. João Silva",
  imageUrl: "https://placehold.co/600x400.png",
  podcastUrl: "#", // Placeholder link
};

export default function LatestSermon() {
  return (
    <SectionWrapper title="Última Pregação" subtitle="Ouça a mensagem mais recente e seja abençoado pela Palavra de Deus.">
      <Card className="overflow-hidden shadow-xl md:flex">
        <div className="md:w-1/2 md:shrink-0">
          <Image
            src={mockLatestSermon.imageUrl}
            alt={mockLatestSermon.title}
            width={600}
            height={400}
            className="h-64 w-full object-cover md:h-full"
            data-ai-hint="podcast microphone audio"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12 md:w-1/2">
          <div className="mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary">
            <Podcast className="mr-2 h-5 w-5" />
            Podcast Seara
          </div>
          <h3 className="mb-3 text-3xl font-bold leading-tight text-foreground">
            {mockLatestSermon.title}
          </h3>
          <p className="mb-6 text-lg text-muted-foreground">
            Pregador: {mockLatestSermon.preacher}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            <Link href={mockLatestSermon.podcastUrl}>
              <Headphones className="mr-2 h-5 w-5" />
              Ouvir Agora
            </Link>
          </Button>
        </div>
      </Card>
    </SectionWrapper>
  );
}
