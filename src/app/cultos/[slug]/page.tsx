import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { CalendarCheck, Users, MapPin, Info } from "lucide-react";
import { getMeetings } from "@/services/get-meetings";
import { getMeetingsDetailBySlug } from "@/services/get-meetings-detail-by-slug";
import RichTextRenderer from "@/lib/richTextRenderer";

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  const meetings = await getMeetings();
  return meetings?.map((meeting) => ({
    slug: meeting.slug,
  }));
}

export default async function MeetingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const meeting = await getMeetingsDetailBySlug(params.slug);

  if (!meeting) {
    return (
      <SectionWrapper title='Erro'>
        <div className='text-center'>Culto ou encontro não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={meeting.name}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={meeting.imageUrl}
          alt={meeting.name}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='people worship praying'
          priority
        />
        <CardHeader className='pt-6 flex flex-col md:flex-row items-start md:items-center'>
          <Image
            src={meeting.imageUrl}
            alt={`${meeting.name} Logo`}
            width={100}
            height={100}
            className='w-[100px] h-[100px] rounded-full object-cover overflow-hidden mr-0 md:mr-6 mb-4 md:mb-0'
            data-ai-hint='logo event symbol'
          />
          <div>
            <CardTitle className='text-3xl md:text-4xl text-primary'>
              {meeting.name}
            </CardTitle>
            <CardDescription className='text-lg text-muted-foreground'>
              {meeting.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='space-y-6 text-lg'>
          <div>
            <RichTextRenderer document={meeting.fullDescription} />
          </div>

          <div className='space-y-4 pt-4'>
            <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
              <CalendarCheck className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>Programação</h3>
                <p className='text-muted-foreground'>{meeting.schedule}</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
              <MapPin className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>Local</h3>
                <p className='text-muted-foreground'>{meeting.location}</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
              <Users className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>
                  Responsável / Contato
                </h3>
                <p className='text-muted-foreground'>{meeting.contactPerson}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
