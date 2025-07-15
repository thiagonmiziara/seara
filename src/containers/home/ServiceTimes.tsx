import type { ServiceTime } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, Users, Cross } from 'lucide-react'; // Using Cross as a generic religious symbol
import SectionWrapper from '@/components/shared/SectionWrapper';

// Default icons if not provided
const defaultIcons = {
  "Quinta-feira": CalendarClock,
  "Domingo": Cross,
  "Quarta-feira": Users,
};

const mockServiceTimes: ServiceTime[] = [
  { id: '1', day: 'Quinta-feira', time: '19:30', icon: defaultIcons["Quinta-feira"] },
  { id: '2', day: 'Domingo', time: '10:00', icon: defaultIcons["Domingo"] },
  { id: '3', day: 'Quarta-feira', time: '15:00', icon: defaultIcons["Quarta-feira"] },
];

export default function ServiceTimes() {
  return (
    <SectionWrapper title="Horários dos Cultos" subtitle="Junte-se a nós para momentos de adoração e edificação.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockServiceTimes.map((item) => {
          const IconComponent = item.icon || CalendarClock;
          return (
            <Card key={item.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <IconComponent size={32} />
                </div>
                <CardTitle className="text-2xl text-foreground">{item.day}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-accent">{item.time}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
