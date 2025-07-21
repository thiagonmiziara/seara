import { contentfulClient } from "@/lib/contentful";
import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { IMissionDetails } from "@/types";

export async function getMissionDetailsBySlug(
  slug: string
): Promise<IMissionDetails | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesMissao",
    "fields.slug": slug,
    limit: 1,
    include: 1,
  });

  const item = entries.items[0];
  if (!item) return null;

  const fields = item.fields;
  const imageAsset = fields.imageUrl as Asset;
  const qrCodeAsset = fields.qrCodeUrl as Asset;
  const qrCodePixUrlAsset = fields.qrCodePixUrl as Asset;

  return {
    id: item.sys.id,
    slug: String(fields.slug ?? ""),
    title: String(fields.title ?? ""),
    imageUrl: imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}`
      : "",
    description: String(fields.description ?? ""),
    fullDetails: fields.fullDetails as Document,
    objectives: (fields.objectives as string[]) ?? [],
    howToHelp: (fields.howToHelp as string[]) ?? [],
    qrCodeUrl: qrCodeAsset?.fields?.file?.url
      ? `https:${qrCodeAsset.fields.file.url}`
      : "",
  };
}
