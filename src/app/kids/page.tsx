import SectionWrapper from '@/components/shared/SectionWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Smile, BookHeart, Palette, Users, ShieldCheck } from 'lucide-react'; // Palette for arts/crafts

export default function KidsPage() {
  const kidsData = {
    name: 'Seara Kids',
    logoUrl: 'https://placehold.co/200x200.png?text=Seara+Kids',
    bannerUrl: 'https://placehold.co/1200x500.png?text=Crianças+Felizes',
    description: 'O Seara Kids é o ministério infantil da Igreja Seara de Deus, dedicado a ensinar a Palavra de Deus às crianças de forma criativa, divertida e relevante para cada faixa etária. Nosso objetivo é que cada criança conheça Jesus e cresça em amor por Ele.',
    vision: 'Ver crianças apaixonadas por Jesus, firmes na Palavra e prontas para impactar sua geração.',
    ageGroups: [
      { name: 'Berçário (0-2 anos)', description: 'Cuidado e introdução ao amor de Deus em um ambiente seguro.', icon: ShieldCheck },
      { name: 'Maternal (3-5 anos)', description: 'Histórias bíblicas, músicas e atividades lúdicas.', icon: BookHeart },
      { name: 'Juniores (6-8 anos)', description: 'Aprendizado interativo da Bíblia e princípios cristãos.', icon: Palette },
      { name: 'Pré-adolescentes (9-11 anos)', description: 'Discipulado e preparação para os desafios da adolescência.', icon: Users },
    ],
    contact: {
      leader: 'Líder Tia Ana',
      email: 'kids@searadedeus.com.br',
    }
  };

  return (
    <SectionWrapper title={kidsData.name} subtitle="Ensinando o caminho em que devem andar desde pequenos.">
      <Card className="overflow-hidden shadow-xl">
        <Image
          src={kidsData.bannerUrl}
          alt={`Banner ${kidsData.name}`}
          width={1200}
          height={500}
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint="children playing learning church"
          priority
        />
        <CardHeader className="pt-6 text-center">
          <Image
            src={kidsData.logoUrl}
            alt={`Logo ${kidsData.name}`}
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
            data-ai-hint="logo kids ministry"
          />
          <CardTitle className="text-3xl md:text-4xl text-primary">{kidsData.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 px-4 md:px-8 py-8">
          <p className="text-xl text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {kidsData.description}
          </p>

          <div className="p-6 bg-card-foreground/5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">Nossa Visão</h3>
            <p className="text-lg text-center text-muted-foreground">
              {kidsData.vision}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Nossas Turmas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {kidsData.ageGroups.map(group => {
                const Icon = group.icon;
                return (
                  <div key={group.name} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow">
                    <Icon className="h-8 w-8 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{group.name}</h4>
                      <p className="text-muted-foreground text-sm">{group.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center mt-10 p-6 border-t border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Traga Seus Filhos!</h3>
            <p className="text-muted-foreground mb-2">Líder Responsável: {kidsData.contact.leader}</p>
            <p className="text-muted-foreground mb-4">Para mais informações: {kidsData.contact.email}</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contato"> 
                Fale Conosco
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
