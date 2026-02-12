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
    <div className='bg-background min-h-[calc(100vh-4rem)] px-4 py-8 md:py-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-8 md:mb-12'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3'>
            Conheça nossa{' '}
            <span className='text-primary inline-block relative'>
              psicóloga
              <svg
                className='absolute -bottom-2 left-0 w-full text-primary/40'
                viewBox='0 0 200 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 10C50 4 150 4 198 10'
                  stroke='currentColor'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
              </svg>
            </span>
          </h1>
          <p className='text-muted-foreground text-lg mt-4'>
            Apoio psicológico com excelência e acolhimento
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-6 md:gap-8 items-start'>
          {/* Left Column - Image and Name */}
          <div className='w-full lg:w-1/3 flex flex-col items-center'>
            <div className='w-full max-w-[300px] mb-6'>
              <Image
                src={psychologistData.imageUrl}
                alt={psychologistData.name}
                width={300}
                height={400}
                className='rounded-lg shadow-xl w-full h-auto object-cover transition-all duration-300 hover:shadow-2xl'
                data-ai-hint='psychologist professional woman'
              />
            </div>
            <div className='text-center lg:text-left w-full'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-2'>
                {psychologistData.name}
              </h2>
              <p className='text-lg md:text-xl text-primary font-semibold'>
                {psychologistData.title}
              </p>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className='w-full lg:w-2/3 space-y-6'>
            {/* Formação */}
            <div className='bg-card rounded-lg p-5 md:p-6 border border-border shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='flex items-start gap-3 mb-3'>
                <GraduationCap className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                <h3 className='text-xl md:text-2xl font-semibold'>Formação</h3>
              </div>
              <p className='text-muted-foreground leading-relaxed'>
                {psychologistData.bio}
              </p>
            </div>

            {/* Serviços */}
            <div className='bg-card rounded-lg p-5 md:p-6 border border-border shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='flex items-start gap-3 mb-3'>
                <Brain className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                <h3 className='text-xl md:text-2xl font-semibold'>
                  Serviços Oferecidos
                </h3>
              </div>
              <p className='text-muted-foreground leading-relaxed'>
                {psychologistData.services}
              </p>
            </div>

            {/* Contact Info */}
            <div className='bg-card rounded-lg p-5 md:p-6 border border-border shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='flex items-start gap-3 mb-4'>
                <Phone className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                <h3 className='text-xl md:text-2xl font-semibold'>Contato</h3>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-muted-foreground'>
                  <Phone className='h-5 w-5 text-primary flex-shrink-0' />
                  <a
                    href={`tel:${psychologistData.phone}`}
                    className='hover:text-primary transition-colors text-base md:text-lg'
                  >
                    {psychologistData.phone}
                  </a>
                </div>
                <div className='flex items-center gap-3 text-muted-foreground'>
                  <Mail className='h-5 w-5 text-primary flex-shrink-0' />
                  <a
                    href={`mailto:${psychologistData.email}`}
                    className='hover:text-primary transition-colors break-all text-base md:text-lg'
                  >
                    {psychologistData.email}
                  </a>
                </div>
                <div className='flex items-start gap-3 text-muted-foreground'>
                  <MapPin className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span className='text-base md:text-lg'>
                    {psychologistData.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
