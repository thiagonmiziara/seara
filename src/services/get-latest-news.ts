import { contentfulClient } from '@/lib/contentful';
import { INewsItem } from '@/types';

export async function getLatestNews(): Promise<INewsItem | null> {
  const entries = await contentfulClient.getEntries({
    content_type: 'noticias',
    order: ['-sys.createdAt'], // Order by date descending
    limit: 1, // Get only the latest one
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: (() => {
      const imageField = item.fields.imageUrl ?? item.fields.image;
      if (!imageField) return '';
      const img = imageField.fields
        ? imageField
        : (Object.values(imageField)[0] ?? null);
      const url = img?.fields?.file?.url;
      if (!url) return '';
      return url.toString().startsWith('http')
        ? `${url}?v=${new Date(item.sys.updatedAt).getTime()}`
        : `https:${url}?v=${new Date(item.sys.updatedAt).getTime()}`;
    })(),
    date: item.fields.date,
    slug: item.fields.slug,
  };
}
