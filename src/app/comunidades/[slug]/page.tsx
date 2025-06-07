import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { CarouselItem } from "@/types";
import { MapPin, CalendarDays, Users } from "lucide-react";

// Mock data - in a real app, this would come from Strapi
const communitiesData: { [slug: string]: CarouselItem & { fullDescription: string; address: string; meetingTimes: string; leader: string } } = {
  norte: { id: '1', slug: 'norte', name: "Comunidade Norte", imageUrl: "https://placehold.co/800x400.png?text=Norte+Detalhes", description: "Acolhedora comunidade na Zona Norte.", fullDescription: "A Comunidade Norte da Seara de Deus é um ponto de encontro vibrante para todos que buscam crescimento espiritual e comunhão. Realizamos encontros semanais, estudos bíblicos e eventos sociais para fortalecer os laços e a fé. Venha nos conhecer!", address: "Rua da Esperança, 100, Bairro Norte", meetingTimes: "Domingos às 10h, Quartas às 19h30", leader: "João e Maria Silva" },
  sul: { id: '2', slug: 'sul', name: "Comunidade Sul", imageUrl: "https://placehold.co/800x400.png?text=Sul+Detalhes", description: "Participe conosco na Zona Sul.", fullDescription: "Localizada no coração da Zona Sul, nossa comunidade oferece um ambiente acolhedor para famílias e indivíduos. Temos ministérios para todas as idades e um forte foco em ação social na região.", address: "Av. da Fé, 200, Bairro Sul", meetingTimes: "Domingos às 18h, Quintas às 20h", leader: "Pedro e Ana Costa" },
  leste: { id: '3', slug: 'leste', name: "Comunidade Leste", imageUrl: "https://placehold.co/800x400.png?text=Leste+Detalhes", description: "Atividades e comunhão na Zona Leste.", fullDescription: "A Comunidade Leste é conhecida por seu dinamismo e paixão por missões. Além dos cultos regulares, promovemos treinamentos e projetos de evangelismo. Seja bem-vindo!", address: "Travessa da Paz, 300, Bairro Leste", meetingTimes: "Sábados às 17h, Terças às 19h", leader: "Carlos e Sofia Pereira" },
  oeste: { id: '4', slug: 'oeste', name: "Comunidade Oeste", imageUrl: "https://placehold.co/800x400.png?text=Oeste+Detalhes", description: "Envolva-se na Zona Oeste.", fullDescription: "Com um ambiente familiar e focado no discipulado, a Comunidade Oeste é um lugar para crescer no conhecimento da Palavra e no serviço ao próximo. Participe de nossos pequenos grupos!", address: "Alameda da Graça, 400, Bairro Oeste", meetingTimes: "Domingos às 09h, Sextas às 19h30", leader: "André e Laura Mendes" },
};

export async function generateStaticParams() {
  return Object.keys(communitiesData).map((slug) => ({
    slug,
  }));
}

export default function CommunityDetailPage({ params }: { params: { slug: string } }) {
  const community = communitiesData[params.slug];

  if (!community) {
    return (
      <SectionWrapper title="Erro">
        <div className="text-center">Comunidade não encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={community.name}>
      <Card className="overflow-hidden shadow-xl">
        <Image 
          src={community.imageUrl} 
          alt={community.name} 
          width={1200} 
          height={500} 
          className="w-full h-64 md:h-96 object-cover" 
          data-ai-hint="community event people"
          priority
        />
        <CardHeader className="pt-6">
          <CardTitle className="text-3xl md:text-4xl text-primary">{community.name}</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">{community.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-lg">
          <p>{community.fullDescription}</p>
          
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Endereço</h3>
                <p className="text-muted-foreground">{community.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CalendarDays className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Horários</h3>
                <p className="text-muted-foreground">{community.meetingTimes}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Liderança</h3>
                <p className="text-muted-foreground">{community.leader}</p>
              </div>
            </div>
          </div>

          {/* Placeholder for more details like map, contact, specific events */}
          <div className="mt-8 p-6 bg-card-foreground/5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Participe Conosco!</h3>
            <p className="text-muted-foreground">
              Estamos ansiosos para recebê-lo em nossa comunidade. Para mais informações sobre como participar, entre em contato ou apareça em um de nossos encontros.
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
