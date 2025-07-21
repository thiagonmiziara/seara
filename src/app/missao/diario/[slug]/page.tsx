import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { IMissionDiaryEntry } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getMissionDiaryEntryBySlug } from "@/services/get-mission-diary-entry-by-slug";
import { getDailyMissionsMissionsCard } from "@/services/get-daily-missions-missions-card";

export async function generateStaticParams() {
  const entries = await getDailyMissionsMissionsCard();
  return (
    entries?.map((entry) => ({
      slug: entry.slug,
    })) || []
  );
}

export default async function MissionDiaryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = await getMissionDiaryEntryBySlug(params.slug);

  if (!entry) {
    return (
      <SectionWrapper title='Erro'>
        <div className='text-center'>Entrada do diário não encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={entry.title}>
      <Card className='overflow-hidden shadow-xl'>
        {entry.imageUrl && (
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            width={1200}
            height={500}
            className='w-full h-64 md:h-96 object-cover'
            priority
          />
        )}
        <CardHeader className='pt-6'>
          <CardTitle className='text-3xl md:text-4xl text-primary'>
            {entry.title}
          </CardTitle>
          <CardDescription className='text-lg text-muted-foreground'>
            {formatDate(entry.date)} - {entry.missionaryName}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8 text-lg'>
          <div className='leading-relaxed whitespace-pre-line'>
            <RichTextRenderer document={entry.content} />
          </div>

          <div className='text-center mt-10 p-6 border-t border-border'>
            <Link href={`/missao/${entry.slug}`}>
              <Button variant='outline' size='lg'>
                <ArrowLeft className='mr-2 h-5 w-5' /> Voltar ao Diário de
                Missões
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
