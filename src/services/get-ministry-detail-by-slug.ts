import { contentfulClient } from "@/lib/contentful";
import { IMinistryDetails } from "@/types";

export async function getMinistryDetailBySlug(
  slug: string
): Promise<IMinistryDetails | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesMinisterios",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.slug,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    fullDescription: item.fields.fullDescription,
  };
}
