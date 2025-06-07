import SectionWrapper from '@/components/shared/SectionWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HelpingHand, CalendarPlus, Brain, Phone } from 'lucide-react';

export default function PsicologaPage() {
  const psicologaData = {
    name: 'Dra. Ana Sofia Mendes',
    title: 'Psicóloga Clínica (CRP 00/0000)',
    imageUrl: 'https://placehold.co/400x400.png?text=Dra.+Ana',
    bio: 'Dra. Ana Sofia é psicóloga clínica com especialização em Terapia Cognitivo-Comportamental (TCC) e Aconselhamento Pastoral. Com vasta experiência no atendimento de adolescentes, adultos e casais, ela busca oferecer um espaço de escuta acolhedora e intervenções baseadas em evidências para promover saúde mental, bem-estar emocional e crescimento pessoal à luz dos princípios cristãos.',
    services: [
      'Psicoterapia Individual (Adolescentes e Adultos)',
      'Terapia de Casal e Familiar',
      'Aconselhamento Pastoral Integrado',
      'Palestras e Workshops sobre Saúde Emocional',
    ],
    contactInfo: {
      phone: '(XX) XXXXX-XXXX',
      email: 'psicologa.ana@searadedeus.com.br',
      address: 'Consultório Anexo à Igreja Seara de Deus (Atendimento com hora marcada)',
    },
    appointmentLink: '#' // Placeholder for scheduling link
  };

  return (
    <SectionWrapper title="Apoio Psicológico" subtitle={`Conheça ${psicologaData.name}, nossa psicóloga.`}>
      <Card className="overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex flex-col items-center justify-center bg-card-foreground/5">
            <Image
              src={psicologaData.imageUrl}
              alt={psicologaData.name}
              width={300}
              height={300}
              className="rounded-full border-4 border-primary shadow-lg mb-4"
              data-ai-hint="psychologist professional woman"
            />
            <h2 className="text-2xl font-bold text-primary text-center">{psicologaData.name}</h2>
            <p className="text-muted-foreground text-center">{psicologaData.title}</p>
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-3xl text-foreground flex items-center">
                <Brain className="h-8 w-8 text-accent mr-3" /> Sobre a Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{psicologaData.bio}</p>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Serviços Oferecidos:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {psicologaData.services.map(service => <li key={service}>{service}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Informações de Contato:</h3>
                <p className="text-muted-foreground"><strong>Telefone:</strong> {psicologaData.contactInfo.phone}</p>
                <p className="text-muted-foreground"><strong>Email:</strong> {psicologaData.contactInfo.email}</p>
                <p className="text-muted-foreground"><strong>Local:</strong> {psicologaData.contactInfo.address}</p>
              </div>

              <div className="pt-4 text-center md:text-left">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={psicologaData.appointmentLink}>
                    <CalendarPlus className="mr-2 h-5 w-5" /> Agendar uma Consulta
                  </Link>
                </Button>
              </div>
               <p className="text-sm text-muted-foreground mt-4 italic">
                "Cuidar da saúde mental é tão importante quanto cuidar da saúde física e espiritual. Busque ajuda profissional quando necessário."
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
