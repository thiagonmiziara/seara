import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { redirect } from "next/navigation";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getMinistries } from "@/services/get-ministries";
import { getMinistryDetailBySlug } from "@/services/get-ministry-detail-by-slug";

export async function generateStaticParams() {
  const ministries = await getMinistries();
  return ministries?.map((ministry) => ({
    slug: ministry.slug,
  }));
}

export default async function MinistryBySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  if (["kids", "loja", "jovem"].includes(slug)) {
    redirect(`/${slug}`);
  }

  const ministry = await getMinistryDetailBySlug(slug);

  if (!ministry) {
    return (
      <SectionWrapper title='Error'>
        <div className='text-center'>Ministry not found.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={ministry.name}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={ministry.imageUrl}
          alt={ministry.name}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='ministry image'
          priority
        />
        <CardHeader className='pt-6 flex flex-col md:flex-row items-start md:items-center'>
          <Image
            src={ministry.imageUrl}
            alt={`${ministry.name} Logo`}
            width={100}
            height={100}
            className='w-[100px] h-[100px] rounded-full object-cover overflow-hidden mr-0 md:mr-6 mb-4 md:mb-0'
            data-ai-hint='ministry logo'
          />
          <div>
            <CardTitle className='text-3xl md:text-4xl text-primary'>
              {ministry.name}
            </CardTitle>
            <CardDescription className='text-lg text-muted-foreground'>
              {ministry.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='space-y-6 text-lg'>
          {ministry.fullDescription && (
            <RichTextRenderer document={ministry.fullDescription} />
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
