import { contentfulClient } from "@/lib/contentful";
import { IServiceProviders } from "@/types";

export async function getServiceProviders(): Promise<
  IServiceProviders[] | null
> {
  const entries = await contentfulClient.getEntries({
    content_type: "prestadoresDeServico",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    name: item.fields.name,
    contact: item.fields.contact,
    description: item.fields.description,
    serviceType: item.fields.serviceType,
    approved: item.fields.approved,
  }));
}
