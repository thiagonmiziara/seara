"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Info } from "lucide-react";
import Link from "next/link";

export default function ContatoPage() {
  const contactInfo = {
    address: "Rua Exemplo, 123 - Bairro Modelo, Cidade - UF, CEP 00000-000",
    phone: "(XX) XXXX-XXXX / (XX) 9XXXX-XXXX (WhatsApp)",
    email: "contato@searadedeus.com.br",
    mapLink: "https://maps.google.com/?q=Igreja+Seara+de+Deus", // Example link
    socialMedia: [
      { name: "Facebook", url: "#", icon: Facebook },
      { name: "Instagram", url: "#", icon: Instagram },
      { name: "YouTube", url: "#", icon: Youtube },
    ],
  };

  // TODO: Convert to a client component with react-hook-form for actual submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Mensagem enviada (simulação)!");
  };

  return (
    <SectionWrapper
      title='Entre em Contato'
      subtitle='Estamos aqui para ouvir você. Envie sua mensagem, dúvida ou pedido de oração.'
    >
      <div className='grid md:grid-cols-2 gap-10'>
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
                {contactInfo.socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.name}
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      <Icon size={24} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Column */}
        <Card className='shadow-xl'>
          <CardHeader>
            <CardTitle className='text-2xl text-primary flex items-center'>
              <Send className='h-6 w-6 mr-2' /> Envie uma Mensagem
            </CardTitle>
            <CardDescription>
              Preencha o formulário e retornaremos o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <Label htmlFor='name' className='text-foreground'>
                  Nome Completo
                </Label>
                <Input
                  id='name'
                  type='text'
                  placeholder='Seu nome'
                  required
                  className='bg-background mt-1'
                />
              </div>
              <div>
                <Label htmlFor='email' className='text-foreground'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='seu@email.com'
                  required
                  className='bg-background mt-1'
                />
              </div>
              <div>
                <Label htmlFor='subject' className='text-foreground'>
                  Assunto
                </Label>
                <Input
                  id='subject'
                  type='text'
                  placeholder='Assunto da mensagem'
                  required
                  className='bg-background mt-1'
                />
              </div>
              <div>
                <Label htmlFor='message' className='text-foreground'>
                  Mensagem
                </Label>
                <Textarea
                  id='message'
                  placeholder='Digite sua mensagem aqui...'
                  rows={5}
                  required
                  className='bg-background mt-1'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'
              >
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}

// Placeholder icons for social media, replace with actual ones if available or keep using lucide
const Facebook = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
  </svg>
);
const Instagram = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
  </svg>
);
const Youtube = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
    <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
  </svg>
);
