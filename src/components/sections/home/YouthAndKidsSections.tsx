import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Smile } from 'lucide-react'; // Users for Jovem, Smile for Kids
import SectionWrapper from '@/components/shared/SectionWrapper';

const youthData = {
  slug: 'jovem',
  name: 'Seara Jovem',
  logoUrl: 'https://placehold.co/150x150.png',
  imageUrl: 'https://placehold.co/600x400.png',
  description: 'Um espaço dinâmico e acolhedor para os jovens da nossa comunidade crescerem na fé e em relacionamento.',
  icon: Users,
};

const kidsData = {
  slug: 'kids',
  name: 'Seara Kids',
  logoUrl: 'https://placehold.co/150x150.png',
  imageUrl: 'https://placehold.co/600x400.png',
  description: 'Ensinando os princípios bíblicos para as crianças de forma divertida e criativa.',
  icon: Smile,
};

const MinistrySection = ({ data, reverse }: { data: typeof youthData | typeof kidsData, reverse?: boolean }) => {
  const Icon = data.icon;

  return (
    <SectionWrapper>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-cols-2-reversed' : ''}`}>
        {/* Image Column */}
        <div className={`relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg ${reverse ? 'md:col-start-2' : ''}`}>
          <Image
            src={data.imageUrl}
            alt={data.name}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={data.slug === 'jovem' ? "youth group teenagers" : "children kids playing"}
          />
        </div>

        {/* Text Content Column */}
        <div className={`flex flex-col justify-center ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
          <div className="mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary justify-center md:justify-start">
            <Icon className="mr-2 h-5 w-5" />
            Ministério
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4 text-center md:text-left">{data.name}</h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            {data.description}
          </p>
          <Link href={`/${data.slug}`}>
            <Button size="lg" className="mt-4 w-full md:w-auto">Saiba Mais</Button>
          </Link>
        </div>

        {/* Add a hidden logo for AI hint in the other column */}
        <div className="hidden">
        <Image
            src={data.logoUrl} // Use the logo here
            alt={`${data.name} Logo`}
            width={1} // Keep dimensions minimal as it's hidden
            height={1}
            data-ai-hint="logo abstract design"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default function YouthAndKidsSections() {
  return (
    <>
      {/* No subtitle here as requested */}
      <MinistrySection data={youthData} />
      <MinistrySection data={kidsData} reverse={true} /> {/* Reverse the layout for Kids */}
    </>
  );
}
