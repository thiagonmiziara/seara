import { contentfulClient } from "@/lib/contentful";
import { ISchoolDetail } from "@/types";

export async function getSchoolDetailBySlug(
  slug: string
): Promise<ISchoolDetail | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesDaEscola",
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
    curriculum: item.fields.curriculum,
    duration: item.fields.duration,
    targetAudience: item.fields.targetAudience,
  };
}
