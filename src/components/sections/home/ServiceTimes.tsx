import type { ServiceTime } from '@/types';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, HeartPulse, CalendarClock } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

// Default icons if not provided
const defaultIcons = {
  'Culto da Palavra': BookOpen,
  'Culto da Família': Users,
  'Casa de Cura Betesda': HeartPulse,
};

const mockServiceTimes: (ServiceTime & { name: string })[] = [
  {
    id: '1',
    day: 'Quinta-feira',
    time: '19:30',
    name: 'Culto da Palavra',
    icon: defaultIcons['Culto da Palavra'],
  },
  {
    id: '2',
    day: 'Domingo',
    time: '10:00',
    name: 'Culto da Família',
    icon: defaultIcons['Culto da Família'],
  },
  {
    id: '3',
    day: 'Quarta-feira',
    time: '15:00',
    name: 'Casa de Cura Betesda',
    icon: defaultIcons['Casa de Cura Betesda'],
  },
];

export default function ServiceTimes() {
  return (
    <SectionWrapper
      title='Horários dos Cultos'
      subtitle='Junte-se a nós para momentos de adoração e edificação.'
    >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {mockServiceTimes.map((item) => {
          const IconComponent = item.icon || CalendarClock;
          return (
            <Card
              key={item.id}
              className='group relative flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden p-8'
            >
              <div className='absolute -right-2 -top-2 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 opacity-5'>
                <IconComponent size={120} className='text-primary' />
              </div>

              <div className='relative z-10 flex flex-col h-full'>
                <div className='mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary/20'>
                  <IconComponent size={32} />
                </div>

                <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit'>
                  <span className='text-[10px] font-bold uppercase tracking-widest text-primary/80'>
                    Culto
                  </span>
                </div>

                <CardTitle className='text-2xl font-black mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
                  {item.name}
                </CardTitle>

                <CardContent className='p-0 flex-grow'>
                  <p className='text-muted-foreground leading-relaxed text-lg'>
                    {item.day} •{' '}
                    <span className='font-black text-primary'>{item.time}</span>
                  </p>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
