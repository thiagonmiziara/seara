import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  BookOpen,
  CalendarDays,
  Podcast,
  Rss,
  Globe,
  ShoppingCart,
  HelpingHand,
  Smile,
  Briefcase,
  BookHeart,
  Newspaper,
} from "lucide-react";
import Logo from "../Logo"; // Assuming you have a Logo component that renders the SVG
export default function Header() {
  // Basic navigation items, can be expanded with dropdowns or a mobile menu
  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/comunidades", label: "Comunidades", icon: Users },
    { href: "/escolas", label: "Escolas", icon: BookOpen },
    { href: "/cultos", label: "Cultos", icon: CalendarDays },
    { href: "/devocional", label: "Devocional", icon: BookHeart },
    { href: "/noticias", label: "Seara News", icon: Newspaper },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-gray-700/90 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='mr-6 flex items-center space-x-2 text-[#1E3A8A]'
        >
          <Logo />
        </Link>
        <nav className='hidden md:flex items-center space-x-2 lg:space-x-4'>
          {navItems.map((item) => (
            <Button key={item.label} variant='ghost' asChild>
              <Link href={item.href} className='flex items-center space-x-1'>
                <item.icon className='h-4 w-4' />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        {/* Placeholder for mobile menu trigger */}
        <div className='md:hidden'>
          {/* <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button> */}
        </div>
      </div>
    </header>
  );
}
