import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, HeartHandshake, Users, Target } from "lucide-react";
import { MissionDiaryContainer } from "@/components/containers/missionDiary/MissionDiaryContainer";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getMissions } from "@/services/get-missions";
import { getMissionDetailsBySlug } from "@/services/get-mission-details-by-slug";

export async function generateStaticParams() {
  const missions = await getMissions();
  if (!missions) {
    return [];
  }
  return missions.map((mission) => ({
    slug: mission.slug,
  }));
}

export default async function MissionDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const getMissionDetails = await getMissionDetailsBySlug(slug);

  if (!getMissionDetails) {
    return (
      <SectionWrapper title='Erro'>
        <div className='text-center'>Página de missão não encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={getMissionDetails.title}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={getMissionDetails.imageUrl}
          alt={getMissionDetails.title}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='missions world map children'
          priority
        />
        <CardHeader className='pt-6'>
          <div className='flex items-center mb-2'>
            <Globe className='h-8 w-8 text-primary mr-3' />
            <CardTitle className='text-3xl md:text-4xl text-primary'>
              {getMissionDetails.title}
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground'>
            {getMissionDetails.description}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8 text-lg'>
          <p className='leading-relaxed'>
            <RichTextRenderer document={getMissionDetails.fullDetails} />
          </p>

          <MissionDiaryContainer />

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-3 text-foreground flex items-center'>
              <Target className='h-6 w-6 text-accent mr-2' /> Nossos Objetivos
            </h3>
            <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
              {getMissionDetails.objectives.map((obj: string) => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-3 text-foreground flex items-center'>
              <Users className='h-6 w-6 text-accent mr-2' /> Como Você Pode
              Ajudar
            </h3>
            <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
              {getMissionDetails.howToHelp.map((help: string) => (
                <li key={help}>{help}</li>
              ))}
            </ul>
          </div>

          <div className='text-center mt-10 p-6 border-t border-border'>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Faça a Diferença!
            </h3>
            <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
              <Image
                src={getMissionDetails.qrCodeUrl}
                alt='QR Code para Doação'
                width={180}
                height={180}
                className='rounded-lg shadow-md'
                data-ai-hint='qr code donation'
              />
              <Button
                size='lg'
                asChild
                className='bg-accent hover:bg-accent/90 text-accent-foreground max-w-xs w-full'
              >
                <Link href={`/doar/${getMissionDetails.slug}`}>
                  <HeartHandshake className='mr-2 h-5 w-5' /> Contribuir Agora
                </Link>
              </Button>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              Sua doação transforma vidas e expande o Reino de Deus.
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
