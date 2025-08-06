import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getContact } from "@/services/get-contact";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Info,
} from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function ContatoPage() {
  const contactInfo = await getContact();

  if (!contactInfo) {
    return null;
  }

  return (
    <SectionWrapper
      title='Entre em Contato'
      subtitle='Estamos aqui para ouvir você. Envie sua mensagem, dúvida ou pedido de oração.'
    >
      {/* Contact Information Column */}
      <Card className='shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-primary flex items-center'>
            <Info className='h-6 w-6 mr-2' /> Nossas Informações
          </CardTitle>
          <CardDescription>
            Encontre-nos ou fale conosco através dos canais abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4 text-muted-foreground'>
          <div className='flex items-start'>
            <MapPin className='h-5 w-5 mr-3 mt-1 text-accent shrink-0' />
            <div>
              <strong>Endereço:</strong>
              <br />
              <Link
                href={contactInfo.mapLink}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors'
              >
                {contactInfo.address}
              </Link>
            </div>
          </div>
          <div className='flex items-center'>
            <Phone className='h-5 w-5 mr-3 text-accent shrink-0' />
            <div>
              <strong>Telefone/WhatsApp:</strong>
              <br />
              {contactInfo.phone}
            </div>
          </div>
          <div className='flex items-center'>
            <Mail className='h-5 w-5 mr-3 text-accent shrink-0' />
            <div>
              <strong>Email:</strong>
              <br />
              <Link
                href={`mailto:${contactInfo.email}`}
                className='hover:text-primary transition-colors'
              >
                {contactInfo.email}
              </Link>
            </div>
          </div>
          <div className='pt-4'>
            <h3 className='text-lg font-semibold text-foreground mb-2'>
              Siga-nos:
            </h3>
            <div className='flex space-x-4'>
              <Link
                href='https://www.facebook.com/mcsearadedeus/?locale=pt_BR'
                aria-label='Facebook'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <Facebook size={20} />
              </Link>
              <Link
                href='https://www.instagram.com/searadedeus/?igsh=MWlsZ29heDYxYXBqaQ%3D%3D#'
                aria-label='Instagram'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <Instagram size={20} />
              </Link>
              <Link
                href='https://www.youtube.com/c/SearadeDeus'
                aria-label='YouTube'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
