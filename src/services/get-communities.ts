import { contentfulClient } from "@/lib/contentful";
import { CarouselItem } from "@/types";

export async function getCommunities(): Promise<CarouselItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "comunidadesDeAlcance",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}
