import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function LocationMap() {
  return (
    <SectionWrapper
      title='Nossa Localização'
      subtitle='Venha nos visitar! Estamos de braços abertos para recebê-lo.'
    >
      <Card className='overflow-hidden shadow-xl'>
        <CardHeader>
          <div className='flex items-center'>
            <MapPin className='mr-3 h-8 w-8 text-primary' />
            <CardTitle className='text-2xl text-foreground'>
              Igreja Seara de Deus - Sede, Av. Mato Grosso, 694 - Nossa Sra.
              Aparecida, Uberlândia - MG, 38400-724
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className='p-0'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.859182694944!2d-48.2742206!3d-18.9047337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445fb95e87dbd%3A0xf82a1239ff0bffa8!2sIgreja%20Seara%20de%20Deus%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1717780782999!5m2!1spt-BR!2sbr'
            height='400'
            width={"100%"}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
