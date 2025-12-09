import { contentfulClient } from "@/lib/contentful";
import { INewsItem } from "@/types";

export async function getNewsItemBySlug(
  slug: string | undefined
): Promise<INewsItem | null> {
  if (!slug || typeof slug !== "string") {
    return null;
  }
  const entries = await contentfulClient.getEntries({
    content_type: "noticias",
    "fields.title[match]": slug.replace(/-/g, " "),
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : "",
    date: item.fields.date,
    slug: item.fields.title?.toLowerCase().replace(/\s+/g, "-") || "",
  };
}
