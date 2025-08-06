import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { BookOpen, Calendar, GraduationCap, Users } from "lucide-react";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getSchoolDetailBySlug } from "@/services/get-school-detail-by-slug";
import { getAllSchools } from "@/services/get-all-schools";

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  const schools = await getAllSchools();
  return schools?.map((school) => ({
    slug: school.slug,
  }));
}

export default async function SchoolDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const school = await getSchoolDetailBySlug(slug);

  if (!school) {
    return (
      <SectionWrapper title='Error'>
        <div className='text-center'>School or course not found.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={school.name}>
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={school.imageUrl}
          alt={school.name}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='people worship praying'
          priority
        />

        <CardHeader className='pt-6 flex flex-col md:flex-row items-start md:items-center'>
          <Image
            src={school.imageUrl}
            alt={`${school.name} Logo`}
            width={100}
            height={100}
            className='w-[100px] h-[100px] rounded-full object-cover overflow-hidden mr-0 md:mr-6 mb-4 md:mb-0'
            data-ai-hint='logo education symbol'
          />
          <div>
            <CardTitle className='text-3xl md:text-4xl text-primary'>
              {school.name}
            </CardTitle>
            <CardDescription className='text-lg text-muted-foreground'>
              {school.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='space-y-6 text-lg'>
          <div className='space-y-4 pt-4'>
            {school.fullDescription && (
              <div className='rounded-xl border bg-card-foreground/5 p-4 shadow-sm'>
                <h3 className='font-semibold text-foreground flex gap-3 mb-2'>
                  <GraduationCap className='h-6 w-6 text-accent mt-1 shrink-0' />
                  Descrição
                </h3>
                <div className='prose prose-invert max-w-none break-words whitespace-pre-line text-sm leading-relaxed'>
                  <RichTextRenderer document={school.fullDescription} />
                </div>
              </div>
            )}

            {school.curriculum && school.curriculum.length > 0 && (
              <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
                <BookOpen className='h-6 w-6 text-accent mt-1 shrink-0' />
                <div>
                  <h3 className='font-semibold text-foreground'>
                    Grade curricular
                  </h3>
                  <ul className='list-disc list-inside text-muted-foreground'>
                    {school.curriculum.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {school.duration && (
              <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
                <Calendar className='h-6 w-6 text-accent mt-1 shrink-0' />
                <div>
                  <h3 className='font-semibold text-foreground'>Duração</h3>
                  <p className='text-muted-foreground'>{school.duration}</p>
                </div>
              </div>
            )}
            {school.targetAudience && (
              <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
                <Users className='h-6 w-6 text-accent mt-1 shrink-0' />
                <div>
                  <h3 className='font-semibold text-foreground'>
                    Publico alvo
                  </h3>
                  <p className='text-muted-foreground'>
                    {school.targetAudience}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
