import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CalendarDays, UserCircle } from 'lucide-react';
import RichTextRenderer from '@/lib/richTextRenderer';
import { formatDate } from '@/lib/utils';
import NewsDetailClient from '../NewsDetailClient';

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  return [];
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return <NewsDetailClient slug={slug} />;
}
