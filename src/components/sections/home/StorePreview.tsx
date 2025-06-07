import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';

const mockLatestSermon = {
  title: "A Esperança em Tempos de Crise",
  preacher: "Pr. João Silva",
  imageUrl: "https://placehold.co/600x400.png",
  podcastUrl: "#", // Placeholder link
};

export default function StorePreview() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
              src={mockLatestSermon.imageUrl}
              alt={mockLatestSermon.title}
              fill
              style={{ objectFit: 'cover' }}
            />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center md:text-left">Seara Store</h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Adquira produtos que edificam e fortalecem sua fé. Visite a Seara Store e encontre Bíblias, livros edificantes e outros itens que irão nutrir sua vida espiritual.
        </p>
          <Link href="/loja">
            <Button size="lg" className="mt-4 w-full md:w-auto">Saiba Mais</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}