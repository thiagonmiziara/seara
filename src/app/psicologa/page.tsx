import Image from 'next/image';
import { MapPin, Phone, Mail, Brain, GraduationCap } from 'lucide-react';

const psychologistData = {
  name: 'Lorena Fernandes dos Santos',
  title: 'Psicóloga Clínica',
  imageUrl: '/assets/lorena.jpg',
  bio: 'Psicóloga Clínica, graduada em Psicologia, com Pós-Graduação em Terapia Cognitivo-Comportamental e em Gestão de Pessoas. Possui Curso de Formação em Terapia do Esquema, abordagem que amplia a TCC ao aprofundar a compreensão dos padrões emocionais, cognitivos e comportamentais desenvolvidos ao longo da vida.',
  services:
    'Atua na psicoterapia com foco na Terapia Cognitivo-Comportamental (TCC) e na Terapia do Esquema, auxiliando o paciente na identificação de esquemas iniciais desadaptativos, modos de funcionamento emocional e estratégias de enfrentamento que impactam suas emoções, relações e comportamentos. O processo terapêutico visa o fortalecimento do adulto saudável, o desenvolvimento do autoconhecimento e a construção de padrões emocionais mais saudáveis, promovendo mudanças duradouras e maior bem-estar psicológico.',
  phone: '(34) 98841-8150',
  email: 'lorena.fernandes.dos.santos@hotmail.com',
  address: 'Avenida Mato Grosso, 694 – Aparecida',
};

export default function PsicologaPage() {
  return (
    <main className='min-h-screen bg-secondary px-5 py-10 text-foreground sm:px-8 lg:px-12 lg:py-14'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 max-w-3xl'>
          <h1 className='text-balance text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-6xl'>
            Conheça nossa{' '}
            <span className='text-primary'>psicóloga.</span>
          </h1>
          <p className='mt-4 text-lg leading-8 text-muted-foreground'>
            Apoio psicológico com excelência e acolhimento
          </p>
        </div>

        <div className='grid items-start gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-12'>
          <div className='flex flex-col items-start'>
            <div className='mb-6 w-full max-w-[360px] overflow-hidden rounded-xl bg-background'>
              <Image
                src={psychologistData.imageUrl}
                alt={psychologistData.name}
                width={300}
                height={400}
                className='h-auto w-full object-cover'
                data-ai-hint='psychologist professional woman'
              />
            </div>
            <div className='w-full'>
              <h2 className='text-2xl font-black tracking-[-.025em] sm:text-3xl'>
                {psychologistData.name}
              </h2>
              <p className='mt-2 text-lg font-semibold text-primary'>
                {psychologistData.title}
              </p>
            </div>
          </div>

          <div className='divide-y divide-border rounded-xl bg-background px-5 sm:px-8'>
            <section className='py-6'>
              <div className='mb-3 flex items-start gap-3'>
                <GraduationCap className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <h3 className='text-xl font-bold sm:text-2xl'>Formação</h3>
              </div>
              <p className='leading-7 text-muted-foreground'>
                {psychologistData.bio}
              </p>
            </section>

            <section className='py-6'>
              <div className='mb-3 flex items-start gap-3'>
                <Brain className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <h3 className='text-xl font-bold sm:text-2xl'>
                  Serviços Oferecidos
                </h3>
              </div>
              <p className='leading-7 text-muted-foreground'>
                {psychologistData.services}
              </p>
            </section>

            <section className='py-6'>
              <div className='mb-4 flex items-start gap-3'>
                <Phone className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                <h3 className='text-xl font-bold sm:text-2xl'>Contato</h3>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-muted-foreground'>
                  <Phone className='h-4 w-4 shrink-0 text-primary' aria-hidden='true' />
                  <a
                    href={`tel:${psychologistData.phone}`}
                    className='text-base transition-colors hover:text-primary sm:text-lg'
                  >
                    {psychologistData.phone}
                  </a>
                </div>
                <div className='flex items-center gap-3 text-muted-foreground'>
                  <Mail className='h-4 w-4 shrink-0 text-primary' aria-hidden='true' />
                  <a
                    href={`mailto:${psychologistData.email}`}
                    className='break-all text-base transition-colors hover:text-primary sm:text-lg'
                  >
                    {psychologistData.email}
                  </a>
                </div>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <MapPin className='mt-1 h-4 w-4 shrink-0 text-primary' aria-hidden='true' />
                  <span className='text-base sm:text-lg'>
                    {psychologistData.address}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
