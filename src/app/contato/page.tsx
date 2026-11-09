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
    <main className='bg-[#121212] text-white lg:h-[calc(100svh-10rem)] lg:overflow-hidden'>
      <div className='mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:grid lg:h-full lg:grid-rows-[auto_minmax(0,1fr)_140px] lg:gap-y-5 lg:px-12 lg:py-7'>
        <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-[#1ed760]'><ArrowLeft className='h-4 w-4' /> Página inicial</Link>
        <section className='mt-12 grid gap-10 lg:mt-0 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20'>
          <div><p className='text-xs font-bold tracking-[.14em] text-[#1ed760]'>FALE COM A SEARA</p><h1 className='mt-4 text-5xl font-black leading-[.94] tracking-[-.055em] lg:text-6xl'>Estamos perto de você.</h1><p className='mt-6 max-w-md text-lg leading-8 text-white/70'>Dúvidas, pedidos de oração ou vontade de fazer parte: escolha o canal que for melhor para você.</p><div className='mt-7 flex flex-wrap gap-3'>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold hover:border-[#1ed760] hover:text-[#1ed760]'><Icon className='h-4 w-4' /> {label}</a>)}</div></div>
          <div className='divide-y divide-white/15 border-y border-white/15'>
            <a href={phoneLink} className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-[#1ed760]'><Phone className='h-5 w-5 text-[#1ed760]' /><div><p className='font-bold'>Telefone / WhatsApp</p><p className='mt-1 text-white/65'>{contactData.phone}</p></div><ArrowUpRight className='h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
            <a href={`mailto:${contactData.email}`} className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-[#1ed760]'><Mail className='h-5 w-5 text-[#1ed760]' /><div><p className='font-bold'>E-mail</p><p className='mt-1 text-white/65'>{contactData.email}</p></div><ArrowUpRight className='h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
            <a href={contactData.mapLink} target='_blank' rel='noreferrer' className='group grid grid-cols-[36px_1fr_auto] items-center gap-4 py-5 hover:text-[#1ed760]'><MapPin className='h-5 w-5 text-[#1ed760]' /><div><p className='font-bold'>Visite a sede</p><p className='mt-1 text-sm leading-6 text-white/65'>{contactData.address}</p></div><ArrowUpRight className='h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></a>
          </div>
        </section>
        <section className='mt-12 overflow-hidden rounded-2xl border border-white/10 lg:mt-0'><iframe title='Mapa Igreja Seara de Deus' src='https://www.google.com/maps?q=Av.+Mato+Grosso,+694,+Uberl%C3%A2ndia+-+MG&output=embed' width='100%' height='260' className='block border-0 grayscale lg:h-[140px]' loading='lazy' referrerPolicy='no-referrer-when-downgrade' /></section>
      </div>
    </main>
  );
}
