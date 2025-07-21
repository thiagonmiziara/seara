import { contentfulClient } from "@/lib/contentful";
import { IYoungData } from "@/types";

export async function getYoungDetails(): Promise<IYoungData | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesJovens",
    limit: 1,
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    mission: item.fields.mission,
    activities:
      item.fields.activities?.map((group: any) => ({
        name: group.fields.name,
        description: group.fields.description,
      })) || [],
    leader: item.fields.leader,
    contact: item.fields.contact,
  };
}
