import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface GeneralLinkCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  linkText?: string;
}

export default function GeneralLinkCard({
  slug,
  title,
  description,
  icon: Icon,
  linkText = 'Saber Mais',
}: GeneralLinkCardProps) {
  return (
    <Card className='group relative flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden p-8'>
      {/* Decorative Icon Background */}
      <div className='absolute -right-2 -top-2 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 opacity-5'>
        <Icon size={120} className='text-primary' />
      </div>

      <div className='relative z-10 flex flex-col h-full'>
        <div className='mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary/20'>
          <Icon size={32} />
        </div>

        <CardTitle className='text-2xl font-black mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
          {title}
        </CardTitle>

        <CardContent className='p-0 flex-grow mb-8'>
          <p className='text-muted-foreground leading-relaxed text-lg'>
            {description}
          </p>
        </CardContent>

        <Button
          asChild
          className='w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-12 rounded-xl group/btn font-bold mt-auto'
        >
          <Link href={slug}>
            {linkText}
            <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
