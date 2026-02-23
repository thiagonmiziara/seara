import SectionWrapper from '@/components/shared/SectionWrapper';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import RichTextRenderer from '@/lib/richTextRenderer';
import NewsListClient from './NewsListClient';

export const revalidate = 60; // Revalidate at most every 60 seconds

export default function SearaNewsPage() {
  return <NewsListClient />;
}
