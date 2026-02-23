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

export async function getAllNews(): Promise<INewsItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: 'noticias',
  });

  return entries.items.map((item: any) => {
    const rawSlug =
      resolveFieldValue(item.fields.slug) ||
      resolveFieldValue(item.fields.title);
    const sanitizedSlug = rawSlug
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/(^-+|-+$)/g, '');

    return {
      id: item.sys.id,
      title: resolveFieldValue(item.fields.title) || '',
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
          ? url.toString()
          : `https:${url}`;
      })(),
      date: item.fields.date,
      slug: sanitizedSlug,
    };
  });
}
