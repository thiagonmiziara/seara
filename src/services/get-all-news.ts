import { contentfulClient } from "@/lib/contentful";
import { INewsItem } from "@/types";

export async function getAllNews(): Promise<INewsItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "noticias",
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : "",
    date: item.fields.date,
    slug: item.fields.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}
