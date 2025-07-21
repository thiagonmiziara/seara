import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { getYoungDetails } from "@/services/contentfulHttp";

export default async function JovemPage() {
  const youngData = await getYoungDetails();

  if (!youngData) {
    return null;
  }

  return (
    <SectionWrapper
      title={youngData.name}
      subtitle='Conectando, Equipando e Enviando a Nova Geração.'
    >
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={youngData.imageUrl}
          alt={`Banner ${youngData.name}`}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='youth group teenagers fun'
          priority
        />
        <CardHeader className='pt-6 text-center'>
          <Image
            src={youngData.imageUrl}
            alt={`Logo ${youngData.name}`}
            width={120}
            height={120}
            className='w-[120px] h-[120px] rounded-full object-cover border-2 border-primary mx-auto mb-4'
            data-ai-hint='logo ministry symbol'
          />
          <CardTitle className='text-3xl md:text-4xl text-primary'>
            {youngData.name}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-8 px-4 md:px-8 py-8'>
          <p className='text-xl text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto'>
            {youngData.description}
          </p>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-4 text-foreground text-center'>
              Nossa Missão
            </h3>
            <p className='text-lg text-center text-muted-foreground'>
              {youngData.mission}
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6 text-foreground text-center'>
              O Que Fazemos?
            </h3>
            <div className='grid md:grid-cols-2 gap-6'>
              {youngData.activities.map((activity) => {
                return (
                  <div
                    key={activity.name}
                    className='flex items-start space-x-4 p-4 bg-card rounded-lg shadow'
                  >
                    <CalendarDays className='h-8 w-8 text-accent mt-1 shrink-0' />
                    <div>
                      <h4 className='font-semibold text-lg text-foreground'>
                        {activity.name}
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        {activity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='text-center mt-10 p-6 border-t border-border'>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Junte-se a Nós!
            </h3>
            <p className='text-muted-foreground mb-2'>
              Líder: {youngData.leader}
            </p>
            <p className='text-muted-foreground mb-4'>
              Email: {youngData.contact}
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
