import { contentfulClient } from '@/lib/contentful';
import { INewsItem } from '@/types';

function resolveFieldValue(field: any): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    const vals = Object.values(field).filter(
      (v) => typeof v === 'string' && v.toString().trim() !== '',
    );
    return vals.length > 0 ? (vals[0] as string) : '';
  }
  return String(field);
}

function resolveImageUrl(imageField: any): string {
  if (!imageField) return '';
  // If it's a localized map, take the first locale value
  const img = imageField.fields
    ? imageField
    : (Object.values(imageField)[0] ?? null);
  const url = img?.fields?.file?.url;
  if (!url) return '';
  return url.toString().startsWith('http') ? url.toString() : `https:${url}`;
}

export async function getNewsItemBySlug(
  slug: string | undefined,
): Promise<INewsItem | null> {
  if (!slug || typeof slug !== 'string') {
    return null;
  }
  const cleanSlug = slug
    .toString()
    .trim()
    .replace(/(^-+|-+$)/g, '');

  const entries = await contentfulClient.getEntries({
    content_type: 'noticias',
    'fields.slug': cleanSlug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  const rawReturnedSlug =
    resolveFieldValue(item.fields.slug) || resolveFieldValue(item.fields.title);
  const returnedSlug = rawReturnedSlug
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/(^-+|-+$)/g, '');

  return {
    id: item.sys.id,
    title: resolveFieldValue(item.fields.title) || '',
    summary: item.fields.summary,
    imageUrl: resolveImageUrl(item.fields.imageUrl ?? item.fields.image),
    date: item.fields.date,
    slug: returnedSlug,
  };
}
