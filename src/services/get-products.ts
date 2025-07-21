import { contentfulClient } from "@/lib/contentful";
import { IProducts } from "@/types";
import { Asset } from "contentful";

export async function getProducts(): Promise<IProducts[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "produtosDaLoja",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    name: item.fields.name,
    imageUrls: item.fields.imageUrl
      ?.map((asset: Asset) =>
        asset.fields.file?.url ? `https:${asset.fields.file.url}` : ""
      )
      .filter(Boolean),
    price: item.fields.price,
    phone: item.fields.phone,
  }));
}
