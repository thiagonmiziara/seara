import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { CarouselItem } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calendar, Users, Info } from "lucide-react";

// Mock data - in a real app, this would come from Strapi
const schoolsData: { [slug: string]: CarouselItem & { fullDescription: string; curriculum: string[]; duration: string; targetAudience: string; logoUrl: string; } } = {
  'escola-lideres': { id: '1', slug: 'escola-lideres', name: "Escola de Líderes", imageUrl: "https://placehold.co/800x400.png?text=Lideres+Detalhes", description: "Formando líderes para o Reino.", fullDescription: "A Escola de Líderes da Seara de Deus visa capacitar membros para exercerem liderança servidora em diversos ministérios da igreja e na sociedade, fundamentados na Palavra e no caráter de Cristo.", curriculum: ["Teologia Bíblica", "Liderança Cristã", "Discipulado", "Aconselhamento Pastoral"], duration: "1 ano", targetAudience: "Membros engajados que desejam servir em posições de liderança.", logoUrl: 'https://placehold.co/150x150.png?text=EL' },
  'escola-fundacao': { id: '2', slug: 'escola-fundacao', name: "Escola Fundação", imageUrl: "https://placehold.co/800x400.png?text=Fundacao+Detalhes", description: "Construindo alicerces sólidos.", fullDescription: "A Escola Fundação é ideal para novos convertidos ou para aqueles que desejam solidificar seu entendimento das doutrinas fundamentais da fé cristã. Um curso essencial para uma caminhada firme com Deus.", curriculum: ["Doutrina de Deus", "Pecado e Salvação", "A Igreja", "Vida Cristã Prática"], duration: "6 meses", targetAudience: "Novos convertidos, recém-batizados e todos que buscam fortalecer sua base teológica.", logoUrl: 'https://placehold.co/150x150.png?text=EF' },
  'seara-box': { id: '3', slug: 'seara-box', name: "Seara Box", imageUrl: "https://placehold.co/800x400.png?text=Box+Detalhes", description: "Conteúdo para crescimento.", fullDescription: "O Seara Box é uma plataforma de assinatura com conteúdos exclusivos, estudos, devocionais e ferramentas práticas para auxiliar no seu crescimento espiritual diário e no aprofundamento do seu relacionamento com Deus.", curriculum: ["Devocionais Temáticos", "Estudos Bíblicos em Vídeo", "Materiais para Pequenos Grupos", "Entrevistas com especialistas"], duration: "Assinatura Mensal/Anual", targetAudience: "Todos que desejam recursos contínuos para seu desenvolvimento espiritual.", logoUrl: 'https://placehold.co/150x150.png?text=SB' },
};

export async function generateStaticParams() {
  return Object.keys(schoolsData).map((slug) => ({
    slug,
  }));
}

export default function SchoolDetailPage({ params }: { params: { slug: string } }) {
  const school = schoolsData[params.slug];

  if (!school) {
     return (
      <SectionWrapper title="Erro">
        <div className="text-center">Escola ou curso não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={school.name}>
      <Card className="overflow-hidden shadow-xl">
         <Image 
          src={school.imageUrl} 
          alt={school.name} 
          width={1200} 
          height={500} 
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint="learning students books"
          priority 
        />
        <CardHeader className="pt-6 flex flex-col md:flex-row items-start md:items-center">
          <Image 
            src={school.logoUrl} 
            alt={`${school.name} Logo`} 
            width={100} 
            height={100} 
            className="rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
            data-ai-hint="logo education symbol"
          />
          <div>
            <CardTitle className="text-3xl md:text-4xl text-primary">{school.name}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">{school.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>{school.fullDescription}</p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <BookOpen className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Currículo Principal</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {school.curriculum.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <Calendar className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Duração</h3>
                <p className="text-muted-foreground">{school.duration}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <Users className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Público Alvo</h3>
                <p className="text-muted-foreground">{school.targetAudience}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/inscricao?curso=${school.slug}`}>
                <Info className="mr-2 h-5 w-5" />
                Quero me Inscrever / Saber Mais
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
