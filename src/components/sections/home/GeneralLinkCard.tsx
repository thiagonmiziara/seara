import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
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

export default function GeneralLinkCard({ slug, title, description, icon: Icon, linkText = "Saber Mais" }: GeneralLinkCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center mb-3">
          <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
            <Icon size={24} />
          </div>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={slug}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
