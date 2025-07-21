import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getPsychologicalSupport } from "@/services/get-psychological-support";

export default async function PsicologaPage() {
  const psychologicalSupportData = await getPsychologicalSupport();

  if (!psychologicalSupportData) {
    return null;
  }

  return (
    <SectionWrapper
      title='Apoio Psicológico'
      subtitle={`Conheça ${psychologicalSupportData.name}, nossa psicóloga.`}
    >
      <Card className='overflow-hidden shadow-xl'>
        <div className='md:flex'>
          <div className='md:w-1/3 p-6 flex flex-col items-center justify-center bg-card-foreground/5'>
            <div className='w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4'>
              <Image
                src={psychologicalSupportData.imageUrl}
                alt={psychologicalSupportData.name}
                width={300}
                height={300}
                className='object-cover w-full h-full'
                data-ai-hint='psychologist professional woman'
              />
            </div>

            <h2 className='text-2xl font-bold text-primary text-center'>
              {psychologicalSupportData.name}
            </h2>
            <p className='text-muted-foreground text-center'>
              {psychologicalSupportData.title}
            </p>
          </div>
          <div className='md:w-2/3 p-6 md:p-8'>
            <CardHeader className='px-0 pb-4'>
              <CardTitle className='text-3xl text-foreground flex items-center'>
                <Brain className='h-8 w-8 text-accent mr-3' /> Sobre a
                Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className='px-0 space-y-6'>
              <div className='text-lg text-muted-foreground leading-relaxed'>
                <RichTextRenderer document={psychologicalSupportData.bio} />
              </div>

              <div>
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  Serviços Oferecidos:
                </h3>
                <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
                  {psychologicalSupportData.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  Informações de Contato:
                </h3>
                <p className='text-muted-foreground'>
                  <strong>Telefone:</strong> {psychologicalSupportData.phone}
                </p>
                <p className='text-muted-foreground'>
                  <strong>Email:</strong> {psychologicalSupportData.email}
                </p>
                <p className='text-muted-foreground'>
                  <strong>Local:</strong> {psychologicalSupportData.address}
                </p>
              </div>

              <p className='text-sm text-muted-foreground mt-4 italic'>
                {psychologicalSupportData.description}
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
