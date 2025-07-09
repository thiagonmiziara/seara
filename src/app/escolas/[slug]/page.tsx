import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { BookOpen, Calendar, Users } from "lucide-react";
import { getAllSchools, getSchoolDetailBySlug } from "@/lib/contentfulHttp";

export async function generateStaticParams() {
  const schools = await getAllSchools();
  return schools.map((school) => ({
    slug: school.slug,
  }));
}

export default async function SchoolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const school = await getSchoolDetailBySlug(params.slug);

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
          data-ai-hint='learning students books'
          priority
        />
        <CardHeader className='pt-6 flex flex-col md:flex-row items-start md:items-center'>
          <Image
            src={school.imageUrl}
            alt={`${school.name} Logo`}
            width={100}
            height={100}
            className='rounded-lg mr-0 md:mr-6 mb-4 md:mb-0'
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
          {school.fullDescription && <p>{school.fullDescription}</p>}

          <div className='space-y-4 pt-4'>
            {school.curriculum && school.curriculum.length > 0 && (
              <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
                <BookOpen className='h-6 w-6 text-accent mt-1 shrink-0' />
                <div>
                  <h3 className='font-semibold text-foreground'>
                    Main Curriculum
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
                  <h3 className='font-semibold text-foreground'>Duration</h3>
                  <p className='text-muted-foreground'>{school.duration}</p>
                </div>
              </div>
            )}
            {school.targetAudience && (
              <div className='flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg'>
                <Users className='h-6 w-6 text-accent mt-1 shrink-0' />
                <div>
                  <h3 className='font-semibold text-foreground'>
                    Target Audience
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
