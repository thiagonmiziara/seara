import SectionWrapper from '@/components/shared/SectionWrapper';
import GeneralLinkCard from './GeneralLinkCard';
import { HelpingHand, Briefcase, BookHeart } from 'lucide-react';

const features = [
  {
    slug: '/psicologa',
    title: 'Apoio Psicológico',
    description: 'Orientações e agendamento com nossa profissional de psicologia.',
    icon: HelpingHand,
    linkText: 'Conhecer',
  },
  {
    slug: '/prestadores-servico',
    title: 'Mural de Serviços',
    description: 'Encontre prestadores de serviço membros da nossa comunidade.',
    icon: Briefcase,
    linkText: 'Ver Mural',
  },
  {
    slug: '/devocional',
    title: 'Devocional Diário',
    description: 'Inspiração e reflexão para o seu dia a dia com a Palavra de Deus.',
    icon: BookHeart,
    linkText: 'Ler Devocional',
  },
];

export default function AdditionalFeaturesPreview() {
  return (
    <SectionWrapper title="Mais Recursos Para Você" subtitle="Ferramentas e apoio para sua vida e jornada de fé.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <GeneralLinkCard
            key={feature.slug}
            slug={feature.slug}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            linkText={feature.linkText}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
