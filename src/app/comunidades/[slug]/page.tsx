import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, Clock, User } from "lucide-react";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getCommunities } from "@/services/get-communities";
import { getCommunityDetailBySlug } from "@/services/get-community-detail-by-slug";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const communities = await getCommunities();
  if (!communities) {
    return [];
  }
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export default async function CommunityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const getCommunityDetails = await getCommunityDetailBySlug(slug);

  if (!getCommunityDetails) {
    return (
      <SectionWrapper title='Error'>
        <div className='text-center'>Nenhuma comunidade encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={getCommunityDetails.name}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={getCommunityDetails.imageUrl}
          alt={getCommunityDetails.name}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='community image'
          priority
        />
        <CardHeader className='pt-6'>
          <div className='flex items-center mb-2'>
            <CardTitle className='text-3xl md:text-4xl text-primary'>
              {getCommunityDetails.name}
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground'>
            {getCommunityDetails.description}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8 text-lg'>
          <p className='leading-relaxed'>
            <RichTextRenderer document={getCommunityDetails.fullDescription} />
          </p>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-3 text-foreground flex items-center'>
              <MapPin className='h-6 w-6 text-accent mr-2' /> Endereço
            </h3>
            <p className='text-muted-foreground'>
              {getCommunityDetails.address}
            </p>
          </div>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-3 text-foreground flex items-center'>
              <Clock className='h-6 w-6 text-accent mr-2' /> Horário dos cultos
            </h3>
            <p className='text-muted-foreground'>
              {getCommunityDetails.meetingTimes}
            </p>
          </div>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-3 text-foreground flex items-center'>
              <User className='h-6 w-6 text-accent mr-2' /> Pastores
            </h3>
            <p className='text-muted-foreground'>
              {getCommunityDetails.leader}
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
