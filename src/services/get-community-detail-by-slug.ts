import { contentfulClient } from "@/lib/contentful";
import { ICommunity } from "@/types";

export async function getCommunityDetailBySlug(
  slug: string
): Promise<ICommunity | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesDaComunidade",
    "fields.slug": slug,
    limit: 1,
  });
  {
  }
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
    address: item.fields.address,
    meetingTimes: item.fields.meetingTimes,
    leader: item.fields.leader,
  };
}
