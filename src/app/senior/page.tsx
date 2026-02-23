import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { JoinSection } from '@/components/sections/JoinSection';
import {
  Heart,
  Users,
  BookOpen,
  Gift,
  Coffee,
  Music,
  Mail,
  Instagram,
} from 'lucide-react';

export const revalidate = 60;

export default function SeniorPage() {
  const activities = [
    {
      icon: Coffee,
      title: 'Café da Manhã Social',
      description: 'Comunhão, conversa e amizade',
      schedule: 'Quintas-feiras às 09:00',
      highlight: true,
    },
    {
      icon: BookOpen,
      title: 'Estudo Bíblico',
      description: 'Aprofundamento na Palavra de Deus',
      schedule: 'Terças-feiras às 14:00',
      highlight: false,
    },
    {
      icon: Music,
      title: 'Coral de Seniores',
      description: 'Adoração através da música',
      schedule: 'Quartas-feiras às 15:00',
      highlight: false,
    },
    {
      icon: Gift,
      title: 'Ministério de Bênção',
      description: 'Visitação e cuidado aos necessitados',
      schedule: 'Sábados',
      highlight: true,
    },
  ];

  const missionValues = [
    {
      icon: Heart,
      title: 'Sabedoria',
      description:
        'Compartilhar a experiência de vida e o conhecimento acumulado com as gerações mais jovens.',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description:
        'Criar um ambiente acolhedor onde seniores se sentem valorizados e apreciados.',
    },
    {
      icon: BookOpen,
      title: 'Propósito',
      description:
        'Continuar vivendo uma vida frutífera, relevante e dedicada ao Reino de Deus.',
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className='w-10 h-10 text-primary mb-4' />,
      title: 'Instagram',
      description: 'Siga-nos no Instagram',
      href: 'https://www.instagram.com/seniorsearadeus',
    },
    {
      icon: <Mail className='w-10 h-10 text-primary mb-4' />,
      title: 'Email',
      description: 'senior@searadeus.com',
      href: 'mailto:senior@searadeus.com',
    },
  ];

  const locationIcon = (
    <div className='p-3 bg-primary/10 rounded-xl'>
      <Users className='w-6 h-6 text-primary' />
    </div>
  );

  return (
    <main className='min-h-screen bg-background'>
      <HeroSection
        backgroundLetters={['S', 'R']}
        title={
          <span>
            <span className='text-primary'>SENIOR</span>
          </span>
        }
        description={
          <span>
            Celebrando a vida, a fé e o{' '}
            <span className='text-primary font-semibold'>propósito divino</span>
          </span>
        }
      />

      <MissionSection
        subtitle='Nossa Missão Senior'
        title={
          <span>
            Honrando vidas <span className='text-primary'>abençoadas</span> pelo
            Senhor
          </span>
        }
        description='O Ministério de Seniores da Seara de Deus celebra e honra aqueles que viveram muitos anos sob a graça de Deus. Nossa missão é criar um espaço onde seniores sejam valorizados como tesouro vivo da comunidade, continuem experimentando propósito, participem ativamente na vida da Igreja e compartilhem sua sabedoria com as gerações seguintes. Acreditamos que os anos de experiência espiritual são uma bênção para toda a comunidade.'
        values={missionValues}
      />

      <ActivitiesSection
        subtitle='Nossas Atividades'
        title="Programas & <span className='text-primary'>Encontros</span>"
        description='Atividades especialmente pensadas para seniores, promovendo saúde, comunhão e crescimento espiritual.'
        activities={activities}
      />

      <JoinSection
        subtitle='Junte-se a Nós'
        title={
          <span>
            Você é <span className='text-primary'>Bem-vindo!</span>
          </span>
        }
        description='Venha fazer parte de uma comunidade que celebra a vida, compartilha sabedoria e vive o evangelho em plenitude. Aqui você encontrará amigos, propósito e uma família que o acolhe.'
        infoItems={[
          {
            icon: <Users className='w-5 h-5 text-primary' />,
            label: 'Líder: Pastora Maria',
          },
          {
            icon: <Mail className='w-5 h-5 text-primary' />,
            label: 'senior@searadeus.com',
          },
        ]}
        socialLinks={socialLinks}
        location={{
          icon: locationIcon,
          title: 'Igreja Seara de Deus - Sede',
          address:
            'Av. Mato Grosso, 694 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-724',
          mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.859182694944!2d-48.2742206!3d-18.9047337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445fb95e87dbd%3A0xf82a1239ff0bffa8!2sIgreja%20Seara%20de%20Deus%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1717780782999!5m2!1spt-BR!2sbr',
        }}
      />
    </main>
  );
}
