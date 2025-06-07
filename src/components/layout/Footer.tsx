import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Seara Connect. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </Link>
          <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
            <Youtube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
