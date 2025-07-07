import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, CalendarDays, Users } from "lucide-react";
import { getCommunityDetailBySlug, getCommunities } from "@/lib/contentfulHttp";
import RichTextRenderer from "@/lib/richTextRenderer";

export async function generateStaticParams() {
  const communities = await getCommunities();
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export default async function CommunityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const community = await getCommunityDetailBySlug(params.slug);

  if (!community) {
    return (
      <SectionWrapper title='Error'>
        <div className='text-center'>Community not found.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={community.name}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={community.imageUrl}
          alt={community.name}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='community event people'
          priority
        />
        <CardHeader className='pt-6'>
          <CardTitle className='text-3xl md:text-4xl text-primary'>
            {community.name}
          </CardTitle>
          <CardDescription className='text-lg text-muted-foreground'>
            {community.description}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6 text-lg'>
          <RichTextRenderer
            document={
              community.fullDescription || {
                nodeType: "document",
                data: {},
                content: [],
              }
            }
          />

          <div className='grid md:grid-cols-2 gap-6 pt-4'>
            <div className='flex items-start space-x-3'>
              <MapPin className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>Endereço</h3>
                <p className='text-muted-foreground'>{community.address}</p>
              </div>
            </div>
            <div className='flex items-start space-x-3'>
              <CalendarDays className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>Nossos cultos</h3>
                <p className='text-muted-foreground'>
                  {community.meetingTimes}
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-3'>
              <Users className='h-6 w-6 text-accent mt-1 shrink-0' />
              <div>
                <h3 className='font-semibold text-foreground'>Pastores</h3>
                <p className='text-muted-foreground'>{community.leader}</p>
              </div>
            </div>
          </div>

          <div className='mt-8 p-6 bg-card-foreground/5 rounded-lg'>
            <p className='text-2xl font-semibold mb-4 text-foreground'>
              {community.fullDescription}
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
