import SectionWrapper from '@/components/shared/SectionWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Zap, Music, MessageCircle, CalendarDays } from 'lucide-react';

export default function JovemPage() {
  const jovemData = {
    name: 'Seara Jovem',
    logoUrl: 'https://placehold.co/200x200.png?text=Seara+Jovem',
    bannerUrl: 'https://placehold.co/1200x500.png?text=Galera+Jovem',
    description: 'O Seara Jovem é o ministério de jovens da Igreja Seara de Deus, um lugar para você se conectar com Deus, fazer amigos e descobrir seu propósito. Nossos encontros são cheios de energia, louvor, palavra relevante e muita comunhão.',
    mission: 'Conectar jovens a Cristo, equipá-los para a vida e enviá-los para transformar o mundo.',
    activities: [
      { name: 'Cultos de Jovens', description: 'Sábados às 19h30, com louvor vibrante e mensagens edificantes.', icon: Zap },
      { name: 'Pequenos Grupos (Células)', description: 'Durante a semana, para estudo da Bíblia e comunhão mais próxima.', icon: MessageCircle },
      { name: 'Eventos Especiais', description: 'Acampamentos, conferências, workshops e atividades sociais.', icon: CalendarDays },
      { name: 'Ministério de Louvor Jovem', description: 'Oportunidade para jovens músicos e cantores servirem a Deus.', icon: Music },
    ],
    contact: {
      leader: 'Líder Fulano de Tal',
      email: 'jovem@searadedeus.com.br',
      socialMedia: '#', // Link para rede social do ministério
    }
  };

  return (
    <SectionWrapper title={jovemData.name} subtitle="Conectando, Equipando e Enviando a Nova Geração.">
      <Card className="overflow-hidden shadow-xl">
        <Image
          src={jovemData.bannerUrl}
          alt={`Banner ${jovemData.name}`}
          width={1200}
          height={500}
          className="w-full h-64 md:h-96 object-cover"
          data-ai-hint="youth group teenagers fun"
          priority
        />
        <CardHeader className="pt-6 text-center">
          <Image
            src={jovemData.logoUrl}
            alt={`Logo ${jovemData.name}`}
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
            data-ai-hint="logo ministry symbol"
          />
          <CardTitle className="text-3xl md:text-4xl text-primary">{jovemData.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 px-4 md:px-8 py-8">
          <p className="text-xl text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {jovemData.description}
          </p>

          <div className="p-6 bg-card-foreground/5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">Nossa Missão</h3>
            <p className="text-lg text-center text-muted-foreground">
              {jovemData.mission}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">O Que Fazemos?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {jovemData.activities.map(activity => {
                const Icon = activity.icon;
                return (
                  <div key={activity.name} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow">
                    <Icon className="h-8 w-8 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{activity.name}</h4>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center mt-10 p-6 border-t border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Junte-se a Nós!</h3>
            <p className="text-muted-foreground mb-2">Líder: {jovemData.contact.leader}</p>
            <p className="text-muted-foreground mb-4">Email: {jovemData.contact.email}</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={jovemData.contact.socialMedia} target="_blank" rel="noopener noreferrer">
                Siga-nos nas Redes Sociais
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
