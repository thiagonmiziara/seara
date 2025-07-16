import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IDevotional } from "@/types";

interface DevotionalCardProps {
  devotional: IDevotional;
  onReadMore: (devotional: IDevotional) => void;
}

export default function DevotionalCard({
  devotional,
  onReadMore,
}: DevotionalCardProps) {
  return (
    <Card className='p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div>
        <CardTitle className='text-2xl font-bold mb-2 text-foreground'>
          {devotional.title}
        </CardTitle>
        <CardDescription className='text-muted-foreground mb-4 line-clamp-3'>
          {devotional.preview}
        </CardDescription>
        <p className='text-gray-500 text-sm mb-4'>{devotional.date}</p>
      </div>
      <Button
        onClick={() => onReadMore(devotional)}
        variant='default'
        className='bg-primary hover:bg-primary/90 text-primary-foreground w-full'
      >
        Ler Devocional <ArrowRight className='ml-2 h-4 w-4' />
      </Button>
    </Card>
  );
}
