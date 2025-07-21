import { contentfulClient } from "@/lib/contentful";
import { IPsychologicalSupportData } from "@/types";

export async function getPsychologicalSupport(): Promise<IPsychologicalSupportData | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "apoioPsicologico",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name ?? "",
    title: item.fields.title ?? "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    bio: item.fields.bio ?? "",
    services: item.fields.services ?? [],
    phone: item.fields.phone ?? "",
    email: item.fields.email ?? "",
    address: item.fields.address ?? "",
    description: item.fields.description ?? "",
  };
}
