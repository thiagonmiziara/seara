import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { CarouselItem } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck, Users, MapPin, Info } from "lucide-react";

// Mock data - in a real app, this would come from Strapi
const meetingsData: { [slug: string]: CarouselItem & { fullDescription: string; schedule: string; location: string; contactPerson: string; logoUrl: string; } } = {
  'entre-eles': { id: '1', slug: 'entre-eles', name: "Entre ELES", imageUrl: "https://placehold.co/800x400.png?text=Eles+Detalhes", description: "Encontros para homens.", fullDescription: "O ministério Entre ELES promove encontros mensais para homens, com foco em temas relevantes à luz da Bíblia, fortalecendo a identidade masculina em Cristo, a liderança no lar e o serviço na igreja.", schedule: "Toda 1ª Segunda-feira do mês, às 20h", location: "Salão Principal da Igreja", contactPerson: "Líder José Carlos", logoUrl: "https://placehold.co/150x150.png?text=ELES" },
  'elas': { id: '2', slug: 'elas', name: "ELAS", imageUrl: "https://placehold.co/800x400.png?text=Elas+Detalhes", description: "Encontros para mulheres.", fullDescription: "O ministério ELAS é um espaço de comunhão, aprendizado e encorajamento para mulheres de todas as idades. Realizamos chás, palestras, estudos bíblicos e momentos de oração, cultivando amizades e crescimento mútuo.", schedule: "Todo 3º Sábado do mês, às 16h", location: "Salão Anexo da Igreja", contactPerson: "Líder Ana Paula", logoUrl: "https://placehold.co/150x150.png?text=ELAS" },
  'estudo-lares': { id: '3', slug: 'estudo-lares', name: "Estudo nos Lares", imageUrl: "https://placehold.co/800x400.png?text=Lares+Detalhes", description: "Comunhão e estudo em casas.", fullDescription: "Os Estudos nos Lares são pequenos grupos que se reúnem semanalmente em diferentes casas para estudar a Palavra de Deus, orar uns pelos outros e fortalecer os laços de amizade e cuidado mútuo. Uma ótima forma de se conectar!", schedule: "Diversos dias e horários (consultar)", location: "Casas de membros da igreja (consultar locais)", contactPerson: "Coordenação de Pequenos Grupos", logoUrl: "https://placehold.co/150x150.png?text=Lares" },
  'betesda': { id: '4', slug: 'betesda', name: "Betesda", imageUrl: "https://placehold.co/800x400.png?text=Betesda+Detalhes", description: "Momentos de oração.", fullDescription: "Betesda é o nosso ministério de intercessão, onde nos reunimos para clamar a Deus por nossas famílias, igreja, cidade e nação. Um tempo poderoso de busca pela presença e intervenção divina.", schedule: "Todas as Sextas-feiras, às 06h da manhã", location: "Capela de Oração", contactPerson: "Equipe de Intercessão", logoUrl: "https://placehold.co/150x150.png?text=Betesda" },
};

export async function generateStaticParams() {
  return Object.keys(meetingsData).map((slug) => ({
    slug,
  }));
}

export default function MeetingDetailPage({ params }: { params: { slug: string } }) {
  const meeting = meetingsData[params.slug];

  if (!meeting) {
     return (
      <SectionWrapper title="Erro">
        <div className="text-center">Culto ou encontro não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={meeting.name}>
      <Card className="overflow-hidden shadow-xl">
         <Image 
          src={meeting.imageUrl} 
          alt={meeting.name} 
          width={1200} 
          height={500} 
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint="people worship praying"
          priority
        />
        <CardHeader className="pt-6 flex flex-col md:flex-row items-start md:items-center">
           <Image 
            src={meeting.logoUrl} 
            alt={`${meeting.name} Logo`} 
            width={100} 
            height={100} 
            className="rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
            data-ai-hint="logo event symbol"
          />
          <div>
            <CardTitle className="text-3xl md:text-4xl text-primary">{meeting.name}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">{meeting.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>{meeting.fullDescription}</p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <CalendarCheck className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Programação</h3>
                <p className="text-muted-foreground">{meeting.schedule}</p>
              </div>
            </div>
             <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Local</h3>
                <p className="text-muted-foreground">{meeting.location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-card-foreground/5 rounded-lg">
              <Users className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Responsável / Contato</h3>
                <p className="text-muted-foreground">{meeting.contactPerson}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {/* This link might go to a contact page or specific registration if applicable */}
              <Link href="/contato"> 
                <Info className="mr-2 h-5 w-5" />
                Mais Informações / Participar
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
