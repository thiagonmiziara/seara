import SectionWrapper from '@/components/shared/SectionWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from '@/components/Logo'; // Import the Logo component
import { Church, Eye, Target, Heart, Users, BookHeart } from 'lucide-react';

export default function SobrePage() {
  const aboutData = {
    churchName: "Seara de Deus",
    bannerUrl: "https://placehold.co/1200x500.png?text=Nossa+Igreja",
    history: "Fundada em [Ano], a Igreja Seara de Deus nasceu do desejo de um pequeno grupo de irmãos de criar uma comunidade de fé acolhedora, vibrante e comprometida com o Evangelho de Jesus Cristo. Ao longo dos anos, crescemos em número e em graça, sempre buscando servir a Deus e à nossa cidade com amor e dedicação. Nossa jornada é marcada por testemunhos de transformação, milagres e um profundo desejo de ver o Reino de Deus se expandir.",
    vision: "Ser uma igreja relevante que glorifica a Deus, edifica os santos e proclama o Evangelho transformador de Jesus Cristo a todas as pessoas, manifestando o Seu amor e poder em nossa comunidade e além.",
    mission: "Conectar pessoas com Deus através de um relacionamento pessoal com Jesus Cristo; Discipulá-las no caminho da fé, ensinando-as a obedecer a todos os mandamentos de Cristo; Enviá-las para servir e testemunhar, fazendo discípulos de todas as nações.",
    values: [
      { name: "Palavra de Deus", description: "A Bíblia como nossa única regra de fé e prática.", icon: BookHeart },
      { name: "Adoração", description: "Cultuar a Deus em espírito e em verdade.", icon: Music },
      { name: "Comunhão", description: "Viver em unidade e amor fraternal.", icon: Users },
      { name: "Serviço", description: "Usar nossos dons para edificar a igreja e servir ao próximo.", icon: HeartHandshake },
      { name: "Evangelismo e Missões", description: "Compartilhar as boas novas de salvação local e globalmente.", icon: Globe },
    ],
    leadershipTeam: [
      { name: "Pr. Presidente Fundador", role: "Pastor Presidente", imageUrl: "https://placehold.co/150x150.png?text=Pr.+Pres." },
      { name: "Pra. Vice-Presidente", role: "Pastora Vice-Presidente", imageUrl: "https://placehold.co/150x150.png?text=Pra.+Vice" },
      // Add more leaders as needed
    ]
  };

  return (
    <SectionWrapper title={`Sobre a ${aboutData.churchName}`} subtitle="Conheça nossa história, visão, missão e valores.">
      <Card className="overflow-hidden shadow-xl">
        <Image
          src="/logo-seara.png" // Use the logo image
          alt={`Logo ${aboutData.churchName}`} // Change alt text to reflect the logo
          width={1200}
          height={500}
          className="w-full h-64 md:h-96 object-contain bg-background" // object-contain to fit the logo
          data-ai-hint="church logo" // Update AI hint
          priority
        />
        <CardHeader className="pt-6 text-center">
           <Church className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl md:text-4xl text-primary">{aboutData.churchName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-10 px-4 md:px-8 py-8 text-center"> {/* Added text-center for mobile centering */}
         {/* Separated "Seara" and "de Deus" for coloring */}
         <CardTitle className="text-3xl md:text-4xl">
            <span className="text-white">Seara</span> <span className="text-green-600">de Deus</span>
          </CardTitle>

          
          <SectionBlock title="Nossa História" icon={History}>
            <p className="text-lg text-muted-foreground leading-relaxed">{aboutData.history}</p>
          </SectionBlock>

          <SectionBlock title="Nossa Visão" icon={Eye}>
            <p className="text-lg text-muted-foreground leading-relaxed">{aboutData.vision}</p>
          </SectionBlock>

          <SectionBlock title="Nossa Missão" icon={Target}>
            <p className="text-lg text-muted-foreground leading-relaxed">{aboutData.mission}</p>
          </SectionBlock>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground text-center flex items-center justify-center">
              <Heart className="h-7 w-7 text-accent mr-3" /> Nossos Valores
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.values.map(value => {
                const Icon = value.icon;
                return (
                  <div key={value.name} className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow">
                    <Icon className="h-10 w-10 text-primary mb-3" />
                    <h4 className="font-semibold text-lg text-foreground mb-1">{value.name}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground text-center flex items-center justify-center">
              <Users className="h-7 w-7 text-accent mr-3" /> Nossa Liderança
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {aboutData.leadershipTeam.map(leader => (
                <div key={leader.name} className="flex flex-col items-center text-center">
                  <Image 
                    src={leader.imageUrl} 
                    alt={leader.name} 
                    width={120} 
                    height={120} 
                    className="rounded-full mb-2 shadow-md border-2 border-primary"
                    data-ai-hint="leader pastor person"
                  />
                  <h4 className="font-semibold text-md text-foreground">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 p-6 border-t border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Venha nos Visitar!</h3>
            <p className="text-muted-foreground mb-4">Será um prazer recebê-lo em nossa casa. Consulte nossos horários de culto e participe conosco.</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#service-times"> 
                Ver Horários dos Cultos
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

// Helper component for section blocks
import type { LucideIcon } from 'lucide-react';
import { History, Music, Globe, HeartHandshake, BookHeart as DefaultIcon } from 'lucide-react'; // DefaultIcon added to satisfy type if icon not in map
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SectionBlockProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, icon: Icon, children }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
      <Icon className="h-7 w-7 text-accent mr-3" /> {title}
    </h3>
    {children}
  </div>
);

