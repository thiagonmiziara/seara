import { contentfulClient } from "@/lib/contentful";
import { IMeetings } from "@/types";

export async function getMeetingsDetailBySlug(
  slug: string
): Promise<IMeetings | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesCultosEEncontros",
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
    schedule: item.fields.schedule,
    location: item.fields.location,
    contactPerson: item.fields.contactPerson,
  };
}
