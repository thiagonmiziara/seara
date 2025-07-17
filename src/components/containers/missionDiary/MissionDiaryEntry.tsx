import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { IMissionDiaryEntry } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import RichTextRenderer from "@/lib/richTextRenderer";

interface MissionDiaryEntryProps {
  entry: IMissionDiaryEntry;
}

export const MissionDiaryEntryCard: React.FC<MissionDiaryEntryProps> = ({
  entry,
}) => {
  return (
    <Card className='w-full shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[300px] flex flex-col'>
      {entry.imageUrl && (
        <div className='relative h-48 w-full'>
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg'
          />
        </div>
      )}
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl font-bold text-primary text-center truncate'>
          {entry.title}
        </CardTitle>
        <CardDescription className='text-sm text-muted-foreground'>
          {formatDate(entry.date)} - {entry.missionaryName}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-grow flex flex-col justify-between text-center'>
        <div className='text-base text-foreground leading-relaxed line-clamp-3'>
          <RichTextRenderer document={entry.content} />
        </div>
        <Link href={`/missao/diario/${entry.slug}`}>
          <Button variant='link' className='px-0 mt-2'>
            Leia mais
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
