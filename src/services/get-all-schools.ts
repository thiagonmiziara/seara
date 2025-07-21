import { contentfulClient } from "@/lib/contentful";
import { CarouselItem } from "@/types";

export async function getAllSchools(): Promise<CarouselItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "escolas",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    logoUrl: item.fields.logoUrl?.fields?.file?.url
      ? `https:${item.fields.logoUrl.fields.file.url}`
      : "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}
