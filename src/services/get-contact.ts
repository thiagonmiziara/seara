import { contentfulClient } from "@/lib/contentful";
import { IContact } from "@/types";

export async function getContact(): Promise<IContact | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "contato",
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) return null;

  return {
    id: item.sys.id,
    address: item.fields.address,
    phone: item.fields.phone,
    email: item.fields.email,
    mapLink: item.fields.mapLink,
  };
}
