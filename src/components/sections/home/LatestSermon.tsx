import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Podcast, Headphones } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { getLatestSermon } from "@/lib/contentfulHttp";
import { ILatestSermon } from "@/types";

export default async function LatestSermon() {
  const latestSermon: ILatestSermon | null = await getLatestSermon();

  return (
    <SectionWrapper
      title='Última Pregação'
      subtitle='Ouça a mensagem mais recente e seja abençoado pela Palavra de Deus.'
    >
      <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='md:flex'>
          {latestSermon?.imageUrl && (
            <div className='md:w-1/3 md:shrink-0'>
              <Image
                src={latestSermon.imageUrl}
                alt={latestSermon.title ?? "Imagem da pregação"}
                width={600}
                height={400}
                className='object-cover w-full h-full'
                data-ai-hint='podcast microphone audio'
              />
            </div>
          )}
          <div className='p-6 md:p-8 flex flex-col justify-center md:w-2/3'>
            <div className='mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary'>
              <Podcast className='mr-2 h-5 w-5' />
              Podcast Seara
            </div>
            <h3 className='text-2xl font-bold mb-2 text-foreground'>
              {latestSermon?.title}
            </h3>
            <p className='text-muted-foreground mb-4'>
              Pregador: {latestSermon?.preacher}
            </p>
            <div className='mt-auto'>
              <Button
                asChild
                variant='default'
                className='bg-accent hover:bg-accent/90 text-accent-foreground'
              >
                <Link href={latestSermon?.podcastUrl ?? ""} target='_blank'>
                  Ouvir Agora <Headphones className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
