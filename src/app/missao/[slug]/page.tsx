import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { MissionItem } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, HeartHandshake, Users, Target } from "lucide-react";

// Mock data - in a real app, this would come from Strapi
const missionDetailsData: { [slug: string]: MissionItem & { fullDetails: string; objectives: string[]; howToHelp: string[]; qrCodeUrl: string; } } = {
  'guine-bissau': { 
    id: '1', 
    slug: 'guine-bissau', 
    title: "Missão Guiné-Bissau", 
    imageUrl: "https://placehold.co/800x400.png?text=Guine+Bissau+Detalhes", 
    description: "Nosso compromisso com o povo de Guiné-Bissau.",
    fullDetails: "A Seara de Deus tem um compromisso de longa data com o trabalho missionário em Guiné-Bissau. Atuamos em parceria com missionários locais no desenvolvimento de projetos sociais, educacionais e de evangelização. Nosso foco é levar esperança, transformação e o amor de Cristo a comunidades carentes, apoiando a plantação de igrejas e a formação de líderes locais.",
    objectives: ["Apoio a orfanatos e escolas locais.", "Programas de nutrição infantil.", "Treinamento de pastores e líderes comunitários.", "Evangelismo e discipulado."],
    howToHelp: ["Ore por nossos missionários e pelos projetos.", "Contribua financeiramente para sustentar as iniciativas.", "Participe de nossas viagens missionárias de curto prazo."],
    qrCodeUrl: "https://placehold.co/200x200.png?text=Doe+Guine"
  },
  'viagens-missionarias': { 
    id: '2', 
    slug: 'viagens-missionarias', 
    title: "Viagens Missionárias Seara", 
    imageUrl: "https://placehold.co/800x400.png?text=Viagens+Detalhes", 
    description: "Leve o Evangelho além das fronteiras.",
    fullDetails: "Periodicamente, organizamos viagens missionárias para diferentes localidades, tanto no Brasil quanto no exterior. Estas viagens são oportunidades incríveis para servir, aprender e compartilhar o Evangelho de forma prática. Capacitamos e preparamos todos os voluntários para que possam impactar vidas e serem, eles mesmos, transformados pela experiência.",
    objectives: ["Alcançar comunidades não alcançadas com o Evangelho.", "Apoiar igrejas e missionários locais.", "Realizar projetos de ação social e desenvolvimento comunitário.", "Despertar e treinar vocações missionárias."],
    howToHelp: ["Inscreva-se para participar da próxima viagem.", "Apoie financeiramente um missionário ou projeto.", "Divulgue nossas iniciativas e mobilize outros a participar."],
    qrCodeUrl: "https://placehold.co/200x200.png?text=Apoie+Viagens"
  },
};

export async function generateStaticParams() {
  return Object.keys(missionDetailsData).map((slug) => ({
    slug,
  }));
}

export default function MissionDetailPage({ params }: { params: { slug: string } }) {
  const mission = missionDetailsData[params.slug];

  if (!mission) {
     return (
      <SectionWrapper title="Erro">
        <div className="text-center">Página de missão não encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={mission.title}>
      <Card className="overflow-hidden shadow-xl">
         <Image 
          src={mission.imageUrl} 
          alt={mission.title} 
          width={1200} 
          height={500} 
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint="missions world map children"
          priority
        />
        <CardHeader className="pt-6">
          <div className="flex items-center mb-2">
            <Globe className="h-8 w-8 text-primary mr-3" />
            <CardTitle className="text-3xl md:text-4xl text-primary">{mission.title}</CardTitle>
          </div>
          <CardDescription className="text-lg text-muted-foreground">{mission.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 text-lg">
          <p className="leading-relaxed">{mission.fullDetails}</p>
          
          <div className="p-6 bg-card-foreground/5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-foreground flex items-center">
              <Target className="h-6 w-6 text-accent mr-2" /> Nossos Objetivos
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {mission.objectives.map(obj => <li key={obj}>{obj}</li>)}
            </ul>
          </div>

          <div className="p-6 bg-card-foreground/5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-foreground flex items-center">
              <Users className="h-6 w-6 text-accent mr-2" /> Como Você Pode Ajudar
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {mission.howToHelp.map(help => <li key={help}>{help}</li>)}
            </ul>
          </div>
          
          <div className="text-center mt-10 p-6 border-t border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Faça a Diferença!</h3>
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
              <Image 
                src={mission.qrCodeUrl} 
                alt="QR Code para Doação" 
                width={180} 
                height={180} 
                className="rounded-lg shadow-md"
                data-ai-hint="qr code donation"
              />
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground max-w-xs w-full">
                <Link href="/doar"> {/* Placeholder link for a donation page */}
                  <HeartHandshake className="mr-2 h-5 w-5" /> Contribuir Agora
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Sua doação transforma vidas e expande o Reino de Deus.</p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
