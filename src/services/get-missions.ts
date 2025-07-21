import { contentfulClient } from "@/lib/contentful";
import { IMissionItem } from "@/types";

export async function getMissions(): Promise<IMissionItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "missoes",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug ?? "",
    title: item.fields.title ?? "",
    description: item.fields.description ?? "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    qrCodeUrl: item.fields.qrCodeUrl?.fields?.file?.url
      ? `https:${item.fields.qrCodeUrl.fields.file.url}`
      : "",
  }));
}
