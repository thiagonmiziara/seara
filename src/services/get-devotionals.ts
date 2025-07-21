import { contentfulClient } from "@/lib/contentful";
import { IDevotional } from "@/types";

export async function getDevotionals(): Promise<IDevotional[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "devocional",
    select: [
      "sys.id",
      "fields.title",
      "fields.date",
      "fields.preview",
      "fields.content",
    ],
    order: ["-fields.date"],
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title ?? "",
    date: item.fields.date ?? "",
    preview: item.fields.preview ?? "",
    content: item.fields.content ?? null,
  }));
}
