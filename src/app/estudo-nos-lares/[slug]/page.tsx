import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CalendarCheck, Users, MapPin } from 'lucide-react';
import { meetings } from '@/data/meetings';

export function generateStaticParams() {
  return meetings.map((meeting) => ({
    slug: meeting.slug,
  }));
}

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meeting = meetings.find((m) => m.slug === slug);

  if (!meeting) {
    return (
      <SectionWrapper title='Erro'>
        <div className='text-center'>Culto ou encontro não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <main className='min-h-screen bg-secondary px-5 py-10 text-foreground sm:px-8 lg:px-12 lg:py-14'>
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12'>
        <div className='flex items-start justify-center rounded-xl bg-background p-4 sm:p-6'>
          <Image
            src={meeting.imageUrl}
            alt={`Cartaz de ${meeting.name}`}
            width={700}
            height={1100}
            priority
            sizes='(max-width: 1024px) 100vw, 40vw'
            className='max-h-[75svh] w-auto rounded-lg object-contain'
          />
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='text-balance text-4xl font-black tracking-[-.04em] sm:text-5xl'>
              {meeting.name}
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-muted-foreground'>
              {meeting.fullDescription || meeting.description}
            </p>
          </div>

          <div className='divide-y divide-border border-y border-border'>
            {meeting.address && (
              <div className='flex items-start gap-4 py-5'>
                <MapPin className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <div>
                  <h2 className='font-bold'>Endereço</h2>
                  <p className='mt-1 text-muted-foreground'>{meeting.address}</p>
                </div>
              </div>
            )}
            {meeting.meetingTimes && (
              <div className='flex items-start gap-4 py-5'>
                <CalendarCheck className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <div>
                  <h2 className='font-bold'>Horário</h2>
                  <p className='mt-1 text-muted-foreground'>{meeting.meetingTimes}</p>
                </div>
              </div>
            )}
            {meeting.leader && (
              <div className='flex items-start gap-4 py-5'>
                <Users className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <div>
                  <h2 className='font-bold'>Liderança</h2>
                  <p className='mt-1 text-muted-foreground'>{meeting.leader}</p>
                </div>
              </div>
            )}
          </div>

          {meeting.address && (
            <div className='overflow-hidden rounded-xl border border-border bg-background'>
              <iframe
                title={`Mapa de ${meeting.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(meeting.address)}&output=embed`}
                width='100%'
                height='260'
                className='block border-0 grayscale'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
