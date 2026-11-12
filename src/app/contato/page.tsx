import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { contactData } from '@/data/contact';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/searadedeus/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/c/SearadeDeus', icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/mcsearadedeus/?locale=pt_BR', icon: Facebook },
];

export default function ContatoPage() {
  const phoneLink = `tel:${contactData.phone.replace(/\D/g, '')}`;
  return (
    <main className='min-h-screen bg-secondary text-foreground'>
      <div className='mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:grid lg:grid-rows-[auto_auto_auto] lg:gap-y-8 lg:px-12 lg:py-12'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary'><ArrowLeft className='h-4 w-4' /> Página inicial</Link>
        <section className='mt-10 grid gap-10 lg:mt-0 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20'>
          <div><h1 className='text-balance text-5xl font-black leading-[.94] tracking-[-.04em] lg:text-6xl'>Estamos perto de você.</h1><p className='mt-6 max-w-md text-lg leading-8 text-muted-foreground'>Dúvidas, pedidos de oração ou vontade de fazer parte: escolha o canal que for melhor para você.</p><div className='mt-7 flex flex-wrap gap-3'>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target='_blank' rel='noreferrer' className='inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold transition-colors hover:border-primary hover:text-primary'><Icon className='h-4 w-4' aria-hidden='true' /> {label}</a>)}</div></div>
          <div className='divide-y divide-border border-y border-border'>
            <a href={phoneLink} className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-primary'><Phone className='h-5 w-5 text-primary' /><div><p className='font-bold'>Telefone / WhatsApp</p><p className='mt-1 text-muted-foreground'>{contactData.phone}</p></div><ArrowUpRight className='h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
            <a href={`mailto:${contactData.email}`} className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-primary'><Mail className='h-5 w-5 text-primary' /><div><p className='font-bold'>E-mail</p><p className='mt-1 text-muted-foreground'>{contactData.email}</p></div><ArrowUpRight className='h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
            <a href={contactData.mapLink} target='_blank' rel='noreferrer' className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-primary'><MapPin className='h-5 w-5 text-primary' /><div><p className='font-bold'>Visite a sede</p><p className='mt-1 text-sm leading-6 text-muted-foreground'>{contactData.address}</p></div><ArrowUpRight className='h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
          </div>
        </section>
        <section className='mt-10 overflow-hidden rounded-xl border border-border lg:mt-0'><iframe title='Mapa Igreja Seara de Deus' src='https://www.google.com/maps?q=Av.+Mato+Grosso,+694,+Uberl%C3%A2ndia+-+MG&output=embed' width='100%' height='260' className='block border-0 grayscale lg:h-[220px]' loading='lazy' referrerPolicy='no-referrer-when-downgrade' /></section>
      </div>
    </main>
  );
}
