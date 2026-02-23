import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { JoinSection } from '@/components/sections/JoinSection';
import { Users, Mail, Instagram } from 'lucide-react';

export default async function Solteiros25Page() {
  const socialLinks = [
    {
      icon: <Instagram className='w-10 h-10 text-primary mb-4' />,
      title: 'Instagram',
      description: 'Siga nosso grupo no Instagram',
      href: `https://www.instagram.com/searadeus/`,
    },
    {
      icon: <Mail className='w-10 h-10 text-primary mb-4' />,
      title: 'Email',
      description: 'Entre em contato conosco por email',
      href: `mailto:contato@searadeus.com`,
    },
  ];

  const locationIcon = (
    <div className='p-3 bg-primary/10 rounded-xl'>
      <Users className='w-6 h-6 text-primary' />
    </div>
  );

  const missionValues = [
    {
      icon: Users,
      title: 'Comunhão',
      description:
        'Encontros e grupos pequenos para relacionamento e suporte mútuo.',
    },
    {
      icon: Users,
      title: 'Crescimento',
      description:
        'Estudos bíblicos focados em maturidade emocional e espiritual.',
    },
    {
      icon: Users,
      title: 'Eventos',
      description:
        'Atividades sociais e eventos para integração e formação de amizades saudáveis.',
    },
  ];

  const activities = [
    {
      icon: Users,
      title: 'Encontros Semanais',
      description: 'Reuniões com estudo bíblico e momentos de comunhão.',
      schedule: 'Semanal',
      highlight: true,
    },
    {
      icon: Users,
      title: 'Eventos Sociais',
      description: 'Atividades para integrar e conhecer novas pessoas.',
      schedule: 'Mensal',
      highlight: false,
    },
  ];

  return (
    <main className='min-h-screen bg-background'>
      <HeroSection
        backgroundLetters={['S', '+']}
        title={
          <span>
            Solteiros <span className='text-primary'>+25</span>
          </span>
        }
        description={
          <span>
            Um lugar para solteiros com mais de{' '}
            <span className='text-primary font-semibold'>25 anos</span>{' '}
            crescerem na fé e na comunhão.
          </span>
        }
      />

      <MissionSection
        subtitle='Nosso Ministério'
        title={
          <span>
            Solteiros <span className='text-primary'>+25</span>
          </span>
        }
        description={`Este ministério é dedicado a solteiros com mais de 25 anos. Oferecemos encontros, estudos bíblicos, eventos sociais e suporte espiritual para fortalecer relacionamentos saudáveis e um crescimento maduro na fé.`}
        values={missionValues}
      />

      <ActivitiesSection
        subtitle='Nossas Atividades'
        title="Encontros & <span className='text-primary'>Eventos</span>"
        description='Atividades pensadas para promover comunhão, crescimento e integração entre solteiros maiores de 25 anos.'
        activities={activities}
      />

      <JoinSection
        subtitle='Participe'
        title={
          <span>
            Junte-se ao <span className='text-primary'>Solteiros +25</span>
          </span>
        }
        description={
          'Encontros semanais, grupos de estudo e atividades sociais para integração e fortalecimento na fé.'
        }
        infoItems={[
          {
            icon: <Users className='w-5 h-5 text-primary' />,
            label: `Líder: Equipe de Jovens e Adultos`,
          },
          {
            icon: <Mail className='w-5 h-5 text-primary' />,
            label: 'contato@searadeus.com',
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
