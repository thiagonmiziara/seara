'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Home,
  Users,
  Menu,
  Phone,
  Heart,
  CalendarDays,
} from 'lucide-react';
import Logo from '../Logo'; // Assuming you have a Logo component that renders the SVG
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/#cultos', label: 'Cultos', icon: CalendarDays },
    { href: '/comunidades', label: 'Comunidades', icon: Users },
    { href: '/#ministerios', label: 'Ministérios', icon: Heart },
    { href: '/contato', label: 'Contato', icon: Phone },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-[#121212]/92 backdrop-blur'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='mr-6 flex items-center space-x-2'
        >
          <Logo />
        </Link>
        <nav className='hidden md:flex items-center gap-1 lg:gap-2'>
          {navItems.map((item) => (
            <Button key={item.label} variant='ghost' asChild>
              <Link href={item.href} className='flex items-center space-x-1 text-white/75 hover:text-white'>
                <item.icon className='h-4 w-4' />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        {/* Placeholder for mobile menu trigger */}
        <div className='md:hidden'>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='text-white hover:bg-white/10 hover:text-white'>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <nav className='flex flex-col space-y-4 pt-8'>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='flex items-center space-x-2 text-lg font-medium'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className='h-5 w-5' />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
