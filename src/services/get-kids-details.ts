import { contentfulClient } from "@/lib/contentful";
import { IKidsData } from "@/types";

export async function getKidsDetails(): Promise<IKidsData | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "kidsDetalhes",
    limit: 1,
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name,
    imageUrl: item.fields.bannerUrl?.fields?.file?.url
      ? `https:${item.fields.bannerUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    vision: item.fields.vision,
    ageGroups:
      item.fields.ageGroups?.map((group: any) => ({
        name: group.fields.name,
        description: group.fields.description,
      })) || [],
    leader: item.fields.leader,
    contact: item.fields.contact,
  };
}
